// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/microsoft.network/loadBalancers/xplattestlb?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"52f4f110-b95d-44ed-9172-27cd0db7ee6c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag\": \"val\",\r\n    \"tag2\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '387',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"52f4f110-b95d-44ed-9172-27cd0db7ee6c"',
  'x-ms-request-id': 'f2b62e17-4c59-437b-928d-cdf359b3952a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31915',
  'x-ms-correlation-request-id': '35aa95b8-5b5e-46c3-91c2-bc10684aa27e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T183845Z:35aa95b8-5b5e-46c3-91c2-bc10684aa27e',
  date: 'Fri, 17 Apr 2015 18:38:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/microsoft.network/loadBalancers/xplattestlb?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"52f4f110-b95d-44ed-9172-27cd0db7ee6c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"tag\": \"val\",\r\n    \"tag2\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '387',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"52f4f110-b95d-44ed-9172-27cd0db7ee6c"',
  'x-ms-request-id': 'f2b62e17-4c59-437b-928d-cdf359b3952a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31915',
  'x-ms-correlation-request-id': '35aa95b8-5b5e-46c3-91c2-bc10684aa27e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T183845Z:35aa95b8-5b5e-46c3-91c2-bc10684aa27e',
  date: 'Fri, 17 Apr 2015 18:38:45 GMT',
  connection: 'close' });
 return result; }]];