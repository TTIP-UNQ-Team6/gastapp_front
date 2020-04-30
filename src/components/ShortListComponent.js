import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import ItemList from './ItemList';

const ShortListComponent = (props) => {

    console.log("PROOOOOOOPS: ", props)

    return (
        <View style={styles.view}>
            <View style={styles.titleView}>
                <Text style={styles.title}> {props.title} </Text>
            </View>
            <View style={styles.listView}>
                <FlatList 
                    style={{padding: 0, margin: 0}}
                    data={props.items} 
                    renderItem={({ item }) => <ItemList item={item}></ItemList>}
                    keyExtractor={(item) => item._id.$oid}
                />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ExpensesScreen', {id_user: props.id_user})}>
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
        elevation: 1
    },
    container: {
        margin: 5,
        alignItems: 'center',
    },
    titleView: {
        borderBottomWidth: 0.3
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
        margin: 10
    },
    buttonView: {
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15
    },
    listView: {
    }
});

export default ShortListComponent;