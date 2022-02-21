<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Survey;
use App\Models\Agent;



class Question extends Model
{
    use HasFactory;

    protected $fillable = ['survey_id', 'parent_id', 'parent_answer', 'content'];

    public function survey()
    {
        return $this->belongTo(Survey::class);
    }

    public function agents()
    {
        return $this->belongsToMany(Agent::class, 'agent_question_survey')->withPivot('survey_id');
    }

    public function surveys()
    {
        return $this->belongsToMany(Survey::class, 'agent_question_survey')->withPivot('agent_id');
    }
}
