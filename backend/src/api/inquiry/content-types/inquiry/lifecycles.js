module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      const sentStatus = await sendFeedbackEmail(
        result.email,
        result.subject,
        result.message
      );
      if (sentStatus) {
        await sendResponseEmail(result.email);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const sendFeedbackEmail = async (replyTo, subject, text) => {
  return await strapi.plugins["email"].services.email.send({
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    replyTo: replyTo,
    subject: subject,
    html: `Inquiry was sent by ${replyTo} ${text}`,
  });
};

const sendResponseEmail = async (toEmail) => {
  return await strapi.plugins["email"].services.email.send({
    to: toEmail,
    from: process.env.EMAIL_TO_FROM,
    subject: "Hackathon Inquiry",
    html: `
    Hi there,

    Thank you for reaching out to us through our SwivelHack website. We appreciate your interest and are looking forward on how we can serve you best! 
    Someone from our team will be in touch with you shortly. In the meantime please check out our social media pages to stay up-to-date on our work.
    
  `,
  });
};
