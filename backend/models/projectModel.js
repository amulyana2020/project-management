import mongoose from 'mongoose';

const commercialProccessSchema =
  new mongoose.Schema(
    {
      shipping_instruction_issued_to_vendor_pic: {
        type: String,
        require: false,
      },
      shipping_instruction_issued_to_vendor_target_start:
        {
          type: Date,
          require: false,
        },
      shipping_instruction_issued_to_vendor_target_end:
        {
          type: Date,
          require: false,
        },
      shipping_instruction_issued_to_vendor_actual_start:
        {
          type: Date,
          require: false,
        },
      shipping_instruction_issued_to_vendor_actual_end:
        {
          type: Date,
          require: false,
        },
      shipping_instruction_issued_to_vendor_status:
        {
          type: String,
          require: false,
        },
    },
    {
      timestamps: true,
    }
  );

const projectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    project_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    shipping_instruction_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    laycan_start_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    laycan_end_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    spal_number: {
      type: String,
      required: true,
    },
    project_number: {
      type: String,
      required: true,
    },
    type_charter: {
      type: String,
      required: true,
    },
    shipper: {
      type: String,
      required: true,
    },
    pic_shipper: {
      type: String,
      required: true,
    },
    tug_boat: {
      type: String,
      required: true,
    },
    barge: {
      type: String,
      required: false,
    },
    cargo_on_board: {
      type: String,
      required: false,
    },
    port_of_loading: {
      type: String,
      required: true,
    },
    port_of_discharge: {
      type: String,
      required: true,
    },
    freight_mt_idr: {
      type: Number,
      required: true,
    },
    freight_mt_usd: {
      type: Number,
      required: true,
    },
    total_freight_idr: {
      type: Number,
      required: true,
    },
    total_freight_usd: {
      type: Number,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
    sales: {
      type: String,
      required: true,
    },
    working_progress: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    commercial_proccess: commercialProccessSchema,
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model(
  'Project',
  projectSchema
);

export default Project;
