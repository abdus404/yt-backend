import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // Cloudinary URL
      required: true,
    },
    thumbnail: {
      type: String, // Cloudinary URL
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150, // Limiting title length to 150 characters
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000, // Limiting description length to 5000 characters
    },
    duration: {
      type: Number, // Duration in seconds
      required: true,
    },
    views: {
      type: Number,
      default: 0,
      min: 0, // Views cannot be negative
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Index for better query performance
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
