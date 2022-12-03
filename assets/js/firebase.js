// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6fGRb9RH9z1JgHqznNRvuyf2fPLtava8",
  authDomain: "jabal-uhud-b6657.firebaseapp.com",
  databaseURL: "https://jabal-uhud-b6657-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jabal-uhud-b6657",
  storageBucket: "jabal-uhud-b6657.appspot.com",
  messagingSenderId: "1004646754368",
  appId: "1:1004646754368:web:040e747fb2b2de7d3197a5",
  measurementId: "G-C03KF2QY7J"
};

firebase.initializeApp(firebaseConfig);

function signingOut() {

  firebase.auth().signOut().then(() => {

    window.location.href = "/signin.html";
  }).catch((error) => {

    console.log('Signing Out Failed')
  });
}

var checkLogin = setInterval(function() {

  if (firebase.auth().currentUser != null) {

    $("#logStatus").css("display", "block");
    clearInterval(checkLogin);
  }
}, 200)

// General Function
function getInput(id) {

  return document.getElementById(id).value;
}
