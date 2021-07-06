const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.




const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true })

const fruitsSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,"Enter Name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model("Fruit", fruitsSchema);

// const fruit = new Fruit ({
//   name: "Apple",
//   rating: 10,
//   review: "Nice!"
// })

// fruit.save();

// Fruit.deleteMany({ name: "Apple"}, (err) =>{
//   if(err){
//     console.log(err)
//   }
//   else {
//     console.log("Succesfully removed Apple!")
//   }
// });


// const apple = new Fruit ({
//   name: "Apple",
//   rating: 3,
//   review: "Great!"
// })


// Fruit.insertMany([apple,banana,orange,kiwi], (err) =>{
//   if(err){
//     console.log(err)
//   }
//   else {
//     console.log("Succesfully added Fruits!")
//   }
// })







Fruit.updateOne({rating: 10}, {name:"Apple"} ,function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log("Success!");
  }
})

Fruit.deleteOne({name:"Peach"} ,function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log("Success!");
  }
})

Fruit.find((err,fruits) =>{
  if(err)
  {
    console.log(err);
  }else
  {
    mongoose.connection.close()
    fruits.forEach(fruit =>
      {
      console.log(fruit.name);
      });
    }
  })


const personSchema = mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitsSchema
})

const Person = mongoose.model("Person", personSchema)

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Goofy fruit!"
})

pineapple.save().then(() => console.log("added"))

const person = new Person ({
  name: "Aarya",
  age: 13,
  favoriteFruit: pineapple
})

// person.save().then(() => console.log("added"))

Person.deleteMany({name:"Armaan"} ,function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log("Success!");
  }
})
