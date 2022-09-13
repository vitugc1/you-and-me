import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 88,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#202024',
  },
  visible: {
    width: 10,
    height: "100%",
    backgroundColor: "#FBA94C",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  content: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E1E1E6'
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#E1E1E6',
    marginLeft: 10
  },
  time: {
    width: 48,
    height: 48,
    backgroundColor: '#29292E',
    borderRadius: 100,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})