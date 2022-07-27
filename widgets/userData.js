'use strict'

module.exports = (data, props) => {
    return {
        type: "context",
        child: {
             type: "text",
            value: context.size
        } 
    }
}

