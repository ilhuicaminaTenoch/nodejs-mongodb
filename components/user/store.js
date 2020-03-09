const Model = require('./model');

const addUser = async (user) => {
    let myUser = Model(user);
    return myUser.save();
};

const list = async () => {
    return await Model.find();
};
module.exports = {
    addUser,
    list
};