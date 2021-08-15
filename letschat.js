var firebaseConfig = {
    apiKey: "AIzaSyDh4rBCJuOqqMLermsOvJ982pqbeohri-Y",
    authDomain: "letschat-adf0b.firebaseapp.com",
    databaseURL: "https://letschat-adf0b-default-rtdb.firebaseio.com",
    projectId: "letschat-adf0b",
    storageBucket: "letschat-adf0b.appspot.com",
    messagingSenderId: "533687760016",
    appId: "1:533687760016:web:ebd4fe27cfc6b6d4331415"
  };
function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location='letschat_room.html';
}