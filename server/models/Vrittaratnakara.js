const mongoose = require('mongoose')

const VrittaratnakaraSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    title_sans: String,
    title_eng: String,
    definition_sans: String,
    definition_eng: String,
    common: String,
    example_sans: String,
    treeData: mongoose.Mixed
  },
  { collection: 'vrittaratnakara' }
)

const Vrittaratnakara = mongoose.model('Vrittaratnakara', VrittaratnakaraSchema)

module.exports = Vrittaratnakara
