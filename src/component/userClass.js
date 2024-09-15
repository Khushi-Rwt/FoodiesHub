import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log("Constructor called");
        super(props);

        this.state = {
            userInfo: {
                name : "dummy-name",
                // location : "dummy-location",
            }
        }

        // console.log(this.state.userInfo);
    }

    async componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("setInterval calling")
        },1000)
        console.log("Component Did Mount")
        // API call
        const data = await fetch("https://api.github.com/users/Khushi-Rwt");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);   
    }   

    componentDidUpdate(){
        console.log("Component Did Update");
    }   

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component Will Unmount Called")
    }
    render(){
        console.log("Child rendered");
        const {login, avatar_url} = this.state.userInfo;
        // debugger;
        return(
            <div className="user-card">
                <img height="100px" width="100px" src={avatar_url} />
                <h2>Name - {login}</h2>
                <h4>Contact - khushirwt17@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;

//Below is how the whole LIFECYCLE method works

/*
-----------MOUNTING------------
    Constructor is called(with dummy data)
    Render is called(with dummy data)
        <HTML dummy /> (html has dummy data)
    Component Did Mount is called
        <API Call>
        <this.setState> -> State variable is updated

-----------UPDATE---------------
    render(API data) (render method called with API data)
    <HTML (new API data) (HTML is loaded with new API data)
    componentDidUpdate()
*/