import React, { useState } from 'react';
import { StyleSheet, Picker, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-modern-datepicker';

const months = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre"
}

const MonthYearPickerComponent = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  function handleChangeDate(date) {
    const [year, month] = date.split(" ");
    const newDate = new Date(year, month, 1);
    setDate(newDate);
    props.onChangeDate(newDate);
    setShowCalendar(false);
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => setShowCalendar(true)}>
        <Text style={styles.text}>
          {months[date.getMonth()] + " - " + date.getFullYear()}
        </Text>
      </TouchableOpacity>

      <Modal isVisible={showCalendar} onBackdropPress={() => setShowCalendar(false)}>
        <DatePicker
          mode="monthYear"
          selectorStartingYear={2000}
          onMonthYearChange={selectedDate => handleChangeDate(selectedDate)}
          current={date.getFullYear() + "/" + date.getMonth() }
        />
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16
  },
})

export default MonthYearPickerComponent;