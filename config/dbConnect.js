const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn =  mongoose.connect(process.env.MONGODB_URL, (err) => {
      if (err) throw err;
      console.log("Database Connected Successfully");
    });
    // console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
