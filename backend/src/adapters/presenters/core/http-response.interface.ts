export interface IHttpResponse<T> {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly message: string;
    readonly body: T;
}