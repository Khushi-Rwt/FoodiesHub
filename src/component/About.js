import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./userClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }
    render(){
        // console.log("parent render");
        return(
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User - <UserContext.Consumer>
                        {({loggedInUser})=>(
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h1>About Section</h1>
                {/* <User name={"Khushi Rawat(function)"} location={"Delhi(function)"} /> */}
                <UserClass name={"Khushi Rwt(class)"} location={"Delhi(class)"} />
            </div>
        );
    }
}   

/* 
- Parent Constuctor
- Parent Render

    - Khushi Rwt(class) Constructor
    - Khushi Rwt(class) Render

    - kR Constructor
    - kR Render 

    - Khushi Rwt(class) ComponentDidMount
    - kR ComponentDidMount
    
- Parent ComponentDidMount
*/

export default About;