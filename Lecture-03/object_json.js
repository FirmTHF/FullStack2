const objbook = {
    title: "1984" ,
    author: "George Orwell",
    isAvailable: false
};
bookJSON = JSON.stringify(objbook)
console.log(bookJSON)
console.log(typeof bookJSON)

const recievedBookObj = JSON.parse(bookJSON);
console.log(recievedBookObj);
console.log(typeof recievedBookObj);
console.log(recievedBookObj.title);