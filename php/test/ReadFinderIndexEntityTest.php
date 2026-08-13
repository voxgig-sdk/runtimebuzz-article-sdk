<?php
declare(strict_types=1);

// ReadFinderIndex entity test

require_once __DIR__ . '/../runtimebuzzarticle_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ReadFinderIndexEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = RuntimebuzzArticleSDK::test(null, null);
        $ent = $testsdk->ReadFinderIndex(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = read_finder_index_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "read_finder_index." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $read_finder_index_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.read_finder_index")));
        $read_finder_index_ref01_data = null;
        if (count($read_finder_index_ref01_data_raw) > 0) {
            $read_finder_index_ref01_data = Helpers::to_map($read_finder_index_ref01_data_raw[0][1]);
        }

        // LOAD
        $read_finder_index_ref01_ent = $client->ReadFinderIndex(null);
        $read_finder_index_ref01_match_dt0 = [];
        $read_finder_index_ref01_data_dt0_loaded = $read_finder_index_ref01_ent->load($read_finder_index_ref01_match_dt0, null);
        $this->assertNotNull($read_finder_index_ref01_data_dt0_loaded);

    }
}

function read_finder_index_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/read_finder_index/ReadFinderIndexTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = RuntimebuzzArticleSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["read_finder_index01", "read_finder_index02", "read_finder_index03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID" => $idmap,
        "RUNTIMEBUZZ_ARTICLE_TEST_LIVE" => "FALSE",
        "RUNTIMEBUZZ_ARTICLE_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["RUNTIMEBUZZ_ARTICLE_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new RuntimebuzzArticleSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["RUNTIMEBUZZ_ARTICLE_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["RUNTIMEBUZZ_ARTICLE_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
