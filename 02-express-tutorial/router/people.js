const express = require('express')
const router = express.Router()

let { people } = require('../data')

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// Method 1 to call router

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman ', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

// Method 2 to call router

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

 

module.exports = router