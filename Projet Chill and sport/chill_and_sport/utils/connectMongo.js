import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  }
  catch (error)
  {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectMongo;

/* const connectMongo = async () => {mongoose.connect(process.env.MONGODB_URI);}

export default connectMongo; */
