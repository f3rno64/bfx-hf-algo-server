'use strict'

const _isError = require('lodash/isError')
const notifyRes = require('./notify_res')

module.exports = (asState, mid, type, err) => {
  const message = _isError(err) ? err.message : err

  notifyRes(asState, mid, type, {
    notify: {
      level: 'error',
      message
    }
  })
}
