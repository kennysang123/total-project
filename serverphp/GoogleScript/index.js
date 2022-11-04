function doGet(e) {
  let nameOfSheet = e.parameter.n;
  let result = readRows(nameOfSheet);
  //return ContentService.createTextOutput('Hello, world!3');
  return ContentService.createTextOutput(result);
}

function readRows(nameOfSheet1) {
  let url =
    "https://docs.google.com/spreadsheets/d/1r1hLFNceWWY5nb5FAzIhzGrO78tv3ihqQ4NrsYB3lxo/edit#gid=936531352";
  let spreadsheet = SpreadsheetApp.openByUrl(url);
  /* doc ten tu url */
  let nameOfSheet = nameOfSheet1;
  let numOfSheet = 0;
  let s1 = spreadsheet.getSheets();
  if (s1.length > 1) {
    for (let i = 0; i < s1.length; i++) {
      let tempName = s1[i].getName();
      Logger.log(typeof tempName);
      if (tempName == nameOfSheet) {
        Logger.log(tempName);
        numOfSheet = i;
        Logger.log(numOfSheet);
      }
    }
  }
  /* end doc ten tu url */
  //let valCurrent = spreadsheet.getSheets()[0].appendRow(["a man", "a plan", "panama"]);
  let rows = spreadsheet.getSheets()[numOfSheet].getDataRange().getValues();
  let soxoa = 0;
  rows.splice(soxoa, 1);
  rows.splice(soxoa, 1);
  rows.splice(soxoa, 1);
  rows.splice(soxoa, 1);
  rows.splice(soxoa, 1);
  rows.splice(soxoa, 1);

  let numOfrow = rows.length;
  let jsonString = JSON.stringify(rows);
  //Logger.log(jsonString);
  return jsonString;
  return numOfrow + jsonString;
}
/* 
https://script.google.com/macros/s/AKfycbyCoMfaGHmAJ5S-E2geP8l-79OxQAqKfdfjXqlgNVH9/dev

https://script.google.com/macros/s/AKfycbyx94bLgARi0DKJ1k6gSdMBlGjMpnbM_gcELZmFkook2SIqOaJ3ph8VMnUhs35GyQcUMQ/exec
 */
