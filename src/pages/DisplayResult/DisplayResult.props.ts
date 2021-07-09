import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IExample} from "../../helpers/types";

export interface DisplayResultProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string
    isDisabled: boolean
    arrayAnswers: IExample[]
}