import { Schema, model, models } from 'mongoose';

const activitySchema = new Schema({
  title: {
    type: String,
    required: true},

  organisater_id: {
    type: String,
    required: true},

  description: {
    type: String,
    required: true},

  participants_id: {
    type: Array,
    required: true},

  limit_people: {
    type: Number,
    required: true},

  photo: String,

  category_id: {
    type: String,
    required: true},

  created_at: Date,

  date_debut: {
    type: Date,
    required: true
  },
 // exemple à garder :
  // date_fin: {
  //   type: Date,
  //   required: true
  // },

  
});

const Activity = models.Activity || model('Activity', activitySchema);

export default Activity;