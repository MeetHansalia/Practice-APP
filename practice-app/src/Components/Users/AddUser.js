
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import { useState , useRef } from "react";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Wrapper/Wappers";

const AddUser =(props)=>{
    const nameInputRef =useRef();
    const ageInputRef =useRef();
   
   
    // const [userName,setUserName] = useState("");
    // const [userAge,setUserAge] = useState("");
    const [error,setError] = useState("");
        
    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredName =nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value; 
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter the valid age (>0).'
            });
            return;
        }
        props.onAddUser(enteredName,enteredUserAge);
        // setUserAge('');
        // setUserName('');
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    };

    // const userNameChangeHandaler=(event)=>{
    //     setUserName(event.target.value);
    // }
    // const userAgeChangeHandaler=(event)=>{
    //     setUserAge(event.target.value);
    // }

    const erroHandler = () =>{
        setError(null);
    }

    return(
        <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={erroHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor=""> Username </label>
                    <input 
                        id="username" 
                        type="text" 
                        // value={userName}
                        // onChange={userNameChangeHandaler}
                        ref={nameInputRef}
                        />
                    <label htmlFor="">Age (Years) </label>
                    <input 
                        id="age" 
                        ype="number" 
                        // value={userAge} 
                        // onChange={userAgeChangeHandaler}
                        ref={ageInputRef}
                        />
                    <Button type="submit" className="Button">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;