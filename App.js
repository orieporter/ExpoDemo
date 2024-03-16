import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // then in your login function
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log("User logged in: ", user);
        })
        .catch((error) => {
          console.error("Error logging in: ", error);
        });
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Pressable onPress={handleLogin} style={{backgroundColor: 'blue', padding: 10}}>
                <Text style={{color: 'white'}}>Login</Text>
            </Pressable>
        </View>
    );
}