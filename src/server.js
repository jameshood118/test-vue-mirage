import {Server, Model} from 'miragejs'

export function makeServer ({ environment = 'development'} = {}) {
    let server = new Server({
        environment, 
        models: {
            todo: Model,
        },
        seeds(server) {
            server.create('todo', {content: 'Learn Mirage JS'})
            server.create('todo', {content: 'Integrate with Vue.js'})
        },
        routes(){
            this.namespace = 'api'
            
            this.get('/todos', schema => {
                return schema.todos.all()
            })
        },
    })
    return server
}