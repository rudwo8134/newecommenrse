import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionanddocuments = async(collectionName, objectsToadd) =>{
  const collectionRef = firestore.collection(collectionName)
  console.log(collectionRef)

  const batch = firestore.batch()
  objectsToadd.forEach(obj =>{
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const converCollectionssnapshottomap=(collections)=>{
  const transformedcollections = collections.docs.map(doc =>{
    const {title, items} = doc.data();
    return{
      routeName: encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })
  return transformedcollections.reduce((accumulator, colloection)=>{
    accumulator[colloection.title.toLowerCase()] = colloection
    return accumulator
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getcurrentuser = () =>{
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export const googleprovider = new firebase.auth.GoogleAuthProvider();
googleprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleprovider);

export default firebase;
