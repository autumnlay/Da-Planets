import { Schema } from 'mongoose'

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true },
    starId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
