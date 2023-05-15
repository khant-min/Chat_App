const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected", conn.connection.host);
  } catch (err) {
    console.log("err", err.message.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
