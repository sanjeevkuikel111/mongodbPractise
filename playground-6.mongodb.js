use("3pm");
// db.persons.find().count();

//? find user with firstName with "victor " and set his email to "victor@gmail.com"
// db.persons.updateOne(
//   { "name.first": "victor" },
//   {
//     $set: {
//       email: "victor@gmail.com",
//     },
//   }
// );
// db.persons.find();

// ?find user whose first name is carl and state is "wicklow"
//update his email to
//and phone number to 9860897535
// db.persons.updateOne(
//   { "name.first": "carl", "location.state": "wicklow" },
//   {
//     $set: {
//       email: "carl@gmail.com",
//       phone: "9860897535",
//     },
//   }
// );

// db.persons.findOne({ "name.first": "carl", "location.state": "wicklow" });

// db.scores.insertMany([
//   {
//     name: "Sanjeev",
//     age: 23,

//     highestScore: 93,
//     location: {
//       temporary: "Ktm",
//       permanent: "Kavre",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 85,
//       },
//       {
//         subject: "Social",
//         obtained: 75,
//       },
//       {
//         subject: "Math",
//         obtained: 93,
//       },
//     ],
//   },
//   {
//     name: "Anit",
//     age: 24,

//     highestScore: 95,
//     location: {
//       temporary: "Ktm",
//       permanent: "Nepalgunj",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 95,
//       },
//       {
//         subject: "Social",
//         obtained: 82,
//       },
//       {
//         subject: "Math",
//         obtained: 73,
//       },
//     ],
//   },
//   {
//     name: "Dipesh",
//     age: 23,

//     highestScore: 98,
//     location: {
//       temporary: "Ktm",
//       permanent: "Bhaktapur",
//     },
//     scores: [
//       {
//         subject: "Science",
//         obtained: 81,
//       },
//       {
//         subject: "Social",
//         obtained: 67,
//       },
//       {
//         subject: "Math",
//         obtained: 98,
//       },
//     ],
//   },
// ]);

//? update age of "Sanjeev " to 24
//? and temporary location to "Lalitpur"

// db.scores.updateOne(
//   { _id: ObjectId("64c63358aaf5d836b3034066") },
//   {
//     $set: {
//       age: 24,
//       "location.temporary": "Lalitpur",
//     },
//   }
// );

//? inc
// db.scores.updateOne(
//   {
//     name: "Anit",
//   },
//   {
//     $inc: {
//       age: 3,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $inc: { age: 2 },
//   }
// );

// db.scores.updateOne(
//   { name: "Anit" },
//   {
//     $inc: {
//       highestScore: 3,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Anit" },
//   {
//     $inc: {
//       age: -4,
//     },
//   }
// );
// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       highestScore: -10,
//     },
//   }
// );

//? $mul
// db.scores.updateMany(
//   { name: "Dipesh" },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

// //? divide age of dipesh by2
// db.scores.updateMany(
//   { name: "Dipesh" },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );

//? multiply highest score  of every user by 2
// db.scores.updateMany(
//   {},
//   {
//     $mul: {
//       highestScore: 2,
//     },
//   }
// );

// //? divide highest score by 4
// db.scores.updateMany(
//   {},
//   {
//     $mul: {
//       highestScore: 0.25,
//     },
//   }
// );

//? $set behavour add new key value

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       isBrilliant: true,
//     },
//   }
// );

//? $remove
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       age: "totalAge",
//     },
//   }
// );

//?  rename highest score to lowest score
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       highestScore: "lowestScore",
//     },
//   }
// );

//? find users whose age is greater than or equals to 25
//?and change field totalAge to age
// db.scores.updateMany(
//   { totalAge: { $gte: 25 } },
//   {n
//     $rename: {
//       totalAge: "age",
//     },
//   }
// );
// db.scores.find();

// db.scores.insertOne({
//   name: "Santosh",
//   location: {
//     temporary: "Bhaktpaur",
//     permanent: "Lalitpur",
//   },
//   scores: [
//     {
//       subject: "Science",
//       obtained: 72,
//     },
//     {
//       subject: "Social",
//       obtained: 65,
//     },
//     {
//       subject: "Math",
//       obtained: 81,
//     },
//   ],
//   lowestScore: 41.5,
//   age: 24,
// });

// ?2.increase age of Dipesh by 2
// ?3.decrease lowestScore of Dipesh by 9
// ?4. divide age of Anit by 2
// ?5.multiply age of Sanjeev by 1.5

// ?1.update lowestScore of Dipesh to 51,
// ?temporary location to "Biratnagar"
// db.scores.updateOne(
//   { name: "Dipesh" },
//   {
//     $set: {
//       lowestScore: 51,
//           "location.temporary": "Biratnagar",

//     },
//   }
// );

// !Change name of Santosh to Sandip
// db.scores.updateOne(
//   { name: "Sandip" },
//   {
//     $set: {
//       name: "Akash",
//     },
//     $inc: {
//       age: 2,
//       lowestScore: -9,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "" },
//   {
//     $inc: {
//       age: 2,
//       lowestScore: -9,
//     },
//   }
// );

// ? working with the array of object

//$ operator =>matching object
// db.scores.updateOne(
//   { name: "Sanjeev", "scores.subject": "Science" },
//   {
//     $set: {
//       "scores.$.subject": "Commerce",
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Anit", "scores.subject": "Social" },
//   {
//     $set: {
//       "scores.$.subject": "DataScience",
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Akash", "scores.subject": "Social" },
//   {
//     $inc: {
//       "scores.$.obtained": 15,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Akash" },
//   {
//     $set: {
//       "scores.$[].obtained": 79,
//     },
//   }
// );

//?decrese obtained marks of every subject by 5 of sandip

// db.scores.updateOne(
//   { name: "Akash" },
//   {
//     $inc: {
//       "scores.$[].obtained": -5,
//     },
//   }
// );

//partial updating in array of object
// db.scores.updateOne(
//   { name: "Dipesh" },
//   {
//     $set: {
//       "scores.$[element].obtained": 70,
//     },
//   },
//   {
//     arrayFilters: [{ "element.obtained": { $gt: 80 } }],
//   }
// );
// db.scores.find();

// db.students.insertMany([
//   { name: "Bishal", grades: [85, 80, 80] },
//   { name: "Milan", grades: [88, 90, 92] },
//   { name: "Ayush", grades: [85, 100, 90] },
// ]);

// db.students.updateOne(
//   { name: "Bishal", grades: 85 },
//   {
//     $set: {
//       "grades.$": 95,
//     },
//   }
// );

// db.students.updateOne(
//   { name: "Milan" },
//   {
//     $inc: {
//       "grades.$[]": -8,
//     },
//   }
// );

// db.students.find();
