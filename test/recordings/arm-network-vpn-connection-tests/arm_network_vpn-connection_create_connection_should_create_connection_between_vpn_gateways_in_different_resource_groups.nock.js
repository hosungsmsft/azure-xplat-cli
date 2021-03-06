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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway-1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-1\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\",\r\n  \"etag\": \"W/\\\"aaa0e31f-9cc6-48ad-8246-1b9aaa57ac53\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c19d4e7f-0e68-4043-aed6-b33f63a44d4a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"aaa0e31f-9cc6-48ad-8246-1b9aaa57ac53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/publicIPAddresses/test-ip-1\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworks/test-vnet-1/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1680',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c93d52f-712f-481c-988c-37c13f737542',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '6eb3115c-4048-4de3-885f-d3b98599076e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103234Z:6eb3115c-4048-4de3-885f-d3b98599076e',
  date: 'Mon, 22 Feb 2016 10:32:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway-1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-1\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\",\r\n  \"etag\": \"W/\\\"aaa0e31f-9cc6-48ad-8246-1b9aaa57ac53\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"c19d4e7f-0e68-4043-aed6-b33f63a44d4a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"aaa0e31f-9cc6-48ad-8246-1b9aaa57ac53\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/publicIPAddresses/test-ip-1\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworks/test-vnet-1/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1680',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c93d52f-712f-481c-988c-37c13f737542',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '6eb3115c-4048-4de3-885f-d3b98599076e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103234Z:6eb3115c-4048-4de3-885f-d3b98599076e',
  date: 'Mon, 22 Feb 2016 10:32:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway-2?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-2\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\",\r\n  \"etag\": \"W/\\\"67f1ca53-d98c-418e-a0b9-7ce03364d52d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"76a98233-663f-4476-aa7a-3806661b2819\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"67f1ca53-d98c-418e-a0b9-7ce03364d52d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.2.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/publicIPAddresses/test-ip-2\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworks/test-vnet-2/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1680',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9ac01830-40e2-43ac-823c-e5c1542b8c65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '80ae388f-5765-4652-94d9-e40652aaee7c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103235Z:80ae388f-5765-4652-94d9-e40652aaee7c',
  date: 'Mon, 22 Feb 2016 10:32:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway-2?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway-2\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\",\r\n  \"etag\": \"W/\\\"67f1ca53-d98c-418e-a0b9-7ce03364d52d\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"76a98233-663f-4476-aa7a-3806661b2819\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"67f1ca53-d98c-418e-a0b9-7ce03364d52d\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.2.0.11\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/publicIPAddresses/test-ip-2\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworks/test-vnet-2/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Basic\",\r\n      \"tier\": \"Basic\",\r\n      \"capacity\": 0\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1680',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9ac01830-40e2-43ac-823c-e5c1542b8c65',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '80ae388f-5765-4652-94d9-e40652aaee7c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103235Z:80ae388f-5765-4652-94d9-e40652aaee7c',
  date: 'Mon, 22 Feb 2016 10:32:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/connections/test-vpn-connection' under resource group 'xplat-test-gateway-group-1' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b7f2d469-acde-4290-83ac-e29bbca9f55c',
  'x-ms-correlation-request-id': 'b7f2d469-acde-4290-83ac-e29bbca9f55c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103236Z:b7f2d469-acde-4290-83ac-e29bbca9f55c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 22 Feb 2016 10:32:36 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/connections/test-vpn-connection' under resource group 'xplat-test-gateway-group-1' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b7f2d469-acde-4290-83ac-e29bbca9f55c',
  'x-ms-correlation-request-id': 'b7f2d469-acde-4290-83ac-e29bbca9f55c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103236Z:b7f2d469-acde-4290-83ac-e29bbca9f55c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 22 Feb 2016 10:32:36 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"25c9d30c-85bb-4503-9922-96d2c0db0e7c\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b7ca7db0-ac9e-4149-8eb4-41a174200468\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E021078A0163F01050D9647F47ED7EF267DBC300D06092A864886F70D010101050004820100CB8E2C0793795F698B56F34C49D38F1FA0B76A66921C78301B71B78879E8B2E15A2AF31F398789FFEA91179488E4F15E4CECC171042437235DED5D91A8FFB6E1756FCCF5D187411C72C685507B2BAFF8C62D514AF9F2CF74588D00BD6EDC645EA2CAF3D54D6E267EE86DC2B92203E8BC5188F960B1A067B1BFBFFB44ED730234657440626C12EC4F6AE01EEE73B91A21DA1F42B10D2082194A4AD48E19D0CA55FA94C4B1A458567A776591BC1493681AD89BE6327F1E055A9CB0A99EC2EC2FB2C8F687E3C2168FEE36B0C46C4092714AD4F984F61F5ABFDC85D6756EB0D520F83F032DE249011EEE7F0654BFF351908EBD77A1F2F10181B58C29F1C7564E8162302B06092A864886F70D010701301406082A864886F70D03070408F2048AB4F0FD076F80082073ECB1D667FD8C\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1911',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8734478c-e095-4a6e-a347-c10ba4e276cb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8734478c-e095-4a6e-a347-c10ba4e276cb?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f0adfa64-e618-4888-9b36-41fcca98d60d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103240Z:f0adfa64-e618-4888-9b36-41fcca98d60d',
  date: 'Mon, 22 Feb 2016 10:32:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"25c9d30c-85bb-4503-9922-96d2c0db0e7c\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"b7ca7db0-ac9e-4149-8eb4-41a174200468\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E021078A0163F01050D9647F47ED7EF267DBC300D06092A864886F70D010101050004820100CB8E2C0793795F698B56F34C49D38F1FA0B76A66921C78301B71B78879E8B2E15A2AF31F398789FFEA91179488E4F15E4CECC171042437235DED5D91A8FFB6E1756FCCF5D187411C72C685507B2BAFF8C62D514AF9F2CF74588D00BD6EDC645EA2CAF3D54D6E267EE86DC2B92203E8BC5188F960B1A067B1BFBFFB44ED730234657440626C12EC4F6AE01EEE73B91A21DA1F42B10D2082194A4AD48E19D0CA55FA94C4B1A458567A776591BC1493681AD89BE6327F1E055A9CB0A99EC2EC2FB2C8F687E3C2168FEE36B0C46C4092714AD4F984F61F5ABFDC85D6756EB0D520F83F032DE249011EEE7F0654BFF351908EBD77A1F2F10181B58C29F1C7564E8162302B06092A864886F70D010701301406082A864886F70D03070408F2048AB4F0FD076F80082073ECB1D667FD8C\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1911',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8734478c-e095-4a6e-a347-c10ba4e276cb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8734478c-e095-4a6e-a347-c10ba4e276cb?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f0adfa64-e618-4888-9b36-41fcca98d60d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103240Z:f0adfa64-e618-4888-9b36-41fcca98d60d',
  date: 'Mon, 22 Feb 2016 10:32:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8734478c-e095-4a6e-a347-c10ba4e276cb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1650f4cc-35f5-4b22-b419-18d5627e2217',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'ffe49247-4b7d-4a79-9474-15569a9c859b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103311Z:ffe49247-4b7d-4a79-9474-15569a9c859b',
  date: 'Mon, 22 Feb 2016 10:33:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8734478c-e095-4a6e-a347-c10ba4e276cb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1650f4cc-35f5-4b22-b419-18d5627e2217',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'ffe49247-4b7d-4a79-9474-15569a9c859b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103311Z:ffe49247-4b7d-4a79-9474-15569a9c859b',
  date: 'Mon, 22 Feb 2016 10:33:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8734478c-e095-4a6e-a347-c10ba4e276cb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7d94a06e-3f38-4cc7-8094-2d86bd18ea6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '43deca1c-a1c0-4801-995b-ab5aa7f38ea2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103341Z:43deca1c-a1c0-4801-995b-ab5aa7f38ea2',
  date: 'Mon, 22 Feb 2016 10:33:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8734478c-e095-4a6e-a347-c10ba4e276cb?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7d94a06e-3f38-4cc7-8094-2d86bd18ea6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '43deca1c-a1c0-4801-995b-ab5aa7f38ea2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103341Z:43deca1c-a1c0-4801-995b-ab5aa7f38ea2',
  date: 'Mon, 22 Feb 2016 10:33:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"03f9adab-c1e7-41cc-8a0e-c4e88e1246e6\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b7ca7db0-ac9e-4149-8eb4-41a174200468\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1151',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7f91eb2f-20e7-427f-9ca5-56b3d3efe6e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4b6b1965-3e4e-4b46-9744-f620fd51f692',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103342Z:4b6b1965-3e4e-4b46-9744-f620fd51f692',
  date: 'Mon, 22 Feb 2016 10:33:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"03f9adab-c1e7-41cc-8a0e-c4e88e1246e6\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b7ca7db0-ac9e-4149-8eb4-41a174200468\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1151',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7f91eb2f-20e7-427f-9ca5-56b3d3efe6e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4b6b1965-3e4e-4b46-9744-f620fd51f692',
  'x-ms-routing-request-id': 'WESTEUROPE:20160222T103342Z:4b6b1965-3e4e-4b46-9744-f620fd51f692',
  date: 'Mon, 22 Feb 2016 10:33:42 GMT',
  connection: 'close' });
 return result; }]];