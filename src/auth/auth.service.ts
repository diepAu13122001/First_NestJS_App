import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signup () {
        return {msg: "Hello, signup!"};
    }

    signin() {
        return {msg: "Hello, signin!"};
    }
}