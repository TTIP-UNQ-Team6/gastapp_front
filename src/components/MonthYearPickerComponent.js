import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-modern-datepicker';

const months = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre"
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
          current={date.getFullYear() + "/" + (date.getMonth() + 1) }
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