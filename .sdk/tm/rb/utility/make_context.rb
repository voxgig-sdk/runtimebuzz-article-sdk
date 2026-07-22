# RuntimebuzzArticle SDK utility: make_context
require_relative '../core/context'
module RuntimebuzzArticleUtilities
  MakeContext = ->(ctxmap, basectx) {
    RuntimebuzzArticleContext.new(ctxmap, basectx)
  }
end
