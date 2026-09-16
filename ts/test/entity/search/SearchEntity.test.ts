

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RuntimebuzzArticleSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RUNTIMEBUZZ_ARTICLE_TEST_LIVE=TRUE.
  afterEach(liveDelay('RUNTIMEBUZZ_ARTICLE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RuntimebuzzArticleSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RUNTIMEBUZZ_ARTICLE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"search","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":5,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":"cursor","kind":"query","name":"q","orig":"q","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/search","json":"{\"operationId\":\"searchArticles\",\"parameters\":[{\"description\":\"Search text. Every whitespace-separated token must appear somewhere in the article title, excerpt, tags, section, author, or body (case-insensitive). An empty q returns zero results.\",\"example\":\"cursor\",\"in\":\"query\",\"name\":\"q\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximum number of articles in the response (default 80, capped at 200).\",\"example\":5,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":80,\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json; charset=utf-8\":{\"examples\":{\"emptyQuery\":{\"summary\":\"Empty query\",\"value\":{\"articles\":[],\"count\":0,\"query\":\"\"}},\"withResults\":{\"summary\":\"Search with results\",\"value\":{\"articles\":[{\"excerpt\":\"An in-depth look at cursor management in development environments\",\"path\":\"/software/editorials/cursor-ides\",\"title\":\"Understanding Cursor in Modern IDEs\",\"url\":\"https://runtimebuzz.com/software/editorials/cursor-ides\"},{\"excerpt\":\"Best practices for efficient cursor usage in databases\",\"path\":\"/software/tutorials/database-cursors\",\"title\":\"Database Cursor Optimization\",\"url\":\"https://runtimebuzz.com/software/tutorials/database-cursors\"}],\"count\":2,\"query\":\"cursor\"}}},\"schema\":{\"properties\":{\"articles\":{\"description\":\"Array of article objects matching the search query\",\"items\":{\"properties\":{\"excerpt\":{\"description\":\"Short excerpt or summary of the article\",\"type\":\"string\"},\"path\":{\"description\":\"Relative path to the article (e.g., /software/editorials/example)\",\"example\":\"/software/editorials/example\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the article\",\"type\":\"string\"},\"url\":{\"description\":\"Absolute URL of the article on runtimebuzz.com\",\"example\":\"https://runtimebuzz.com/software/editorials/example\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"title\",\"excerpt\",\"path\",\"url\"],\"type\":\"object\"},\"type\":\"array\"},\"count\":{\"description\":\"Number of articles returned\",\"minimum\":0,\"type\":\"integer\"},\"query\":{\"description\":\"The trimmed search string that was sent\",\"type\":\"string\"}},\"required\":[\"query\",\"count\",\"articles\"],\"type\":\"object\"}}},\"description\":\"Successful response with article search results\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/search","segments":[{"lit":"api"},{"lit":"search"}],"select":{"exist":["limit","q"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":1}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"search_ref01","srcdatavar":"search_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LOAD
    const search_ref01_ent = client.Search()
    const search_ref01_match_dt0: any = {}
    const search_ref01_data_dt0 = (await search_ref01_ent.load(search_ref01_match_dt0)).data()
    assert(null != search_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RuntimebuzzArticleSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RUNTIMEBUZZ_ARTICLE_TEST_SEARCH_ENTID': idmap,
    'RUNTIMEBUZZ_ARTICLE_TEST_LIVE': 'FALSE',
    'RUNTIMEBUZZ_ARTICLE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RUNTIMEBUZZ_ARTICLE_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.RUNTIMEBUZZ_ARTICLE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RUNTIMEBUZZ_ARTICLE_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RuntimebuzzArticleSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
