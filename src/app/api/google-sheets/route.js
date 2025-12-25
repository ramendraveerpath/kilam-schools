import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const formData = await request.json();
    console.log('Form data received:', formData);
    
    // Check if all required env vars are present
    const requiredEnvVars = {
      GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
      GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
      GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL
    };
    
    const missingVars = Object.entries(requiredEnvVars)
      .filter(([key, value]) => !value)
      .map(([key]) => key);
    
    if (missingVars.length > 0) {
      console.error('Missing environment variables:', missingVars);
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
    
    const credentials = {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL)}`
    };

    console.log('Authenticating with Google...', {
      project_id: credentials.project_id,
      client_email: credentials.client_email
    });
    
    const auth = new GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1Lb4L9EpAv5TWaKs8uwRk67fuxxMsr8RHFA9R6afq8H8';

    const values = [[
      new Date().toLocaleString(),
      formData.studentName || '',
      formData.mobile || '',
      formData.currentClass || '',
      formData.course || ''
    ]];

    console.log('Appending to sheet:', values);
    
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E',
      valueInputOption: 'RAW',
      resource: { values }
    });

    console.log('Successfully saved to Google Sheets:', result.data);
    return NextResponse.json({
      success: true,
      message: 'Data saved to Google Sheets',
      leadId: `SHEET_${Date.now()}`
    });

  } catch (error) {
    console.error('Google Sheets API Error:', {
      message: error.message,
      code: error.code,
      status: error.status,
      details: error.details
    });
    
    let errorMessage = 'Failed to save data';
    
    if (error.message.includes('credentials')) {
      errorMessage = 'Authentication failed - check Google API credentials';
    } else if (error.message.includes('PERMISSION_DENIED')) {
      errorMessage = 'Permission denied - check spreadsheet sharing settings';
    } else if (error.message.includes('NOT_FOUND')) {
      errorMessage = 'Spreadsheet not found - check spreadsheet ID';
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      errorMessage = 'Network error - check internet connection';
    }
    
    return NextResponse.json(
      { success: false, error: errorMessage, details: error.message },
      { status: 500 }
    );
  }
}