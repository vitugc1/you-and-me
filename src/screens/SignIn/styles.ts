import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.9,
  },
  visiblePassword: {
    position: 'absolute',
    right: '8%',
    bottom: '40%',
  },
  buttonSignInWithGoogle: {
    width: '70%',
    height: 50,
    backgroundColor: '#fff',

    borderRadius: 5,
  },
  textButtonActions: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5
  },
  label: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20, 
    alignSelf: 'flex-start'
  }
})