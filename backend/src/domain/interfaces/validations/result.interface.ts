export interface IResult<T> {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly error: T | string;
    readonly _value: T;
}