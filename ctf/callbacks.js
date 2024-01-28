const posts = [
    {title: 'First Post', body: 'Body of post one'},
    {title: 'Second Post', body: 'Body of post two'}

];

const postListEl = document.getElementById("post-list");
const promisesEl = document.getElementById("promises");
//functions with timeouts to mimic sending requests to server
function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output+=`<li>${post.body}</li>`;
        });
        postListEl.innerHTML= output;
    }, 1000);
}
//change this to an async 
//sync code
// function createPost(post) {
//     setTimeout(()=>{
//         posts.push(post);
//     }, 2000);
// }

//this makes it possible to send a particular function as a parameter
//use getPosts as param
// function createPost(post, callback) {
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     }, 2000);
// }

//use a promise
function createPost(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;

            if (!error){
                resolve();
            } else {
                reject('Ooops something went wrong');
            }
        }, 2000); 

    });
   
}

//make an Async function to use await
// async function init() {
//     await createPost({title: 'Post Three', body: 'Body for post 3'});
//     getPosts();

// }

//async await with fetch

async function fetchUsers(){
    //make a place to keep the promise that is returned
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //then make a place to hold the resulkt of the processed response
    const data = await response.json();
    //then do something with the results
    console.log(data);
    data.forEach((user) =>{
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML=user.name;
        promisesEl.appendChild(newParagraph);
    })

}
getPosts();

// init();
fetchUsers();
// createPost({title: 'Post Three', body: 'Body for post 3'})
//     .then(getPosts)
//     .catch(error =>alert(error));

    //for multiple promises Promise.all 
    const promise1 = Promise.resolve("Hi friend");
    const promise2 = 10;
    const promise3 = new Promise((resolve, reject)=>
        setTimeout(resolve, 2000, 'Goodbye'));
    
    const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
        //response.json();
        console.log(response.json());
    });

    // Promise.all([promise1, promise2, promise3]).then((values)=>console.log(values));

    // Promise.all([promise1, promise2, promise3]).then((values)=>displayValues(values));

    // function displayValues(values){
    //     //values.forEach((item)=>console.log(item));
    //     values.forEach((item)=>{
    //         createPost(item)
    //             .then(getPosts)
    //             .catch(error =>alert(error));;
    //         // const newParagraph = document.createElement("p");
    //         // newParagraph.innerHTML=item;
    //         // promisesEl.appendChild(newParagraph);
    //     })
    // }