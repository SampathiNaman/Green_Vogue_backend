const { default: mongoose } = require("mongoose");

// const dbConnect = () => {
//   try {
//     mongoose.set("strictQuery", false);
//     const conn =  mongoose.connect('mongodb://localhost:27017/test', (err) => {
//       if (err) throw err;
//       console.log("Database Connected Successfully");
//     });
//     // console.log("Database Connected Successfully");
//   } catch (error) {
//     console.log("Database error");
//   }
// };

const dbConnect = async () => {
  try {
      mongoose.set('strictQuery', false);
      await mongoose.connect('mongodb://0.0.0.0:27017/Ecommerce', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('MongoDB Connected...');
  } catch (err) {
      console.error(err.message);
      // make the process fail
      process.exit(1);
  }
}

module.exports = dbConnect;
