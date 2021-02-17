import React, {ChangeEvent} from 'react'
import {TextField} from "@material-ui/core";

type InputPropsType = {
    id: string,
    name: string,
    onChange: {
            (e: ChangeEvent<any>): void; <T_1 = string | ChangeEvent<any>>(field: T_1):
                T_1 extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
              }
    value: string | undefined
    label: string | undefined
    error: string | undefined
}

export const InputComponent = React.memo<InputPropsType>(
    ({id,name,onChange,
                 value, error, label}) => {

        return <TextField id={id} name={name} onChange={onChange}
                          value={value} color='primary'
                          label={!!error ? error : label} variant='outlined'
                          type='text'
                          error={!!error}/>
})