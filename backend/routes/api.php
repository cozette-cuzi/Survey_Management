<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('agent', 'App\Http\Controllers\AgentController')->only('store');
Route::apiResource('survey', 'App\Http\Controllers\SurveyController')->except('update', 'delete');
Route::post('take_survey', 'App\Http\Controllers\SurveyController@takeSurvey');
Route::post('next_question', 'App\Http\Controllers\QuestionController@nextQuestion');
Route::get('review_survey', 'App\Http\Controllers\SurveyController@reviewSurvey');
