
import { Context } from './Context'


class RuntimebuzzArticleError extends Error {

  isRuntimebuzzArticleError = true

  sdk = 'RuntimebuzzArticle'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RuntimebuzzArticleError
}

