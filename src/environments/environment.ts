// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyBgW3wAYCfvWG4mWRQOMOfVO8ZbDUgtdcw",
    authDomain: "portfolioblog-cd471.firebaseapp.com",
    databaseURL: "https://portfolioblog-cd471.firebaseio.com",
    projectId: "portfolioblog-cd471",
    storageBucket: "",
    messagingSenderId: "193379523458"
  }
};
