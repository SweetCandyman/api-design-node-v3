import { Item } from './item.model'
import { connect } from '../../utils/db'
import mongoose from 'mongoose'

const run = async () => {
  try {
    await connect()
    const item = await Item.create({
      name: 'Clean up',
      createdBy: mongoose.Types.ObjectId(),
      list: mongoose.Types.ObjectId()
    })
    console.log(item)
  } catch (error) {
    console.error(error)
  }
}

run()

// export default {}
