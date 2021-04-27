import { IActionResult } from "./action-result.interface";

export class ActionResult<T> implements IActionResult<T>{
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly error?: string;
    readonly body: T;

    private constructor(isSuccess: boolean, body?: T, error?: string) {
        this.isSuccess = isSuccess
        this.isFailure = !isSuccess;
        this.error = error;
        this.body = body;

        Object.freeze(this);
    }

    static create<T>(isSuccess: boolean, body: T): IActionResult<T> {
        return new ActionResult(isSuccess, body);
    }

    static createBadRequest<T>(isSuccess: boolean, error: string): IActionResult<T> {
        return new ActionResult(isSuccess, null, error);
    }
}