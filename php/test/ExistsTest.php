<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK exists test

require_once __DIR__ . '/../runtimebuzzarticle_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RuntimebuzzArticleSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
