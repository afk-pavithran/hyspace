import { Model } from "objection"
import Knex from "knex"

const knex = Knex({
    client: 'postgres',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'pavithran',
        password: 'secretpassword',
        database: 'nodeapp'
    }
})