import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ItemList from './ItemList';

const ShortListComponent = (props) => {
    
    return (
        <View style={styles.view}>
            <View style={styles.titleView}>
                <Text style={styles.title}> {props.title} </Text>
            </View>
            <View style={styles.listView}>
                <FlatList 
                    style={{padding: 0, margin: 0}}
                    data={props.items} 
                    renderItem={({ item }) => <ItemList onSubmit={props.update} navigation={props.navigation} editScreen={props.editScreen} icon={true} item={item} containerStyle={styles.itemContainerStyle} titleStyle={styles.itemTitle} subtitleStyle={styles.itemSubtitle}></ItemList>}
                    keyExtractor={(item) => item._id.$oid}
                />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate(props.viewAllScreen, {user_email: props.user_email, getAll: props.getAll, getTotal: props.getTotal, editScreen: props.editScreen, update: props.update, getAccounts: props.getAccounts, getCategories: props.getCategories, filter: props.filter})}>
                    <Text style={styles.buttonText} >
                        Ver todos
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        flexDirection: 'column',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 5
    },
    titleView: {
        borderBottomWidth: 0.3,
        borderBottomColor: '#A9A9A9',
    },
    title: {
        alignSelf: 'center',
        fontSize: 23,
    },
    button: {
        backgroundColor: "#DDDDDD",
        width: 120,
        paddingVertical: 5,
        borderRadius: 15,
        margin: 5
    },
    buttonView: {
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15
    },
    itemTitle: {
        fontSize: 10,
        color: 'black'  
    },
    itemSubtitle: {
        fontSize: 14,
        color: 'black'
    },
    itemContainerStyle: {
        padding: 6,
    }
});

export default ShortListComponent;