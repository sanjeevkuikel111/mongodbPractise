//?Project
//? sort
//? skip
//? limit

use("netflix");
// db.shows.find();
db.shows.findOne(
  {},
  {
    name: 1,
    status: 1,
    runtime: 1,
    rating: 1,
  }
);
