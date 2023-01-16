// import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextApiRequest, NextApiResponse } from "next";

// const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET + "";
const SANITY_TOKEN = process.env.SANITY_TOKEN + "";

const isValidRequest = (req: NextApiRequest) => {
  // NOT WORKING FOR SOME REASON
  // const signature = req.headers[SIGNATURE_HEADER_NAME] + "";
  // return  isValidSignature(
  //   JSON.stringify(req.body),
  //   signature,
  //   SANITY_WEBHOOK_SECRET
  // );

  // ALTERNATIVE FOR NOW
  const token = req.headers["x-sanity-token"] + "";
  return token === SANITY_TOKEN;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isValid = isValidRequest(req);

  console.log(`===== Is the webhook request valid? ${isValid}`);

  // Validate signature
  if (!isValid) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  try {
    const pathToRevalidate =
      req.body._type === "home" ? "/" : "/" + req.body._type;
    console.log(`===== Revalidating: ${pathToRevalidate}`);

    await res.revalidate(pathToRevalidate);

    return res.json({ revalidated: true });
  } catch (err) {
    // Could not revalidate. The stale page will continue to be shown until
    // this issue is fixed.
    return res.status(500).send("Error while revalidating");
  }
}
