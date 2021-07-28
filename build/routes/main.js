"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes = express_1["default"].Router();
var data_1 = require("./data/data");
var uuid_1 = require("uuid");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
routes.post("/ph/", function (req, res) {
    var data = req.body;
    if (data.phoneNumber.length === 10) {
        if ("+91" + data.phoneNumber === process.env.mynumber ||
            "+91" + data.phoneNumber === process.env.mashi ||
            "+91" + data.phoneNumber === process.env.momnumber) {
            res.send({ message: "ok" });
        }
        else {
            res.send({ error: "on" });
        }
    }
    else {
        res.send({ error: "on" });
    }
});
routes.post("/what", function (req, res) {
    var data = req.body;
    var id = uuid_1.v4().toString();
    console.log(id);
    var dat = new data_1.datass({
        _id: id,
        name: data.FistName + " " + data.LastName,
        Rft: data.RFT,
        phone: data.number,
        city: data.city,
        date: data.date,
        result: data.result,
        ftf: data.ftf
    });
    dat.save(function (e, r) {
        if (e)
            throw e;
        else {
            var tw_1 = require("twilio")(process.env.accountSid, process.env.authToken);
            tw_1.messages
                .create({
                body: "*\uD83D\uDD25\uD83D\uDD25EWL SYSTEM* *KE \uD83C\uDFF9\uD83C\uDFF9 \u092F\u094B\u0926\u094D\u0927\u093E \u0939\u0948 \u0939\u092E \u0906\u0902\u0927\u0940  \u0906\u092F\u0947 \u0924\u0942\u092B\u093E\u0928  \u0906\u092F\u0947  \u0939\u092E \u0905\u092A\u0928\u0947 \u0932\u0915\u094D\u0937\u094D\u092F \u0915\u0947 \u0914\u0930 \u092C\u095D\u0924\u0947 \u091C\u093E\u090F*\uD83D\uDC8E\uD83D\uDC8E\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F\n        *ABHI ABHI  " + data.city + "  SE*\n\n        *Name* :- *" + data.FistName + data.LastName + "*\n\n        *Phone No* :- *" + data.number + "*\n        *Date* :- *" + data.date + "*\n\n        *Ref* :- *" + data.RFT + "*\n\n        *1.2.1* :- *" + data.SIP + "*\n\n        *FTF*: *" + data.ftf + "*\n\n        *TEAM: FIRE\uD83D\uDD25\uD83D\uDD25*\n        *TOPAZ  LEADER:- BHUSHAN CHOTAI SIR* \n*EMERALD LEADER:- RAM KARDE SIR*\n*\uD83D\uDC8EDIAMOND  LEADER:-  BHUPENDRA CHOUDHARY SIR*\n*Thank You Sir* \uD83D\uDE4F\uD83C\uDFFB\n        \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25",
                from: "whatsapp:+14155238886",
                to: "whatsapp:" + process.env.momnumber
            })
                .then(function () {
                tw_1.messages.create({
                    body: "*\uD83D\uDD25\uD83D\uDD25EWL SYSTEM* *KE \uD83C\uDFF9\uD83C\uDFF9 \u092F\u094B\u0926\u094D\u0927\u093E \u0939\u0948 \u0939\u092E \u0906\u0902\u0927\u0940  \u0906\u092F\u0947 \u0924\u0942\u092B\u093E\u0928  \u0906\u092F\u0947  \u0939\u092E \u0905\u092A\u0928\u0947 \u0932\u0915\u094D\u0937\u094D\u092F \u0915\u0947 \u0914\u0930 \u092C\u095D\u0924\u0947 \u091C\u093E\u090F*\uD83D\uDC8E\uD83D\uDC8E\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F\n        *ABHI ABHI  " + data.city + "  SE*\n\n        *Name* :- *" + data.FistName + data.LastName + "*\n\n        *Phone No* :- *" + data.number + "*\n        *Date* :- *" + data.date + "*\n\n        *Ref* :- *" + data.RFT + "*\n\n        *1.2.1* :- *" + data.SIP + "*\n\n        *FTF*: *" + data.ftf + "*\n\n        *TEAM: FIRE\uD83D\uDD25\uD83D\uDD25*\n        *TOPAZ  LEADER:- BHUSHAN CHOTAI SIR* \n*EMERALD LEADER:- RAM KARDE SIR*\n*\uD83D\uDC8EDIAMOND  LEADER:-  BHUPENDRA CHOUDHARY SIR*\n*Thank You Sir* \uD83D\uDE4F\uD83C\uDFFB\n        \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25",
                    from: "whatsapp:+14155238886",
                    to: "whatsapp:" + process.env.mashi
                });
            })
                .then(function () {
                tw_1.messages.create({
                    body: "*\uD83D\uDD25\uD83D\uDD25EWL SYSTEM* *KE \uD83C\uDFF9\uD83C\uDFF9 \u092F\u094B\u0926\u094D\u0927\u093E \u0939\u0948 \u0939\u092E \u0906\u0902\u0927\u0940  \u0906\u092F\u0947 \u0924\u0942\u092B\u093E\u0928  \u0906\u092F\u0947  \u0939\u092E \u0905\u092A\u0928\u0947 \u0932\u0915\u094D\u0937\u094D\u092F \u0915\u0947 \u0914\u0930 \u092C\u095D\u0924\u0947 \u091C\u093E\u090F*\uD83D\uDC8E\uD83D\uDC8E\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F\n        *ABHI ABHI  " + data.city + "  SE*\n\n        *Name* :- *" + data.FistName + data.LastName + "*\n\n        *Phone No* :- *" + data.number + "*\n        *Date* :- *" + data.date + "*\n\n        *Ref* :- *" + data.RFT + "*\n\n        *1.2.1* :- *" + data.SIP + "*\n\n        *FTF*: *" + data.ftf + "*\n\n        *TEAM: FIRE\uD83D\uDD25\uD83D\uDD25*\n        *TOPAZ  LEADER:- BHUSHAN CHOTAI SIR* \n*EMERALD LEADER:- RAM KARDE SIR*\n*\uD83D\uDC8EDIAMOND  LEADER:-  BHUPENDRA CHOUDHARY SIR*\n*Thank You Sir* \uD83D\uDE4F\uD83C\uDFFB\n        \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25",
                    from: "whatsapp:+14155238886",
                    to: "whatsapp:" + process.env.mynumber
                });
            })
                .done(function () {
                res.send({ message: "ok" });
            });
        }
    });
});
exports["default"] = routes;
