<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RuntimebuzzArticleUtility::setRegistrar(function (RuntimebuzzArticleUtility $u): void {
    $u->clean = [RuntimebuzzArticleClean::class, 'call'];
    $u->done = [RuntimebuzzArticleDone::class, 'call'];
    $u->make_error = [RuntimebuzzArticleMakeError::class, 'call'];
    $u->feature_add = [RuntimebuzzArticleFeatureAdd::class, 'call'];
    $u->feature_hook = [RuntimebuzzArticleFeatureHook::class, 'call'];
    $u->feature_init = [RuntimebuzzArticleFeatureInit::class, 'call'];
    $u->fetcher = [RuntimebuzzArticleFetcher::class, 'call'];
    $u->make_fetch_def = [RuntimebuzzArticleMakeFetchDef::class, 'call'];
    $u->make_context = [RuntimebuzzArticleMakeContext::class, 'call'];
    $u->make_options = [RuntimebuzzArticleMakeOptions::class, 'call'];
    $u->make_request = [RuntimebuzzArticleMakeRequest::class, 'call'];
    $u->make_response = [RuntimebuzzArticleMakeResponse::class, 'call'];
    $u->make_result = [RuntimebuzzArticleMakeResult::class, 'call'];
    $u->make_point = [RuntimebuzzArticleMakePoint::class, 'call'];
    $u->make_spec = [RuntimebuzzArticleMakeSpec::class, 'call'];
    $u->make_url = [RuntimebuzzArticleMakeUrl::class, 'call'];
    $u->param = [RuntimebuzzArticleParam::class, 'call'];
    $u->prepare_auth = [RuntimebuzzArticlePrepareAuth::class, 'call'];
    $u->prepare_body = [RuntimebuzzArticlePrepareBody::class, 'call'];
    $u->prepare_headers = [RuntimebuzzArticlePrepareHeaders::class, 'call'];
    $u->prepare_method = [RuntimebuzzArticlePrepareMethod::class, 'call'];
    $u->prepare_params = [RuntimebuzzArticlePrepareParams::class, 'call'];
    $u->prepare_path = [RuntimebuzzArticlePreparePath::class, 'call'];
    $u->prepare_query = [RuntimebuzzArticlePrepareQuery::class, 'call'];
    $u->result_basic = [RuntimebuzzArticleResultBasic::class, 'call'];
    $u->result_body = [RuntimebuzzArticleResultBody::class, 'call'];
    $u->result_headers = [RuntimebuzzArticleResultHeaders::class, 'call'];
    $u->transform_request = [RuntimebuzzArticleTransformRequest::class, 'call'];
    $u->transform_response = [RuntimebuzzArticleTransformResponse::class, 'call'];
});
