export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const response = await fetch(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.SENDGRID_SECRET}`,
          },
          body: JSON.stringify({
            contacts: [{ email: `${req.body.mail}` }],
            list_ids: [process.env.SENDGRID_MAILING_ID],
          }),
        }
      );

      if (response.ok) {
        res.status(200).send({
          message:
            "Your email has been successfully added to the mailing list. Welcome 👋",
        });
      } else {
        res.status(500).send({
          message:
            "Oops, there was a problem with your subscription, please try again or contact us",
        });
      }
    } catch (error) {
      res.status(500).send({
        message:
          "Oops, there was a problem with your subscription, please try again or contact us",
      });
    }
  }
}
