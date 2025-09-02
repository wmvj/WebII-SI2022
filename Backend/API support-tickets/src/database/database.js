import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database{
    #database = {}

    constructor() {
        fs.readFile(DATABASE_PATH, "utf-8")
        .then((data)=>{
            this.#database = JSON.parse(data)
        })
        .catch(()=>{
            this.#persist()
        })
    }

    #persist(){
        fs.writeFile(DATABASE_PATH,JSON.stringify(this.#database))
    }

    insert(table, data){
        if(Array.isArray(this.#database[table])){ // se tiver a tabela dentro do database
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()
    }
}