import { db } from '@/firebaseConfig';
import { useRouter } from 'expo-router';
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const firebase = () => {

  const router = useRouter()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const haddleSubmit = () =>{
        // console.log(username)
        // console.log(password)
        
        // router.push('/home')

      
     try {
        addDoc(collection(db, "Students_info"), {
                username: username,
                password: password,
                    });

     } catch (error) {
      console.error(error)

     } finally{
        setUsername('')
        setPassword('')
     }

  }
  
  return (
    <View style = { styles.container}>
      <TextInput placeholder='username' onChangeText={setUsername} value = {username} style = {styles.usernameField } ></TextInput>
      <TextInput placeholder='password' onChangeText={setPassword} value = {password} style = {styles.passwordField }></TextInput>
      <Pressable onPress={ haddleSubmit } style = { styles.submitButton }>
        <Text>Submit</Text>
      </Pressable>
    </View>
  )
}

export default firebase

const styles = StyleSheet.create({

  container: {
    
    margin: 'auto',
    width: 400,
    maxWidth: '50%',
    maxHeight: '50%',
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  usernameField: {
    width: '70%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,

  },
  passwordField: {
    width: '70%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,

  },

  submitButton:{
    width: '40%',
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    
    alignItems: 'center'
  },

})