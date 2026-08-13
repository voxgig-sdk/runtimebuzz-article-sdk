# RuntimebuzzArticle SDK exists test

import pytest
from runtimebuzzarticle_sdk import RuntimebuzzArticleSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RuntimebuzzArticleSDK.test(None, None)
        assert testsdk is not None
