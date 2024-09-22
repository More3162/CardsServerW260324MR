const mongoose = require("mongoose");

const connectionStringForAtlas = "";

const connectToAtlaslDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tzachd1232:Abc123@businesscardappprod.cunmyjr.mongodb.net/?retryWrites=true&w=majority&appName=BusinessCardAppProd"
    );
    console.log("Connected to MongoDB in atlas");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};

module.exports = connectToAtlaslDb;
