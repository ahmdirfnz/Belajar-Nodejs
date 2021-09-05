const logger = (req, res, next) => {    // This function will not work if it doesnt have invoke response or next function
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()
}

module.exports = logger