import nodemailer from "nodemailer";

export async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SYMCOMP_EMAIL,
      pass: process.env.SYMCOMP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SYMCOMP_EMAIL,
    to: process.env.SEMANA_EMAIL,
    subject: "[Patrocinio]",
    text: `Contato recebido pelo site: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
