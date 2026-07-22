# RuntimebuzzArticle SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RuntimebuzzArticleFeatures
  def self.make_feature(name)
    case name
    when "base"
      RuntimebuzzArticleBaseFeature.new
    when "test"
      RuntimebuzzArticleTestFeature.new
    else
      RuntimebuzzArticleBaseFeature.new
    end
  end
end
