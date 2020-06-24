import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { CheckBox } from 'react-native-elements';
import CancelAcceptComponent from './CancelAcceptComponent';
import ListPickerComponent from './ListPickerComponent';
import DatePickerComponent from './DatePickerComponent';


const FilterComponent = (props) => {

    const [betweenDates, setBetweenDates] = React.useState(false);
    const [fromDate, setFromDate] = React.useState(new Date(Date.now()));
    const [toDate, setToDate] = React.useState(new Date());
    const [category, setCategory] = React.useState("cualquiera");
    const [account, setAccount] = React.useState("cualquiera");
    const [type, setType] = React.useState("unico");

    function changeFromDate(event) {
        if(event.type == "set") {
            setFromDate(new Date(event.nativeEvent.timestamp));
        }
    }

    function changeToDate(event) {
        if(event.type == "set") {
            setToDate(new Date(event.nativeEvent.timestamp));
        }
    }

    return (
        <Modal isVisible={props.isVisible} onBackdropPress={() => props.close()} >
        <View style={styles.container}>

            <View style={styles.itemView}>
                <Text style={styles.leftText}>Tipo:</Text>
                <ListPickerComponent list={props.types} value={() => {return(type)}} onChange={setType} />
            </View>

            <View style={styles.itemView}>
                <Text style={styles.leftText}>Categoria:</Text>
                <ListPickerComponent list={["cualquiera"].concat(props.categories)} value={() => {return(category)}} onChange={setCategory} />
            </View>

            <View style={styles.itemView}>
                <Text style={styles.leftText}>Cuenta:</Text>
                <ListPickerComponent list={["cualquiera"].concat(props.accounts)} value={() => {return(account)}} onChange={setAccount} />
            </View>

            <CheckBox
                center
                title='Entre fechas'
                checked={betweenDates}
                onPress={() => setBetweenDates(!betweenDates)}
            />

            {betweenDates ? 
                <View>
                    <View style={styles.itemView}>
                        <Text style={styles.leftText}>Desde:</Text>
                        <DatePickerComponent initialDate={fromDate} onChange={changeFromDate} />
                    </View>

                    <View style={styles.itemView}>
                        <Text style={styles.leftText}>Hasta:</Text>
                        <DatePickerComponent initialDate={toDate} onChange={changeToDate} />
                    </View>
                </View>
                :
                <View/>
            }
            
            <View style={styles.buttonsView}>
                <CancelAcceptComponent onCancel={() => props.close()} onAccept={() => {props.onAccept(category, account, betweenDates, fromDate, toDate, type); props.close()}} />
            </View>
          </View>
        </Modal>
    )
  }

  const styles = StyleSheet.create({
    modal: {
    },
      container: {
          borderRadius: 20,
          backgroundColor: 'white',
          padding: '2%',
          flex: 0
      },
      buttonsView: {
        height: 120
      },
      itemView: {
        flexDirection: 'row',
      },
      leftText: {
        width: '22%',
        fontSize: 15,
        textAlignVertical: 'center',
      }
  });

  export default FilterComponent;