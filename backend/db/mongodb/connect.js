
import {MongoClient} from 'mongodb'


const mongoURL = 'mongodb://localhost:27017'

const client = await MongoClient.connect(mongoURL , 
    
    {
        useNewUrlParser : true 
    });


