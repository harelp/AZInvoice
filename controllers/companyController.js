const Company = require('./../models/companyModel');

exports.createCompany = async(req, res, next) => {
    try {
        const newComapny = await Company.create(req.body)
        res.status(201).json({
        status: 'success',
        data: newComapny
        })
    }
    catch (err){
        res.status(400).json({
            status: 'Fail',
            message: err
        })
    }
  

};

exports.updateCompany = (req, res, next) => {
  
};

exports.deleteCompany = (req, res, next) => {
  
};

exports.allCompanies = (req, res, next) => {
  
};

exports.getCompany = (req, res, next) => {
  
};