const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'irfanz') {
        req.user = { name:'irfanz', id: 3 }
        next()
    } else {
        res.status(401).send('<h1>Unauthorized</h1>')
    }
    // console.log('Authorize');
    // next()
}

module.exports = authorize