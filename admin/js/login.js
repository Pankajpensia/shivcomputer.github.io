
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
  
  const firebaseConfig = {
  apiKey: "AIzaSyD1Fv2mgRJkzf66lYiGt7-tkDK7winppsI",
  authDomain: "shiv-computer-b911c.firebaseapp.com",
  databaseURL: "https://shiv-computer-b911c-default-rtdb.firebaseio.com",
  projectId: "shiv-computer-b911c",
  storageBucket: "shiv-computer-b911c.appspot.com",
  messagingSenderId: "526120095986",
  appId: "1:526120095986:web:6d406d10bbf3939a99806b",
  measurementId: "G-GGHW0ZYXNH"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase();
  
  const submitButton = document.querySelector("#submitBtn");
  submitButton.addEventListener("click", async function (e) {
  e.preventDefault();
  const mobileNumber = document.getElementById("mobileNumber").value + "@gmail.com";
  const password = document.getElementById("password").value;
  
  try {
  const userCredential = await signInWithEmailAndPassword(auth, mobileNumber, password);
  const user = userCredential.user;
  console.log("Success! Welcome back!");
  alert("Login Successfully ! Welcome back!");
    
  // Redirect to a new page or perform other actions
  window.open("admin.html");
  } catch (error) {
  alert("Login Error");
  console.log(error);
  }
  });
  