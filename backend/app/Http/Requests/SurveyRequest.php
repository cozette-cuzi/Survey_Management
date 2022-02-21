<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SurveyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string|min:2',
            'description' => 'required|string|min:2',
            'questions' => 'required|array',
            'questions.*.content' => 'required|string|min:2',
            'questions.*.parent_index' => 'nullable|integer',
            'questions.*.parent_answer' => 'boolean|required_with:question.parent_index',
        ];
    }
}
