import { Policy } from './policy.model';

export class User{
    username: string;
    name: string;
    password: string;
    dob: string;
    email: string;
    address: string;
    mobile: string;

    policies : Policy[];
}