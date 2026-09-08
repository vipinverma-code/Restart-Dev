function Clock(){
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    return(
        <>
        <h1>Current Time:</h1>
        </>
    )
}

export default Clock;