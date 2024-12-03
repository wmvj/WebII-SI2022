const getDB = require('../util/database').getDb

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
}

module.exports = User;