const { default: mongoose } = require("mongoose");


const dbConnect = async () => {
  try {
      mongoose.set('strictQuery', false);
      await mongoose.connect(process.env.MONGODB_URL, {
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
