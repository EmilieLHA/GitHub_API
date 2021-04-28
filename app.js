// DOM elements selection 

let form                    = document.querySelector('form');
let inputUsername           = document.querySelector('input');
let profiltePicture         = document.querySelector('#profilePicture');
let userFullName            = document.querySelector('#fullName');
let numberOfFollowers       = document.querySelector('#followers');
let numberOfRepositories    = document.querySelector('#repositories');
let userBio                 = document.querySelector('#bio');

//API Call

async function getUser(userName){

    let data = await fetch(`https://api.github.com/users/${userName}`);
    let resultatsAPI = await data.json();
    // console.log(data);
    cardCreation(resultatsAPI);

}


//Research Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.childNodes[1].value); Just fo fun
    if(inputUsername != ""){
        let user = e.currentTarget.childNodes[1].value;
        getUser(user);
    } else {
        return;
    }
})

// Card Creation 
function cardCreation(resultatsAPI) {
    userFullName.innerText          = resultatsAPI.name;
    numberOfFollowers.innerText     = resultatsAPI.followers;
    numberOfRepositories.innerText  = resultatsAPI.public_repos;
    userBio.innerText               = resultatsAPI.bio;
    profiltePicture.src             = resultatsAPI.avatar_url;
}

//initialization
getUser("emilieLHA");
