
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.beforeSave("expenses", function(request, response) {
  var amount = request.object.get("amount");
  request.object.set("amount", amount + 1)
  response.success();
});

Parse.Cloud.afterSave("expenses", function(request) {
  var amount = request.object.get("amount");
  var newObj = request.object
  newObj.set("amount", amount + 10)
  newObj.save()
});