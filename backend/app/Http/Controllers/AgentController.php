<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Agent;


class AgentController extends Controller
{
    public function store() {
        $agent = Agent::create();
        return $this->response('success', $agent);
    }
}
