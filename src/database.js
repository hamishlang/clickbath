import firebase from "firebase/app";
import 'firebase/firestore';

import { firebaseKeys } from './keys';

firebase.initializeApp(firebaseKeys);

const db = firebase.firestore();

export const messages = {
  updateVotes: (id, amount) => {
    return db.collection("messages").doc(id).update({
      votes: firebase.firestore.FieldValue.increment(amount)
    });
  },
  delete: (id) => {
    return db.collection("messages").doc(id).delete();
  },
  create: (message) => {
    return db.collection("messages").add({
      message,
      votes: 0
    });
  },
  getAll: () => {
    return db.collection('messages').get().then((snapshot) => {
      return snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
    });
  }
};
