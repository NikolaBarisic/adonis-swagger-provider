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

4. make `TestSwagger.js` as per instructions [here](https://github.com/NikolaBarisic/adonis-swagger-provider/blob/master/Samples/TestSwagger.js)

## Commands

`node ace swagger:ui` Export swagger-ui <br/>
`node ace swagger:json` Create swagger.json inside `public/swagger.json` <br/>
`node ace swagger:defaultjson` Create default swagger.json inside `public/swagger.json` and read config.js `/node_modules/adonis-swagger-provider/Samples/Config.js` <br/>


## Thanks

Special thanks to creators of adonis.js and swagger
