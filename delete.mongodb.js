use("3pm");
// db.persons.deleteOne({
//   "name.first": "maeva",
//   "name.last": "wilson",
// });
// db.persons.find({ gender: "male" });

db.persons.aggregate([
  {
    $match: {
      $and: [{ gender: "male" }, { "dob.age": { $gt: 30 } }],
    },
  },
  {
    $project: {
      fullName: { $concat: ["$name.first", " ", "$name.last"] },
      email: 1,
      gender: 1,
      age: "$dob.age",
      state: "$location.store",
      phone: 1,
    },
  },
  {
    $sort: {
      age: 1,
    },
  },
  {
    $skip: 0,
  },
  {
    $limit: 20,
  },
]);
