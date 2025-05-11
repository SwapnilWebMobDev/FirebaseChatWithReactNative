import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Signup');
        },2000);
    }, []);
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.logo}>{'Firebase Chat\nApp'} </Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    logo: {
        color: 'white', fontSize: 40, textAlign: 'center',
    },
});

export default Splash;
