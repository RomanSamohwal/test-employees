import {useFormik} from 'formik'
import React from 'react'
import {ButtonComponent} from '../../components/button/Bytton';
import {useDispatch} from 'react-redux';
import {createUser} from '../../utils/create-user';
import {addUser} from '../../bll/users-reducer';
import style from './Form.module.css'
import {UserType} from '../../api/api';
import {InputComponent} from '../../components/input/Input';

export const InputForm = React.memo(() => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            avatar: ''
        } as UserType,
        validate: validate,
        onSubmit: (values: UserType, {resetForm}) => {
            console.log(values)
            const user = createUser(values.first_name, values.last_name, values.email, values.avatar)
            dispatch(addUser({user: user}))
            resetForm({values: {first_name: '', last_name: '', email: '', avatar: ''} as UserType})
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <div className={style.form}>
            <div className={style.formContainer}>
                <div className={style.textField}>
                    <InputComponent id={'first_name'} name={'first_name'}
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    error={formik.errors.first_name} label={'first name'}/>
                </div>
                <div className={style.textField}>
                    <InputComponent id={'last_name'} name={'last_name'}
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}
                                    error={formik.errors.last_name} label={'last name'}/>
                </div>
            </div>
            <div className={style.formContainer}>
                <div className={style.textField}>
                    <InputComponent id={'email'} name={'email'}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.errors.email} label={'email'}/>
                </div>
                <div className={style.textField}>
                    <InputComponent id={'avatar'} name={'avatar'}
                                    value={formik.values.avatar}
                                    onChange={formik.handleChange}
                                    error={formik.errors.avatar} label={'avatar'}/>
                </div>
            </div>
        </div>
        <div className={style.button}>
            <ButtonComponent type='submit' title={'submit'}/>
        </div>
    </form>
})

let validate = (values: UserType) => {
    if (!values.first_name) {
        return {
            first_name: message_0
        }
    }
    if (!values.last_name) {
        return {
            last_name: message_1
        }
    }

    if (!values.email) {
        return {
            email: message_3
        }
    }

    if (!values.avatar) {
        return {
            avatar: message_4
        }
    }
}

const message_0 = 'first name is required'
const message_1 = 'last name is required'
const message_3 = 'email is required'
const message_4 = 'avatar url required'