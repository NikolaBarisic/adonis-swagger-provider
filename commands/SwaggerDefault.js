'use strict'

const { Command } = require('@adonisjs/ace')
const path = require('path')

class SwaggerDefault extends Command {
    static get signature () {
        return 'swagger:defaultjson'
    }

    static get description () {
        return 'Swagger default json docs'
    }

    async handle (args, options) {

        await this.copy(path.join(__dirname, '../Samples/TestSwagger.js'), 'public/docs')

        const Helpers = use('Helpers')
        const swaggerJSDoc = require('swagger-jsdoc');

        let json

        try{
            const defaultSwagger = require(path.join(__dirname, '../Samples/Config.js'))

            json = await swaggerJSDoc(defaultSwagger)
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

module.exports = SwaggerDefault
