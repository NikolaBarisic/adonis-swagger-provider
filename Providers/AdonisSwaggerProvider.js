'use strict'
const { ServiceProvider } = use('@adonisjs/fold')
const ace = require('@adonisjs/ace')

class AdonisSwaggerProvider extends ServiceProvider {
    register () {
        this.app.bind('Adonis/Commands/SwaggerJSON', () => require('../commands/SwaggerJSON'))
        this.app.bind('Adonis/Commands/SwaggerUI', () => require('../commands/SwaggerUI'))
    }

    boot () {
        ace.addCommand('Adonis/Commands/SwaggerJSON')
        ace.addCommand('Adonis/Commands/SwaggerUI')
    }
}

module.exports = AdonisSwaggerProvider
