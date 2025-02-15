'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */
var serialize = require(
    '../../../../../lib/base/serialize');  /* jshint ignore:line */


var client;
var holodeck;

describe('TollfreeVerification', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.tollfreeVerifications('HHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'HHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Tollfree/Verifications/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'customer_profile_sid': 'BU3344409f7e067e279523808d267e2d85',
          'trust_product_sid': 'BU3344409f7e067e279523808d267e2d88',
          'regulated_item_sid': 'RA3344409f7e067e279523808d267e2d89',
          'date_created': '2021-01-27T14:18:35Z',
          'date_updated': '2021-01-27T14:18:36Z',
          'business_name': 'Agent',
          'business_street_address': '927 Terrace St',
          'business_street_address2': 'Unit 4',
          'business_city': 'Tempe',
          'business_state_province_region': 'AZ',
          'business_postal_code': '85281',
          'business_country': 'USA',
          'business_website': 'www.ghost.com',
          'business_contact_first_name': 'Vikram',
          'business_contact_last_name': 'Amar',
          'business_contact_email': 'vikram@gmail.com',
          'business_contact_phone': '+16504988765',
          'notification_email': 'vikram@gmail.com',
          'use_case_categories': [
              '2FA',
              'MARKETING'
          ],
          'use_case_summary': 'test',
          'production_message_sample': 'test1',
          'opt_in_image_urls': [
              'https://zipwhiptestbusiness.com/images/image1.jpg',
              'https://zipwhiptestbusiness.com/images/image2.jpg'
          ],
          'opt_in_type': 'VERBAL',
          'message_volume': '1,000',
          'additional_information': 'info',
          'tollfree_phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'TWILIO_APPROVED',
          'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications/HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'resource_links': {
              'customer_profile': 'https://trusthub.twilio.com/v1/CustomerProfiles/BU3344409f7e067e279523808d267e2d85',
              'trust_product': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88',
              'channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88/ChannelEndpointAssignments/RA3344409f7e067e279523808d267e2d89'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.tollfreeVerifications('HHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'verifications',
              'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'verifications': [
              {
                  'sid': 'HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'customer_profile_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'trust_product_sid': 'BU3344409f7e067e279523808d267e2d88',
                  'regulated_item_sid': 'RA3344409f7e067e279523808d267e2d89',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'business_name': 'Agent',
                  'business_street_address': '927 Terrace St',
                  'business_street_address2': 'Unit 4',
                  'business_city': 'Tempe',
                  'business_state_province_region': 'AZ',
                  'business_postal_code': '85281',
                  'business_country': 'USA',
                  'business_website': 'www.ghost.com',
                  'business_contact_first_name': 'Vikram',
                  'business_contact_last_name': 'Amar',
                  'business_contact_email': 'vikram@gmail.com',
                  'business_contact_phone': '+16504988765',
                  'notification_email': 'vikram@gmail.com',
                  'use_case_categories': [
                      '2FA',
                      'MARKETING'
                  ],
                  'use_case_summary': 'test',
                  'production_message_sample': 'test1',
                  'opt_in_image_urls': [
                      'https://zipwhiptestbusiness.com/images/image1.jpg',
                      'https://zipwhiptestbusiness.com/images/image2.jpg'
                  ],
                  'opt_in_type': 'VERBAL',
                  'message_volume': '1,000',
                  'additional_information': 'info',
                  'tollfree_phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'TWILIO_APPROVED',
                  'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications/HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'resource_links': {
                      'customer_profile': 'https://trusthub.twilio.com/v1/CustomerProfiles/BU3344409f7e067e279523808d267e2d85',
                      'trust_product': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88',
                      'channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88/ChannelEndpointAssignments/RA3344409f7e067e279523808d267e2d89'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.tollfreeVerifications.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'verifications',
              'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'verifications': [
              {
                  'sid': 'HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'customer_profile_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'trust_product_sid': 'BU3344409f7e067e279523808d267e2d88',
                  'regulated_item_sid': 'RA3344409f7e067e279523808d267e2d89',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'business_name': 'Agent',
                  'business_street_address': '927 Terrace St',
                  'business_street_address2': 'Unit 4',
                  'business_city': 'Tempe',
                  'business_state_province_region': 'AZ',
                  'business_postal_code': '85281',
                  'business_country': 'USA',
                  'business_website': 'www.ghost.com',
                  'business_contact_first_name': 'Vikram',
                  'business_contact_last_name': 'Amar',
                  'business_contact_email': 'vikram@gmail.com',
                  'business_contact_phone': '+16504988765',
                  'notification_email': 'vikram@gmail.com',
                  'use_case_categories': [
                      '2FA',
                      'MARKETING'
                  ],
                  'use_case_summary': 'test',
                  'production_message_sample': 'test1',
                  'opt_in_image_urls': [
                      'https://zipwhiptestbusiness.com/images/image1.jpg',
                      'https://zipwhiptestbusiness.com/images/image2.jpg'
                  ],
                  'opt_in_type': 'VERBAL',
                  'message_volume': '1,000',
                  'additional_information': 'info',
                  'tollfree_phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'TWILIO_APPROVED',
                  'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications/HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'resource_links': {
                      'customer_profile': 'https://trusthub.twilio.com/v1/CustomerProfiles/BU3344409f7e067e279523808d267e2d85',
                      'trust_product': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88',
                      'channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88/ChannelEndpointAssignments/RA3344409f7e067e279523808d267e2d89'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.tollfreeVerifications.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://messaging.twilio.com/v1/Tollfree/Verifications',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'verifications',
              'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'verifications': [
              {
                  'sid': 'HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'customer_profile_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'trust_product_sid': 'BU3344409f7e067e279523808d267e2d88',
                  'regulated_item_sid': 'RA3344409f7e067e279523808d267e2d89',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'business_name': 'Agent',
                  'business_street_address': '927 Terrace St',
                  'business_street_address2': 'Unit 4',
                  'business_city': 'Tempe',
                  'business_state_province_region': 'AZ',
                  'business_postal_code': '85281',
                  'business_country': 'USA',
                  'business_website': 'www.ghost.com',
                  'business_contact_first_name': 'Vikram',
                  'business_contact_last_name': 'Amar',
                  'business_contact_email': 'vikram@gmail.com',
                  'business_contact_phone': '+16504988765',
                  'notification_email': 'vikram@gmail.com',
                  'use_case_categories': [
                      '2FA',
                      'MARKETING'
                  ],
                  'use_case_summary': 'test',
                  'production_message_sample': 'test1',
                  'opt_in_image_urls': [
                      'https://zipwhiptestbusiness.com/images/image1.jpg',
                      'https://zipwhiptestbusiness.com/images/image2.jpg'
                  ],
                  'opt_in_type': 'VERBAL',
                  'message_volume': '1,000',
                  'additional_information': 'info',
                  'tollfree_phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'TWILIO_APPROVED',
                  'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications/HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'resource_links': {
                      'customer_profile': 'https://trusthub.twilio.com/v1/CustomerProfiles/BU3344409f7e067e279523808d267e2d85',
                      'trust_product': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88',
                      'channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88/ChannelEndpointAssignments/RA3344409f7e067e279523808d267e2d89'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.tollfreeVerifications.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.tollfreeVerifications.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://messaging.twilio.com/v1/Tollfree/Verifications';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'verifications',
              'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications?Status=TWILIO_APPROVED&TollfreePhoneNumberSid=PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'verifications': [
              {
                  'sid': 'HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'customer_profile_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'trust_product_sid': 'BU3344409f7e067e279523808d267e2d88',
                  'regulated_item_sid': 'RA3344409f7e067e279523808d267e2d89',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'business_name': 'Agent',
                  'business_street_address': '927 Terrace St',
                  'business_street_address2': 'Unit 4',
                  'business_city': 'Tempe',
                  'business_state_province_region': 'AZ',
                  'business_postal_code': '85281',
                  'business_country': 'USA',
                  'business_website': 'www.ghost.com',
                  'business_contact_first_name': 'Vikram',
                  'business_contact_last_name': 'Amar',
                  'business_contact_email': 'vikram@gmail.com',
                  'business_contact_phone': '+16504988765',
                  'notification_email': 'vikram@gmail.com',
                  'use_case_categories': [
                      '2FA',
                      'MARKETING'
                  ],
                  'use_case_summary': 'test',
                  'production_message_sample': 'test1',
                  'opt_in_image_urls': [
                      'https://zipwhiptestbusiness.com/images/image1.jpg',
                      'https://zipwhiptestbusiness.com/images/image2.jpg'
                  ],
                  'opt_in_type': 'VERBAL',
                  'message_volume': '1,000',
                  'additional_information': 'info',
                  'tollfree_phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'TWILIO_APPROVED',
                  'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications/HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'resource_links': {
                      'customer_profile': 'https://trusthub.twilio.com/v1/CustomerProfiles/BU3344409f7e067e279523808d267e2d85',
                      'trust_product': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88',
                      'channel_endpoint_assignment': 'https://trusthub.twilio.com/v1/TrustProducts/BU3344409f7e067e279523808d267e2d88/ChannelEndpointAssignments/RA3344409f7e067e279523808d267e2d89'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.tollfreeVerifications.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {
        'businessName': 'business_name',
        'businessWebsite': 'business_website',
        'notificationEmail': 'notification_email',
        'useCaseCategories': ['use_case_categories'],
        'useCaseSummary': 'use_case_summary',
        'productionMessageSample': 'production_message_sample',
        'optInImageUrls': ['opt_in_image_urls'],
        'optInType': 'VERBAL',
        'messageVolume': 'message_volume',
        'tollfreePhoneNumberSid': 'PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.messaging.v1.tollfreeVerifications.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://messaging.twilio.com/v1/Tollfree/Verifications';

      var values = {
        'BusinessName': 'business_name',
        'BusinessWebsite': 'business_website',
        'NotificationEmail': 'notification_email',
        'UseCaseCategories': serialize.map(['use_case_categories'], function(e) { return e; }),
        'UseCaseSummary': 'use_case_summary',
        'ProductionMessageSample': 'production_message_sample',
        'OptInImageUrls': serialize.map(['opt_in_image_urls'], function(e) { return e; }),
        'OptInType': 'VERBAL',
        'MessageVolume': 'message_volume',
        'TollfreePhoneNumberSid': 'PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'regulated_item_sid': null,
          'customer_profile_sid': 'BU3344409f7e067e279523808d267e2d85',
          'trust_product_sid': null,
          'status': 'PENDING_REVIEW',
          'date_created': '2021-01-27T14:18:35Z',
          'date_updated': '2021-01-27T14:18:36Z',
          'business_name': 'Agent',
          'business_street_address': '927 Terrace St',
          'business_street_address2': 'Unit 4',
          'business_city': 'Tempe',
          'business_state_province_region': 'AZ',
          'business_postal_code': '85281',
          'business_country': 'USA',
          'business_website': 'www.ghost.com',
          'business_contact_first_name': 'Vikram',
          'business_contact_last_name': 'Amar',
          'business_contact_email': 'vikram@gmail.com',
          'business_contact_phone': '+16504988765',
          'notification_email': 'vikram@gmail.com',
          'use_case_categories': [
              '2FA',
              'MARKETING'
          ],
          'use_case_summary': 'test',
          'production_message_sample': 'test1',
          'opt_in_image_urls': [
              'https://zipwhiptestbusiness.com/images/image1.jpg',
              'https://zipwhiptestbusiness.com/images/image2.jpg'
          ],
          'opt_in_type': 'VERBAL',
          'message_volume': '1,000',
          'additional_information': 'info',
          'tollfree_phone_number_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'resource_links': {},
          'url': 'https://messaging.twilio.com/v1/Tollfree/Verifications/HHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {
        'businessName': 'business_name',
        'businessWebsite': 'business_website',
        'notificationEmail': 'notification_email',
        'useCaseCategories': ['use_case_categories'],
        'useCaseSummary': 'use_case_summary',
        'productionMessageSample': 'production_message_sample',
        'optInImageUrls': ['opt_in_image_urls'],
        'optInType': 'VERBAL',
        'messageVolume': 'message_volume',
        'tollfreePhoneNumberSid': 'PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.messaging.v1.tollfreeVerifications.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
