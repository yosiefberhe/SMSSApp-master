 import React from 'react';

import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 
 function Nav(props) {
   return (
     
       <NavigationContainer>
         <NavLink classname= "d-inline p-2 bg-dark text-white" to="/">
         Login 
       </NavLink>
       <NavLink classname= "d-inline p-2 bg-dark text-white" to="/">
         Registration 
       </NavLink>
       <NavLink classname= "d-inline p-2 bg-dark text-white" to="/">
         Employer 
       </NavLink>
       <NavLink classname= "d-inline p-2 bg-dark text-white" to="/">
         Job Seekers 
       </NavLink>
       </NavigationContainer>
     
   );
 }
 
 export default Nav;