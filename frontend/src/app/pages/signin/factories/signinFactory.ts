import { SignIn } from "../models/signIn";

export class SigninFactory {
    static createSigninForm(): SignIn {
        return new SignIn();
    }
}