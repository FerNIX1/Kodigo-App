import { collection, getDocs,addDoc, query, where } from "firebase/firestore"; 
import { db } from "./FirebaseConfig";
export const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

export const addUser = async (email, password) => {
  try {
    
    const querySnapshot = await getDocs(query(collection(db, "users"), where("correo", "==", email)));

    if (querySnapshot.empty) {
      const docRef = await addDoc(collection(db, "users"), {
        correo: email,
        contraseña: password,
        cursosInscritos: ["curso1", "curso2"]
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("Se agregó correctamente a la base de datos");
      return { user: { correo: email, contraseña: password }, isNewUser: true }; 
    } else {
      console.log("El usuario ya existe en la base de datos");
      const existingUser = querySnapshot.docs[0].data();
      return { user: existingUser, isNewUser: false }; 
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    return { error: e };
  }
};