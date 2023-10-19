import { common } from "./environment.common";


const baseUrl : string = 'http://10.1.46.32:8181/mjydh-web/public';

const AuthUrl : string = 'https://dsso.santafe.gob.ar';

const ministerioURL : string = 'https://tasw.santafe.gob.ar/'

export const environment = {
    sistemas : baseUrl + '/api/public/sistemas', 
    baseUrl: baseUrl,
    redirectUri: 'http://localhost:4200',
    ministerio: ministerioURL + 'mjyddhh/mjydh-web/api',

    ... common,
    auth: {
        clientId: 'sso.santafe.gov.ar.5868506FJCKWEDG33',
        clientSecret: '173F5792303755A2GH',
        urlaAuth: AuthUrl,
    },
    firebaseConfig :{
        apiKey: "AIzaSyB5McZrCenegob-WOEdRGY0KwRX2128LdQ",
        authDomain: "mjydhweb.firebaseapp.com",
        projectId: "mjydhweb",
        storageBucket: "mjydhweb.appspot.com",
        messagingSenderId: "597266132836",
        appId: "1:597266132836:web:0850a8b80bc21565cdd471",
        measurementId: "G-XE5WQGMXG9"
    },
    excludedEndpoints:['https://twww.santafe.gov.ar/mjydh-web/api/public/sistemas'],
}
