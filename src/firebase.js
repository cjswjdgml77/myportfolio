import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAJzxc3WkpegKL7RjiWIX5mIz7XmguSbgI",
  authDomain: "my-awesome-project-51073.firebaseapp.com",
  projectId: "my-awesome-project-51073",
  storageBucket: "my-awesome-project-51073.appspot.com",
  messagingSenderId: "238138429123",
  appId: "1:238138429123:web:36eb6ec13a4d05ec921c76",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBSnmwvdwxNnA53Ua5cd0Z60qCoY7zmMKk",
//   authDomain: "jeonghui-firegram.firebaseapp.com",
//   projectId: "jeonghui-firegram",
//   storageBucket: "jeonghui-firegram.appspot.com",
//   messagingSenderId: "957269191633",
//   appId: "1:957269191633:web:41fbee798a7da062f6cef0",
// };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { db, storage };
