const getDB = require('../util/database').getDb
const bcrypt = require('bcryptjs')

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    async save(){
        const db = getDB();
        return db.collection('users').insertOne(this)
    }

    static async findOne(email, password){
        const db = getDB()
        const user = await db.collection('users').findOne({email:email})
        if(!user){
            return null
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch){
            return user
        } else{
            return null
        }        
    }
}

module.exports = User;