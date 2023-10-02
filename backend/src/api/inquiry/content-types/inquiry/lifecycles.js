module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {

      await sendResponseEmail(result.email);
      const sentStatus = await sendFeedbackEmail(
        result.name,
        result.email,
        result.phone,
        result.subject,
        result.message
      );

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
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
  text-align: left;
}
</style>

<p>Inquiry was sent by ${name} </p>
   
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>${name}</td>
  </tr>
  <tr>
    <th>Email:</th>
    <td>${replyTo}</td>
  </tr>
  <tr>
    <th>Phone Number:</th>
    <td>${phoneNumber}</td>
  </tr>
  <tr>
    <th>Subject:</th>
    <td>${subject}</td>
  </tr>
  <tr>
    <th>Message:</th>
    <td>${text}</td>
  </tr>
</table>

  <p>
  This is an auto generated email. <b><u>Please do not reply to the message.</u></b> For enquiries, contact out committee at <a href="mailto:hackathoncommittee@swivelgroup.com.au">hackathoncommittee@swivelgroup.com.au</a>
  </p>  
  `
  });
};

const sendResponseEmail = async (toEmail) => {
  return await strapi.plugins["email"].services.email.send({
    to: toEmail,
    from: process.env.EMAIL_FROM,
    subject: "Hackathon Inquiry",
    html: `

    <p>Hi There,</p>

    <p>
      Thank you for reaching out to us through our SwivelHack website. </br>
      We appreciate your interest and are looking forward on how we can serve you best! <br>
      Someone from our team will be in touch with you shortly. <br>
      In the meantime please check out our social media pages to stay up-to-date on our work.
    </p>

    <p>
     Best Regards! <br>
     Swivel Team
    </p>

    <p>
     This is an auto generated email. <b><u>Please do not reply to the message.</u></b> For enquiries, contact out committee at <a href="mailto:hackathoncommittee@swivelgroup.com.au">hackathoncommittee@swivelgroup.com.au</a>
     </p>  
  `,
  });
};

