import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBLQQDYRah7BO7U9ERQrFZO9sRw4Eaf5AQ",
  authDomain: "petfamily-ecommerce.firebaseapp.com",
  projectId: "petfamily-ecommerce",
  storageBucket: "petfamily-ecommerce.appspot.com",
  messagingSenderId: "705040721317",
  appId: "1:705040721317:web:661e9000e399f27070744c"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)