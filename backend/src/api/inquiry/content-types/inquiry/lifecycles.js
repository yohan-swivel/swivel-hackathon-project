module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      // const sentStatus = await sendFeedbackEmail(
      //   result.email,
      //   result.subject,
      //   result.message
      // );
      // if (sentStatus) {
      //   await sendResponseEmail(result.email);
      // }
    } catch (err) {
      console.log(err);
    }
  },
};

const sendFeedbackEmail = async (fromEmail, subject, text) => {
  return await strapi.plugins["email"].services.email.send({
    to: process.env.EMAIL_TO_FROM,
    from: fromEmail,
    subject: subject,
    html: text,
  });
};

const sendResponseEmail = async (toEmail) => {
  return await strapi.plugins["email"].services.email.send({
    to: toEmail,
    from: process.env.EMAIL_TO_FROM,
    subject: "Hackathon Inquiry",
    html: `Thank you for reaching out to us with your inquiry about our hackathon event. We appreciate your interest and enthusiasm!
    We're excited to hear that you're interested in participating in our hackathon. Our team is dedicated to fostering a vibrant and innovative community of hackers, and we're here to assist you in any way we can.`,
  });
};
