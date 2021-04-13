import { IHttpResponse } from "./http-response.interface";

export class HttpResponse<T> implements IHttpResponse<T> {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly message: string;
    readonly body: T;

    private constructor(isSuccess: boolean, message?: string, body?: T) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.message = message;
        this.body = body;

        Object.freeze(this);
    }

    public static create<T>(isSuccess: boolean, message?: string, body?: T): IHttpResponse<T> {
        return new HttpResponse(isSuccess, message, body);
    }
}
