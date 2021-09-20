import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemsLeft}>
                <View style={styles.square}></View>
            <Text style={styles.itemText}> {props.text}</Text>
                </View>
              <View style={styles.cercle}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:  20,

    },
    itemsLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#007fff',
        opacity: 0.4,
        borderRadius: 5,
        marginRight:15
    },
    itemText:{
        maxWidth: '80%'
    },
    cercle:{
        width: 12,
        height: 12,
        borderColor:'#007fff',
        borderWidth:2,
        borderRadius: 5,

    }
  
})
 export default Task