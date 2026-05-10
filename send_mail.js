const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 587,
  secure: false,
  auth: {
    user: '1561931060@qq.com',
    pass: 'cnwobnqyvsrbgjfa',
  }
})

async function main() {
  const info = await transporter.sendMail({
    from: '1561931060@qq.com',
    // to: 'chanweiyan007@gmail.com',
    to: '1561931060@qq.com',
    subject: 'Test Email',
    // text: 'Hello, this is a test email.'
    html: fs.readFileSync('./test_email_template.html', 'utf-8'),
  });

  console.log('Email sent: ' + JSON.stringify(info));
}

main().catch(console.error);