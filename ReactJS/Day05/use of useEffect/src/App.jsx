function App(){
    async function GithubProfile(params){
        const response= await fetch("https://api.github.com/users");
        const data = await response.json();
        console.log(data);
    }
    GithubProfile();
    return(
        <>
        <h1>Github User</h1>
        </>
    )
}
export default App;