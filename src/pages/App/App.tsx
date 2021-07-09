import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import SettingName from "../SettingName/SettingName";
import {createDataAnswers} from "../../helpers/helpers";
import {IExample} from "../../helpers/types";
import DisplayQuestions from "../DisplayQuestions/DisplayQuestions";
import DisplayResult from "../DisplayResult/DisplayResult";


function App() {

    const [arrayAnswers, setArrayAnswers] = useState<IExample[]>([]);
    const [name, setName] = useState<string>('');
    const [isRender, setIsRender] = useState<boolean>(false);
    const [isDis, setIsDis] = useState<boolean>(false);

    useEffect(() => {
        setArrayAnswers(createDataAnswers(10))
    }, []);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onSaveHandler = () => {
        setIsRender(true)
    }


    return (
        <div className="App">
            <SettingName
                name={name}
                isRender={isRender}
                onChangeHandler={onChangeHandler}
                onSaveHandler={onSaveHandler}
            />

            {
                isRender &&
                <DisplayQuestions
                    arrayAnswers={arrayAnswers}
                    setArrayAnswers={setArrayAnswers}
                    isDisabled={isDis}
                    setIsDisabled={setIsDis}
                />
            }
            {isDis &&
            <DisplayResult
                name={name}
                isDisabled={isDis}
                arrayAnswers={arrayAnswers}
            />
            }
        </div>
    );
}

export default App;
