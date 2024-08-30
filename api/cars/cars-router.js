const router = require('express').Router()
const Cars = require('./cars-model.js')
const md = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
      const cars = await Cars.getAll();
      res.status(200).json(cars);
    } catch (err) {
      next(err); 
    }
  });

router.get('/:id', md.checkCarId, async (req, res) => {
try {
    const car = await Cars.getById(req.params.id)
    res.json(car)
}catch(err) {
next(err)
}
})

router.post('/', md.checkCarPayload, md.checkVinNumberUnique,md.checkVinNumberValid, async (req, res, next) => {
  try {
    const carData = req.body;
    const car = await Cars.create(carData);

    res.status(201).json(car);
  } catch (err) {
    next(err);  
  }
});


router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status|| 500).json({
      message: err.message,
    })
  })






module.exports = router;

// - `[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).
//   - `[GET] /api/cars/:id` returns a car by the given id.
//   - `[POST] /api/cars` returns the created car.