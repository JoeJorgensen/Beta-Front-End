import { ScrollView, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const BoulderingScreen = ()=>{


  


    return(

        

      <SafeAreaView style={styles.projects}>
            <Text>Bouldering Screen</Text>
            

            
             
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

  export default BoulderingScreen