
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RuntimebuzzArticleSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RuntimebuzzArticleSDK.test()
    equal(null !== testsdk, true)
  })

})
