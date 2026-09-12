import { Context } from './Context';
declare class RuntimebuzzArticleError extends Error {
    isRuntimebuzzArticleError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RuntimebuzzArticleError };
