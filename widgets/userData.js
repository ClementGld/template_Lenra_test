'use strict'

module.exports = (data, props, context) => {
    var userData = data[0]
    return {
        type: "text",
        value: JSON.stringify(context)
    }
}

