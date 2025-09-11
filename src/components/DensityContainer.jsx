import { useContext, useMemo, useState } from "react";
import { CharacterContext } from "../store/CharacterContext";
import { ThemeContext } from "../store/ThemeContext";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function DensityContainer() {
    const {state} = useContext(CharacterContext);
    const [showMore, setShowMore] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(5);

    const {darkMode} = useContext(ThemeContext);
    const bgClass = darkMode ? 'bg-natural-800' : 'bg-natural-200';
    const textClass = darkMode ? 'text-natural-200' : 'text-natural-700';

    const eachCharResult = useMemo(() => {
        let result = {};

        for (let i = 0; i < state.textAreaValue.length; i++) {
            if (result[state.textAreaValue[i]]) {
                result[state.textAreaValue[i]]++;
            } else {
                result[state.textAreaValue[i]] = 1;
            }
        }
        return result;
        }, [state.textAreaValue]);

        function handleItemsToShow() {
            setShowMore(prev => !prev);
            setItemsToShow(prev => (prev === 5 ? 28 : 5));
        }
    return(
        <main className="mb-8">
            <section>
                <h1 className="text-2xl font-semibold">Letter Density</h1>
            </section>
            <section className="h">
                <ul className="my-5">
                    {Object.entries(eachCharResult).sort(([, countA], [, countB]) => countB - countA).slice(0, itemsToShow).map(([char, count]) => {
                        const percent = state.totalCharacter ? ((count / state.totalCharacter) * 100).toFixed(2) : "0.00";
                        return(
                            <li key={char} className="flex items-center justify-between">
                                <p className="w-6 text-center">{char.toUpperCase()}</p>
                                <div className={`relative flex-1 sm:w-10/12 h-3 rounded-md ${bgClass}`}>
                                    <div className="absolute left-0 top-0 h-3 bg-blue-400 rounded-md" style={{width: `${Math.max(Number(percent), 2)}%`}}></div>
                                </div>
                                <p className="w-22 mr-1 whitespace-nowrap">{count}({percent}%)</p>
                            </li>
                        );
                    })}

                </ul>
            </section>
            <section>
            {Object.keys(eachCharResult).length > 5 && <button onClick={handleItemsToShow} className="flex items-center gap-2">
            <p className={`text-xl ${textClass}`}>
                {showMore ? 'See less' : 'See more'}
            </p>
            {showMore ? (
                <ChevronUpIcon className={`${textClass} w-5 h-5 font-bold`} />
            ) : (
                <ChevronDownIcon className={`${textClass} w-5 h-5 font-bold`} />
            )}
            </button>}
            {Object.keys(eachCharResult).length  < 1 && <p className="">No characters found. Start typing to see letter density.</p>}
            </section>
        </main>
    );
}

export default DensityContainer;