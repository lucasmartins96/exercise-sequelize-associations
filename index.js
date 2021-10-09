const express = require('express');
const patientsRoutes = require('./Patients/patientsRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/patients', patientsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
