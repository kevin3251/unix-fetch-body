const raw = require('raw-body')
const inflate = require('inflation')
const qs = require('qs')

module.exports = async (res) => {
    const response = res
    const encoding = 'utf8'
    const str = await raw(inflate(response), { encoding })
    const parsed = qs.parse(str)
    return parsed
}