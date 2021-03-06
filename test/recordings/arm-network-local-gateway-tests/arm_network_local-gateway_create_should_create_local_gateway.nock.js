// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-local-gateway?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-local-gateway' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '48a3bea2-776a-4581-be0b-db6de6812f71',
  'x-ms-correlation-request-id': '48a3bea2-776a-4581-be0b-db6de6812f71',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082434Z:48a3bea2-776a-4581-be0b-db6de6812f71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:24:34 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-local-gateway?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-local-gateway' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '48a3bea2-776a-4581-be0b-db6de6812f71',
  'x-ms-correlation-request-id': '48a3bea2-776a-4581-be0b-db6de6812f71',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082434Z:48a3bea2-776a-4581-be0b-db6de6812f71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:24:34 GMT',
  connection: 'close',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-local-gateway?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway\",\"name\":\"xplat-test-local-gateway\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'd2b25745-a085-4844-a083-bbf300223928',
  'x-ms-correlation-request-id': 'd2b25745-a085-4844-a083-bbf300223928',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082437Z:d2b25745-a085-4844-a083-bbf300223928',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:24:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-local-gateway?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway\",\"name\":\"xplat-test-local-gateway\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'd2b25745-a085-4844-a083-bbf300223928',
  'x-ms-correlation-request-id': 'd2b25745-a085-4844-a083-bbf300223928',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082437Z:d2b25745-a085-4844-a083-bbf300223928',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:24:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/test-local-gateway' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '01ad5fa1-a3b1-4ecb-b772-13f998d4ad84',
  'x-ms-correlation-request-id': '01ad5fa1-a3b1-4ecb-b772-13f998d4ad84',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082438Z:01ad5fa1-a3b1-4ecb-b772-13f998d4ad84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:24:38 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/test-local-gateway' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '01ad5fa1-a3b1-4ecb-b772-13f998d4ad84',
  'x-ms-correlation-request-id': '01ad5fa1-a3b1-4ecb-b772-13f998d4ad84',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082438Z:01ad5fa1-a3b1-4ecb-b772-13f998d4ad84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:24:38 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"ce4f2e5e-710a-4a7b-a938-0197d5879d33\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"990b08cc-c0d8-406c-90ab-ddc02d94baa0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '664',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1359850a-b22c-47dc-b563-bc38fdb01aee',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1359850a-b22c-47dc-b563-bc38fdb01aee?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '80bd401c-2865-4268-a040-32f343af6beb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082442Z:80bd401c-2865-4268-a040-32f343af6beb',
  date: 'Wed, 17 Feb 2016 08:24:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"ce4f2e5e-710a-4a7b-a938-0197d5879d33\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"990b08cc-c0d8-406c-90ab-ddc02d94baa0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '664',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1359850a-b22c-47dc-b563-bc38fdb01aee',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1359850a-b22c-47dc-b563-bc38fdb01aee?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '80bd401c-2865-4268-a040-32f343af6beb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082442Z:80bd401c-2865-4268-a040-32f343af6beb',
  date: 'Wed, 17 Feb 2016 08:24:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1359850a-b22c-47dc-b563-bc38fdb01aee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae9e7901-9727-49aa-83f4-7ab6b2fc1e81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '68ae7c64-c6f1-4391-90f3-a49faa3cc1fc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082513Z:68ae7c64-c6f1-4391-90f3-a49faa3cc1fc',
  date: 'Wed, 17 Feb 2016 08:25:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/1359850a-b22c-47dc-b563-bc38fdb01aee?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae9e7901-9727-49aa-83f4-7ab6b2fc1e81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '68ae7c64-c6f1-4391-90f3-a49faa3cc1fc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082513Z:68ae7c64-c6f1-4391-90f3-a49faa3cc1fc',
  date: 'Wed, 17 Feb 2016 08:25:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"f742a118-11a6-4a54-aea4-10efc73d8df2\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"990b08cc-c0d8-406c-90ab-ddc02d94baa0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '665',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f742a118-11a6-4a54-aea4-10efc73d8df2"',
  'x-ms-request-id': '4de1a152-34c1-49eb-9045-d74bbf741e29',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '176df499-7607-4859-a806-9e730f4c5348',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082514Z:176df499-7607-4859-a806-9e730f4c5348',
  date: 'Wed, 17 Feb 2016 08:25:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"f742a118-11a6-4a54-aea4-10efc73d8df2\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"990b08cc-c0d8-406c-90ab-ddc02d94baa0\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '665',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f742a118-11a6-4a54-aea4-10efc73d8df2"',
  'x-ms-request-id': '4de1a152-34c1-49eb-9045-d74bbf741e29',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '176df499-7607-4859-a806-9e730f4c5348',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T082514Z:176df499-7607-4859-a806-9e730f4c5348',
  date: 'Wed, 17 Feb 2016 08:25:13 GMT',
  connection: 'close' });
 return result; }]];