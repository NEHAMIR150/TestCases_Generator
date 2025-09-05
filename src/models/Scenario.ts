import mongoose, { Schema, models } from "mongoose";

const ScenarioSchema = new Schema({
  userId: { type: String, required: true },
  scenario_text: { type: String, required: true },
  status: { type: Number, default: 0 },
  date_submitted: { type: Date, default: Date.now },
  processedAt: { type: Date, default: Date.now },
  reminded: { type: Boolean, default: false },
}, { versionKey: "__v" });

const Scenario = models.Scenario || mongoose.model("Scenario", ScenarioSchema);
export default Scenario;
