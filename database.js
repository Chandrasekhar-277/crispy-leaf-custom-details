import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const customerRef = collection(db, "customers");

export async function saveCustomer(data) {
  await addDoc(customerRef, data);
}

export async function getCustomers() {
  const snapshot = await getDocs(customerRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function deleteCustomer(id) {
  await deleteDoc(doc(db, "customers", id));
}
