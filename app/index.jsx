
/*
  ************ NEEDS ***************
  1. (1)image for bg
  2. username and password in constant folder for example
  3. apply apperance for dark mode and light mode 
  4. open a new file to go welcome page


 ************ Algorithm ***************
  Step 1: open the log in page
  Step 2: try to log in

   try but optional 

    System save the data register input of user

*/


//  import 
// import cpcPictureBG from '@/assets/images/CPCLOGO.jpg'
import cpcPictureBG from '@/assets/images/school/CPCSchoolPhoto.jpg'
import cpcPictureLogo from '@/assets/images/school/colegio-de-la-purisima-concepcion-logo-removebg-preview.png'
// import cpcPictureBG from '@/assets/images/school/Free-Nature-Backgrounds-Sunset-by-Pixabay.jpg'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

import { BlurView } from 'expo-blur'
import React, { useState } from 'react'
import { Appearance, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import data from './Data/exampleLoginData'

const index = () => {

const colorScheme = Appearance.getColorScheme()
const userTheme = colorScheme === 'dark' ? Colors.darkMode : Colors.lightMode

const styles = myCSS(userTheme)
const [ username, setUsername ] = useState('')
const router = useRouter()

const loginClick = ()=>{
  
  let exampleLoginData = data.map(item => item.username)

  // console.log(typeof exampleLoginData)
  // console.log(typeof username)

 exampleLoginData.toString() === username.trim() 
 ? 
 router.push({
  pathname: '/home'
}) 
: router.push({
  pathname: '/register'
})

setUsername('')

   
}

  return (
   
    <SafeAreaProvider >

       <View style={styles.container}>
         
        <ImageBackground source={cpcPictureBG} style = {styles.imageBG}>

        {/* blur */}
        <BlurView intensity={50} tint="light" style={styles.loginContainer}>


            <View style={styles.loginContainer}>
              <Image source={cpcPictureLogo} style = {styles.cpclogoimage}/>
              <Text style = {styles.loginText}>Username</Text>
              <TextInput placeholder='' style = {styles.inputField} value={username}
                  onChangeText={setUsername}
                  
                  
                  />
              
      


              <Text style = {styles.loginText}>Password</Text>
              <TextInput placeholder='' style = {styles.inputField}/>
              
              
              <Pressable style = {styles.loginBtn} onPress={loginClick}>
                <Text>Log in</Text>
               
              </Pressable>
              
              
      
            </View>
            </BlurView>
        </ImageBackground>
        </View>
        
    </SafeAreaProvider>
  )
}

export default index


// My css
function myCSS(theme, colorscheme) {
    
    return StyleSheet.create({
       
        container: {
            // backgroundColor: 'grey',
            backgroundColor: theme.backgroundColor,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },

        imageBG: {
             width: '100%',
             height: '100%',
        },

        cpclogoimage: {
           width: 100,
           height: 100,
        },

        loginContainer: {

            width: '85%',
            maxWidth: 450,       
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: colorscheme === 'dark' ? 'blue' : 'rgba(255, 255, 255, 0.95)',
            borderRadius: 15,
            margin: 'auto',
            padding: 20,
            
            
        },
        loginText: {
         marginTop: 15,
         fontSize: 15,


        },
        inputField: {
          //  width: '70%',
          //  height: 35,
          //  backgroundColor: '#7148E1',
          // //  borderColor: colorscheme === 'dark' ? 'White' : 'black',
          //  marginTop: 5,
          //  borderRadius: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#333',
            height: 40,
            width: '80%',
            marginTop: 5,
            paddingVertical: 5,

        },

        loginBtn: {
           alignItems: 'center',
           backgroundColor: 'grey',
           width: 100,
           padding: 10,
           marginTop: 70,
           marginBottom: 50,
           borderRadius: 12,
        },
    })
}