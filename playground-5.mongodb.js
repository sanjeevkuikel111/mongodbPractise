use("netflix");
// db.shows.find({ name: "Under the Dome" }, { name: 1, genres: 1, status: 1 });
// db.shows.find({}, { name: 2, rating: 1 });
// db.shows.find({}, { name: 1 }).skip(3).limit(2);
// db.shows.find({ "rating.average": { $gt: 7 } }, { name: 1, rating: 1 }).sort({
//   "rating.average": -1,
// });

//? find shows whose runtime is less than 100
//?and sort the result by name in descending order
//?project name, runtime and status
db.shows
  .find(
    { runtime: { $lt: 100 } },
    {
      name: 1,
      status: 1,
      runtime: 1,
      rating: 0,
    }
  )
  .sort({
    name: -1,
  });
