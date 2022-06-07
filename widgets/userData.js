'use strict'

module.exports = (data, props, context) => {
    var userData = JSON.stringify(context)
    if (userData == null || userData == undefined) {
        userData = "No user data"
    }
    return {
        type: "text",
        value: userData
    }
}

