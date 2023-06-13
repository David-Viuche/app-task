import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodburi')
    console.log('>> DB is connected')
  } catch (error) {
    console.log('>> DB connection Error ', error)
  }
}
