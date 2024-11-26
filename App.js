import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini Font</Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'crimson' }]} /> 
        <View style={[styles.box, { backgroundColor: 'darkorchid' }]} /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    fontSize: 24,            
    fontWeight: 'bold',        
    color: 'blue',            
    marginBottom: 20,         
  },
  row: {
    flexDirection: 'row',      
    justifyContent: 'space-between', 
    width: '80%',              
    paddingHorizontal: 20,     
  },
  box: {
    width: 100,              
    height: 100,              
  },
});

export default App;
