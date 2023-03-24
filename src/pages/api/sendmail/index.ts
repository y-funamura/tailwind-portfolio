import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const SendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  // const transporter = nodemailer.createTransport({
  //   host: "sv13136.xserver.jp",
  //   port: 993,
  //   auth: {
  //     user: process.env.XSERVERUSER,
  //     pass: process.env.XSERVERPASSWORD,
  //   },
  // });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // port: 465,
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  //管理人が受け取るメール
  const toHostMailData = {
    from: `${req.body.email}`,
    to: process.env.GMAILUSER,
    subject: `【お問い合わせ】${req.body.name}様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メッセージ】</p>
      <p>${req.body.message}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
    `,
  };

  // console.log(transporter);
  // console.log(toHostMailData);

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) {
      console.log("error:" + err);
      return;
    } else console.log("info:" + info);
  });

  res.send("success");
};
