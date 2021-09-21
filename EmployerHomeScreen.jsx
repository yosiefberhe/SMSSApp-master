import React from 'react';
import { Text, StyleSheet, View, Button, Image } from 'react-native';
import Nav from '../../Component/Nav';

function EmployerHomeScreen(props) {
  return (
    <View style={styles.container}>

    <Nav />
        <Text style={styles.title}>Welcome to Employer HomePage.</Text>
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

export default EmployerHomeScreen;