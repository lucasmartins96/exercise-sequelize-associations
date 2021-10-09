const { Patient, Plan } = require('../models');

const getAll = async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      attributes: ['fullname'],
      include: [{ model: Plan, as: 'plans' }],
    });

    return res.status(200).json(patients);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};
