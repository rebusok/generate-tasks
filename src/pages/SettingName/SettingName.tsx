import React from 'react';
import {SettingNameProps} from './SettingName.props';
import cn from "classnames";
import {Button, Input} from "../../components";
import styles from './SettingName.module.css';

const SettingName = ({className,isRender,onChangeHandler, onSaveHandler,name, ...restProps}: SettingNameProps): JSX.Element => {
    return (
        <>
            {!isRender &&
            <div className={cn(className, styles.wrapper)} {...restProps}>
                <Input
                    value={name}
                    onChange={(e) => onChangeHandler(e)}
                    placeholder={'Имя'}
                />
                <Button appearance={'primary'} className={styles.button} onClick={onSaveHandler}>Сохранить</Button>
            </div>
            }
        </>
    );
};

export default SettingName;