import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IExample} from "../../helpers/types";

export interface DisplayQuestionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    arrayAnswers: IExample[]
    setArrayAnswers: (newArray: IExample[]) => void
    setIsDisabled: (disabled:boolean) => void
    isDisabled: boolean
}