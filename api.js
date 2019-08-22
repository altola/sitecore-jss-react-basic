const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const teamMembers = require("./api/team-members.json");
const invoiceSummary = require("./api/invoice-summary.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const appRouter = function(app) {
  app.get("/api/ge/team-members", function(req, res) {
    res.json(teamMembers);
  });
  app.get("/api/ge/invoice-summary", function(req, res) {
    res.json(invoiceSummary);
  });
};

appRouter(app);

const server = app.listen(process.env.PROXY_PORT || 4000, function() {
  console.log("app running on port.", server.address().port);
});
