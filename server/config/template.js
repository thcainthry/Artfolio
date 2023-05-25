exports.resetEmail = (host, resetToken) => {
    const message = {
        subject: 'Reset Password',
        text: 
        `${ 'You are receiving this because you have requested to reset your password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://'
      }${host}/reset-password/${resetToken}\n\n` +
      `If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };
        return message;
    };

exports.confirmResetPasswordEmail = ()=>{

  const message = {
    subject: 'Password Changed',
    text:
      `You are receiving this email because you changed your password. \n\n` +
      `If you did not request this change, please contact us immediately.`
  };

  return message;
};

exports.signupEmail = name =>{
    const message = {
        subject: 'Contact Us',
        text: `Hi ${name.firstName} ${name.lastName}! Thank you for creating an account with us. \n\n`
    };
    return message;
};

exports.contactUsEmail = () => {
    const message = {
        subject: 'Contact Us',
        text: `Thank you for contacting us. We will get back to you as soon as possible. \n\n`
    };
    return message;
};

exports.orderConfirmationEmail = order => {
    const message = {
      subject: `Order Confirmation ${order._id}`,
      text:
        `Hi ${order.user.profile.firstName}! Thank you for your order!. \n\n` +
        `We've received your order and will contact you as soon as your package is shipped. \n\n`
    };
  
    return message;
  };