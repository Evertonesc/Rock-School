import * as express from 'express';

export abstract class BaseController {
    protected abstract executeImpl(req: express.Request, res: express.Response): Promise<void | any>;

    public async execute(req: express.Request, res: express.Response): Promise<void> {
        try {
            await this.executeImpl(req, res);
        }
        catch (err) {
            console.log(`[BaseController]: Uncaught controller error`);
            console.log(err);
            this.fail(res, 'An unexpected error occurred');
        }
    }

    public static jsonResponse(res: express.Response, code: number, message: string) {
        const codeResponse = res.status(code);
        return codeResponse.json({ message });
    }

    public ok<T>(res: express.Response, dto?: T) {
        const typeResponse = res.type('application/json');
        if (!!dto)
            return res.status(200).json(dto);

        return res.sendStatus(200);
    }

    public created(res: express.Response) {
        return res.sendStatus(201);
    }

    public clienteError(res: express.Response, message?: string) {
        return BaseController.jsonResponse(res, 400, message ? message : 'Unauthorized');
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