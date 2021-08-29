const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema(
  {
    activity_num: Number,
    name_sans: String,
    meaning: String
  },
  { collection: 'activities' }
)

const Activity = mongoose.model('Activity', ActivitySchema)

module.exports = Activity
