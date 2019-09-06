'use strict'

const { Command } = require('@adonisjs/ace')
const path = require('path')

class SwaggerJSON extends Command {
    static get signature () {
        return 'swagger:json'
    }

    static get description () {
        return 'Swagger json docs'
    }

    async handle (args, options) {

        const Config = use('Config')
        const Helpers = use('Helpers')
        const swaggerJSDoc = require('swagger-jsdoc');

        let json, defaultSwagger

        try{
            const swagger = Config.get("swagger")

            if(!swagger ) defaultSwagger = require(path.join(__dirname, '../Samples/Config.js'))

            json = await swaggerJSDoc(swagger || defaultSwagger)
        }
        catch(err){
            if(err) this.error(`${this.icon('error')} Fail`)
            process.exit(0)
        }

        const payload = await this.writeFile(`${Helpers.publicPath('/swagger.json')}`, JSON.stringify(json))

        if(payload) {
            this.error(`${this.icon('error')} Fail`)
            process.exit(0)
        }
        else {
            if(defaultSwagger) this.success(`${this.icon('success')} Generate default swagger json.`)
            this.success(`${this.icon('success')} Completed`)
            process.exit(0)
        }
    }
}

module.exports = SwaggerJSON
