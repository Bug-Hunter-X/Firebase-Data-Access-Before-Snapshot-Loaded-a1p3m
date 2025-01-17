The solution involves using `.then()` to handle the promise returned by `getDoc()`, ensuring the data is loaded before access.  Async/await provides a more readable alternative.

//Buggy Code (bug.js)
const docRef = doc(db, "collections", "docId");
const docSnap = await getDoc(docRef);
const data = docSnap.data(); // Error if data is not loaded
console.log(data.someProperty); 

//Corrected Code (bugSolution.js)
const docRef = doc(db, "collections", "docId");
const docSnap = await getDoc(docRef);

docSnap.exists() ? console.log(docSnap.data().someProperty) : console.log('No such document!');
or
const docSnap = await getDoc(docRef);
docSnap.exists() ?
  docSnap.data().someProperty.then((data) => {
    console.log(data);
  })
  :
  console.log('No such document!');