import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import ProjectsScreen from "./ProjectsScreen"
import TrainingScreen from "./TrainingScreen"


const Browse = ({navigation})=>{
    return(
          <View  style={styles.browse}>

             <Text> Browse screen</Text>
                    <Text>  </Text>
             <TouchableOpacity onPress={()=>
             navigation.navigate("Projects")} style=
             {styles.link}>
                 <Text>Projects</Text>
                 </TouchableOpacity >
                 <TouchableOpacity onPress={()=>
             navigation.navigate("Training")} style={styles.link}>
                 <Text>Training</Text>
                 </TouchableOpacity> 
          </View>
    )
  }
  

  const styles = StyleSheet.create({
      browse: {
        flex: 1,
        justifyContent: 'center',
         alignItems:'center', 
         borderColor: 'teal',
          borderWidth: 3, 
         borderRadius: 10,
        paddingHorizontal:80,
        margin: 10
  
      },
      link: {
          padding: 10,
          margin: 2,
          borderColor: 'tan',
          borderWidth: 2,
          borderRadius:5,
      }
  })

  export default Browse