var request = require('request');

/**
 * @param {AuthenticationFacade} authenticationFacade
 * @constructor
 */
function AuthenticatedHTTPClient(authenticationFacade) {

    /**
     * @type {AuthenticationFacade}
     */
    this.authenticationFacade = authenticationFacade;

}

/**
 * @param {string} httpMethod
 * @param {string} url
 * @param {string} userId
 * @param {{}} params
 * @param {function(Error, *)} callback
 */
AuthenticatedHTTPClient.prototype.jsonRequest = function (httpMethod, url, userId, params, callback) {

    this.authenticationFacade.getHeader(userId, function (error, header) {

        if (error) {
            callback(error, null);
            return;
        }

        var options = { method: httpMethod, url: url, headers: header, json: true };

        switch (httpMethod) {
            case 'POST':
            case 'PUT':
                options.body = params;
                break;
            default:
                options.qs = params;
        }

        request(options, function (error, response, body) {

            if (error) {
                callback(error, null);
                return;
            }

            if (response.statusCode === 403 || response.statusCode === 401) {
                this.authenticationFacade.invalidateToken(userId);
            }

            if (response.statusCode < 200 || response.statusCode >= 300) {
                callback(new Error(JSON.stringify(response.body)), null);
                return;
            }

            callback(null, body);
        }.bind(this));
    }.bind(this))
};

/**
 * @type {AuthenticatedHTTPClient}
 */
module.exports = AuthenticatedHTTPClient;