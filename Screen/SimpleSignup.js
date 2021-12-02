import React,{useState} from 'react'
import {Text, TextInput, StyleSheet, View} from 'react-native'
export default function SimSignup(){
    const[email, setEmail]=useState('place holder')
    console.log((email)=>setEmail)
    return(

        <View style={styles.container}>
        <Text>Email:</Text>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
    />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });