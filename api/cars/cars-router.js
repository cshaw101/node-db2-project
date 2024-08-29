const router = require('express').Router()
const Cars = require('./cars-model.js')

router.get('/', async (req, res) => {
try {
const cars = await Cars.getAll()
if (!cars) {
    return res.status(404).json({message:'this endpoint needs work'})
}else {
    res.status(200).json(cars)
}

}catch(err) {
res.status(404).json({
    message: 'get did not work'
})
}
})

router.get('/:id', (req, res) => {
res.json('get :id is working')
})

router.post('/', (req, res) => {
res.json('post is working')
})








module.exports = router;

// - `[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).
//   - `[GET] /api/cars/:id` returns a car by the given id.
//   - `[POST] /api/cars` returns the created car.