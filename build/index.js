"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var main_1 = __importDefault(require("./routes/main"));
dotenv_1["default"].config();
var app = express_1["default"]();
app.use(cors_1["default"]());
app.use(express_1["default"].json({ limit: "1mb" }));
app.use("/api/v1", main_1["default"]);
var url = process.env.db;
mongoose_1["default"].set("useNewUrlParser", true);
mongoose_1["default"].set("useFindAndModify", false);
mongoose_1["default"].set("useCreateIndex", true);
mongoose_1["default"]
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
    app.listen(5000, function () {
        console.log("http://localhost:5000");
    });
});
