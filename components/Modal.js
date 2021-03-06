import React, { useContext } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import { Input,Tooltip,Button } from 'react-native-elements';
import {HelpContext} from "../contextApi/context";
import Ionicons from 'react-native-vector-icons/Ionicons';


 


const ModalS = () => {
    const {modalVisible, setModalVisible,user,setUser, color,pickImage,storeData,removeData} = useContext(HelpContext)
   


  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Customize App</Text>
          
            <View  style={{
                height:'100%',
                width:'100%',
                justifyContent:'space-around',
            }}>
                <View style={{
                    alignItems: 'center'
                }}>
                <Input
                    value={user}
                    clearTextOnFocus={true}
                    onSubmitEditing={(prop) => {prop.target.value = ''; storeData('user',user)}}
                    onChangeText={setUser}
                    inputStyle={{
                        color: 'white'
                    }}
                    placeholder='Username'
                    leftIcon={
                        <Ionicons name="person-outline" size={22} color='white' />
                    }
                />
                <Button title="User Picture"
                  buttonStyle={{
                    backgroundColor: color,
                  }} 
                  icon={{
                    name: 'camera',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                  }}
                  containerStyle={{
                    width: 150,
                    height: 35
                  }}
                  onPress={pickImage} />
                {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                </View>
                <View style={{
                      flexDirection: 'row',
                      width: '100%',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between'
                }}>
                    

            <Tooltip
              popover={<Text style={{color: 'white'}}>This is not a login. Just a customization to personalize the app.</Text>}
              backgroundColor='rgba(230,81,116,0.7)'
               width={200}
               height={80}
              containerStyle={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2
                  }
              }
            >
              <Ionicons name="help" size={22} color='white' />
            </Tooltip>
            <TouchableOpacity onPress={() => {
              removeData('image')
              removeData('user')
              removeData('info')
              removeData('codeAnswer')
              Alert.alert(
                "Reload App to start fresh")
              }}>
                 <Ionicons name="refresh" size={22} color='white' />
            </TouchableOpacity>
             
           
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                  setModalVisible(!modalVisible)
                }}
            >
              <Text style={{
                  color: "white"
              }}>Hide Modal</Text>
            </Pressable>
            </View>
            </View>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // width: '70%',
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    margin: 20,
    width: 300,
    height: '30%',
    backgroundColor: "black",
    borderRadius: 20,
    borderColor: 'rgba(230,81,116,0.7)',
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "rgba(230,81,116,0.7)",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white'
  }
});

export default ModalS;