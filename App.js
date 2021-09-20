import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null); 

  }
  const completeTask = (index) =>{
    let itemsCopy= [...taskItems];
    itemsCopy.splice(index,1);/*  remove item from array */
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      { /* Tache de today */}
      <View style={styles.tacheWrap}>
      <Text style={styles.sectionTitle}>Tache de today </Text>
      <View style={styles.item}>
            { /* Tache will go*/}
           {
             taskItems.map((item, index) =>{
               return(<TouchableOpacity key={index} onPress={() => completeTask(index)}>
               <Task  text={item} />
               </TouchableOpacity>)
             })
           }


              </View>
    </View>

    {/* write */}

     <KeyboardAvoidingView 
    behavior={Platform.OS ==="ios" ? "padding" : "height"}
    style={styles.writeTaskWrap}>
      <TextInput style={styles.input} placeholder={'ecrire une tache'} value={task} onChangeText={text => setTask(text)}></TextInput>
      <TouchableOpacity onPress= {() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}> +</Text>

        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#989898',
   
  },
  tacheWrap:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  item:{marginTop:40},
  writeTaskWrap:{
        position:"absolute",
        bottom:60,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-around', 
        alignItems:'center'},
  input:{
    paddingVertical:15,
    paddingHorizontal: 15,
    width:250,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0'},

  addWrapper:{ 
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
borderColor:'#C0C0C0'

  },
  addText:{}

});
