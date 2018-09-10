'use strict'

const raw = require('raw-body')
const inflate = require('inflation')

module.exports = async (res) => {
    const response = res
    const encoding = 'utf8'
    const str = await raw(inflate(response), { encoding })

    try {

    } catch (err) {
        
    }

}