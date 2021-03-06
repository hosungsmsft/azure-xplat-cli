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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '7b6a48bf-dd72-411e-bac9-e50b447fa626',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '5dcdabe8-b502-4a86-8fec-d0d1f171dab4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121504Z:5dcdabe8-b502-4a86-8fec-d0d1f171dab4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '7b6a48bf-dd72-411e-bac9-e50b447fa626',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '5dcdabe8-b502-4a86-8fec-d0d1f171dab4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121504Z:5dcdabe8-b502-4a86-8fec-d0d1f171dab4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"86264199-f9c8-4aa7-8eb5-5f5e1fe64966\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-aaaa.example1.com\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '86264199-f9c8-4aa7-8eb5-5f5e1fe64966',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f4e5ec7f-85ca-4d76-9231-0d9ce364aa6b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'fcdb7cae-7fa5-4c8a-9ca6-755991629171',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121506Z:fcdb7cae-7fa5-4c8a-9ca6-755991629171',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"86264199-f9c8-4aa7-8eb5-5f5e1fe64966\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-aaaa.example1.com\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '86264199-f9c8-4aa7-8eb5-5f5e1fe64966',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'f4e5ec7f-85ca-4d76-9231-0d9ce364aa6b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'fcdb7cae-7fa5-4c8a-9ca6-755991629171',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121506Z:fcdb7cae-7fa5-4c8a-9ca6-755991629171',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"f3a16177-27d1-4161-950b-9313d8196625\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  etag: 'f3a16177-27d1-4161-950b-9313d8196625',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '99b0192a-d524-46aa-a97f-cb5d6ebf9c02',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '60a6cd8a-6034-4b58-9400-41c1c94c4baa',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121507Z:60a6cd8a-6034-4b58-9400-41c1c94c4baa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/set-aaaa\",\"name\":\"set-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"f3a16177-27d1-4161-950b-9313d8196625\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}}", { 'cache-control': 'private',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  etag: 'f3a16177-27d1-4161-950b-9313d8196625',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '99b0192a-d524-46aa-a97f-cb5d6ebf9c02',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '60a6cd8a-6034-4b58-9400-41c1c94c4baa',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121507Z:60a6cd8a-6034-4b58-9400-41c1c94c4baa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:07 GMT',
  connection: 'close' });
 return result; }]];