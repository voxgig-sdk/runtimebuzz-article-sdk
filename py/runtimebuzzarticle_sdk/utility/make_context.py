# RuntimebuzzArticle SDK utility: make_context

from runtimebuzzarticle_sdk.core.context import RuntimebuzzArticleContext


def make_context_util(ctxmap, basectx):
    return RuntimebuzzArticleContext(ctxmap, basectx)
