# RuntimebuzzArticle SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RuntimebuzzArticleUtility.registrar = ->(u) {
  u.clean = RuntimebuzzArticleUtilities::Clean
  u.done = RuntimebuzzArticleUtilities::Done
  u.make_error = RuntimebuzzArticleUtilities::MakeError
  u.feature_add = RuntimebuzzArticleUtilities::FeatureAdd
  u.feature_hook = RuntimebuzzArticleUtilities::FeatureHook
  u.feature_init = RuntimebuzzArticleUtilities::FeatureInit
  u.fetcher = RuntimebuzzArticleUtilities::Fetcher
  u.make_fetch_def = RuntimebuzzArticleUtilities::MakeFetchDef
  u.make_context = RuntimebuzzArticleUtilities::MakeContext
  u.make_options = RuntimebuzzArticleUtilities::MakeOptions
  u.make_request = RuntimebuzzArticleUtilities::MakeRequest
  u.make_response = RuntimebuzzArticleUtilities::MakeResponse
  u.make_result = RuntimebuzzArticleUtilities::MakeResult
  u.make_point = RuntimebuzzArticleUtilities::MakePoint
  u.make_spec = RuntimebuzzArticleUtilities::MakeSpec
  u.make_url = RuntimebuzzArticleUtilities::MakeUrl
  u.param = RuntimebuzzArticleUtilities::Param
  u.prepare_auth = RuntimebuzzArticleUtilities::PrepareAuth
  u.prepare_body = RuntimebuzzArticleUtilities::PrepareBody
  u.prepare_headers = RuntimebuzzArticleUtilities::PrepareHeaders
  u.prepare_method = RuntimebuzzArticleUtilities::PrepareMethod
  u.prepare_params = RuntimebuzzArticleUtilities::PrepareParams
  u.prepare_path = RuntimebuzzArticleUtilities::PreparePath
  u.prepare_query = RuntimebuzzArticleUtilities::PrepareQuery
  u.graphql_body = RuntimebuzzArticleUtilities::GraphqlBody
  u.graphql_errors = RuntimebuzzArticleUtilities::GraphqlErrors
  u.result_basic = RuntimebuzzArticleUtilities::ResultBasic
  u.result_body = RuntimebuzzArticleUtilities::ResultBody
  u.result_headers = RuntimebuzzArticleUtilities::ResultHeaders
  u.transform_request = RuntimebuzzArticleUtilities::TransformRequest
  u.transform_response = RuntimebuzzArticleUtilities::TransformResponse
}
