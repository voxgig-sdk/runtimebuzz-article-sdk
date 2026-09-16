# RuntimebuzzArticle SDK feature factory

from runtimebuzzarticle_sdk.feature.base_feature import RuntimebuzzArticleBaseFeature
from runtimebuzzarticle_sdk.feature.ratelimit_feature import RuntimebuzzArticleRatelimitFeature
from runtimebuzzarticle_sdk.feature.retry_feature import RuntimebuzzArticleRetryFeature
from runtimebuzzarticle_sdk.feature.test_feature import RuntimebuzzArticleTestFeature
from runtimebuzzarticle_sdk.feature.timeout_feature import RuntimebuzzArticleTimeoutFeature


_FEATURES = {
    "base": lambda: RuntimebuzzArticleBaseFeature(),
    "ratelimit": lambda: RuntimebuzzArticleRatelimitFeature(),
    "retry": lambda: RuntimebuzzArticleRetryFeature(),
    "test": lambda: RuntimebuzzArticleTestFeature(),
    "timeout": lambda: RuntimebuzzArticleTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
