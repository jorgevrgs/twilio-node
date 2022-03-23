'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('InteractionChannel', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .channels('UOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var interactionSid = 'KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://flex-api.twilio.com/v1/Interactions/${interactionSid}/Channels/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
          'type': 'chat',
          'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
          'links': {
              'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Participants',
              'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Invites'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .channels('UOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'channels': [
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'type': 'chat',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Invites'
                  }
              },
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'type': 'sms',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Invites'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'channels'
          }
      };
      holodeck.mock(new Response(200, body));
      client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .channels.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'channels': [
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'type': 'chat',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Invites'
                  }
              },
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'type': 'sms',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Invites'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'channels'
          }
      };
      holodeck.mock(new Response(200, body));
      client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .channels.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://flex-api.twilio.com/v1/Interactions/${interactionSid}/Channels',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'channels': [
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'type': 'chat',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Invites'
                  }
              },
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'type': 'sms',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Invites'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'channels'
          }
      };
      holodeck.mock(new Response(200, body));
      client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .channels.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .channels.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var interactionSid = 'KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://flex-api.twilio.com/v1/Interactions/${interactionSid}/Channels`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read response',
    function(done) {
      var body = {
          'channels': [
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'type': 'chat',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Invites'
                  }
              },
              {
                  'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'type': 'sms',
                  'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2',
                  'links': {
                      'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Participants',
                      'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2/Invites'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'channels'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .channels.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'status': 'close'};
      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .channels('UOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var interactionSid = 'KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'UOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://flex-api.twilio.com/v1/Interactions/${interactionSid}/Channels/${sid}`;

      var values = {'Status': 'close', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
          'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'chat',
          'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
          'links': {
              'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Participants',
              'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Invites'
          }
      };

      holodeck.mock(new Response(200, body));

      var opts = {'status': 'close'};
      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .channels('UOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update_status_closed response',
    function(done) {
      var body = {
          'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
          'interaction_sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'chat',
          'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1',
          'links': {
              'participants': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Participants',
              'invites': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1/Invites'
          }
      };

      holodeck.mock(new Response(200, body));

      var opts = {'status': 'close'};
      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .channels('UOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
