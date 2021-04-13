export interface IActionResult<T> {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly message: string;
    readonly body: T
}