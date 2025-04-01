const btn = document.getElementById("getWorkout");
const dropdown = document.getElementById("workoutDay");

const pushExercises = [
   ["Barbell Bench Press", "Dumbbell Bench Press", "Incline Bench Press", "Forward Leaning Dips", "Standing Cable Flys", "Machine Flys", "Machine Chest Press"],
   ["Machine Shoulder Press", "Dumbbell Shoulder Press", "Dumbbell Lateral Raise", "Cable Lateral Raise", "Machine Lateral Raise", "Rope Face Pull", "Overhead Press", "Rear Delt Fly", "Dumbbell Front Raise"],
   ["Upright Dips", "Close Grip Bench Press", "Cable Overhead Extension", "Rope Push Down", "Bar Push Down", "Skullcrusher", "Dumbbell Overhead Extension", "Machine Tricep Extension", "Machine Tricep Pushdown"]
]

const pullExercises = [
   ["Deadlift", "Pull Up", "Barbell Row", "T-Bar Row", "Seated Cable Row", "Lat Pull Down", "Single Arm Pull Down", "Single-Arm Dumbbell Row", "Dumbbell Shrugs", "Machine Row"],
   ["Standing Dumbbell Curl", "Barbell Curl", "Preacher Curl", "Cable Curl", "Incline Curl", "Spider Curl", "Bayesian Curl", "Machine Bicep Curl"],
   ["Reverse Barbell Curl", "Hammer Curl", "Wrist Curl", "Farmer's Carry", "Reverse Wrist Curl", "Cable Wrist Curl", "Deadhangs"]
]

const legExercises = [
   ["Barbell Squat", "Bulgarian Split Squat", "Seated Leg Press", "Hack Squat", "Machine Leg Extension", "Seated Leg Curl", "Lying Leg Curl", "Pendulum Squat", "Barbell Lunges", "Hip Abductor Machine", "Hip Adductor Machine", "Front Squat", "Goblet Squat"],
   ["Standing Calf Raise", "Seated Calf Raise", "Leg Press Calf Raises", "Single Leg Calf Raise"]
]

const exerciseImages = {

   "Barbell Bench Press": "barbellbenchpress.jpg", 
   "Dumbbell Bench Press": "dumbbellbenchpress.jpg",
   "Incline Bench Press": "inclinebenchpress.jpg",
   "Forward Leaning Dips": "forwardleaningdips.jpg",
   "Standing Cable Flys": "standingcableflys.jpg",
   "Machine Flys": "machineflys.jpg",
   "Machine Chest Press": "machinechestpress.jpg",

   "Machine Shoulder Press": "",
   "Dumbbell Shoulder Press": "dumbbellshoulderpress.jpg",
   "Dumbbell Lateral Raise": "dumbbelllateralraise.jpg",
   "Cable Lateral Raise": "",
   "Machine Lateral Raise": "",
   "Rope Face Pull": "",
   "Overhead Press": "",



   
   "Barbell Bench Press": "barbellBenchPress.jpg",
   "Dumbbell Bench Press": "dumbbellBenchPress.jpg",
   "Incline Bench Press": "inclineBenchPress.jpg",
   "Forward Leaning Dips": "forwardLeaningDips.jpg",
 };

function shuffleExercises (exerciseArray) {
   // randomize array with Knuth Shuffle
   for (let subarray of exerciseArray) {
      for (let i = subarray.length - 1; i > 0; i--) {
         let x = Math.floor(Math.random() * (i+1));
         let temp = subarray[i];
         subarray[i] = subarray[x];
         subarray[x] = temp;
      }
   }  
}

function randomWorkout (exerciseArray) {

   shuffleExercises(exerciseArray);
   let selectedWorkout = []; 

   // get 2 exercises from each subarray
   if (Math.random() < 0.5) {
      exerciseArray.forEach((subarray) => {
         selectedWorkout.push(subarray[0], subarray[1]);
      })
   // get 3 exercises from 1st subarray, 2 from 2nd, etc
   } else {
      selectedWorkout.push(exerciseArray[0][0], exerciseArray[0][1], exerciseArray[0][2]);
      selectedWorkout.push(exerciseArray[1][0], exerciseArray[1][1]);
      selectedWorkout.push(exerciseArray[2][0]);
   }
   return selectedWorkout;
}

function randomLegWorkout (exerciseArray) {

   shuffleExercises(exerciseArray);
   let selectedWorkout = [];

   selectedWorkout.push(exerciseArray[0][0], exerciseArray[0][1], exerciseArray[0][2], exerciseArray[0][3]);
   selectedWorkout.push(exerciseArray[1][0], exerciseArray[1][1]);

   return selectedWorkout;
}



btn.addEventListener("click", function () {

   let day = dropdown.value;
   let workout; 

   if (day === "Push") {
      workout = randomWorkout(pushExercises);

   } else if (day === "Pull") {
      workout = randomWorkout(pullExercises);

   } else {
      workout = randomLegWorkout(legExercises);
   }


   alert(workout);





   // organize information properly. desktop maybe 3x2 to a 2x3 and then 1x6

   // figure out what to do with nav bar and it being transparent 4

});