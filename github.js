class GitHub{
    constructor(){
        this.client_id = "548460fb6427f2ded7ab";
        this.client_secret = "bc4f62eeef18f3daa997fbfd9b9f051bc4a78dd9";
    }
    async getData(user){
        //fetching dat from api
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposeResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repose = await reposeResponse.json();

        //returning profile as a object since we need respos
        return{
            profile : profile,
            repose : repose
        }
    }
}