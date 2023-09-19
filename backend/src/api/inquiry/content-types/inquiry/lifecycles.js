module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      const sentStatus = await sendFeedbackEmail(
        result.name,
        result.email,
        result.phone,
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


const sendFeedbackEmail = async (name, replyTo, phoneNumber, subject, text) => {
  return await strapi.plugins["email"].services.email.send({
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    replyTo: replyTo,
    subject: subject,
    html: ` 
    <p>Inquiry was sent by ${email} </p>
    <table style="width:100%">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Subject</th>
        <th>Message</th>
      </tr>
      <tr>
        <td>${name}</td>
        <td>${replyTo}</td>
        <td>${phoneNumber}</td>
        <td>${subject}</td>
        <td>${text}</td>
      </tr>
    </table>
    `
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

