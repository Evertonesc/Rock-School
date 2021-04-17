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
}