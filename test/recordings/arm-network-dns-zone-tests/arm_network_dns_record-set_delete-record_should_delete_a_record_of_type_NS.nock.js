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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"4218bec3-613f-4e5d-9afd-0c10142b718f\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-ns.example1.com\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1.com.\"}]}}", { 'cache-control': 'private',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  etag: '4218bec3-613f-4e5d-9afd-0c10142b718f',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '50d39415-6de1-4316-8310-cfbf93823358',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '3de8db1d-14a1-4e62-8a6b-24feb5e22fc5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121542Z:3de8db1d-14a1-4e62-8a6b-24feb5e22fc5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"4218bec3-613f-4e5d-9afd-0c10142b718f\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-ns.example1.com\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1.com.\"}]}}", { 'cache-control': 'private',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  etag: '4218bec3-613f-4e5d-9afd-0c10142b718f',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '50d39415-6de1-4316-8310-cfbf93823358',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '3de8db1d-14a1-4e62-8a6b-24feb5e22fc5',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121542Z:3de8db1d-14a1-4e62-8a6b-24feb5e22fc5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"390c55e4-698e-445a-95db-31c71db3a3c7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '356',
  'content-type': 'application/json; charset=utf-8',
  etag: '390c55e4-698e-445a-95db-31c71db3a3c7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'eaafb34c-42f1-4188-8b47-a7e267713c80',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e3205391-ed39-4728-8ce9-28e57c234d3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121543Z:e3205391-ed39-4728-8ce9-28e57c234d3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"390c55e4-698e-445a-95db-31c71db3a3c7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '356',
  'content-type': 'application/json; charset=utf-8',
  etag: '390c55e4-698e-445a-95db-31c71db3a3c7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'eaafb34c-42f1-4188-8b47-a7e267713c80',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e3205391-ed39-4728-8ce9-28e57c234d3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121543Z:e3205391-ed39-4728-8ce9-28e57c234d3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:43 GMT',
  connection: 'close' });
 return result; }]];