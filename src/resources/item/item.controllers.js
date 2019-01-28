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

    // Await for the object creation, then fetch by id
    // console.log(await Item.findById(item._id).exec())
    // Await for the object creation, then fetch all existing
    // console.log(await Item.find({}).exec())
    /*
    const updated = await Item.findByIdAndUpdate(
      item._id,
      { name: 'eat' },
      { new: true }
    ).exec()
    */

    const deleted = await Item.findByIdAndDelete(item._id).exec()
    console.log(deleted)
  } catch (error) {
    console.error(error)
  }
}

run()

// export default {}
