import { ScrollView, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const TrainingScreen = ()=>{
    return(

      <SafeAreaView style={styles.training}>

        <Text>Training</Text>

      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
      training: {
        flex: 1,
        justifyContent: 'center',
         alignItems:'center', 
         borderColor: 'teal',
          borderWidth: 3, 
         borderRadius: 10,
        paddingHorizontal:80,
        margin: 10

      }
  })

  export default TrainingScreen