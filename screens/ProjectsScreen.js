import { ScrollView, StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

const ProjectsScreen = ({navigation})=>{



    return(

        

      <SafeAreaView style={styles.projects}>
       <Text>  </Text>
             <TouchableOpacity onPress={()=>
             navigation.navigate("Bouldering")} style=
             {styles.link}>
                 <Text>Bouldering</Text>
                 </TouchableOpacity >
                 <TouchableOpacity onPress={()=>
             navigation.navigate("Route")} style={styles.link}>
                 <Text>Route</Text>
                 </TouchableOpacity> 
       



      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
      projects: {
        flex: 1,
        justifyContent: 'center',
         alignItems:'center', 
         borderColor: 'teal',
          borderWidth: 3, 
         borderRadius: 10,
        paddingHorizontal:50,
         margin:10,
      },
      link: {
        padding: 10,
        margin: 2,
        borderColor: 'tan',
        borderWidth: 2,
        borderRadius:5,
    }
  })

  export default ProjectsScreen