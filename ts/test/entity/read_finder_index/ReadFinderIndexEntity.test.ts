

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


describe('ReadFinderIndexEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RUNTIMEBUZZ_ARTICLE_TEST_LIVE=TRUE.
  afterEach(liveDelay('RUNTIMEBUZZ_ARTICLE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RuntimebuzzArticleSDK.test()
    const ent = testsdk.ReadFinderIndex()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RUNTIMEBUZZ_ARTICLE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'read_finder_index.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"read_finder_index","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/read-finder-index.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"if_none_match","or":"if_none_match","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/read-finder-index.json","q":{"exist":["if_none_match"]},"r":{},"s":[{"lit":"api"},{"lit":"read-finder-index.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"read_finder_index","name__orig":"read_finder_index","Name":"ReadFinderIndex","name_":"read_finder_index","name-":"read-finder-index","NAME":"READ_FINDER_INDEX","index$":0}, {"active":true,"entity":"read_finder_index","key$":"BasicReadFinderIndexFlow","kind":"basic","name":"BasicReadFinderIndexFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"read_finder_index_ref01","srcdatavar":"read_finder_index_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-read_finder_index_ref01"}}],"index$":0}]}, 'ReadFinderIndex', {"GET /api/read-finder-index.json":{"protocol":"http","operationId":"getArticleIndex","responses":{"200":{"description":"Successful response with article index","headers":{"ETag":{"description":"Entity tag for caching","schema":{"type":"string"}}},"content":{"application/json; charset=utf-8":{"schema":{"type":"object","required":["version","generatedAt","fingerprint","articles"],"properties":{"version":{"type":"string","description":"Version of the index format"},"generatedAt":{"type":"string","format":"date-time","description":"Timestamp when the index was generated"},"fingerprint":{"type":"string","description":"Content change token for cache invalidation"},"articles":{"type":"array","description":"Array of all article metadata","items":{"type":"object","required":["path","title","excerpt","tags","tagsJoined","section","author","date"],"properties":{"path":{"type":"string","description":"Relative path to the article"},"title":{"type":"string","description":"Title of the article"},"excerpt":{"type":"string","description":"Short excerpt or summary of the article"},"tags":{"type":"array","description":"Array of tags associated with the article","items":{"type":"string"}},"tagsJoined":{"type":"string","description":"Space-separated string of all tags"},"section":{"type":"string","description":"Section category of the article (e.g., software, hardware, AI)"},"author":{"type":"string","description":"Author of the article"},"date":{"type":"string","format":"date","description":"Publication date of the article"}},"x-ref":"#/components/schemas/ArticleMetadata"}}},"x-ref":"#/components/schemas/ArticleIndexResponse"},"example":{"version":"1.0","generatedAt":"2026-01-15T12:00:00Z","fingerprint":"abc123def456","articles":[{"path":"/software/editorials/example","title":"Example Article Title","excerpt":"This is an example article excerpt","tags":["software","tutorial"],"tagsJoined":"software tutorial","section":"software","author":"John Doe","date":"2026-01-10"}]}}}},"304":{"description":"Not Modified - Content unchanged since last request"}},"parameters":[{"name":"If-None-Match","in":"header","description":"ETag value for conditional request. Returns 304 Not Modified if content unchanged.","required":false,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let read_finder_index_ref01_data = Object.values(setup.data.existing.read_finder_index)[0] as any

    // LOAD
    const read_finder_index_ref01_ent = client.ReadFinderIndex()
    const read_finder_index_ref01_match_dt0: any = {}
    const read_finder_index_ref01_data_dt0 = (await read_finder_index_ref01_ent.load(read_finder_index_ref01_match_dt0)).data()
    assert(null != read_finder_index_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/read_finder_index/ReadFinderIndexTestData.json')

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
    ['read_finder_index01','read_finder_index02','read_finder_index03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID': idmap,
    'RUNTIMEBUZZ_ARTICLE_TEST_LIVE': 'FALSE',
    'RUNTIMEBUZZ_ARTICLE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID']

  const live = 'TRUE' === env.RUNTIMEBUZZ_ARTICLE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RUNTIMEBUZZ_ARTICLE_TEST_READ_FINDER_INDEX_ENTID']
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
  
