const firebaseConfig = {
  apiKey: "AIzaSyBpOfcTjL086LHONAH6BH6JzLygCbodVkg",
  authDomain: "kwitter-c6201.firebaseapp.com",
  databaseURL: "https://kwitter-c6201-default-rtdb.firebaseio.com",
  projectId: "kwitter-c6201",
  storageBucket: "kwitter-c6201.appspot.com",
  messagingSenderId: "132892883558",
  appId: "1:132892883558:web:48ea9a186bfeb37808cba7"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room_name-"+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomeName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
   
  //End code
  });});}
getData();

function  addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
  
}

function redirectToRoomeName(name){
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";
}

function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
     
}