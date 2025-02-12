import {Alert, SafeAreaView, Text, View} from 'react-native';
import MyButton from './MyButton';

const FunctionalComponent = () => {
  return (
    <SafeAreaView>
      <MyButton
        title={'Click Me'}
        onPress={() => {
          Alert.alert('Hello');
        }}
      />
    </SafeAreaView>
  );
};
export default FunctionalComponent;
