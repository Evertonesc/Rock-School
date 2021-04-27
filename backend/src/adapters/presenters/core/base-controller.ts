import * as express from 'express';

export abstract class BaseController {

    public static jsonResponse<T>(res: express.Response, code: number, dto: T) {
        const codeResponse = res.status(code);
        return codeResponse.json(dto);
    }

    public ok<T>(res: express.Response, dto?: T) {
        const typeResponse = res.type('application/json');
        if (!!dto)
            return res.status(201).json(dto);

        return res.sendStatus(200);
    }

    public created(res: express.Response) {
        return res.sendStatus(201);
    }

    public clientError<T>(res: express.Response, dto: T) {
        return BaseController.jsonResponse(res, 400, dto ? dto : 'Unauthorized');
    }

    public forbidden(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 403, message ? message : 'Forbidden');
    }

    public notFound(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 404, message ? message : 'Not Found');
    }

    public todo(res: express.Response) {
        return BaseController.jsonResponse(res, 400, 'TODO');
    }

    public fail(res: express.Response, error: Error | string) {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        })
    }
}