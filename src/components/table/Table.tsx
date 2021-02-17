import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {UserType} from '../../api/api';
import {ButtonComponent} from '../button/Bytton';

export const Table = React.memo((props: any) => {
        return <div style={{width: '70vw'}}>
            <table className='table table-striped' style={{cursor: "pointer"}}>
                <thead>
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>Delete user</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map((user: UserType) => (
                    <tr key={user.id}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>
                            <ButtonComponent
                                onClickHandler={() => props.deleteHandler(user.id)}
                                title={'delete'}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    }
)