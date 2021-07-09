import {v4} from "uuid";
import {IOperator, SignsEnm} from "./types";



const arrayOperator: IOperator[] = [
    {
        sign: SignsEnm.PLUS,
        method: function (a: number, b: number) {
            return a + b;
        }
    },
    {
        sign: SignsEnm.MINUS,
        method: function (a: number, b: number) {
            return a - b;
        }
    },
    {
        sign: SignsEnm.DELETE,
        method: function (a: number, b: number) {
            return Math.floor(a / b * 100) / 100;
        }
    },
    {
        sign: SignsEnm.MULTIPLY,
        method: function (a: number, b: number) {
            return a * b;
        }
    }
]
export function createDataAnswers(countExample: number = 10, min: number = 0, max: number = 100) {
    const result = []
    for (let i = 0; i < countExample; i++) {
        const id = v4();
        const firstValue = Math.floor(Math.random() * (max - min + 1)) + min;
        const secondValue = Math.floor(Math.random() * (max - min + 1)) + min;
        const operator = randomOperator(arrayOperator);
        const answer = operator.method(firstValue, secondValue);
        result.push({id, answer, firstValue, secondValue, operator})
    }
    return result
}


const randomOperator = (ArrayOp: IOperator[]): IOperator => {
    const selectedOperator = Math.floor(Math.random() * ArrayOp.length)
    return ArrayOp[selectedOperator]
};



