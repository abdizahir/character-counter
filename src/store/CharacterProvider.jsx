import { useReducer } from "react";
import { CharacterContext } from "./CharacterContext";


const intialState = {
    textAreaValue: '',
    totalCharacter: 0,
    wordCount: 0,
    sentenceCount: 0,
    excludeSpacesIsChecked: false,
    characterLimitIsChecked: false,
    limitInput: '',
    limitSet: false,
};

function stateReducer(state, action) {
    switch(action.type) {
        case 'SET_TEXTAREA': {
            return{...state, textAreaValue: action.payload};
        }
        case 'SET_TOTAL_CHARACTER': {
            return{...state, totalCharacter: action.payload};
        }
        case 'SET_WORD_COUNT': {
            return{...state, wordCount: action.payload};
        }
        case 'SET_SENTENCE_COUNT': {
            return{...state, sentenceCount: action.payload};
        }
        case 'TOGGLE_EXCLUDE_SPACES': {
            return{...state, excludeSpacesIsChecked: !state.excludeSpacesIsChecked }
        }
        case 'TOGGLE_CHARACTER_LIMIT': {
            return{...state, characterLimitIsChecked: !state.characterLimitIsChecked}
        }
        case 'SET_LIMIT_INPUT': {
            return{...state, limitInput: action.payload}
        }
        case 'SET_LIMIT_SET': {
            return {...state, limitSet: action.payload};
        }
        default: {
            return state;
        }
    }
}

export function CharacterProvider({children}) {
    const [state, dispatch] = useReducer(stateReducer, intialState);

    return(
        <CharacterContext.Provider value={{state, dispatch}}>
            {children}
        </CharacterContext.Provider>
    );
}