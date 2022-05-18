import { LANGUAGE } from '../types';

const initState = {
    language: {
        name: "English",
        lang_code: "EN"
    }
}

const languageReducer = (state = initState, action) => {
    switch (action.type) {
        case LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        
        default:
            return state;
    }
}

export default languageReducer;