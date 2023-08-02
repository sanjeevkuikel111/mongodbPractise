use("3pm");
//array read operations
db.friends.insertMany([
  {
    name: "Rohan",
    hobbies: ["Singing", "Books"],
    sportData: [
      {
        title: "Football",
        frequency: 3,
      },
      {
        title: "Cricket",
        frequency: 2,
      },
    ],
  },
  {
    name: "Dipesh",
    hobbies: ["Books", "Guitar", "Hiking"],
    sportData: [
      {
        title: "Football",
        frequency: 5,
      },
      {
        title: "Tennis",
        frequency: 1,
      },
      {
        title: "Volleyball",
        frequency: 6,
      },
    ],
  },
  {
    name: "Aakash",
    hobbies: ["Hiking", "Foods", "Singing"],
    sportData: [
      {
        title: "E-gaming",
        frequency: 3,
      },
      {
        title: "Football",
        frequency: 2,
      },
      {
        title: "Basketball",
        frequency: 7,
      },
    ],
  },
]);
//?  find friends whose hobbies is singing
// db.friends.find({ hobbies: "Singing" });

//? find friends whose hobbies is Books or Foods

// db.friends.find({ $or: [{ hobbies: "Books" }, { hobbies: "Foods" }] });
// db.friends.find({ hobbies: { $in: ["Books", "Foods"] } });
// db.friends.find({ hobbies: { $all: ["Books", "Singing"] } });

// ?$all
// db.friends.find({
//   hobbies: { $all: ["Books", "Singing"] },
// });

// db.friends.find({
//   hobbies: { $all: ["Foods", "Hiking"] },
// });

// ?$and
// db.friends.find({
//   $and:[{hobbies:"Foods"},{hobbies:"Hiking"}]
// })

// hobbies either Guitar or Foods
// db.friends.find({
//   $or:[{hobbies:"Guitar"},{hobbies:"Foods"}]
// })

// equivalent;
// db.friends.find({
//   hobbies: { $in: ["Guitar", "Foods"] },
// });

// //?size
// db.friends.find({
//   hobbies: { $size: 3 },
// });

// db.friends.find({
//   "sportData.title": "Football",
//   "sportData.frequency": 3,
// });
//? $elemMatch
// db.friends.find({
//   sportData: {
//     $elemMatch: {
//       title: "Football",
//       frequency: 3,
//     },
//   },
// });

//? find friends whose sport title is cricket
//? and frequency is less than 3
// db.friends.find({
//   sportData: {
//     $elemMatch: {
//       title: "Cricket",
//       frequency: { $lt: 3 },
//     },
//   },
// });

db.scores.updateMany(
  {},
  {
    $unset: {
      isBrilliant: "",
    },
  }
);
// db.friends.find();
