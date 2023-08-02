use("3pm");
// db.students.updateOne(
//   { name: "Bishal" },
//   {
//     $push: {
//       grades: 95,
//     },
//   }
// );
// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $push: {
//       grades: 91,
//     },
//   }
// );

//it adds whole array at the end of the array
// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $push: {
//       grades: [95, 98],
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $push: {
//       grades: { $each: [95, 98] },
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Ayush" },
//   {
//     $push: {
//       grades: { $each: [55, 61, 92, 85, 70] },
//     },
//   }
// );

// db.students.updateOne(
//   {
//     name: "Bishal",
//   },
//   {
//     $push:{
//       grades: {
//         $each: [80, 75, 65],
//         $position: 0,
//       },
//     },
//   }
// );

// db.students.updateOne(
//   {
//     name: "Bishal",
//   },
//   {
//     $push: {
//       grades: {
//         $each: [80, 75, 15],
//         $position: -1,
//       },
//     },
//   }
// );

//? TODO:addToSet

//addToSet add the each value to the array which are not already exists in the array.
//it doesnot filter the already exists duplicate value

// db.students.updateOne(
//   { name: "Ayush" },
//   {
//     $addToSet: {
//       grades: { $each: [71, 92, 86, 88, 55, 61, 52] },
//     },
//   }
// );

db.students.find();
//? remove items from array
// $pop
//! value 1 removes item from last indexe
//! value -1 removes item from first index
// db.students.updateOne(
//   { name: "Bishal" },
//   {
//     $pop: {
//       grades: -1,
//     },
//   }
// );

//removes last item from grades of Milan
//remove first item from grades of Ayus
// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $pop: {
//       grades: 1,
//     },
//   }
// );
// db.students.updateOne(
//   { name: "Ayush" },
//   {
//     $pop: {
//       grades: -1,
//     },
//   }
// );

//$pull =>removes items from array
//? based upon "condition
// db.students.updateOne(
//   { name: "Ayush" },
//   {
//     $pull: {
//       grades: { $gt: 65 },
//     },
//   }
// );

//?removes grades from Milan which are
//? less than or equal to 85

// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $pull: {
//       grades: { $lte: 85 },
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $push: {
//       grades: { $each: [85, 75, 65, 35] },
//     },
//   }
// );

//? $pullAll

// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $pullAll: {
//       grades: [85,65],
//     },
//   }
// );

///? $pullAll also removes duplicate value at once
// db.students.updateOne(
//   { name: "Bishal" },
//   {
//     $pullAll: {
//       grades: [80, 65],
//     },
//   }
// );
// db.students.find();

//? removes subjects whose obtained is less than 68 in dipesh
// db.score.updateOne(
//   { name: "Dipesh" },
//   {
//     $pull: {
//       scores: { obtained:{$lt: 68 } },
//     },
//   }
// );

//? remove data science subject from Anit's scores
// db.scores.updateOne(
//   { name: "Anit" },
//   {
//     $pull: {
//       scores: { subject: "DataScience" },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Anit" },
//   {
//     $pullAll: {
//       scores: [
//         {
//           subject: "Science",
//           obtained: 95,
//         },
//       ],
//     },
//   }
// );

//?push
//? add following scores to Anit
//? subject:"Computer",obtained:95
//? subject:"Data mining",obtained:82

// db.scores.updateOne(
//   { name: "Anit" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           {
//             subject: "Computer",
//             obtained: 95,
//           },
//           {
//             subject: "Data mining",
//             obtained: 82,
//           },
//         ],
//       },
//     },
//   }
// );
// db.scores.find();    -
