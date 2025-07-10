import mongoose,{Schema} from "mongoose";


const categorySchema = new Schema(
    {
        name:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        type:{
            type:String,
            enum: ["income", "expense"],
            required:true,
        },
        expense:{
            type:Number,
            required:true,
            default: 0
        }
    },
    {timestamps:true}
)

export const Category = mongoose.Schema("Category", categorySchema)