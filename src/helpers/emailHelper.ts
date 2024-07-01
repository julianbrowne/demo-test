/**
 * 
 * This would be done on the server side too, added here as a user convenience
 * 
**/

import * as EmailValidator from 'email-validator';

export const validateEmail = (email: string) => { 

  if (!email) { 
    return false;
  }

  const emailParts = email.split("@");

  if (emailParts.length !== 2) {
    return false;
  }

  const account = emailParts[0];
  const address = emailParts[1];

  if (account.length > 64) {
    return false;
  }

  if (address.length > 255) {
    return false;
  }

  const domainParts = address.split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  ) {
    return false;
  }

  return EmailValidator.validate(email);

};
