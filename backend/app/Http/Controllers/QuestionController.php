<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\QuestionRequest;
use App\Models\Question;
use App\Exceptions\InvalidOrderException;


class QuestionController extends Controller
{
    public function store(QuestionRequest $request)
    {
        $wrongState = false;
        $data = $request->validated();
        if (isset($data['parent_id'])) {
            $child = Question::where('survey_id', $data['survey_id'])->where('parent_id', $data['parent_id'])->where('parent_answer', $data['parent_answer'])->first();
            if($child) $wrongState = true;
        } else {
            $root = Question::where('survey_id', $data['survey_id'])
                        ->where('parent_id', null)
                ->get();
                if($root) $wrongState = true;
        }
        if($wrongState) return $this->response('Failed', null , 422);
        $question = Question::create($data);
        return $this->response('success', $question);
    }

    public function nextQuestion(Request $request)
    {
        $data = $request->validate([
            'question_id' => 'required|exists:questions,id',
            'survey_id' => 'required|exists:surveys,id',
            'agent_id' => 'required|exists:agents,id',
            'answer' => 'required|boolean',
            'note' => 'nullable|string'
        ]);
        $question = Question::find($data['question_id']);
        $question->agents()->attach($data['agent_id'],[
                'survey_id' => $data['survey_id'], 
                'answer' => $data['answer'], 
                'note' => $data['note'] ?? null
            ]);
        $nextQuestion = Question::where('survey_id', $data['survey_id'])
                ->where('parent_id', $data['question_id'])
                ->where('parent_answer', $data['answer'])
                ->first();
        return $this->response('success', $nextQuestion);
    }
}
