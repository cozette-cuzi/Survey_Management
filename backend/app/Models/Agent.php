<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Survey;

class Agent extends Model
{
    use HasFactory;

    public function surveys()
    {
        return $this->belongsToMany(Survey::class)->withPivot('id');;
    }

    public function surveyQuestions()
    {
        return $this->belongsToMany(Question::class, 'agent_question_survey')->withPivot('survey_id', 'answer', 'note');
    }
}
