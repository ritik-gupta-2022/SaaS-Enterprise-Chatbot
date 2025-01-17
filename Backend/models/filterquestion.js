import mongoose from "mongoose";

const filterQuestionsSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answered: { type: String },
    domainId: { type: mongoose.Schema.Types.ObjectId, ref: "Domain" },
  },
  { timestamps: true }
);

const FilterQuestions = mongoose.model("FilterQuestions", filterQuestionsSchema);
export default FilterQuestions;
