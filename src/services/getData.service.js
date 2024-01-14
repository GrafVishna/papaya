import { useQuery } from "react-query";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";

/**
 * ! GET ONE DATA
 */
export const getOneData = (table, uid) => {
  const fetchUserByUid = async () => {
    const docRef = doc(db, table, uid);
    const docSnap = await getDoc(docRef);
    return docSnap ? docSnap.data() : null;
  };

  const { data, isLoading, isSuccess, isError, refetch, isRefetching } =
    useQuery([table, uid], fetchUserByUid);

  return { data, isLoading, isError, refetch, isRefetching };
};

/**
 * ! GET ALL DATA
 */
export const getAllData = (table) => {
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, table));
    return querySnapshot.docs.map((doc) => doc.data());
  };

  const { data, isLoading, isError, refetch, isRefetching } = useQuery(
    table,
    fetchUsers,
  );

  return { data, isLoading, isError, refetch, isRefetching };
};
