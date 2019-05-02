import firebase from 'firebase';
  // Initialize Firebase
const config = {
      apiKey: "AIzaSyAxVHAikodk-Uc4NTsP-LgnTJVS2jnbTd4",
      authDomain: "dti-final-project.firebaseapp.com",
      databaseURL: "https://dti-final-project.firebaseio.com",
      projectId: "dti-final-project",
      storageBucket: "dti-final-project.appspot.com",
      messagingSenderId: "825009100506"
};

const fire = firebase.initializeApp(config);
export default fire;
