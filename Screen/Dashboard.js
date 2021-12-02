// import { style } from 'dom-helpers'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { auth, onAuthStateChanged, collection, getDocs, db, } from '../Components/Firebase'
import { useNavigation } from "@react-navigation/core"

export default function Dashboard(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
         const querySnapshot =  getDocs(collection(db, "users"));
       
querySnapshot.forEach((doc) => {

  console.log(`${doc.data()}`);
 const userdata = `${doc.id} => ${doc.data()}`
});
        //   console.log('userEmail', user.userName)
        //   console.log('uid', uid)
}else {
          // User is signed out
          // ...
        }
      });
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>THis is ReactNative Dashboard</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})