import { StyleSheet } from 'react-native';
import { SIZES } from '../constants';



const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        padding: 20 
    },
    header:{
        fontSize: 20,
        fontFamily: 'bold',
        marginBottom: SIZES.small,
        marginTop: SIZES.small,
        textAlign: 'center',
    },
   skillContainer:{
        marginBottom: 20, 
        borderWidth: 1, 
        borderRadius: 5,
        borderColor: 'black',
        padding: 10 
   },
   jobTitle:{
    fontFamily: 'bold', 
    marginBottom: 5 
   },
   salary:{
    marginBottom: 5,
    color: 'gray',
   },
   skill:{
    fontSize: 18,
    fontFamily: 'bold',
   },
   skills:{
    fontSize: 16,
    fontFamily: 'regular',
   }
    
});

export default styles;