# RuntimebuzzArticle SDK exists test

require "minitest/autorun"
require_relative "../RuntimebuzzArticle_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RuntimebuzzArticleSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
