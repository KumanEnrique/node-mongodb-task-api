import { MongoClient } from "mongodb";

export async function connect(){
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true })
        console.log('db is connected');
        const db = client.db('node-restapi')
        return db
    } catch (error) {
        console.log(error);
    }
}