<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK utility: result_headers

class RuntimebuzzArticleResultHeaders
{
    public static function call(RuntimebuzzArticleContext $ctx): ?RuntimebuzzArticleResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
