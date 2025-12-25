import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export async function GET() {
  try {
    console.log('Testing Google Sheets connection...');
    
    // Check environment variables
    const envVars = {
      GOOGLE_PROJECT_ID: !!process.env.GOOGLE_PROJECT_ID,
      GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY,
      GOOGLE_CLIENT_EMAIL: !!process.env.GOOGLE_CLIENT_EMAIL,
      GOOGLE_PRIVATE_KEY_ID: !!process.env.GOOGLE_PRIVATE_KEY_ID,
      GOOGLE_CLIENT_ID: !!process.env.GOOGLE_CLIENT_ID
    };
    
    console.log('Environment variables status:', envVars);
    
    if (!process.env.GOOGLE_PROJECT_ID || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CLIENT_EMAIL) {
      return NextResponse.json({
        success: false,
        error: 'Missing required environment variables',
        envVars
      }, { status: 400 });
    }
    
    // Clean private key
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    if (privateKey.includes('\\n')) {
      privateKey = privateKey.replace(/\\n/g, '\n');
    }
    
    const credentials = {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL)}`
    };

    console.log('Creating auth client...');
    const auth = new GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1Lb4L9EpAv5TWaKs8uwRk67fuxxMsr8RHFA9R6afq8H8';

    console.log('Testing spreadsheet access...');
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    return NextResponse.json({
      success: true,
      message: 'Google Sheets connection successful',
      spreadsheet: {
        title: response.data.properties.title,
        sheetCount: response.data.sheets.length,
        sheets: response.data.sheets.map(sheet => sheet.properties.title)
      },
      envVars
    });

  } catch (error) {
    console.error('Google Sheets test error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code,
      status: error.status
    }, { status: 500 });
  }
}