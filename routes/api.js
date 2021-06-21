const router = require('express').Router();
const Workout = require('../models/Workouts');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        Workout.forEach(dbWorkout => {
            var total = 0;
            workout.exercise.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

  router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(req.body, {
      where: {
        id: req.params.id
      },
    })
      .then(dbWorkout => res.status(200).json(dbWorkout))
      .catch(err => res.status(400).json(err))
  });

//create workout
router.post("/api/workouts", ({ body }, res) => {
    console.log("WORKOUT TO BE ADDED");
    console.log(body);

    Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
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