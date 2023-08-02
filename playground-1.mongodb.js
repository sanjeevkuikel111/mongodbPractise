//use this database or create new
// use("friendData");
// db.friendInfo.find()

// bson
//?CRUD
//create
//insertOne
// db.friendInfo.insertOne({
//   name: "sanjeev",
//   location: "kavre",
//   educationLevel: "Bachelor",
// });
//insertMany
// db.friendInfo.insertMany([
//   {
//     name: "salon",
//     location: "ktm",
//     educationLevel: "Bachelor",
//   },
//   {
//     name: "samriddhi",
//     location: "ktm",
//     educationLevel: "3",
//   },
// ]);

//Get/Read/Retrieve
// db.friendInfo.find();
// db.friendInfo.findOne({ name: "salon" });
// db.friendInfo.find({ location: "ktm" });

//delete/remove
// db.friendInfo.deleteOne({
//   name: "salon",
// });
// db.friendInfo.deleteMany({
//   educationLevel: "Bachelor",
// });
// db.friendInfo.find();

//Update/edit
// db.friendInfo.updateOne(
//   { name: "sanjeev" },
//   {
//     $set: { location: "Bhaktapur" },
//   }
// );

// db.friendInfo.updateOne(
//   { name: "sanjeev" },
//   {
//     $set: { name: "salon" },
//   }
// );

//updateMany
// db.friendInfo.updateMany(
//   { name: "samriddhi" },
//   {
//     $set: {
//       educationLevel: "master",
//     },
//   }
// );
// use("netflix");

// ?insertOne
// db.movies.insertOne({
//     name:"Oppenheimer",
//     director:"Nolan",
//     runtime:180,
//     status:"Running",
//     rating:8.3,
//     genre:["Thriller","Action","War","Sci-Fi"]
// })

// ? insertMany
// db.movies.insertMany([
//     {
//             name:"Dune",
//             director:"Robert",
//             runtime:160,
//             status:"Ended",
//             rating:7.8,
//             genre:["Adventure","Action","War","Sci-Fi"]
//         }  ,
//         {
//             name:"Shawshank Redemption",
//             director:"Elon",
//             runtime:120,
//             status:"Ended",
//             rating:9.1,
//             genre:["Prison","Drama","Crime Fiction","Mystery"]
//         }
// ])

// db.movies.deleteOne({name:"Dune"})
// db.movies.findOne({ director: "Nolan" });
// db.movies.find({ runtime: 160 });
// db.movies.find({ rating: 11 });
// db.movies.find();
// db.movies.findOne({ _id: ObjectId("64bf9cddb59c2c2106691498") });
// db.movies.find({ rating: { $gt: 8 } });
//?$gt, $lt,$lte,$gte
// db.movies.find({ rating: { $lt: 8 } });
// db.movies.find({ rating: { $lte: 8 } });
// db.movies.find({ rating: { $gte: 8 } });
//?$eq,$ne
// db.movies.find({ runtime: { $eq: 120 } });
//equivalent
// db.movies.find({ runtime: 120 });
// db.movies.find({ status: { $ne: "Running" } });
//?Logical Operator
//$or
//$not,$nor,$or,$and
// db.movies.find({ $or: [{ runtime: 120 }, { runtime: 160 }, { genre: "War" }] });
use("netflix");

// ? Create
// ?insertOne
// db.movies.insertOne({
//     name:"Oppenheimer",
//     director:"Nolan",
//     runtime:180,
//     status:"Running",
//     rating:8.3,
//     genre:["Thriller","Action","War","Sci-Fi"]
// })

// ? insertMany
// db.movies.insertMany([
//     {
//             name:"Dune",
//             director:"Robert",
//             runtime:160,
//             status:"Ended",
//             rating:7.8,
//             genre:["Adventure","Action","War","Sci-Fi"]
//         }  ,
//         {
//             name:"Shawshank Redemption",
//             director:"Elon",
//             runtime:120,
//             status:"Ended",
//             rating:9.1,
//             genre:["Prison","Drama","Crime Fiction","Mystery"]
//         }
// ])

// db.movies.deleteOne({name:"Dune"})

// ?Read
// db.movies.find({director:"Nolan"})
// db.movies.find({runtime:160})
// db.movies.find({rating:11})

// db.movies.findOne({_id:ObjectId("64bf9be585029bdc926d32b3")})

//? Comparison Operator

// rating>8
//? $gt, $lt, $gte, $lte
// db.movies.find({rating:{$gt:8}})

// rating<8
// db.movies.find({rating:{$lt:8}})

// db.movies.find({rating:{$gt:7.8}})

// ?$eq
// db.movies.find({runtime:{$eq:120}})
// equivalent
// db.movies.find({runtime:120})

// ?$ne
// db.movies.find({status:{$ne:"Running"}})

// ?Logical Operator => $and, $or, $not, $nor
// ?$or

// runtime:120 or runtime:160
// db.movies.find({$or:[{runtime:120},{runtime:160}]})

// ?$and

// db.movies.find({genre:"War"})
// db.movies.find({
//   $or: [{ director: "cristopher Nolan" }, { director: "Robert" }],
// });
// db.movies.find({ $or: [{ genre: "Action" }, { genre: "Adventure" }] });

// db.movies.find();
// db.movies.find({
//   $and: [{ director: "cristopher Nolan" }, { director: "Robert" }],
// });
// db.movies.insertOne({
//   name: "Interseller",
//   director: "Nolan",
//   runtime: 200,
//   status: "Ended",
//   rating: 8.3,
//   genre: ["multiverse", "Action", "Sci-Fi"],
// });

// db.friendInfo.updateOne(
//   { runtime: 200 },
//   {
//     $set: { name: "cristopher Nolan" },
//   }
// );
//?find movies whose status is running and genre is sci-fi
// db.movies.find({ $and: [{ status: "Running" }, { genre: "Sci-Fi" }] });
// db.movies.find({ status:"Running", genre: "Sci-Fi" });
// db.movies.find();
//?find movies whose rating is less than 8 and status is ended and genre is "War"
// db.movies.find({
//   $and: [{ rating: { $lt: 8 } }, { status: "Ended" }, { genre: "War" }],
// });
// db.movies.find({ director: { $not: { $eq: "cristopher Nolan" } } });
// db.movies.find({ director: { $ne: "cristopher Nolan" } });

//?$in   only selected
//?find movies whose rating is either 9.1 or 7.8 or8.3
// db.movies.find({ $or: [{ rating: 9.1 }, { rating: 7.8 }, { rating: 8.3 }] });
// db.movies.find({ rating: { $in: [9.1, 7.8, 8.3] } });
//?find movies whose director either nolan or robert
// db.movies.find({
//   $or: [{ director: "cristopher Nolan" }, { director: "Robert" }],
// });
//equivalent

// db.movies.find({ director: { $in: ["cristopher Nolan", "Robert"] } });

//?$nin=>notin   except selected

// db.movies.find({ director: { $nin: ["cristopher Nolan", "Robert"] } });
// db.shows.find({
//   summary: {
//     $regex: "dome",
//     $options: "i",
//   },
// });

db.sales.find({ $expr: { $gt: ["order", "volume"] } });
