import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MonthYearPickerComponent from '../components/MonthYearPickerComponent';
import TypePickerComponent from '../components/TypePickerComponent';
import { filterExpenses, filterIncomes } from '../gastappService';
import PieChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';
import BarChart from '../components/Charts/BarChart';
import EmptyComponent from '../components/EmptyComponent';

const GraphScreen = (props) => {
    const user = props.route.params.user;
    const [list, setList] = useState([]);
    const [type, setType] = useState();
    const [fromDate, setFromDate] = useState();

    useEffect(() => {
        update();
    }, [type, fromDate]);

    function update() {
        const month = fromDate ? fromDate.getMonth() : new Date().getMonth();
        const year = fromDate ? fromDate.getFullYear() : new Date().getFullYear();
        const body = {
            "user_email": user.email,
            "filter": {
                "date": {
                    "from": new Date(year, month, 1),
                    "to": new Date(year, month + 1, 1)
                },
                "type": "unico",
            }
        }

        if (type === "gastos") {
            filterExpenses(body).then(res => setList(res.data));
        }
        else {
            filterIncomes(body).then(res => setList(res.data));
        }
    }

    return (
        <ScrollView>
            <TypePickerComponent onChange={setType} />
            <MonthYearPickerComponent onChangeDate={setFromDate} />

            {list.length > 0 ?
                <View>
                    <PieChart list={list} />
                    <LineChart list={list} />
                    <BarChart list={list} />
                </View>
            :
                <EmptyComponent type={type} />
        }

        </ScrollView >
    );
}



export default GraphScreen;
