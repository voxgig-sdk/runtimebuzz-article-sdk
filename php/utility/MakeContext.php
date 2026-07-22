<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RuntimebuzzArticleMakeContext
{
    public static function call(array $ctxmap, ?RuntimebuzzArticleContext $basectx): RuntimebuzzArticleContext
    {
        return new RuntimebuzzArticleContext($ctxmap, $basectx);
    }
}
