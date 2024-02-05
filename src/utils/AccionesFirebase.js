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
export const addInscripcion = async (data) => {
  try {
    // Add your form data to the "formIncripcion" collection
    const docRef = await addDoc(collection(db, 'formIncripcion'), data);

    return { success: true, docRef };
  } catch (error) {
    console.error('Error adding user to formIncripcion collection:', error);
    return { success: false, error };
  }
};
export const getCourseByUserEmail = async (email) => {
  try {
    const querySnapshot = await getDocs(query(collection(db, 'formIncripcion'), where('email', '==', email)));

    if (querySnapshot.empty) {
      // No se encontró ningún usuario con ese correo
      return null;
    }

    // Obtén la información del curso del primer documento (asumiendo que solo hay uno)
    const userDoc = querySnapshot.docs[0].data();
    const course = userDoc.course;

    return course;
  } catch (error) {
    console.error('Error al obtener información del curso por correo:', error);
    throw error;
  }
};
