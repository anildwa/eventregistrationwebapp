
exports.creds = {
  // Required. It must be tenant-specific endpoint, common endpoint is not supported to use B2C
  // feature.
  identityMetadata: 'https://login.microsoftonline.com/anildwaaadb2c.onmicrosoft.com/v2.0/.well-known/openid-configuration', 
  // or equivalently: 'https://login.microsoftonline.com/<tenant_guid>/v2.0/.well-known/openid-configuration'

  // Required, the client ID of your app in AAD  
  clientID: 'e0dff836-6c56-4c6e-928c-8c60a9d29137',

  // Required, must be 'code', 'code id_token', 'id_token code' or 'id_token' 
  // If you want to get access_token, you must be 'code', 'code id_token' or 'id_token code'
  responseType: 'id_token', 

  // Required
  responseMode: 'form_post', 

  // Required, the reply URL registered in AAD for your app
  redirectUrl: 'https://localhost:3443/auth/openid/return', 

  // Required if we use http for redirectUrl
  allowHttpForRedirectUrl: true,
  
  // Required if `responseType` is 'code', 'id_token code' or 'code id_token'. 
  // If app key contains '\', replace it with '\\'.
  clientSecret: 'R>=d6*H9[k;69/6-3m3!j)J!', 

  // Required, must be true for B2C
  isB2C: true,

  // Required to set to false if you don't want to validate issuer
  validateIssuer: true,

  // Required if you want to provide the issuer(s) you want to validate instead of using the issuer from metadata
  issuer: null,

  // Required to set to true if the `verify` function has 'req' as the first parameter
  passReqToCallback: false,

  // Recommended to set to true. By default we save state in express session, if this option is set to true, then
  // we encrypt state and save it in cookie instead. This option together with { session: false } allows your app
  // to be completely express session free.
  useCookieInsteadOfSession: true,

  // Required if `useCookieInsteadOfSession` is set to true. You can provide multiple set of key/iv pairs for key
  // rollover purpose. We always use the first set of key/iv pair to encrypt cookie, but we will try every set of
  // key/iv pair to decrypt cookie. Key can be any string of length 32, and iv can be any string of length 12.
  cookieEncryptionKeys: [ 
    { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
    { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
  ],

  // Optional. The additional scope you want besides 'openid'
  // (1) if you want refresh_token, use 'offline_access'
  // (2) if you want access_token, use the clientID
  scope: ['offline_access'],

  // Optional, 'error', 'warn' or 'info'
  loggingLevel: 'info',

  // Optional. The lifetime of nonce in session or cookie, the default value is 3600 (seconds).
  nonceLifetime: null,

  // Optional. The max amount of nonce saved in session or cookie, the default value is 10.
  nonceMaxAmount: 5,

  // Optional. The clock skew allowed in token validation, the default value is 300 seconds.
  clockSkew: null,
};

// The url you need to go to destroy the session with AAD, 
// replace <tenant_name> with your tenant name, and
// replace <signin_policy_name> with your signin policy name.
exports.destroySessionUrl = 
  'https://login.microsoftonline.com/anildwaaadb2c.onmicrosoft.com/oauth2/v2.0/logout' +
  '?p=B2C_1_susi' +
  '&post_logout_redirect_uri=http://localhost:3000';

// If you want to use the mongoDB session store for session middleware; otherwise we will use the default
// session store provided by express-session.
// Note that the default session store is designed for development purpose only.
exports.useMongoDBSessionStore = false;

// If you want to use mongoDB, provide the uri here for the database.
exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

exports.eventsDatabase = 'mongodb://anildwamongoapi:N9cbRBhHUIdZhpna9K9P8fFZZNrpk0LG1Ea8wgiCBcrzRsd50EfW2kbGmuJXhjyLEbQX6afpH7uwpg1777IQEg==@anildwamongoapi.documents.azure.com:10255/db1?ssl=true&replicaSet=globaldb';

// How long you want to keep session in mongoDB.
exports.mongoDBSessionMaxAge = 24 * 60 * 60;  // 1 day (unit is second)