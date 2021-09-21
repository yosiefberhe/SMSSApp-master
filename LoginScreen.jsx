import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AuthScreen from './AuthScreen';

export class LoginScreen extends AuthScreen{
constructor(props){
  super(props);
  this.state={deps:[], addModalShow:false, editModalShow:false}
}

refreshList(){
  fetch(process.env.REACT_APP_API+'LoginScreen')
  .then(response=>response.json())
  .then(data=>{
      this.setState({deps:data});
  });
}

componentDidMount(){
  this.refreshList();
}

componentDidUpdate(){
  this.refreshList();
}

deleteDep(depid){
  if(window.confirm('Are you sure?')){
      fetch(process.env.REACT_APP_API+'LoginScreen/'+depid,{
          method:'DELETE',
          header:{'Accept':'application/json',
      'Content-Type':'application/json'}
      })
  }
}


}

function _LoginScreen({ navigation }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style = {styles.container}>
            <Text>Email Address: </Text>
            <TextInput style = {styles.input} placeholder = "e.g maryshelley123@gmail.com" onChangeText={(val) => setEmail(val)} />

            <Text>Password: </Text>
            <TextInput style = {styles.input} placeholder = "Password" onChangeText={(val) => setPassword(val)} />

      <Button title="Login" onPress={() => alert(email) }/>
      <>
      <Text>Don't have an account?</Text>
    
            <Button color="#3385d9" title="Create an Account" onPress={() => navigation.push('Register')}/>      
      </>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 250,
  }

})
;
export default LoginScreen;
