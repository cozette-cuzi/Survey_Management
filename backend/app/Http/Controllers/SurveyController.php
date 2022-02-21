<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use App\Http\Requests\SurveyRequest;
use App\Models\Agent;
use App\Models\Question;
use Illuminate\Http\Request;
use App\Services\SurveyService;
use  App\Http\Requests\ViewRequest;

class SurveyController extends Controller
{
    protected $surveyService;

    public function __construct(SurveyService $surveyService)
    {
        $this->surveyService = $surveyService;
    }
    public function store(SurveyRequest $request)
    {
        $data = $request->validated();
        $res = $this->surveyService->create($data);
        return $this->response('success', $res);
    }

    public function index(Request $request)
    {
        $data = $request->validate([
            'agent_id' => 'required|exists:agents,id'
        ]);
        $surveys = Survey::paginate(6);
        foreach ($surveys as $key => $survey) {
            $surveys[$key]['taken'] = $survey->agents()->where('agent_id', $data['agent_id'])->exists();;
        }
        return $this->response('success', $surveys);
    }


    public function takeSurvey(ViewRequest $request)
    {
        $data = $request->validated();
        $firstQuestion = $this->surveyService->takeSurvey($data);
        if($firstQuestion == null) return $this->response("failed", "You've already taken this survey.", 400);
        return $this->response('success', $firstQuestion);
    }

    public function reviewSurvey(ViewRequest $request)
    {
        $data = $request->validated();
        $res = Agent::find($data['agent_id'])->surveyQuestions->where('survey_id', $data['survey_id']);
        return $this->response('success', $res);
    }
}
