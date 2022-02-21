<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuestionRequest extends FormRequest
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
            'survey_id' => 'required|integer|exists:surveys,id',
            'parent_id' => 'nullable|integer|exists:questions,id',
            'parent_answer' => 'boolean|required_with:parent_id',
            'content' => 'required|string'
        ];
    }
}
