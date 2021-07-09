export enum SignsEnm {
    MINUS = '-',
    PLUS = '+',
    DELETE = '/',
    MULTIPLY = '*'

}


export type Inputs = {
    [key: string]: string;
};

export interface IOperator {
    sign: SignsEnm
    method: (a: number, b: number) => number
}


export interface IExample {
    id: string
    firstValue: number
    secondValue: number
    operator: IOperator
    answer: number
    userAnswer?: boolean
}