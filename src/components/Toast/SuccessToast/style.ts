import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  successStyle: {
    borderLeftColor: '#4CAF50', 
    backgroundColor: '#E8F5E8',
    borderRadius: 10,
    minHeight: 80
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  descriptionStyle: {
    fontSize: 14,
    color: '#666'
  },
  contentContainerStyle:{
    paddingHorizontal: 15,
    paddingVertical: 15
  }
});

export default style;