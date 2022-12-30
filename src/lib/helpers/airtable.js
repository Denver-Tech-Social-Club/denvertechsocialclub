/* eslint-disable no-console */
/* eslint-disable func-names */
const Airtable = require("airtable");

const base = new Airtable({ apiKey: "keyklxTGTgFw2C26Y" }).base(
  "appMvf2IueEFXJUaO"
);

export function submitApplicationEntry(formData) {
  base("People").create(
    {
      Name: formData.name,
      Email: formData.email,
      "When it comes to the Tech Industry, I most closely align with:":
        formData.sector,
      "What area are you located in?": formData.area,
      "I agree to engage in a kind, considerate and respectful manner with other members of this community.":
        formData.agreement,
      "Why do you want to join us?": formData.reason,
      "Do you have any social links we can check out?": formData.social,
      "Discord Username": formData.discord,
      "Invited to Discord": false,
    },
    function (err) {
      if (err) {
        console.error(err);
      }
    }
  );
}
