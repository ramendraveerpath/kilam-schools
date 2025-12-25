// Google Apps Script Code
// 1. Go to script.google.com
// 2. Create new project
// 3. Paste this code
// 4. Deploy as web app with "Anyone" access

function doPost(e) {
  try {
    // Your Google Sheet ID
    const SHEET_ID = '1s2NMXgPiabQOceDazuCkVsJ3CPdmtZb_wh1n6gRlMkU';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    const data = JSON.parse(e.postData.contents);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Student Name', 'Mobile', 'Current Class', 'Course']);
    }
    
    // Add form data
    sheet.appendRow([
      data.timestamp,
      data.studentName,
      data.mobile,
      data.currentClass,
      data.course
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Steps to deploy:
// 1. Save the script
// 2. Click "Deploy" > "New deployment"
// 3. Choose "Web app" as type
// 4. Set execute as "Me"
// 5. Set access to "Anyone"
// 6. Copy the web app URL
// 7. Add it to your .env file as GOOGLE_SHEETS_URL