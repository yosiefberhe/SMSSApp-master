import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';

function AuthScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../../assets/splash.png')}></Image>
        <Text style={styles.title}>The Most Comprehensive Search Engine For Jobs.</Text>
      </View>

      <View style={styles.button}>
        <Button color="white" title="Sign In" onPress={() => navigation.push("LoginScreen")}/>
      </View>
        <Button color="#3385d9" title="Create an Account" onPress={() => navigation.push('Register')}/>      

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

  title: {
    fontSize: 12.5,
    fontWeight: 'bold'
  },
  
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },

  button: {
    paddingVertical: 5,
    paddingHorizontal: 140,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#3385d9'
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }

});

export default AuthScreen;