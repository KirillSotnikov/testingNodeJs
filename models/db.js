// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync');

// const adapter = new FileSync('./models/db.json');
// const db = low(adapter);

// module.exports = db

const urlDB = 'mongodb+srv://sotnikov_k:OP1imCvCqLmcrQri@mongovue-voe6y.mongodb.net/nodeTraining?retryWrites=true&w=majority'

const mongoose = require('mongoose');

let Schema = mongoose.Schema;
// mongoose.connect('mongodb+srv://sotnikov_k:comicon21@mongovue-voe6y.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}, function(err) {
//   if(err) throw err
 
//   console.log('Successfully connected');
// });


mongoose.connect(urlDB, {useNewUrlParser: true})
.then(() => {
  console.log('DB connected')
})
.catch(err => console.log(555, err, 555))

const db = mongoose.connection;

const userSchema = new Schema({
  id:  { type: String, required: true },
  status: Boolean,
  name:   String,
  email: String,
  text: String
});

const User = mongoose.model('User', userSchema);

const AboutSchema = new Schema({
  title: String,
  description: String
})

const About = mongoose.model('About', AboutSchema)

const createAboutInfo = async () => {
  const aboutInfo = await new About({
    title: "About Page",
    description: "About description"
  })
  const dbCall = await aboutInfo.save()
}
// createAboutInfo()

const PortfolioSchema = new Schema({
  id: String,
  title: String,
  description: String
})

const Portfolio = mongoose.model('Portfolio', PortfolioSchema)

module.exports = {
  User,
  About,
  Portfolio
}