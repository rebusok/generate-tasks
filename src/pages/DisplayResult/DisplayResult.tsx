import React from 'react';
import {DisplayResultProps} from './DisplayResult.props';
import cn from "classnames";
import styles from './DisplayResult.module.css';
const DisplayResult = ({className,name, arrayAnswers, ...restProps}: DisplayResultProps): JSX.Element => {
    const checkAnswer = () => {
        return arrayAnswers.filter(el => el.userAnswer).length
    }

    return (
        <div className={cn(className, styles.wrapper)} {...restProps}>
            <div>{name} - молодец!</div>
            <div className={styles.result}>
                <span>Правильный ответов: {checkAnswer()}</span>
                <span>Не правильныйх ответов:{arrayAnswers.length - checkAnswer()}</span>
            </div>
        </div>
    );
};

export default DisplayResult;