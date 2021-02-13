import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {UserType} from "../../api/api";
import {Button} from "../Button/Bytton";

export const Table = React.memo((props: any) => {
    return <table className='table table-striped' style={{cursor: "pointer"}}>
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
                        <Button onClickHandler={() => props.deleteHandler(user.id)} title={'delete'}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    }
)