import {UserType} from "../api/api"
import {v4 as uuidv4} from 'uuid';

export const createUser =
    (firstName: string, lastName: string, email?: string, avatar?: string,): UserType => {
        return {
            id: uuidv4(),
            first_name: firstName,
            last_name: lastName,
            avatar: avatar,
            email: email
        }
    }

