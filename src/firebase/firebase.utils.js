import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBJ7igttGOgTPuoQ-9zcujVe3LX9ktbRIY",
  authDomain: "raduga-30719.firebaseapp.com",
  databaseURL: "https://raduga-30719.firebaseio.com",
  projectId: "raduga-30719",
  storageBucket: "raduga-30719.appspot.com",
  messagingSenderId: "836298687411",
  appId: "1:836298687411:web:835407c1b5ac091edb41c6",
  measurementId: "G-8L35CVR2NY"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log("error creating user", err.message)
      console.log(err.response.data)
    }
  }
  return userRef
}

export const createClassDocument = async ({ ...classData }) => {
  try {
    const createdAt = new Date()
    const res = await firestore.collection("classes").add({
      createdAt,
      ...classData
    })
    return res
  } catch (err) {
    console.log("error creating class", err.message)
    console.log(err.response.data)
  }
}

// export const getClasses = async () => {
//   try {
//     const classesRef = firestore.collection("classes")
//     const snapshot = await classesRef.get()
//     const res = []
//     snapshot.forEach(doc => {
//       res.push(doc.data())
//     })
//     console.log(res)
//     return res
//   } catch (err) {
//     console.log("error creating class", err.message)
//     console.log(err.response.data)
//   }
// }

export const getClasses = async () => {
  try {
    const res = []
    await firestore
      .collection("classes")
      .orderBy("day", "asc")
      .orderBy("startTime", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log("doc: ", doc)
          console.log("data: ", doc.data())
          res.push(doc.data())
        })
      })
    console.log(res)
    return res
  } catch (err) {
    console.log("error creating class", err.message)
    console.log(err.response.data)
  }
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
