/* eslint-disable no-console */
/* eslint-disable func-names */
import * as Sentry from "@sentry/nextjs";

const APIKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const Airtable = require("airtable");

const base = new Airtable({ apiKey: APIKey }).base("appMvf2IueEFXJUaO");

export function submitApplicationEntry(formData) {
  return new Promise((resolve, reject) => {
    base("applicants").create(
      {
        full_name: formData.name,
        email: formData.email,
        pronouns: formData.pronouns,
        website: formData.website,
        linkedin: formData.linkedin,
        meetup: formData.meetup,
        discord: formData.discord,
        github: formData.github,
        twitter: formData.twitter,
        mastodon: formData.mastodon,
        instagram: formData.instagram,
        social_other: formData.social_other,
        sector: formData.sector,
        location: formData.location,
        join_reason: formData.join_reason,
      },
      (err, res) => {
        if (err) {
          Sentry.captureException(err);
          reject(err);
        }
        resolve(res);
      }
    );
  });
}
