class UI{
    displayProfile(data){
        //create profile from scratch
        console.log(data)
        document.querySelector(".container-result").innerHTML = 
        `
        <div class="result">
            <div class= "col-1">
                <img src= ${data.profile.avatar_url} alt="">
                <a href= ${data.html_url}>View Profile</a>
            </div>
            <div class="col-2">
                <div class= "col-4">
                    <div>public Repos: ${data.profile.public_repos}</div>
                    <div>Public Gits: ${data.profile.public_gits} </div>
                    <div>Followers: ${data.profile.followers}</div>
                    <div>following: ${data.profile.following}</div>
                </div class = "col4">
                <div class="row-4">
                    <span>company : ${data.profile.company}</span>
                    <span>Website/blog : ${data.profile.bolg} </span>
                    <span>Location : ${data.profile.location} </span>
                    <span>Member since : ${data.profile.created_at}</span>
                </div> 
                </ul>
            </div>
        </div>
        `
    }
    clearProfile(){
        document.querySelector(".container-result").innerHTML = "";
    }
    showError(message, className){
        const h1 = document.querySelector("h1");
        //creating a division
        const div = document.createElement("div");
        div.className = className;
        div.appendChild(document.createTextNode(message));
        //inserting before h1
        document.querySelector(".container").insertBefore(div, h1)
        setTimeout(()=>{
            div.remove()
        }, 2000)
    }
    //display repose
    displayRepos(data){
        const repose = document.querySelector(".repose");
        console.log(data)
        data.forEach(object =>{
            repose.innerHTML += `
            <div class= "hellow">
                <div>
                    <a href=${object.html_url}>${object.name}</a>
                </div>
                <div class= "col-4 special">
                    <div>stars : ${object.stargazers_count}</div>
                    <div>watchers : ${object.watchers_count}</div>
                    <div>forks : ${object.forks_count}</div>
                </div>
            </div>
            `
        })
    }
    clearRepose(){
        document.querySelector(".repose").innerHTML = ""
    }
}