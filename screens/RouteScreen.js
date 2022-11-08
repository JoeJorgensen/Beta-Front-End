import { ScrollView, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const RouteScreen = ()=>{


  


    return(
        

        

      <SafeAreaView style={styles.projects}>
            <Text>Route Screen</Text>
             
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
      }
  })

  export default RouteScreen