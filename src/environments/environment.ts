import { common } from "./environment.common";


const idciudadanaUrl : string = 'https://www.santafe.gov.ar/idciudadana'

const baseUrl : string = 'http://localhost/mjydh-web/public/api/public';

const AuthUrl : string = 'https://dsso.santafe.gob.ar';

export const environment = {
    baseUrl: baseUrl,
    redirectUri: 'http://localhost:4200',
    perfil:idciudadanaUrl+'/perfil',
    ... common,
    auth: {
        ...common.auth,
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
    excludedEndpoints:[AuthUrl],
}
