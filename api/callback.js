export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("LINE Webhook Received!");

    res.status(200).send("OK"); // ★これが超重要★

  } else {
    res.status(405).send("Method Not Allowed");
  }
}
