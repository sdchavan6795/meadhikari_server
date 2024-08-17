const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  coverImageUri: {
    type: String,
    required: true, // This is still required because every banner needs an image
  },
  cornerLabelText: {
    type: String,
    required: false, // Not mandatory
  },
  cornerLabelColor: {
    type: String,
    required: false, // Not mandatory
  },
});

module.exports = mongoose.model("Banner", BannerSchema);
