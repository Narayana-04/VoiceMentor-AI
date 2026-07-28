import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";


// Save Message
export async function saveMessage(role, text) {
  const user = auth.currentUser;

  if (!user) return;

  await addDoc(
    collection(db, "users", user.uid, "messages"),
    {
      role,
      text,
      createdAt: serverTimestamp(),
    }
  );
}


// Load Messages
export async function loadMessages() {
  const user = auth.currentUser;

  if (!user) return [];

  const q = query(
    collection(db, "users", user.uid, "messages"),
    orderBy("createdAt")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => doc.data());
}


// Clear Messages
export async function clearMessages() {
  const user = auth.currentUser;

  if (!user) return;

  const snapshot = await getDocs(
    collection(db, "users", user.uid, "messages")
  );

  const promises = snapshot.docs.map((document) =>
    deleteDoc(
      doc(
        db,
        "users",
        user.uid,
        "messages",
        document.id
      )
    )
  );

  await Promise.all(promises);
}