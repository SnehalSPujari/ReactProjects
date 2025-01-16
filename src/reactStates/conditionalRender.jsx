import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

const ConditionalRender = () => {

    const[isLoggedIn, setIsLoggedIn] = useState(true);

    // 1.Conditional rendering using if else

//   if(isLoggedIn){
//     return <Login />;
//   } else {
//     return <SignUp />;
//   }

//   2.Conditional rendering using variable
// let tempCondition;

// if(isLoggedIn){
//     tempCondition = <Login />;
// }else{
//     tempCondition = <SignUp />;
// }

// return tempCondition;

// 3.Conditional rendering using ternary operator
    // return isLoggedIn ? <Login /> : <SignUp />;

// 4.Conditional rendering using short circuit operator
    return isLoggedIn && <Login />;
}


export default ConditionalRender