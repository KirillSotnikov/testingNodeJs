require('dotenv').config()
const urlDB = 'mongodb+srv://'+ process.env.DB_USER +':'+process.env.DB_PASS+'@mongovue-voe6y.mongodb.net/nodeTraining?retryWrites=true&w=majority'

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

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
// --

const createAboutInfo = async () => {
  const aboutInfo = await new About({
    title: "About Page",
    description: "About description"
  })
  const dbCall = await aboutInfo.save()
}

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