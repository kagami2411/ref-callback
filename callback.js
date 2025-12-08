// ===== LINE Messaging API Callback =====
export default function handler(req, res) {
  console.log("📩 Webhook received:", req.body);

  // LINEが送ってきた内容をそのまま返す（暫定）
  res.status(200).send("OK");
}
