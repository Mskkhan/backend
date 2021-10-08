const express = require("express");
const app = express();
const env = require("dotenv");
const path = require("path");


const mongoose = require('mongoose');
const cors = require('cors');
//routes
const authRoute = require('./routes/auth');
const adminRoute = require('./routes/Admin/auth')


const CategoryRoute = require('./routes/category');
const productRoute = require('./routes/products');


const cartRoute = require('./routes/cart');
const initialRoute=require('./routes/Admin/initialData');

const pageRoutes = require("./routes/admin/page");
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const adminOrderRoute = require("./routes/admin/order.admin");

//environment variable or you can say constant

env.config();

// mogoose connection url
//// mongodb+srv://root:<password>@cluster0.pjtsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.Mongo_db_user}:${process.env.Mongo_db_password}@cluster0.pjtsc.mongodb.net/${process.env.Mongo_db_Database}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database is connected')
});

// connect one http to another http
app.use(cors());

// Api
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use('/api', authRoute);
app.use('/api', adminRoute);
app.use('/api', CategoryRoute);
app.use('/api', productRoute);
app.use('/api', cartRoute);
app.use('/api',initialRoute);
app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);


// listen at the port which are given in .env
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});