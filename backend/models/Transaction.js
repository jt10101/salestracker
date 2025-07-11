const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema(
  {
    salesPersonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    transactionDate: {
      type: Date,
    },
    salesAmount: {
      type: Number,
    },
    salesCharge: {
      type: Number,
      max: [1, "Sales charge cannot exceed 100%"],
      min: [0.01, "Sales charge cannot be lesser than 0.1%"],
    },
    revenue: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
