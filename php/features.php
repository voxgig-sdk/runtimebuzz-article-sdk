<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RuntimebuzzArticleFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RuntimebuzzArticleBaseFeature();
            case "test":
                return new RuntimebuzzArticleTestFeature();
            default:
                return new RuntimebuzzArticleBaseFeature();
        }
    }
}
