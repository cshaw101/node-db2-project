exports.seed = function (knex) {
  return knex('cars').del() // Deletes ALL existing entries
    .then(function () {
      return knex('cars').insert([
        { 
          vin: '1HGCM82633A004352', 
          make: 'Honda', 
          model: 'Accord',   // Add model
          mileage: 120000, 
          title: 'Clean', 
          transmission: 'Manual' 
        },
        { 
          vin: '1FTFW1ET5EKF51234', 
          make: 'Ford', 
          model: 'F-150',    // Add model
          mileage: 85000, 
          title: 'Salvage', 
          transmission: 'Automatic' 
        },
        { 
          vin: 'JH4KA8260MC004352', 
          make: 'Acura', 
          model: 'Legend',   // Add model
          mileage: 140000, 
          title: 'Clean', 
          transmission: 'Automatic' 
        }
      ]);
    });
};
