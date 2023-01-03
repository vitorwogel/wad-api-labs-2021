import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const TvSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  overview: { type: String },
  first_air_date: { type: String },
  original_name: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  name: { type: String },
  backdrop_path: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  vote_average: { type: Number },
  origin_contry: [{ type: String }],
});

TvSchema.statics.findByTvID = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Tv', TvSchema);


