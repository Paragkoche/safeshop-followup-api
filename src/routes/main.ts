import express from "express";
const routes = express.Router();
import { datass } from "./data/data";
import { v4 } from "uuid";
import env from "dotenv";
env.config();
routes.post("/ph/", (req, res) => {
  const data = req.body;

  if (data.phoneNumber.length === 10) {
    if (
      "+91" + data.phoneNumber === process.env.mynumber ||
      "+91" + data.phoneNumber === process.env.mashi ||
      "+91" + data.phoneNumber === process.env.momnumber
    ) {
      res.send({ message: "ok" });
    } else {
      res.send({ error: "on" });
    }
  } else {
    res.send({ error: "on" });
  }
});
routes.post("/what", (req, res) => {
  const data = req.body;

  const id = v4().toString();
  console.log(id);
  const dat = new datass({
    _id: id,
    name: data.FistName + " " + data.LastName,
    Rft: data.RFT,
    phone: data.number,
    city: data.city,
    date: data.date,
    result: data.result,
    ftf: data.ftf,
  });
  dat.save((e: any, r: any) => {
    if (e) throw e;
    else {
      const tw = require("twilio")(
        process.env.accountSid,
        process.env.authToken
      );
      tw.messages
        .create({
          body: `*ð¥ð¥EWL SYSTEM* *KE ð¹ð¹ à¤¯à¥à¤¦à¥à¤§à¤¾ à¤¹à¥ à¤¹à¤® à¤à¤à¤§à¥  à¤à¤¯à¥ à¤¤à¥à¤«à¤¾à¤¨  à¤à¤¯à¥  à¤¹à¤® à¤à¤ªà¤¨à¥ à¤²à¤à¥à¤·à¥à¤¯ à¤à¥ à¤à¤° à¤¬à¥à¤¤à¥ à¤à¤¾à¤*ðððð¼ââðð¼ââðð»ââï¸ðð»ââï¸
        *ABHI ABHI  ${data.city}  SE*\n
        *Name* :- *${data.FistName}${data.LastName}*\n
        *Phone No* :- *${data.number}*
        *Date* :- *${data.date}*\n
        *Ref* :- *${data.RFT}*\n
        *1.2.1* :- *${data.SIP}*\n
        *FTF*: *${data.ftf}*\n
        *TEAM: FIREð¥ð¥*
        *TOPAZ  LEADER:- BHUSHAN CHOTAI SIR* \n*EMERALD LEADER:- RAM KARDE SIR*\n*ðDIAMOND  LEADER:-  BHUPENDRA CHOUDHARY SIR*\n*Thank You Sir* ðð»
        ð¥ð¥ð¥ð¥ð¥ð¥ð¥ð¥ð¥`,
          from: "whatsapp:+14155238886",
          to: "whatsapp:" + process.env.momnumber,
        })
        .then(() => {
          tw.messages.create({
            body: `*ð¥ð¥EWL SYSTEM* *KE ð¹ð¹ à¤¯à¥à¤¦à¥à¤§à¤¾ à¤¹à¥ à¤¹à¤® à¤à¤à¤§à¥  à¤à¤¯à¥ à¤¤à¥à¤«à¤¾à¤¨  à¤à¤¯à¥  à¤¹à¤® à¤à¤ªà¤¨à¥ à¤²à¤à¥à¤·à¥à¤¯ à¤à¥ à¤à¤° à¤¬à¥à¤¤à¥ à¤à¤¾à¤*ðððð¼ââðð¼ââðð»ââï¸ðð»ââï¸
        *ABHI ABHI  ${data.city}  SE*\n
        *Name* :- *${data.FistName}${data.LastName}*\n
        *Phone No* :- *${data.number}*
        *Date* :- *${data.date}*\n
        *Ref* :- *${data.RFT}*\n
        *1.2.1* :- *${data.SIP}*\n
        *FTF*: *${data.ftf}*\n
        *TEAM: FIREð¥ð¥*
        *TOPAZ  LEADER:- BHUSHAN CHOTAI SIR* \n*EMERALD LEADER:- RAM KARDE SIR*\n*ðDIAMOND  LEADER:-  BHUPENDRA CHOUDHARY SIR*\n*Thank You Sir* ðð»
        ð¥ð¥ð¥ð¥ð¥ð¥ð¥ð¥ð¥`,
            from: "whatsapp:+14155238886",
            to: "whatsapp:" + process.env.mashi,
          });
        })
        .then(() => {
          tw.messages.create({
            body: `*ð¥ð¥EWL SYSTEM* *KE ð¹ð¹ à¤¯à¥à¤¦à¥à¤§à¤¾ à¤¹à¥ à¤¹à¤® à¤à¤à¤§à¥  à¤à¤¯à¥ à¤¤à¥à¤«à¤¾à¤¨  à¤à¤¯à¥  à¤¹à¤® à¤à¤ªà¤¨à¥ à¤²à¤à¥à¤·à¥à¤¯ à¤à¥ à¤à¤° à¤¬à¥à¤¤à¥ à¤à¤¾à¤*ðððð¼ââðð¼ââðð»ââï¸ðð»ââï¸
        *ABHI ABHI  ${data.city}  SE*\n
        *Name* :- *${data.FistName}${data.LastName}*\n
        *Phone No* :- *${data.number}*
        *Date* :- *${data.date}*\n
        *Ref* :- *${data.RFT}*\n
        *1.2.1* :- *${data.SIP}*\n
        *FTF*: *${data.ftf}*\n
        *TEAM: FIREð¥ð¥*
        *TOPAZ  LEADER:- BHUSHAN CHOTAI SIR* \n*EMERALD LEADER:- RAM KARDE SIR*\n*ðDIAMOND  LEADER:-  BHUPENDRA CHOUDHARY SIR*\n*Thank You Sir* ðð»
        ð¥ð¥ð¥ð¥ð¥ð¥ð¥ð¥ð¥`,
            from: "whatsapp:+14155238886",
            to: "whatsapp:" + process.env.mynumber,
          });
        })
        .done(() => {
          res.send({ message: "ok" });
        });
    }
  });
});
export default routes;
