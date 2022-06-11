
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyC2uHKQ9GlgdU25YSb7JZCf4DwWX_uADG4",
  authDomain: "kwitter-62bbe.firebaseapp.com",
  databaseURL: "https://kwitter-62bbe-default-rtdb.firebaseio.com",
  projectId: "kwitter-62bbe",
  storageBucket: "kwitter-62bbe.appspot.com",
  messagingSenderId: "306410805541",
  appId: "1:306410805541:web:2c768f6b24d345e6c862cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "Yuvraj"
  });
}


