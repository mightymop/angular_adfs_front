import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://dc2019.poldom.local/adfstestapi'],
    sendAccessToken: true,
  }
};
