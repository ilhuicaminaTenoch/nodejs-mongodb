const db = require('mongoose');

db.Promise = global.Promise;

const mongoUrl = 'mongodb+srv://manijas:achoM4n3@cluster0-gfzct.mongodb.net/telegrom?retryWrites=true&w=majority';
async function connect(url){
    try {
        return db.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
                console.log('[db] Conectada con exito');
            });
    }catch (e) {
        console.log(`db err: ${e.message}`);
    }

};

module.exports = connect();

