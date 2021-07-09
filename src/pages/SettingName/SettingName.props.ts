import {ChangeEvent, DetailedHTMLProps, HTMLAttributes} from "react";

export interface SettingNameProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isRender:boolean
    onChangeHandler: (e:ChangeEvent<HTMLInputElement>) => void
    onSaveHandler: () => void
    name: string
}