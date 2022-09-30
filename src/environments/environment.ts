// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { firestore } from "firebase";

export const environment = {
  production: false,
  firestore: {
    apiKey: "AIzaSyAT_c8ttTh8Uh817cD1NtzqgLUPFsch07Q",
    authDomain: "control-clientes-869e9.firebaseapp.com",
    projectId: "control-clientes-869e9",
    storageBucket: "control-clientes-869e9.appspot.com",
    messagingSenderId: "132875517928",
    appId: "1:132875517928:web:661abaf40b83778fe62e5d",
    measurementId: "G-Q704DJ5VXT"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
