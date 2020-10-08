import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

   // create the header
   function header() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>What's Sko'n on</Text>
        </View>
      </View>
    );
  }

  return (


    <View style={styles.container}>
      {/* make a new view for the header of our app*/}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>What's Sko'n on?</Text>
      </View>

      <Text>How does this fucking... does it still?</Text>

      {/* make a view for the foot */}
      <View style={styles.footer}>
        <Text> Can we make a footer!</Text>

        <View style={{flexDirection: 'row'}}>
          <Image style={styles.footerImg} source={require('./assets/court.png')} />
          <Image style={styles.footerImg} source={require('./assets/profile.png')} />
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#B2B2B2',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#B2B2B2',
    alignItems: 'center',
    // justifyContent: 'flex-end'
  },
  footerImg: {
    marginHorizontal: 60,
    marginBottom: 10,
    height: 50,
    width: 70,
  }
});
