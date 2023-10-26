export const common = {
  api:{
    sistemas : '/api/public/sistemas',
    outh:'/auth',
  },
  app: {
    ministerio: 'Ministerio de Gobierno, Justicia y Derechos Humanos',
    ministerioCorto: "MJ y DDHH",
    secretaria: 'Sectorial de Informática',
    nombre: 'Sectorial de Informática',
  },
  auth: {
    serviceAuthUrl: 'service-auth',
    authorizeUrl: 'service-auth/oauth2.0/authorize',
    accessTokenUrl: 'service-auth/oauth2.0/accessToken',
    profileUrl: 'service-auth/oauth2.0/profile',
    logoutUrl: 'logout',
  },
  login:{
    mjydh_cas: 'MJYDH_CAS',
    mjydh_jwt: 'MJYDH_JWT',
    mjydh_token:'MJYDH_TOKEN',
    mjydh_refresh:600000,
  }
};
