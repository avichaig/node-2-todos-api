const { mongoose } = require('../server/db/mongoose');
const { User } = require('../server/models/user');

User.findById('5c0500150db7c56dd761872b').then((user) => {
    if(!user) {
        return console.log('User not found');
    }

    console.log('User: ' , user);
}).catch((e) => console.log(e));