import { useContext, useEffect } from "react";
import { CharacterContext } from "../store/CharacterContext";
import { ThemeContext } from '../store/ThemeContext';

import infoImg from '../assets/images/icon-info.svg';

function MainContainer() {   
    const {darkMode} = useContext(ThemeContext);
    const bgClass = darkMode ? 'bg-natural-900' : 'bg-natural-100';
    const textareaClass = darkMode ? 'bg-natural-700' : 'bg-natural-200';
    const textClass = darkMode ? 'text-natural-200' : 'text-natural-700';
    
    

    const {state, dispatch} = useContext(CharacterContext);
    

    function handleTextareaChange(e) {
        const value = e.target.value;
        dispatch({type: 'SET_TEXTAREA', payload: value})

        const words = value.trim().split(/\s+/).filter(Boolean);
        dispatch({type: 'SET_WORD_COUNT', payload: words.length});

        const sentences = value.split(/[.!?]+/).filter(Boolean);
        dispatch({type: 'SET_SENTENCE_COUNT', payload: sentences.length})
    }
    useEffect(() => {
        const length = state.excludeSpacesIsChecked ? state.textAreaValue.replace(/\s/g, "").length : state.textAreaValue.length;
        dispatch({type: 'SET_TOTAL_CHARACTER', payload: length})
    }, [state.textAreaValue, state.excludeSpacesIsChecked]);

    useEffect(() => {
        if(state.characterLimitIsChecked && !state.limitInput) {
            dispatch({type: 'SET_LIMIT_INPUT', payload: state.totalCharacter})
            dispatch({type: 'SET_LIMIT_SET', payload: true})
        }
    }, [state.characterLimitIsChecked, state.totalCharacter, state.limitSet]);

    function handleSpaceInputCheckChange(e) {
        const isChecked = e.target.checked;
        dispatch({type: 'TOGGLE_EXCLUDE_SPACES', payload: isChecked})        
    }

    function handleCharacterLimitIsChecked(e) {
        const isChecked = e.target.checked;
        dispatch({type: 'TOGGLE_CHARACTER_LIMIT', payload: isChecked});
        dispatch({type: 'SET_INPUT_LIMIT', payload: Number(state.totalCharacter)});
    }

    

    function handleLimitChange(e){
        const value = e.target.value;
        dispatch({type: 'SET_LIMIT_INPUT', payload: value})
    }

    const focusClass = state.characterLimitIsChecked && state.totalCharacter > state.limitInput ? 'focus:ring-orange-500' : 'focus:ring-blue-500';
    
    return(
        <main className={`my-10 ${bgClass}`}>
            <section>
                <textarea 
                className={`${textClass} w-full h-50.5 p-3 text-xl rounded-lg scrollbar-hide resize-none focus:outline-none focus:shadow-[0_0_10px_0] focus:ring-2 ${focusClass}  focus:ring-opacity-50 ${textareaClass}`} 
                name="" 
                id=""
                onChange={handleTextareaChange}
                >
                </textarea>
            </section>
            <section className="mt-4 sm:flex sm:flex-col sm:justify-between">
                {state.characterLimitIsChecked && state.totalCharacter > state.limitInput && (<article className="mb-5 flex gap-2 items-center">
                    <img src={infoImg} alt="" />
                    <p className="text-orange-500">Limit reached! Your text exceeds <span>{state.limitInput}</span> characters.</p>
                </article>)}
                <div className="sm:flex sm:justify-between">
                    <div className="sm:flex sm:gap-2">
                        <article className="flex items-center gap-3 mb-2">
                            <input className="" type="checkbox" name="" id="space-checkbox" onChange={handleSpaceInputCheckChange} />
                            <label htmlFor="space-checkbox" className="text-ba">Exclude Spaces</label>
                        </article>
                        <article className="flex items-center gap-3 mb-2">
                            <input className="" type="checkbox" name="" id="limit-checkbox" onChange={handleCharacterLimitIsChecked} />
                            <label htmlFor="limit-checkbox" className=" text-ba">Set Character Limit</label>
                            {state.characterLimitIsChecked && <input type="text" className="w-16 sm:w-14 h-9 sm:h-7 border-1 border-natural-600 rounded-md text-center" id='input-limit' value={state.limitInput} onChange={handleLimitChange} />}
                        </article>
                    </div>
                    <p>Approx. reading time: 1 minute</p>
                </div>
            </section>
        </main>
    );
}

export default MainContainer;