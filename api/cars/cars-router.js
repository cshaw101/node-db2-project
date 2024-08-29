const router = require('express').Router()
const Cars = require('./cars-model.js')

router.get('/', async (req, res) => {
try {
const cars = await Cars.getAll()
if (!cars) {
    return res.status(404).json({})
}else {
    res.status(200).json(cars)
}
}catch(err) {
res.status(404).json({
    message: 'get did not work'
})
}
})

router.get('/:id', async (req, res) => {
try {
    const car = await Cars.getById(req.params.id)
    res.json(car)
}catch(err) {
next(err)
}
})

router.post('/', (req, res) => {
res.json('post is working')
})

router.use((err, req, res, next) => { //eslint-disable-line
    // DO YOUR MAGIC
    res.status(err.status|| 500).json({
      message: err.message,
    })
  })






module.exports = router;

// - `[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).
//   - `[GET] /api/cars/:id` returns a car by the given id.
//   - `[POST] /api/cars` returns the created car.