import { IResult } from "../interfaces/validations/result.interface";

export class Result<T> implements IResult<T>{
    public isSuccess: boolean;
    public isFailure: boolean;
    public error: T | string;
    public _value: T;

    public constructor(isSuccess: boolean, error?: T | string, value?: T) {
        if (isSuccess && error)
            throw new Error('InvalidOperation: A result cannot be successful and contain an error');

        if (!isSuccess && !error)
            throw new Error('InvalidOperation: A failing result needs to contain an error message');

        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;

        Object.freeze(this);
    }
}