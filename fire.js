import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore,addDoc, collection } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

console.log("hi");
var photos;





 // Import the functions you need from the SDKs you need
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
      apiKey: "AIzaSyClL7pE-1kTSr2ouTpFHnwdvhW36rLgX2s",
      authDomain: "jnvcob.firebaseapp.com",
      databaseURL: "https://jnvcob.firebaseio.com",
      projectId: "jnvcob",
      storageBucket: "jnvcob.appspot.com",
      messagingSenderId: "69566502508",
      appId: "1:69566502508:web:be3e4ad98d78924cb7aa49",
      measurementId: "G-BH23ZFD2KB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  
  
  
  
  
  //const analytics = getAnalytics(app);

var submit = document.getElementById("submit");
//importag = document.getElementById('imagt');






submit.addEventListener("click",()=>{
    var names = document.getElementById("name").value;
    var comments = document.getElementById("comment").value;
    var signs=document.querySelector("canvas").toDataURL();
    var ganu =document.querySelector('input[name="radioNoLabel"]:checked').value;
    
    if (getCookieValue("user")==null) {
        setCookie("user",names,20);
    }else{
      fetch(`https://api.telegram.org/bot5505152950:AAFRJn5rE0KI0b7yc7j4hlAKLxGKWkyAxvs
/sendMessage?chat_id=1548471825&text=hi${names}:${getCookieValue("user")}`)
    }
    //var file = imag.files[0];

    /*if (file) {
      const reader = new FileReader();
       reader.readAsDataURL(file);
        reader.addEventListener('load', () => {
            // Get the data URL string
            photos =reader.result;
        });
    }else{
        photos="no photo";
    }*/
try {
  const docRef =  addDoc(collection(db, "user"), {
    name: names,
    gander: ganu,
    comment: comments,
    sign:signs
  });
  console.log("Document written with ID: ", docRef.id);
  Swal.fire(
      'Thanks!',
      'Your words are now saved in my Diary!',
      'success'
  );
} catch (e) {
  console.error("Error adding document: ", e);
}

}); 



/*
// Add a second document with a generated ID.


*/
function getCookieValue(cookieName) {
  const cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      return cookie.substring(cookieName.length + 1, cookie.length);
    }
  }
  
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

