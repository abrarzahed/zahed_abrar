/* 
   import firebase functions
*/
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";

/* 
   firebase configuration
*/
const firebaseConfig = {
  apiKey: "AIzaSyBYlyyC9HS8ceLqPwnrdxaJnLygAlACeO4",
  authDomain: "zahed-abrar.firebaseapp.com",
  projectId: "zahed-abrar",
  storageBucket: "zahed-abrar.appspot.com",
  messagingSenderId: "156076415137",
  appId: "1:156076415137:web:06dfeb342abb8402cdf8e0",
};

/* 
   init firebase app
*/
initializeApp(firebaseConfig);

/* 
   init firebase service
*/
const db = getFirestore();

/* 
   collection ref : reference of collection of data. In this case it is projects.
*/
const colRef = collection(db, "projects");

/* 
   Projects Collections Ordering Refs : to get assenting or descending ordered data.
*/
const projectsCollectionsOrderRefs = query(
  colRef,
  orderBy("createdAt", "desc")
);

export { colRef, projectsCollectionsOrderRefs };
