import { collection, getDocs,addDoc, query, where } from "firebase/firestore"; 
import { db } from "./FirebaseConfig";
export const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

export const addUser = (email, password) => {
  return new Promise((resolve, reject) => {
    try {
      const querySnapshotPromise = getDocs(query(collection(db, "users"), where("correo", "==", email)));

      querySnapshotPromise
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            return addDoc(collection(db, "users"), {
              correo: email,
              contraseña: password,
              cursosInscritos: ["curso1", "curso2"]
            });
          } else {
           
            const existingUser = querySnapshot.docs[0].data();
            resolve({ user: existingUser, isNewUser: false });
          }
        })
        .then((docRef) => {
          if (docRef) {

            resolve({ user: { correo: email, contraseña: password }, isNewUser: true });
          }
        })
        .catch((error) => {
   
          reject({ error });
        });
    } catch (error) {

      reject({ error });
    }
  });
};
