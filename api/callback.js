const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET
};

const client = new line.Client(config);

module.exports = async (req, res) => {
  // LINE からのイベントを処理
  const events = req.body.events;

  await Promise.all(events.map(async (event) => {
    if (event.type === 'message') {
      await client.replyMessage(event.replyToken, {
        type: 'text',
        text: 'プロフィール登録ありがとう！'
      });
    }
  }));

  res.status(200).send('ok');
};
