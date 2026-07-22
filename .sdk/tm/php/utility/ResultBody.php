<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK utility: result_body

class RuntimebuzzArticleResultBody
{
    public static function call(RuntimebuzzArticleContext $ctx): ?RuntimebuzzArticleResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
