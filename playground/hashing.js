const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

const hashedPassword = '$2a$10$n26zg8XXcdF7UFxm/1f1beeOCPe1JrerEO7Fpp/C.2LopnUwEWBPK';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// const data = {
//     id: 10
// };

// const token = jwt.sign(data, 'Avigii');

// console.log(token);

// const decoded = jwt.verify(token, 'Avigii');
// console.log('decoded', decoded);

// const message = 'I am user number 4';
// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//     id: 4
// };
// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'Avigii').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'Avigii').toString();
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }