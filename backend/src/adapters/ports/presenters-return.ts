import { ISuccessRequest, IErrorRequest } from './presenters.interface';

export const SuccessRequest = (useCaseResult: boolean, data: any, message: string): ISuccessRequest => ({
    isSuccess: useCaseResult,
    body: data,
    message: message
});


export const ErrorRequest = (useCaseResult: boolean, errorMessage: string): IErrorRequest => ({
    isSuccess: useCaseResult,
    error: errorMessage
});