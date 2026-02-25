import React from "react";
import { Text, View } from "react-native";

const nasllov = "Ovo je naslov";

// arrow function
export const ExerciseScreen = () => {
    naslov = 1000;
    return(
        <View>
            <Text style= {styles.mainHeader}>Ovo je glavni naslov</Text>
            <Text style= {styles.description} >Ovo je sporedni naslov</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainHeader: {
        color: "red"
        frontSize: 20
    }
    description: {
        color: "green"
        frontSize: 10
    }

});







