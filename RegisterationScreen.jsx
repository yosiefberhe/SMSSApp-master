import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import EmployerRegisterationForm from '../employerscreens/EmployerRegisterationForm';
import JobseekerRegisterationForm from '../jobseekerscreens/JobseekerRegisterationForm';

const RegisterationScreen = ({ navigation }) => {

  const [registerType, setRegisterType] = React.useState(null);

  return (
    <View>
      <Button color="blue" title="Register As Employer" onPress={() => setRegisterType("Employer") } />
      
      <Button color="blue" title="Register As Jobseeker" onPress={() => setRegisterType("Jobseeker")} />

      {registerType === "Employer" && <EmployerRegisterationForm />}
      {registerType === "Jobseeker" && <JobseekerRegisterationForm />}

      <Button color="blue" title="or Sign In" onPress={() => navigation.push("LoginScreen")}/>
    </View>
  );
}


export default RegisterationScreen;
