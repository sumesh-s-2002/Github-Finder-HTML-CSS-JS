const github = new GitHub;
const ui =  new UI;
//adding event listner to input
document.getElementById("search").addEventListener("keyup", (e)=>{
    //define input text
    let inputText = e.target.value;
    //fetch data from api
    if(inputText!== ""){
        github.getData(inputText)
        .then(data =>{
            if(data.profile.message === "Not Found"){
                ui.showError("not Found", "error");
                ui.clearProfile()
            }
            else{
                ui.displayProfile(data)
                ui.displayRepos(data.repose)
            }
        })
    }else{
        ui.clearProfile();
        ui.clearRepose();
    }
});