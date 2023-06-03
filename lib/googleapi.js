import { google } from 'googleapis'
/**
 * 
 * @param {} sheetId Google Sheet ID
 * @param {} range A GoogleSheet Range expression string
 * @returns An array of arrays of results
 */
const getGoogleSheetRange = async (sheetId, range) => {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range,
    });
    return response.data.values;
}
export default getGoogleSheetRange;