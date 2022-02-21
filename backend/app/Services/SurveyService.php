<?php

namespace App\Services;

use App\Models\Survey;
use App\Http\Requests\SurveyRequest;
use App\Models\Agent;
use App\Models\Question;
use Illuminate\Http\Request;

class SurveyService
{
    public function create($data)
    {
        $questions = $data['questions'];
        unset($data['questions']);
        $survey = Survey::create($data);
        foreach ($questions as $key => $question) {
            $question['survey_id'] = $survey->id;
            if (isset($question['parent_index'])) {
                $question['parent_id'] = $questions[$question['parent_index']]['id'];
                unset($question['parent_index']);
            }
            $newQuestion = Question::create($question);
            $questions[$key]['id'] = $newQuestion->id;
        }
        $res = (array)[
            "survey" => $survey,
            "questions" => $questions
        ];
        return $res;
    }
    public function takeSurvey($data)
    {
        $survey = Survey::findOrFail($data['survey_id']);
        if( $survey->agents()->where('agent_id', $data['agent_id'])->exists() ) return null;
        $survey->agents()->attach($data['agent_id']);
        $root = Question::where('survey_id', $data['survey_id'])->where('parent_id', null)->first();
        return $root;
    }
}