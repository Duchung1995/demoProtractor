const request = require('request');
const fs = require('fs');

// Example Request
// curl -H "Content-Type: application/json" -X POST -u admin:admin --data @cucumber_output.json http://yourserver/rest/raven/1.0/import/execution/cucumber
function importReportToXRay() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  let jsonContent;
  const fileContent = fs.readFileSync('reports/results.json');
  try {
    jsonContent = JSON.parse(fileContent);
  } catch(err) {
    throw(err);
  }
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      uri: 'https://jira.zamo.io/rest/raven/1.0/import/execution/cucumber',
      auth: {
        'user': 'phi.nguyen',
        'pass': 'p@180711'
      },
      headers: {
        "content-type": "application/json"
      },
      json: jsonContent
    }, (err, response, body) => {
      if (err) {
        console.error('Import failed:', err);
        reject(err);
      }
      console.log('Import successful!  Server responded with:', body);
      console.log('Status code:', response.statusCode);
      resolve();
    });
  });
};

module.exports = {
  importReportToXRay
};