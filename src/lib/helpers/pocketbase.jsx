/* eslint-disable no-console */
/* eslint-disable func-names */
import * as Sentry from "@sentry/nextjs";
import PocketBase from "pocketbase";
import HelloEmail from "../../../emails/Test";
import { render } from "@react-email/render";

const PB_URL = process.env.NEXT_PUBLIC_PB_URL;
const PB_COL = process.env.NEXT_PUBLIC_PB_COLLECTION;
const pb = new PocketBase(PB_URL);
const emailUrl = pb.buildUrl("/email");

function sendEmail(applicantEmail, applicantName) {
  fetch(emailUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      html: render(<HelloEmail name={applicantName} />, {
        pretty: true,
      }),
      text: render(<HelloEmail name={applicantName} />, {
        plainText: true,
      }),
      toEmail: applicantEmail,
      name: applicantName,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      Sentry.captureMessage(`Email sent to ${applicantEmail}`);
    })
    .catch((err) => {
      Sentry.captureException(err);
    });
}

pb.afterSend = (res, data) => {
  sendEmail(data.email, data.name);
};

export function submitApplicationEntry(formData) {
  return pb.collection(PB_COL).create(formData);
}
