<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Agent;
use App\Models\Question;


class Survey extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description'];

    public function agents()
    {
        return $this->belongsToMany(Agent::class, 'agent_survey')->withPivot('id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

}
