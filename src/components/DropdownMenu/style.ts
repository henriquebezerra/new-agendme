import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fabStyle: {
    backgroundColor: '#268596',
    position: 'absolute',      
    margin: 16,                
    right: 0,                 
    bottom: 0,                 
    elevation: 6,              
    shadowColor: "#000",       
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  mainFab: {
    paddingBottom: 10
  },
  optionMenuStyle: { 
    backgroundColor: '#FFFFFF',
    borderWidth: 1,              
    borderColor: '#F0F0F0',      
    elevation: 4,
  },
  labelStyle: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 3,
  }
});