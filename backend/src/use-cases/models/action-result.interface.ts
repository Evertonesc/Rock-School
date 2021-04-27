export interface IActionResult<T> {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly error?: string;
    readonly body: T
}