const router = require('express').Router();
const { Location, Traveller, Trip } = require('../models')

router.get('/api/travellers', async (req, res) => {
  let userData = await Traveller.findAll({});
  res.json({ userData });
});

router.post('/api/travellers', async (req, res) => {
  const newTraveller = await Traveller.create(req.body);
  res.status(200).json(newTraveller);
});

router.get('/api/travellers/:id', async (req, res) => {
  let userData = await Traveller.findByPk(req.params.id)
  res.json({ userData });
});

router.delete('/api/travellers/:id', async (req, res) => {
  Traveller.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ data });
  })
});

router.get('/api/locations', async (req, res) => {
  let userData = await Location.findAll({});
  res.json({ userData });
});

router.post('/api/locations', async (req, res) => {
  const newLocation = await Location.create(req.body);
  res.status(200).json(newLocation);
});

router.get('/api/locations/:id', async (req, res) => {
  let userData = await Location.findByPk(req.params.id)
  res.json({ userData });
});

router.delete('/api/locations/:id', async (req, res) => {
  Location.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ data });
  })
});

router.get('/api/trips', async (req, res) => {
  let tripData = await Trip.findAll({});
  res.json({ tripData });
});

router.get('/api/trips/:id', async (req, res) => {
  let tripData = await Trip.findByPk(req.params.id);
  res.json({ tripData });
});

router.post('/api/trips', async (req, res) => {
  let tripData = await Trip.create(req.body);
  res.json({ tripData });
});

router.delete('/api/trips/:id', async (req, res) => {
  Trip.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ data });
  })
});

module.exports = router;
