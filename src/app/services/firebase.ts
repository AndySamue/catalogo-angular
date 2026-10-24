import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyAvIAwi8MtwLAQOS42KQeh5RGwuHlCCn-o',
  authDomain: 'catalogo-angular-andy.firebaseapp.com',
  projectId: 'catalogo-angular-andy',
  storageBucket: 'catalogo-angular-andy.firebasestorage.app',
  messagingSenderId: '886670953941',
  appId: '1:886670953941:web:db7a6bc44aa3dfe4cdc15c',
});

export const db = getFirestore(app);
