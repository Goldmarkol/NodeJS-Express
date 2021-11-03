const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const homeRoutes = require("./routes/home");
const addRoutes = require("./routes/add");
const coursesRoutes = require("./routes/courses");

const app = express();

//setting handlebars
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine); // register engine
app.set("view engine", "hbs"); // use engine
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoutes);
app.use("/add", addRoutes);
app.use("/courses", coursesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
