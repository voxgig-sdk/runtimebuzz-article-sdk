# RuntimebuzzArticle SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RuntimebuzzArticleFeatures
  def self.make_feature(name)
    case name
    when "base"
      RuntimebuzzArticleBaseFeature.new
    when "ratelimit"
      RuntimebuzzArticleRatelimitFeature.new
    when "retry"
      RuntimebuzzArticleRetryFeature.new
    when "test"
      RuntimebuzzArticleTestFeature.new
    when "timeout"
      RuntimebuzzArticleTimeoutFeature.new
    else
      RuntimebuzzArticleBaseFeature.new
    end
  end
end
