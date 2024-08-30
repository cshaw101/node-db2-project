const Cars = require('./cars-model');
const vinValidator = require('vin-validator');
const db = require('../../data/db-config')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Cars.getById(req.params.id)
    if (!car) {
      next({ status: 404, message: 'not found' })
    }else {
      req.car = car;
      next()
    }
  }catch(err) {
  res.status(500).json({message: 'middle ware isnt working'})
  next()
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body;

  const requiredFields = [
    { field: 'vin', value: vin },
    { field: 'make', value: make },
    { field: 'model', value: model },
    { field: 'mileage', value: mileage }
  ];

  const missingField = requiredFields.find(field => !field.value);

  if (missingField) {
    return res.status(400).json({ 
      message: `${missingField.field} is missing`
    });
  }

  next();
};


const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;

  if (!vinValidator.validate(vin)) {
    return res.status(400).json({
      message: `vin ${vin} is invalid`
    });
  }

  next(); 
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body;

  try {
   
    const existingCar = await db('cars').where('vin', vin).first();
    
    if (existingCar) {
      return res.status(400).json({
        message: `vin ${vin} already exists`
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}