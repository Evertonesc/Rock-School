import { IActionResult } from "./action-result.interface";

export class ActionResult<T> implements IActionResult<T>{
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly message: string;
    readonly body: T;

    private constructor(isSuccess: boolean, message: string, body?: T) {
        this.isSuccess = isSuccess
        this.isFailure = !isSuccess;
        this.message = message;
        this.body = body;

        Object.freeze(this);
    }

    static create<T>(isSuccess: boolean, message: string, body?: T): IActionResult<T> {
        return new ActionResult(isSuccess, message, body);
    }
}