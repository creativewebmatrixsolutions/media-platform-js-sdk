/**
 * Created by elad on 06/06/2016.
 */

/**
 * @param {ProviderConfiguration} providerConfiguration
 * @param {string} userId
 * @constructor
 */
function UserConfiguration(providerConfiguration, userId) {

    /**
     * @type {ProviderConfiguration}
     */
    this.providerConfiguration = providerConfiguration;

    /**
     * @type {string}
     */
    this.userId = userId;
}

/**
 * @type {UserConfiguration}
 */
module.exports = UserConfiguration;