import { common } from "./environment.common";


const baseUrl : string = 'https://twww.santafe.gov.ar/mjydh-web';

const AuthUrl : string = 'https://dsso.santafe.gob.ar';

export const environment = {
    redirectUri: 'http://127.0.0.1:4200',
    baseUrl: baseUrl,
    ... common,
    auth: {
        ...common.auth,
        clientId: 'mjydh-web.sso.santafe.gov.ar.423lkfee3',
        clientSecret: '5E1CFCFDAA060666D7C9419D42671',
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
    excludedEndpoints:['https://tasw.santafe.gob.ar/mjyddhh/mjydh-web/api', AuthUrl],
}
