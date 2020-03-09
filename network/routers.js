const message = require('../components/message/network');
const users = require('../components/user/network');

const routers = function (server) {
    server.use('/message', message);
    server.use('/user', users);
};


module.exports = routers;
