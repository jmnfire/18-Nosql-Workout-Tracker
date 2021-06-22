const router = require('express').Router();
const Workout = require('../models/Workouts');



router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.put('/api/workouts/:id', (req, res) => {
    console.log("test2");
    Workout.findOneAndUpdate(req.body, {
      where: {
        _id: req.params._id
      },
    })
      .then(dbWorkout => res.status(200).json(dbWorkout))
      .catch(err => res.status(400).json(err))
  });


// create workout
router.post("/api/workouts", ({ body }, res) => {
    console.log("test");
    Workout.create({ body })
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


// get workouts in range
router.get("/api/workouts/range", (req, res) => {

    Workout.find({}).then(dbWorkout => {
        console.log("WORKOUTS");
        console.log(dbWorkout);

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });

});
  
 
  
  module.exports = router;