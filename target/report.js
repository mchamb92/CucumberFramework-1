$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 2,
  "name": "User is able to do a Search on Google",
  "description": "",
  "id": "user-is-able-to-do-a-search-on-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@101"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Positive Test Case",
  "description": "",
  "id": "user-is-able-to-do-a-search-on-google;positive-test-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open browser to google homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter a search word",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click search link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User on a new page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleTest.openBrowser()"
});
formatter.result({
  "duration": 3516940932,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.entersSearchWord()"
});
formatter.result({
  "duration": 127776881,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.clickSearchButton()"
});
formatter.result({
  "duration": 2850342718,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.clickSearchLink()"
});
formatter.result({
  "duration": 1829810496,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.newPageCheck()"
});
formatter.result({
  "duration": 16187300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.closeBrowser()"
});
formatter.result({
  "duration": 125538017,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Negative Test Case",
  "description": "",
  "id": "user-is-able-to-do-a-search-on-google;negative-test-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User open browser to google homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enter a search word",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click search link",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User on a new page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTest.openBrowser()"
});
formatter.result({
  "duration": 2536121964,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.entersSearchWord()"
});
formatter.result({
  "duration": 137857945,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.clickSearchButton()"
});
formatter.result({
  "duration": 2272854111,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.clickSearchLink()"
});
formatter.result({
  "duration": 1835456117,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.newPageCheck()"
});
formatter.result({
  "duration": 24357829,
  "status": "passed"
});
formatter.match({
  "location": "GoogleTest.closeBrowser()"
});
formatter.result({
  "duration": 128775621,
  "status": "passed"
});
});