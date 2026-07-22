# RuntimebuzzArticle SDK utility: make_context

from core.context import RuntimebuzzArticleContext


def make_context_util(ctxmap, basectx):
    return RuntimebuzzArticleContext(ctxmap, basectx)
