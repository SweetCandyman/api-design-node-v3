import dotenv from 'dotenv'

dotenv.config()

export const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: process.env.MONGODB_URI
}
