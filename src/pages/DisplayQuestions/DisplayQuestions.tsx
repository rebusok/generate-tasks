import React from 'react';
import {DisplayQuestionsProps} from './DisplayQuestions.props';
import styles from './DisplayQuestions.module.css';
import {Button, Input} from "../../components";
import {useForm} from "react-hook-form";
import {IExample, Inputs} from "../../helpers/types";
import cn from "classnames";
import {createDataAnswers} from "../../helpers/helpers";

const DisplayQuestions = ({
                              className,
                              arrayAnswers,
                              setArrayAnswers,
                              setIsDisabled,
                              isDisabled,
                              ...restProps
                          }: DisplayQuestionsProps): JSX.Element => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Inputs>();


    const onSubmit = (data: any) => {
        setArrayAnswers(arrayAnswers.map(el => {
            if (el.answer === +data[el.id]) {
                return {...el, userAnswer: true}
            } else {
                return {...el, userAnswer: false}
            }
        }))
        setIsDisabled(true);
    };

    const onResHandler = () => {
        setArrayAnswers(createDataAnswers(10));
        // setIsDisabled(false)
        reset();
    }



    const generateStrTask = (el: IExample): string => {
        return `${el.firstValue} ${el.operator.sign} ${el.secondValue}`
    }

    return (
        <div className={cn(className)} {...restProps}>
            {arrayAnswers.length > 0 && (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {arrayAnswers.map((el, inx) => (
                        <div key={el.id}
                             className={cn(styles.inputWrapp, {
                                 [styles.good]: isDisabled && el.userAnswer,
                                 [styles.bad]: isDisabled && !el.userAnswer
                             })}>

                            <div className={styles.flex}>
                                <span className={styles.inx}>{inx + 1}:</span> {generateStrTask(el)}
                            </div>
                            <div className={styles.flex}>
                                <span>=</span>
                                <Input
                                    disabled={isDisabled}
                                    type={'number'} {...register(el.id, {
                                    required: {
                                        value: true,
                                        message: 'Заполните поле'
                                    }
                                })}
                                    placeholder={'Ответ'}
                                    error={errors[el.id]}
                                />
                            </div>

                        </div>
                    ))}

                    <div>
                        <Button appearance={'primary'} className={styles.send}>
                            Отправить
                        </Button>
                        {isDisabled &&
                            <Button appearance={'primary'} className={styles.reset} onClick={onResHandler}>Обновить</Button>
                        }
                    </div>



                </form>
            )}
        </div>
    );
};

export default DisplayQuestions;