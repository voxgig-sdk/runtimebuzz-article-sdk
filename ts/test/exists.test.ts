
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RuntimebuzzArticleSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RuntimebuzzArticleSDK.test()
    equal(testsdk instanceof RuntimebuzzArticleSDK, true,
      'RuntimebuzzArticleSDK.test() must return a client synchronously')
  })

})
