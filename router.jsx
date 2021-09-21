
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
// import {useAuth} from '../contexts/Auth';
import SplashScreen from '../Component/SplashScreen';
// import {Loading} from '../components/Loading';

export const Router = () => {

  // const {authData, loading} = useAuth();

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
   }, 3000)
  }, []);

  if (loading) {
    return <SplashScreen />
  }
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}      
    </NavigationContainer>
  );
};