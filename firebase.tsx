// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDfYfiDSnm0kF730t5eW_ZPKi3HF-K1pfQ",
  authDomain: "ouranos-task.firebaseapp.com",
  projectId: "ouranos-task",
  storageBucket: "ouranos-task.appspot.com",
  messagingSenderId: "325996849226",
  appId: "1:325996849226:web:4339e1ce76bacacc06deb3",
  measurementId: "G-L494EP8W62",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const rdb = getDatabase(app);
export const auth = getAuth(app);

// helper function
// Get doc data and merge doc.id
const getDocData = (doc) => {
  console.log("Doc : ", doc.exists());
  return doc.exists() === true ? { id: doc.id, ...doc.data() } : null;
};

// Get array of doc data from collection
const getCollectionData = (collection) => {
  return collection.docs.map(getDocData);
};

// DAO
export const firebaseDAO = {
  firebase: {
    findDocById: async (id, colName, setData) => {
      try {
        // check if the argument is present or not
        let docRef;
        if (!id) {
          docRef = collection(db, colName);
        } else {
          docRef = doc(db, colName, id);
        }

        let data;

        onSnapshot(docRef, (response) => {
          data = response.docs
            ? getCollectionData(response)
            : getDocData(response);

          setData(data);

          console.log("Response Data : ", data);
        });

        console.log("The Data : ", data);

        return data;
      } catch (e) {
        console.log("Error Occured while finding the documnet");
      }
    },
  },
};
