import firebase from "firebase/app";
import 'firebase/firestore';

import { firebaseKeys } from './keys';

firebase.initializeApp(firebaseKeys);

const db = firebase.firestore();

export const messages = {
  updateVotes: (id, amount) => {
    return db.collection("clickbath").doc(id).update({
      votes: firebase.firestore.FieldValue.increment(amount)
    });
  },
  delete: (id) => {
    return db.collection("clickbath").doc(id).delete();
  },
  create: (Name) => {
    return db.collection("clickbath").add({
      Name,
      Tone1: $("input[name='tone1']:checked").val(), 
      Tone2: $("input[name='tone2']:checked").val(), 
      votes: 0,
      keyNote: $('.actualNote').text(),
      keyScale: $('.actualKey').text(),
      keyMood: $('.actualMood').text(),
    });
  },
  getAll: () => {
    return db.collection('clickbath').get().then((snapshot) => {
      return snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
    });
  }
};



