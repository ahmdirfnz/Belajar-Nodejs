const { readFile, writeFile } = require('fs').promises;
// const { result } = require('lodash');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile(
        './content/result-mind-grenade.txt',
        `This Is Awesome ${first} ${second}`,
        { flag: 'a' })
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile('./content/first.txt', 'utf-8', (err, data) => {
//             if (err)  {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))





