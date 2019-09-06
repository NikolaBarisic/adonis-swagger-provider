'use strict'

const { Command } = require('@adonisjs/ace')

class SwaggerJSON extends Command {
    static get signature () {
        return 'swagger:json'
    }

    static get description () {
        return 'Swagger json docs'
    }

    async handle (args, options) {


        const swaggerJSDoc = require('swagger-jsdoc');
        const Config = use('Config')
        const Helpers = use('Helpers')
        const swagger = Config.get('swagger')
        const fs = use('fs')

        const json = await swaggerJSDoc(swagger)

        const err = fs.writeFile(`${Helpers.publicPath('/swagger.json')}`, JSON.stringify(json), 'utf8', (err =>{
            if(err) return err
        }))

        if(err) {
            this.success(`${this.icon('error')} Fail`)
        }
        else {
            this.success(`${this.icon('success')} Completed`)
        }




    }
}

module.exports = SwaggerJSON
