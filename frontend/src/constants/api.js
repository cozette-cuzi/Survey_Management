// THE MAIN URL FOR THE API

const hostName = window.location.hostname;
let MAIN_HOST = `http://${hostName}:8000`;

export default {
    MAIN_URL: MAIN_HOST,
    
    ACTIONS: {
        SURVEY: 'survey',
        AGENT: 'agent',
        TAKE_SURVEY: 'take_survey',
        NEXT_QUESTION: 'next_question',
        REVIEW_SURVEY: 'review_survey'
    },
   
   
};
