import { IHttpResponse } from "./http-response.interface";
import { HttpResponse } from "./httpResponse";

export class ResponseFactory {
    static ok<T>(isSuccess: boolean, message?: string, body?: T): IHttpResponse<T> {
        return HttpResponse.create<T>(isSuccess, message, body);
    }

    static badRequest<T>(isSuccess: boolean, message?: string): IHttpResponse<T> {
        return HttpResponse.create<T>(isSuccess, message);
    }
}