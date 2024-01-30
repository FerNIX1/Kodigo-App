import { collection, getDocs } from "firebase/firestore"; 
import { addDoc } from "firebase/firestore"; 
import { db } from "./FirebaseConfig";
export const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

export const addDocument = async (email, password) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        correo: email,
        contraseña: password,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };