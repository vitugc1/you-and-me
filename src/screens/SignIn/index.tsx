import React, { useMemo, useRef, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text, Alert } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

export const SignIn = () => {
  const createRef = useRef<BottomSheet>(null);
  const forgetRef = useRef<BottomSheet>(null);
  const {handleCreateUserWithEmailAndPassword,handleSignInWithEmailAndPassword, handleForgetPassword, loading} = useAuth()
  const [visiblePassword, setVisiblePassword] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateUser = async () => {
    if(!email || !password){
      Alert.alert('Aviso', 'Informe email e senha!')
      return;
    }

    if(password.length <= 6){
      Alert.alert('Aviso', 'A senha deve ter pelo menos 6 caracteres!')
      return;
    }
    await handleCreateUserWithEmailAndPassword(email, password).then(() => {
      createRef.current.close()
      setEmail('')
      setPassword('')
    })
  }

  const handleSignIn = async () => {
    if(!email || !password){
      Alert.alert('Aviso', 'Informe email e senha!')
      return;
    }
    await handleSignInWithEmailAndPassword(email, password)
  }

  const handleForgetPasswordByEmail = async () => {
    if(!email){
      Alert.alert('Aviso', 'Informe email cadastrado!')
      return;
    }
    await handleForgetPassword(email).then(() => {
      forgetRef.current.close()
      setEmail('')
    })
  }

  return (
    <View style={styles.container}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.label}>Entrar</Text>
          <Input
            placeholder='E-mail'
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Input
              placeholder='Senha'
              secureTextEntry={!visiblePassword}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />

            {visiblePassword ? (
              <TouchableOpacity style={styles.visiblePassword} onPress={() => setVisiblePassword(prev => !prev)}>
                <Entypo name="eye" size={24} color="black" />
              </TouchableOpacity>
            ):(
              <TouchableOpacity style={styles.visiblePassword} onPress={() => setVisiblePassword(prev => !prev)}>
                <Entypo name="eye-with-line" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
          <Button
            text='Entrar'
            onPress={handleSignIn}
            loading={loading}
          />

          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => createRef.current.expand()}>
              <Ionicons name="person-add" size={20} color="#fff" />
              <Text style={styles.textButtonActions}>Criar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => forgetRef.current.expand()}>
              <MaterialIcons name="email" size={24} color="#fff" />
              <Text style={styles.textButtonActions}>Esqueci senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback> 

      <BottomSheet
        ref={createRef}
        snapPoints={[0.01, '80%']}
        handleIndicatorStyle={{ backgroundColor: '#fff' }}
        style={{ backgroundColor: '#080606', borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        backgroundStyle={{ backgroundColor: '#080606'}}
      >
        <BottomSheetScrollView  
          style={{  backgroundColor: '#080606'}}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.label}>Criar conta</Text>
              <Input
                placeholder='E-mail'
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <View style={{ width: '100%', alignItems: 'center' }}>
                <Input
                  placeholder='Senha'
                  secureTextEntry={!visiblePassword}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />

                {visiblePassword ? (
                  <TouchableOpacity style={styles.visiblePassword} onPress={() => setVisiblePassword(prev => !prev)}>
                    <Entypo name="eye" size={24} color="black" />
                  </TouchableOpacity>
                ):(
                  <TouchableOpacity style={styles.visiblePassword} onPress={() => setVisiblePassword(prev => !prev)}>
                    <Entypo name="eye-with-line" size={24} color="black" />
                  </TouchableOpacity>
                )}
              </View>
              <Button
                text='Criar'
                onPress={handleCreateUser}
                loading={loading}
              />
            </View>
          </TouchableWithoutFeedback> 
        </BottomSheetScrollView >
      </BottomSheet>

      <BottomSheet
        ref={forgetRef}
        snapPoints={[0.01, '60%']}
        handleIndicatorStyle={{ backgroundColor: '#fff' }}
        style={{ backgroundColor: '#080606', borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        backgroundStyle={{ backgroundColor: '#080606'}}
      >
        <BottomSheetScrollView  
          style={{  backgroundColor: '#080606'}}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.label}>Recuperar senha</Text>
              <Input
                placeholder='E-mail'
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              
              <Button
                text='Enviar'
                onPress={handleForgetPasswordByEmail}
                loading={loading}
              />
            </View>
          </TouchableWithoutFeedback> 
        </BottomSheetScrollView >
      </BottomSheet>
    </View>
  )
}