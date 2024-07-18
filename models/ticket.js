import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    addedBy: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true,
      default: "low",
    },
  },
  { timestamps: true }
);

TicketSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    if (returnedObject._id) {
      returnedObject.id = returnedObject._id.toString();
    }
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
