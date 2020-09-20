import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAsRF636QM1Kg-Yc1HKbgnkCgC2zYeZve8",
  authDomain: "raduga-firebase.firebaseapp.com",
  databaseURL: "https://raduga-firebase.firebaseio.com",
  projectId: "raduga-firebase",
  storageBucket: "raduga-firebase.appspot.com",
  messagingSenderId: "710388044149",
  appId: "1:710388044149:web:025e067ec360ebf45a433c",
  measurementId: "G-VVYVTKZDYP"
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

export const createClassDocument = async (classId, additionalData) => {
  console.log("classId: ", classId)
  console.log("additionalData: ", additionalData)

  if (!classId) {
    const collectionRef = firestore.collection("classes")
    const newDocRef = await collectionRef.doc()
    console.log("newDocRef: ", newDocRef)
    console.log("newDocRef.id: ", newDocRef.id)
    const classId = newDocRef.id
    try {
      newDocRef.set({ classId, ...additionalData })
    } catch (err) {
      console.log("error creating user", err.message)
      console.log(err.response.data())
    }
    return classId
  }
}

export const getClasses = async () => {
  console.log("getClasses")
  try {
    const result = []
    await firestore
      .collection("classes")
      .orderBy("day", "asc")
      .orderBy("startTime", "asc")
      .get()
      .then(querySnapshot => {
        console.log("querySnapshot: ", querySnapshot)

        querySnapshot.forEach(doc => {
          console.log("doc: ", doc)
          console.log("data: ", doc.data())

          result.push(doc.data())
        })
      })
    console.log("result: ", result)
    return result
  } catch (err) {
    console.log("error creating class", err.message)
    console.log(err.response)
  }
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
