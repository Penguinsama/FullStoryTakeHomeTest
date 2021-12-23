Installation instructions:
NOTE:
Make sure chrome is installed.

Install nodejs - 14.17.0 (https://nodejs.org/en/)
During setup, select the box to auto install necessary tools.


Install yarn.
On a command prompt type without the quotes
"npm install --global yarn"


Install Cypress.
On a command prompt cd into the extracted project folder.
Type without the quotes
"yarn add cypress --dev"


Install mocha/mocawesome
On a command prompt cd into the extracted project folder.
Type without the quotes
"npm install mocha --save-dev" 

Type without the quotes
"npm install mochawesome --save-dev" 

Type without the quotes
"npm install mochawesome-report-generator --save-dev" 


Run tests, generate a report, video, and screenshots:
On a command prompt cd into the extracted project folder.
Type without the quotes
"yarn cypress run"


To see the tests in action (like the video created above):
NOTE: This will not produce reports, screenshot, nor video.

On a command prompt cd into the extracted project folder.
Type without the quotes
"yarn cypress open"


To change which environment to run against, when running Cypress use the --env arguement.
Example:
cypress run --env configFile=qa