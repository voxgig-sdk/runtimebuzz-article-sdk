<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK utility: prepare_body

class RuntimebuzzArticlePrepareBody
{
    public static function call(RuntimebuzzArticleContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
