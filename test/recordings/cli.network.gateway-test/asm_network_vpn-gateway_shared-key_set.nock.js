// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway/connection/CliGtTestLocNetwork5435/sharedkey', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7104c632-c635-4612-bb24-9d653ea393da</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '425d56c60382b6a6b9e926a2b852b28f',
  date: 'Fri, 26 Jun 2015 06:43:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet8230/gateway/connection/CliGtTestLocNetwork5435/sharedkey', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7104c632-c635-4612-bb24-9d653ea393da</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '425d56c60382b6a6b9e926a2b852b28f',
  date: 'Fri, 26 Jun 2015 06:43:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/7104c632-c635-4612-bb24-9d653ea393da')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><ID>7104c632-c635-4612-bb24-9d653ea393da</ID><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2015-06-26T06:43:22.4828668</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '335',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '276a271de0cebd4e82f90f1b1f1a6e11',
  date: 'Fri, 26 Jun 2015 06:43:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/7104c632-c635-4612-bb24-9d653ea393da')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><ID>7104c632-c635-4612-bb24-9d653ea393da</ID><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2015-06-26T06:43:22.4828668</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '335',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '276a271de0cebd4e82f90f1b1f1a6e11',
  date: 'Fri, 26 Jun 2015 06:43:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/7104c632-c635-4612-bb24-9d653ea393da')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>7104c632-c635-4612-bb24-9d653ea393da</ID><OperationCompletedTime>2015-06-26T06:44:03.5366639</OperationCompletedTime><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2015-06-26T06:43:22.4828668</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '446',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd826e6d46726bb0f9da1e2ea6186882b',
  date: 'Fri, 26 Jun 2015 06:44:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/operation/7104c632-c635-4612-bb24-9d653ea393da')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HttpStatusCode>OK</HttpStatusCode><ID>7104c632-c635-4612-bb24-9d653ea393da</ID><OperationCompletedTime>2015-06-26T06:44:03.5366639</OperationCompletedTime><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2015-06-26T06:43:22.4828668</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '446',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd826e6d46726bb0f9da1e2ea6186882b',
  date: 'Fri, 26 Jun 2015 06:44:28 GMT',
  connection: 'close' });
 return result; }]];