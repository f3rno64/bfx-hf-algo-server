/* eslint-env mocha */
'use strict'

const { assert } = require('chai')
const { AsyncEventEmitter, Iceberg, TWAP } = require('bfx-hf-algo')
const AlgoServer = require('../../lib/server')

describe('Algo Server', () => {
  describe('constructor', () => {
    it('initializes an algo host with the provided order types', () => {
      const as = new AlgoServer({
        aos: [Iceberg, TWAP],
        adapter: new AsyncEventEmitter()
      })

      const host = as.getAlgoHost()
      const aos = host.getAOs()

      assert.deepStrictEqual(aos, [Iceberg, TWAP])
    })
  })
})
