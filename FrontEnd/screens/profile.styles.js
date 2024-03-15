import { StyleSheet } from 'react-native';
import { SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgray',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  skillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  skillName: {
    flex: 1,
    marginRight: 10,
    fontFamily: 'regular',
  },
  input: {
    width: SIZES.width * 0.2,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  skillinput: {
    width: SIZES.width * 0.4,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  perinput: {
    width: 70,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  addSkillContainer: {
    position: 'absolute',
    bottom: 0,
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addbtn: {
    fontFamily: 'semibold',
  },
});

export default styles;
