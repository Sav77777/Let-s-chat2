
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCq5wF_XBoYeWW-BB4gZYs5vl8LawTSMUE",
      authDomain: "kwitter-15012.firebaseapp.com",
      databaseURL: "https://kwitter-15012-default-rtdb.firebaseio.com",
      projectId: "kwitter-15012",
      storageBucket: "kwitter-15012.appspot.com",
      messagingSenderId: "293047782724",
      appId: "1:293047782724:web:1e90fdd429d9310bb8db11"
    };
    
    
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome! "+user_name;

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      
}

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}