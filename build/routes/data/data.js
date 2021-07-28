"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.datass = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var datas = new mongoose_1["default"].Schema({
    _id: String,
    name: String,
    Rft: String,
    phone: Number,
    city: String,
    date: String,
    result: String,
    ftf: String
}, { _id: false, timestamps: true });
exports.datass = mongoose_1["default"].model("datas", datas);
