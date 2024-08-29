const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
 return db('cars')
}

const getById = () => {
  // DO YOUR MAGIC
}

const create = () => {
  // DO YOUR MAGIC
}


module.exports = {
  getAll,
  getById,
  create
}