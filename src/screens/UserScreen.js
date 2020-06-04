import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButtom from '../components/CustomButton';
import { AuthContext } from '../context/AuthContext';

const UserScreen = (props) => {

    const user = props.route.params.user;
    const { logout } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image style={styles.avatar}
                    source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
  
                  <Text style={styles.name}>{user.name}</Text>
                  <Text style={styles.userInfo}>{user.email}</Text>
              </View>
            </View>
  
            <View style={styles.body}>
                <CustomButtom text='Ver gastos mensuales' onPress={() => {}} type="principal"/>
                <CustomButtom text='Ver ingresos mensuales' onPress={() => {}} type="principal"/>
                <CustomButtom text='Ver graficos' onPress={() => {}} type="principal"/>
                <CustomButtom text='Cerrar sesion' buttonStyle={styles.logoutButton} onPress={() => logout()} type="principal"/>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#52E0F6",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:25,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:18,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#52E0F6",
      height:500,
      alignItems:'center',
    },
    logoutButton: {
        backgroundColor: 'red',
        borderRadius: 10,
    },
  });
   

export default UserScreen;