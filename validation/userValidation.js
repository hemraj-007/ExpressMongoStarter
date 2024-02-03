const zod=require("zod");
const userValidationSchema=zod.object({
    username:zod.string(),
    email:zod.string().email(),
    password:zod.string().min(6)
});

module.exports=userValidationSchema;