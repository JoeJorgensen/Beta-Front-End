import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SettingsScreen = ()=>{
    return(
      <SafeAreaView style={styles.settings}>
        <Text>Settings Screen</Text>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
      settings: {
        flex: 1,
        justifyContent: 'center',
         alignItems:'center', 
         borderColor: 'teal',
          borderWidth: 3, 
         borderRadius: 10,
         padding: 20,
         margin:20,
      }
  })

  export default SettingsScreen