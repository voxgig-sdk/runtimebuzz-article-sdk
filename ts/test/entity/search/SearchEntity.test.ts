

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"search","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/search","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":5,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"cursor","k":"query","n":"q","or":"q","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/search","q":{"exist":["limit","q"]},"r":{},"s":[{"lit":"api"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":1}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"search_ref01","srcdatavar":"search_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-search_ref01"}}],"index$":0}]}, 'Search', {"GET /api/search":{"protocol":"http","operationId":"searchArticles","responses":{"200":{"description":"Successful response with article search results","content":{"application/json; charset=utf-8":{"schema":{"type":"object","required":["query","count","articles"],"properties":{"query":{"type":"string","description":"The trimmed search string that was sent"},"count":{"type":"integer","description":"Number of articles returned","minimum":0},"articles":{"type":"array","description":"Array of article objects matching the search query","items":{"type":"object","required":["title","excerpt","path","url"],"properties":{"title":{"type":"string","description":"Title of the article"},"excerpt":{"type":"string","description":"Short excerpt or summary of the article"},"path":{"type":"string","description":"Relative path to the article (e.g., /software/editorials/example)","example":"/software/editorials/example"},"url":{"type":"string","format":"uri","description":"Absolute URL of the article on runtimebuzz.com","example":"https://runtimebuzz.com/software/editorials/example"}},"x-ref":"#/components/schemas/Article"}}},"x-ref":"#/components/schemas/SearchResponse"},"examples":{"withResults":{"summary":"Search with results","value":{"query":"cursor","count":2,"articles":[{"title":"Understanding Cursor in Modern IDEs","excerpt":"An in-depth look at cursor management in development environments","path":"/software/editorials/cursor-ides","url":"https://runtimebuzz.com/software/editorials/cursor-ides"},{"title":"Database Cursor Optimization","excerpt":"Best practices for efficient cursor usage in databases","path":"/software/tutorials/database-cursors","url":"https://runtimebuzz.com/software/tutorials/database-cursors"}]}},"emptyQuery":{"summary":"Empty query","value":{"query":"","count":0,"articles":[]}}}}}}},"parameters":[{"name":"q","in":"query","description":"Search text. Every whitespace-separated token must appear somewhere in the article title, excerpt, tags, section, author, or body (case-insensitive). An empty q returns zero results.","required":true,"schema":{"type":"string"},"example":"cursor","index$":0},{"name":"limit","in":"query","description":"Maximum number of articles in the response (default 80, capped at 200).","required":false,"schema":{"type":"integer","default":80,"minimum":1,"maximum":200},"example":5,"index$":1}],"securitySource":"unspecified"}})
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
  
