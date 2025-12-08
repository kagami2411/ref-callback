export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  console.log("Webhook Received:", req.body);

  return res.status(200).json({ message: "OK" });
}
