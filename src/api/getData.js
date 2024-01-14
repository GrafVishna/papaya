import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

const getData = async (getCollection) => {
  const usersCollection = collection(db, getCollection);
  try {
    const querySnapshot = await getDocs(usersCollection);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};

export default getData;
