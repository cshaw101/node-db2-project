exports.seed = async function(knex) {
    await knex('cars').truncate(); // Clears the table
    await knex('cars').insert([
      {
        vin: '1HGCM82633A004352',
        make: 'Honda',
        mileage: 120000,
        title: 'Clean',
        transmission: 'Manual',
      },
      {
        vin: '1FTFW1ET5EKF51234',
        make: 'Ford',
        mileage: 85000,
        title: 'Salvage',
        transmission: 'Automatic',
      },
      {
        vin: 'JH4KA8260MC004352',
        make: 'Acura',
        mileage: 140000,
        title: 'Clean',
        transmission: 'Automatic',
      },
    ]);
  };
  