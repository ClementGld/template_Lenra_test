'use strict'

module.exports = (data, props, context) => {
    var userData = JSON.stringify(context)
    return {
        type: "text",
        value: userData
    }
}
