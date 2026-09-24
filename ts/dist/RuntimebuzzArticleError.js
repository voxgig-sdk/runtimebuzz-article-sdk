"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimebuzzArticleError = void 0;
class RuntimebuzzArticleError extends Error {
    isRuntimebuzzArticleError = true;
    sdk = 'RuntimebuzzArticle';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.RuntimebuzzArticleError = RuntimebuzzArticleError;
//# sourceMappingURL=RuntimebuzzArticleError.js.map