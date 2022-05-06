'use strict'

module.exports = (data, props) => {
  return {
    type: "flex",
    fillParent: true,
    mainAxisAlignment: "center",
    children: [
      {
        type: "flex",
        direction: "vertical",
        fillParent: true,
        spacing: 2,
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        children: [
          {
            type: "image",
            src: "logo-vertical.png"
          },
          {
            type: "text",
            value: `Hello ${data.value}!`
          },
          {
            type: "textfield",
            value: data.value,
            onChanged: {
              action: "changeValue"
            }
          }
        ]
      },
    ]
  }
}

