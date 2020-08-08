type contactDataCheck = Array<{
  label: string,
  labelText: string,
  inputType: string,

}>;

export const contactData: contactDataCheck = [
  {
    label: "name",
    labelText: "Your name:",
    inputType: "text",
  },
  {
    label: "email",
    labelText: "Your email address:",
    inputType: "email",
  },
  {
    label: "message",
    labelText: "Message:",
    inputType: "textarea",
  },
];
