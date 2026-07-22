# RuntimebuzzArticle SDK feature factory

from feature.base_feature import RuntimebuzzArticleBaseFeature
from feature.test_feature import RuntimebuzzArticleTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RuntimebuzzArticleBaseFeature(),
        "test": lambda: RuntimebuzzArticleTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
