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
        apiKey: "AIzaSyAerSaCg4GQjhKvXOmVi9vhCbcIZ9gy4AM",
        authDomain: "mjydh-web.firebaseapp.com",
        projectId: "mjydh-web",
        storageBucket: "mjydh-web.appspot.com",
        messagingSenderId: "141275757402",
        appId: "1:141275757402:web:083458d59f1292981d9163",
        measurementId: "G-TF1MQP9PGC"
    },
    excludedEndpoints:[AuthUrl],
}
