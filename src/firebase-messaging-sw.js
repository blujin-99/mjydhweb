importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');


firebase.initializeApp(
    {
      apiKey: "AIzaSyAerSaCg4GQjhKvXOmVi9vhCbcIZ9gy4AM",
      authDomain: "mjydh-web.firebaseapp.com",
      projectId: "mjydh-web",
      storageBucket: "mjydh-web.appspot.com",
      messagingSenderId: "141275757402",
      appId: "1:141275757402:web:083458d59f1292981d9163",
      measurementId: "G-TF1MQP9PGC"
    }
)

const messaging = firebase.messaging()

