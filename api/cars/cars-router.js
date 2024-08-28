const router = require('express').Router()

router.get('/', (req, res) => {
res.json('get is working')
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