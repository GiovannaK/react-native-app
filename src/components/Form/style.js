import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: '#ff0043',
    alignItems: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: '100%',
  },
  formLabel: {
    color: '#ffffff',
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#ddd',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#ffffff'
  },
  buttonCalculator: {
    backgroundColor: '#333333',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,

  },
  errorMessage: {
    fontSize: 12,
    color: '#FF8700',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
})
