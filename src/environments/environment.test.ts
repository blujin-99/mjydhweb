import { common } from "./environment.common";

const idciudadanaUrl : string = 'https://twww.santafe.gov.ar/idciudadana'

const baseUrl : string = '/mjydh-web';

const AuthUrl : string = 'https://tsso.santafe.gov.ar';

export const environment = {
    sistemas : baseUrl + '/api/public/sistemas',
    baseUrl: baseUrl,
    ministerio: baseUrl + '/api',
    perfil:idciudadanaUrl+'/perfil',
    ... common,
    auth: {
        ...common.auth,
        clientId: 'mjydh-web.sso.santafe.gov.ar.423lkfee3',
        clientSecret: '5E1CFCFDAA060666D7C9419D42671',
        urlaAuth: AuthUrl,
        redirectUri: 'https://twww.santafe.gov.ar/mjydh-web',
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
