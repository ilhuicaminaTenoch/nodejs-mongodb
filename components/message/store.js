const model = require('./model');

const add = function addMessages(message) {
    const myMessage = model(message);
    myMessage.save();
};

const list = async () => {
    return await model.find();
};
const updateText = async (id, message) => {
    const foundMessage = await model.findOne({
       _id: id,
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
};

const remove = async (id) => {
    return await model.deleteOne({
       _id:id
    });
};
module.exports = {
    add,
    list,
    updateText,
    remove
};

