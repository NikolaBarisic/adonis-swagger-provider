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

        const Config = use('Config')
        const Helpers = use('Helpers')
        console.log("config", config)
        const swagger = Config.get('swagger')
        const fs = use('fs')
        const swaggerJSDoc = require('swagger-jsdoc');


        let json

        try{
            json = await swaggerJSDoc(swagger)
        }
        catch(err){
            if(err) this.error(`${this.icon('error')} Fail`)
        }

        const err = fs.writeFile(`${Helpers.publicPath('/swagger.json')}`, JSON.stringify(json), 'utf8', (err =>{
            if(err) return err
        }))

        if(err) {
            this.error(`${this.icon('error')} Fail`)
        }
        else {
            this.success(`${this.icon('success')} Completed`)
        }




    }
}

module.exports = SwaggerJSON
