export interface ISuccessRequest {
    isSuccess: boolean;
    body: any;
    message: string;
}

export interface IErrorRequest {
    isSuccess: boolean;
    error: string;
}