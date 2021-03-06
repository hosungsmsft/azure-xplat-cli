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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"4c440ec2-6dbd-411e-9864-8f7918040ebb\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '466',
  'content-type': 'application/json; charset=utf-8',
  etag: '4c440ec2-6dbd-411e-9864-8f7918040ebb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0665f4a9-d944-4f53-addf-45135a59b2d0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '164ed204-a34c-4bf3-b729-a499ea45038a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121618Z:164ed204-a34c-4bf3-b729-a499ea45038a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"4c440ec2-6dbd-411e-9864-8f7918040ebb\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-srv.example1.com\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com\",\"weight\":2}]}}", { 'cache-control': 'private',
  'content-length': '466',
  'content-type': 'application/json; charset=utf-8',
  etag: '4c440ec2-6dbd-411e-9864-8f7918040ebb',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '0665f4a9-d944-4f53-addf-45135a59b2d0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '164ed204-a34c-4bf3-b729-a499ea45038a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121618Z:164ed204-a34c-4bf3-b729-a499ea45038a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"090ffd49-aaab-48e9-a42e-aec5edb80d27\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '364',
  'content-type': 'application/json; charset=utf-8',
  etag: '090ffd49-aaab-48e9-a42e-aec5edb80d27',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'ac7a686d-efce-4e8d-bd23-8e1328d28383',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'ab00b1a9-2fe1-4cff-90ab-613b56d51dd8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121619Z:ab00b1a9-2fe1-4cff-90ab-613b56d51dd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/SRV/set-srv?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"090ffd49-aaab-48e9-a42e-aec5edb80d27\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '364',
  'content-type': 'application/json; charset=utf-8',
  etag: '090ffd49-aaab-48e9-a42e-aec5edb80d27',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'ac7a686d-efce-4e8d-bd23-8e1328d28383',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'ab00b1a9-2fe1-4cff-90ab-613b56d51dd8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121619Z:ab00b1a9-2fe1-4cff-90ab-613b56d51dd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:16:19 GMT',
  connection: 'close' });
 return result; }]];