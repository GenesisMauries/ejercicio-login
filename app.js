(function(){
    // Initialize Firebase
 const config = {
    apiKey: "AIzaSyBkuMok9yNubpgQMZ_1S7F_IQ3i5-GPeEo",
    authDomain: "socialmedia-50409.firebaseapp.com",
    databaseURL: "https://socialmedia-50409.firebaseio.com",
    projectId: "socialmedia-50409",
    storageBucket: "socialmedia-50409.appspot.com",
    messagingSenderId: "1069336975304"
  };
  firebase.initializeApp(config);

  // Elementos HTML
  const emailOne = document.getElementById("email"); // Mail
  const passwordOne = document.getElementById("password"); // Pass
  const loginOne = document.getElementById("log-in"); // Entrar
  const signOne = document.getElementById("sign-up"); // Registro
  const logOne = document.getElementById("log-out"); // Salir

  // Evento para entrar
  loginOne.addEventListener('click', e =>{
      const email = emailOne.value;
      const password = passwordOne.value;
      const auth = firebase.auth();
      // Entrando
      const promise = auth.signInWithEmailAndPassword(email,password);
      promise.catch(e => console.log(e.message));
      
  });
  // Evento registro
  signOne.addEventListener('click', e =>{
    const email = emailOne.value;
    const password = passwordOne.value;
    const auth = firebase.auth();
    // Entrando
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise
    .catch(e=> console.log(e.message));
  });
// Botón de salida
  logOne.addEventListener('click', e =>{
      firebase.auth().signOut();

  })
  // Comprobacion en tiempo real
  firebase.auth().onAuthStateChanged(firebaseUser=>{
      if(firebaseUser){
          console.log(firebaseUser);
      }else{
          console.log('Usuario no encontrado');
          
      }
  })
 
}());