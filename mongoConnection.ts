import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/cert';

const options = {
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true,
};

function mongoConnection() {
  mongoose.connect(connectionString, options).catch((err) => console.log(err));

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });
}

export default mongoConnection;

