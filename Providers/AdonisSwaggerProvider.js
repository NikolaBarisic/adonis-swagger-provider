'use strict'
const { ServiceProvider } = require('@adonisjs/fold')
const ace = require('@adonisjs/ace')

class AdonisSwaggerProvider extends ServiceProvider {
    register () {
        this.app.bind('Adonis/Commands/SwaggerJSON', () => require('../commands/SwaggerJSON'))
        this.app.bind('Adonis/Commands/SwaggerUI', () => require('../commands/SwaggerUI'))
        this.app.bind('Adonis/Commands/SwaggerDefault', () => require('../commands/SwaggerDefault'))
    }

    boot () {
        ace.addCommand('Adonis/Commands/SwaggerJSON')
        ace.addCommand('Adonis/Commands/SwaggerUI')
        ace.addCommand('Adonis/Commands/SwaggerDefault')
    }
}

module.exports = AdonisSwaggerProvider
