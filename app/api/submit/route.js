import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, phone, address, facebook, message } = body;

        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        const currentTime = currentDate()

        const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets",
                "https://www.googleapis.com/auth/drive",
            ],
        });

        const sheets = google.sheets({ version: "v4", auth });
        const spreadsheetId = "1KsmSYzS90eeFG1TYF0VvsgQ5EoP-StqhbTcJUvD6WQs";

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Review!A2:F2",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[name, phone, address, message, currentTime, facebook]],
            },
        });

        return NextResponse.json(
            { message: "Data submitted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error handling POST:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

function currentDate() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
}