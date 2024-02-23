// import { google } from "googleapis"
// import gCredentials from "./g-credentials"

export async function getEventSchedule (req, res) {
    // try {
    //     const client = new google.auth.JWT(
    //         gCredentials.client_mail, null, gCredentials.private_key, ["https://www.googleapis.com/auth/spreadsheets"]
    //     );
        
    //     client.authorize(async function (err, tokens) {
    //         if (err) {
    //             return res.status(400).send(JSON.stringify({error: true}));
    //         }

    //         const gsapi = google.sheets({version: "v4", auth: client});
    //         const opt = {
    //             spreadsheetId: process.env.SPREADSHEET_ID,
    //             range: "Data!A2:A4"
    //         }

    //         let data = await gsapi.spreadsheets.values.get(opt);
    //         return res.status(200).send(JSON.stringify({error: false, data: data.values}));
    //     })
    // } catch (e) {
    //     return res.status(200).send(JSON.stringify({error: true, message: e.message}));
    // }
}