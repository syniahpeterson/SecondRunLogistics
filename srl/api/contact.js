import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { user_name, user_email, message } = req.body;

    if (!user_name || !user_email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(user_email)) {
      return res.status(400).json({
        error: "Please provide a valid email address.",
      });
    }

    const { error } = await resend.emails.send({
      from: "Second Run Logistics <noreply@secondrunlogistics.com>",
      to: ["qasim@secondrunlogistics.com"],
      replyTo: user_email,
      subject: `New contact form submission from ${user_name}`,
      text: `Hello Qasim,

You have a new message from your website contact form:

Name: ${user_name}
Email: ${user_email}

Message:
${message}`,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        error: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
}
