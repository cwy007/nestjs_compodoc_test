const Imap = require('imap');
const {
  MailParser
} = require('mailparser');
const path = require('path');
const fs = require('fs');

const imap = new Imap({
  user: '1561931060@qq.com',
  password: 'cnwobnqyvsrbgjfa',
  host: 'imap.qq.com',
  port: 993,
  tls: true,
});

imap.once('ready', function () {
  imap.openBox('INBOX', true, function (err, box) {
    imap.search(
      [
        ['SEEN'],
        ['SINCE', new Date('2026-01-01 10:00:00').toLocaleString()]
      ],
      function (err, results) {
        if (err) throw err;
        handleResults(results);
      },
    );
  });
});

imap.connect();

function handleResults(results) {
  console.log('Search results: ', results);
  imap.fetch(results, {
    bodies: ''
  }).on('message', function (msg) {
    const mailParser = new MailParser();

    msg.on('body', function (stream) {
      const info = {};
      stream.pipe(mailParser);


      mailParser.on('headers', (headers) => {
        // console.log('Email headers: ', headers);
        info.theme = headers.get('subject');
        info.from = headers.get('from').value[0].address;
        info.mailName = headers.get('from').value[0].name;
        info.to = headers.get('to').value[0].address;
        info.datetime = headers.get('date').toLocaleString();
      });

      mailParser.on('data', (data) => {
        if (data.type === 'text') {
          info.html = data.html;
          info.text = data.text;
          console.log('info: ', info);

          const filePath = path.join(__dirname, 'emails', `${info.theme}.html`);
          fs.writeFileSync(filePath, info.html || info.text, 'utf-8');

        } else if (data.type === 'attachment') {
          console.log('Email attachment: ', data.filename);
          const filePath = path.join(__dirname, 'files', data.filename);
          const ws = fs.createWriteStream(filePath);
          data.content.pipe(ws);
        }
      });
    })

  });
}