import mongoose from 'mongoose'

mongoose.connect(process.env.DB_MONGO_URI)
    .then(() => {console.log('db connected')})
    .catch(err => console.error(err + 'db connection failed'))