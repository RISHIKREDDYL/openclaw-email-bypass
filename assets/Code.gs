function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var token = data.token;
  
  // Set your secret token in Project Settings -> Script Properties
  var scriptToken = PropertiesService.getScriptProperties().getProperty('AUTH_TOKEN');
  
  if (token !== scriptToken) {
    return ContentService.createTextOutput("Unauthorized").setMimeType(ContentService.MimeType.TEXT);
  }
  
  try {
    MailApp.sendEmail({
      to: data.to,
      subject: data.subject,
      body: data.body,
      htmlBody: data.htmlBody || null
    });
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
