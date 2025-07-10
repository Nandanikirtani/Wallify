import mongoose, { Schema } from "mongoose";

const receiptSchema = new Schema(
  {
    User: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["receipt", "invoice", "bank_statement", "report", "other"],
      default: "other",
    },
  },
  {
    timestamps: true,
  }
);
