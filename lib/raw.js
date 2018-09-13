'use strict'

const raw = require('raw-body')
const inflate = require('inflation')

/**
 * 
 * @param {Stream} res
 * @return {String}
 * @api public 
 */
module.exports = async (res) => {
    const response = res
    return await raw(inflate(response))
}