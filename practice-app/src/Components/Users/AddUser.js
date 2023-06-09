
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const AddUser =(props)=>{
    
    const [userName,setUserName] = useState("");
    const [userAge,setUserAge] = useState("");
    const [error,setError] = useState("");
        
    const addUserHandler=(event)=>{
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+userAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter the valid age (>0).'
            });
            return;
        }
        props.onAddUser(userName,userAge);
        setUserAge('');
        setUserName('');
    };

    const userNameChangeHandaler=(event)=>{
        setUserName(event.target.value);
    }
    const userAgeChangeHandaler=(event)=>{
        setUserAge(event.target.value);
    }

    const erroHandler = () =>{
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={erroHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor=""> Username </label>
                    <input id="username" type="text" value={userName} onChange={userNameChangeHandaler}/>
                    <label htmlFor="">Age (Years) </label>
                    <input id="age" type="number" value={userAge} onChange={userAgeChangeHandaler}/>
                    <Button type="submit" className="Button">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;