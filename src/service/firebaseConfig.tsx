import { FirebaseApp, initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAXp0nXQCY7DyOvJVqLhY2Umfjc0vwEzjo',
  authDomain: 'keepalive-e81f4.firebaseapp.com',
  projectId: 'keepalive-e81f4',
});

export const db = getFirestore(firebaseApp);
export const userColletionRef = collection(db, 'users');
