const express = require("express");
const loginRouter = require("./routes/login");


const app = express();
app.use(express.json());

const { default : mongoose} = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3500;

mongoose.connect("mongodb+srv://sujal:sujal123@cluster0.uvrc2et.mongodb.net/?retryWrites=true&w=majority", {useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection
.once("open", () => console.log("Connected to database..."))
.on("error", (error) => console.log("Error connecting to database...", error))

app.use(cors({origin: '*'}));

app.get("/", (req, res) => res.json("Server is running..."))

app.use("/api", loginRouter);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))