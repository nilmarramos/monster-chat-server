module.exports = (app) => {
    const companies = require('../controllers/company.controller.js');

    // Create a new company
    app.post('/companies', companies.create);

    // Retrieve all companys
    app.get('/companies', companies.findAll);

    // Retrieve a single company with companyId
    app.get('/companies/:companyId', companies.findOne);

    // Update a company with companyId
    app.put('/companies/:companyId', companies.update);

    // Delete a company with companyId
    app.delete('/companies/:companyId', companies.delete);
}
