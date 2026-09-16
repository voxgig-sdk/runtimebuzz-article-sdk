"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ReadFinderIndexEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RUNTIMEBUZZ_ARTICLE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RUNTIMEBUZZ_ARTICLE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RuntimebuzzArticleSDK.test();
        const ent = testsdk.ReadFinderIndex();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RUNTIMEBUZZ_ARTICLE_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'read_finder_index.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "read_finder_index", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "if_none_match", "orig": "if_none_match", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "GET /api/read-finder-index.json", "json": "{\"operationId\":\"getArticleIndex\",\"parameters\":[{\"description\":\"ETag value for conditional request. Returns 304 Not Modified if content unchanged.\",\"in\":\"header\",\"name\":\"If-None-Match\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json; charset=utf-8\":{\"example\":{\"articles\":[{\"author\":\"John Doe\",\"date\":\"2026-01-10\",\"excerpt\":\"This is an example article excerpt\",\"path\":\"/software/editorials/example\",\"section\":\"software\",\"tags\":[\"software\",\"tutorial\"],\"tagsJoined\":\"software tutorial\",\"title\":\"Example Article Title\"}],\"fingerprint\":\"abc123def456\",\"generatedAt\":\"2026-01-15T12:00:00Z\",\"version\":\"1.0\"},\"schema\":{\"properties\":{\"articles\":{\"description\":\"Array of all article metadata\",\"items\":{\"properties\":{\"author\":{\"description\":\"Author of the article\",\"type\":\"string\"},\"date\":{\"description\":\"Publication date of the article\",\"format\":\"date\",\"type\":\"string\"},\"excerpt\":{\"description\":\"Short excerpt or summary of the article\",\"type\":\"string\"},\"path\":{\"description\":\"Relative path to the article\",\"type\":\"string\"},\"section\":{\"description\":\"Section category of the article (e.g., software, hardware, AI)\",\"type\":\"string\"},\"tags\":{\"description\":\"Array of tags associated with the article\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tagsJoined\":{\"description\":\"Space-separated string of all tags\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the article\",\"type\":\"string\"}},\"required\":[\"path\",\"title\",\"excerpt\",\"tags\",\"tagsJoined\",\"section\",\"author\",\"date\"],\"type\":\"object\"},\"type\":\"array\"},\"fingerprint\":{\"description\":\"Content change token for cache invalidation\",\"type\":\"string\"},\"generatedAt\":{\"description\":\"Timestamp when the index was generated\",\"format\":\"date-time\",\"type\":\"string\"},\"version\":{\"description\":\"Version of the index format\",\"type\":\"string\"}},\"required\":[\"version\",\"generatedAt\",\"fingerprint\",\"articles\"],\"type\":\"object\"}}},\"description\":\"Successful response with article index\",\"headers\":{\"ETag\":{\"description\":\"Entity tag for caching\",\"schema\":{\"type\":\"string\"}}}},\"304\":{\"description\":\"Not Modified - Content unchanged since last request\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/read-finder-index.json", "segments": [{ "lit": "api" }, { "lit": "read-finder-index.json" }], "select": { "exist": ["if_none_match"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "read_finder_index", "name__orig": "read_finder_index", "Name": "ReadFinderIndex", "name_": "read_finder_index", "name-": "read-finder-index", "NAME": "READ_FINDER_INDEX", "index$": 0 }, { "active": true, "entity": "read_finder_index", "key$": "BasicReadFinderIndexFlow", "kind": "basic", "name": "BasicReadFinderIndexFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "read_finder_index_ref01", "srcdatavar": "read_finder_index_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-read_finder_index_ref01" } }], "index$": 0 }] }, 'ReadFinderIndex');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let read_finder_index_ref01_data = Object.values(setup.data.existing.read_finder_index)[0];
        // LOAD
        const read_finder_index_ref01_ent = client.ReadFinderIndex();
        const read_finder_index_ref01_match_dt0 = {};
        const read_finder_index_ref01_data_dt0 = (await read_finder_index_ref01_ent.load(read_finder_index_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != read_finder_index_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/read_finder_index/ReadFinderIndexTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RuntimebuzzArticleSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['read_finder_index01', 'read_finder_index02', 'read_finder_index03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID': idmap,
        'RUNTIMEBUZZ_ARTICLE_TEST_LIVE': 'FALSE',
        'RUNTIMEBUZZ_ARTICLE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID'];
    const live = 'TRUE' === env.RUNTIMEBUZZ_ARTICLE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RuntimebuzzArticleSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.RUNTIMEBUZZ_ARTICLE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ReadFinderIndexEntity.test.js.map