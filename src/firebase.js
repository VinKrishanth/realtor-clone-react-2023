import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrFvDEAhBNXg6UkDSWr2wQaz9MWm3cIcg",
  authDomain: "realtor-clone-react-2023.firebaseapp.com",
  projectId: "realtor-clone-react-2023",
  storageBucket: "realtor-clone-react-2023.appspot.com",
  messagingSenderId: "580589142194",
  appId: "1:580589142194:web:40d1b8362aead2942b49ab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };