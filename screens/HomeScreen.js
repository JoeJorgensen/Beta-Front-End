import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = ()=>{
    return(
      <SafeAreaView style={styles.home}>
        <Text>Home</Text>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
      home: {
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

  export default HomeScreen