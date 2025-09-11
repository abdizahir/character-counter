import { useContext } from 'react';
import { CharacterContext } from '../store/CharacterContext';

import pattern1 from '../assets/images/pattern-character-count.svg';
import pattern2 from '../assets/images/pattern-sentence-count.svg';
import pattern3 from '../assets/images/pattern-word-count.svg';

function StateContainer() {
    const {state} = useContext(CharacterContext);
    return(
        <main className='my-10 text-natural-900 sm:flex sm:justify-between sm:w-full sm:gap-4'>
            <section className="bg-blue-400 mb-4 p-5 flex justify-between rounded-md relative overflow-hidden sm:w-1/3">
                <article className='mt-3.5 z-10'>
                    <span className='text-xl font-bold'>{state.totalCharacter}</span>
                    <p className='text-xl mt-2'>Total Characters</p>
                </article>
                <img className='absolute top-0 -right-13 z-0' src={pattern1} alt="" />
            </section>
            <section className="bg-yellow-500 mb-4 p-5 flex justify-between rounded-md relative overflow-hidden sm:w-1/3">
                <article className='mt-3.5 z-10'>
                    <span className='text-xl font-bold'>{state.wordCount}</span>
                    <p className='text-xl mt-2 z-0'>Word Count</p>
                </article>
                <img className='absolute top-0 -right-13' src={pattern3} alt="" />
            </section>
            <section className="bg-orange-500 mb-6 sm:mb-4 p-5 flex justify-between rounded-md relative overflow-hidden sm:w-1/3">
                <article className='mt-3.5 z-10'>
                    <span className='text-xl font-bold'>{state.sentenceCount}</span>
                    <p className='text-xl mt-2 z-0'>Sentence Count</p>
                </article>
                <img className='absolute top-0 -right-13' src={pattern2} alt="" />
            </section>
        </main>
    );
}

export default StateContainer;