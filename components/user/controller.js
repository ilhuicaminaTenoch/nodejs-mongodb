const store = require('./store');

function addUser(name) {
    if (!name) {
        return Promise.reject('nombre invalido.');
    }
    const user = {
        name,
    };

    return store.addUser(user);
}

function getUser(){
    return new Promise((resolve, reject) => {
       resolve(store.list());
    });
}

module.exports = {
    addUser,
    getUser,
};