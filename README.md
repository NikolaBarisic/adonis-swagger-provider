# Adonis swagger provider

Gives nice [adonis](https://github.com/adonisjs/adonis-framework)-like interface with [swagger](https://www.npmjs.com/package/swagger-jsdoc) library.

## Installation

1. `npm i adonis-swagger-provider --save`
2. register provider inside `start/app.js`

```
const providers = [
    //...
  'adonis-swagger-provider/Providers/AdonisSwaggerProvider'
]
```

3. make `config/swagger.js` as per instructions [here](https://github.com/NikolaBarisic/adonis-swagger-provider/blob/master/Samples/Config.js)

## Commands

`node ace swagger:ui` Export swagger-ui
`node ace swagger:json` Create swagger.json inside `public/swagger.json`
`node ace swagger:defaultjson` Create default swagger.json inside `public/swagger.json`


## Thanks

Special thanks to creators of adonis.js and bull
