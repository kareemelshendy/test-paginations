import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyD6F9EZksJ6ITCJOH7LC0-UyT-Dv4aXBJ8',
    authDomain: 'task-fcadb.firebaseapp.com',
    databaseURL: 'https://task-fcadb-default-rtdb.firebaseio.com',
    projectId: 'task-fcadb',
    storageBucket: 'task-fcadb.appspot.com',
    messagingSenderId: '620682735921',
    appId: '1:620682735921:web:3afdcc65928259ae95c010',
    measurementId: 'G-F7FPTE3FVH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
