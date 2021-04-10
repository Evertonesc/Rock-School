export interface IHttpResponse<T> {
    readonly isSuccess: boolean;
    readonly isFailure: boolean;
    readonly message: string;
    readonly body: T;
}

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

export class ResponseFactory {
    static ok<T>(isSuccess: boolean, message?: string, body?: T): IHttpResponse<T> {
        return HttpResponse.create<T>(isSuccess, message, body);
    }

    static badRequest<T>(isSuccess: boolean, message?: string): IHttpResponse<T> {
        return HttpResponse.create<T>(isSuccess, message);
    }
}