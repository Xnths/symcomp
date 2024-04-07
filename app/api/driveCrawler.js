"use server";

import { google } from "googleapis";

export async function getEventSchedule() {
  const glAuth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  const data = await glSheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Infos!A2:J28",
  });

  return { data: data.data.values };
}
