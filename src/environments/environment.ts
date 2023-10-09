const baseUrl : string = 'https://twww.santafe.gov.ar/mjydh-web';

const AuthUrl : string = 'https://dsso.santafe.gob.ar';

export const environment = {
    sistemas : baseUrl + '/api/public/sistemas', 
    oauth2: {
        serviceAuthUrl: AuthUrl + '/service-auth',
        authorizeUrl: AuthUrl + '/service-auth/oauth2.0/accessToken',
        accessTokenUrl: AuthUrl + '/service-auth/oauth2.0/accessToken',
        profileUrl: AuthUrl + '/service-auth/oauth2.0/profile',
        clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
        clientSecret: '173F5792303755A2GH',
        redirectUri: 'http://127.0.0.1:4200/login',
        logoutUrl: AuthUrl + '/logout',
    }
}

export const firebaseConfig ={
    apiKey: "AIzaSyB5McZrCenegob-WOEdRGY0KwRX2128LdQ",
    authDomain: "mjydhweb.firebaseapp.com",
    projectId: "mjydhweb",
    storageBucket: "mjydhweb.appspot.com",
    messagingSenderId: "597266132836",
    appId: "1:597266132836:web:0850a8b80bc21565cdd471",
    measurementId: "G-XE5WQGMXG9"
}
