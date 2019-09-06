'use strict'

const { Command } = require('@adonisjs/ace')
const path = require('path')

class SwaggerUI extends Command {
    static get signature () {
        return 'swagger:ui'
    }

    static get description () {
        return 'Swagger-ui assets'
    }

    async handle (args, options) {
        await this.copy(path.join(__dirname, '../data'), 'public/docs')

        this.success(`${this.icon('success')} Completed`)
    }
}

module.exports = SwaggerUI