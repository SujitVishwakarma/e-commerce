const express =require('express');
// const json = require(express.json);
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/order")
const cartRoute = require("./routes/cart")
const stripeRoute =require("./routes/stripe")
const cors = require("cors")




dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection sucessfully connected"))
.catch((err)=>{console.log(err);
});
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);




app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running");
});