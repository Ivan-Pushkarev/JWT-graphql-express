import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/cert';

const options = {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true,
};

export const mongoConnection = () => {
  mongoose.set('strictQuery', true)
  mongoose.connect(connectionString, options)
      .then(()=> console.log('MongoDB connected...'))
      .catch((err) => console.log(err));

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
}

