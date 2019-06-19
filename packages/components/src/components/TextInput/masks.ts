export const Masks = {
  CanadaPostalCode: [/[A-Z]/i, /\d/, /[A-Z]/i, " ", /\d/, /[A-Z]/i, /\d/],
  DateOfBirth: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
  Phone: [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ],
  USZipCode: [/\d/, /\d/, /\d/, /\d/, /\d/]
};
