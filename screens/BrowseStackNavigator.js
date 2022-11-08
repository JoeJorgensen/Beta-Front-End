import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BoulderingScreen from './BoulderingScreen';
import Browse from './Browse';
import ProjectsScreen from './ProjectsScreen';
import RouteScreen from './RouteScreen';
import TrainingScreen from './TrainingScreen';

const Stack = createNativeStackNavigator();

const BrowseStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BrowseIndex">
      <Stack.Screen name="BrowseIndex" component={Browse} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Training" component={TrainingScreen} />
      <Stack.Screen name="Bouldering" component={BoulderingScreen} />
      <Stack.Screen name="Route" component={RouteScreen} />

      
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  browse: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'teal',
    borderWidth: 3,
    borderRadius: 10,

    margin: 15,
  },
});

export default BrowseStackNavigator;
