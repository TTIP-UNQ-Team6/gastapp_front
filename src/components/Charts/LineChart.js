import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryLine, VictoryChart } from "victory-native";

const LineChart = (props) => {
    const [list, setList] = useState();
 
    function createEmpyDaysList() {
        const now = new Date();
        const totalDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate().toString();
        
        return Array(parseInt(totalDays)).fill().map((_, i) => {return {"x": i + 1 + "", "y": 0} });
    }

    function processData(data) {
        const daysList = createEmpyDaysList();

        const temp = data
            .map(elem => { return({"day": new Date(elem.date.$date).getDay(), "amount": elem.amount}) })
            .reduce((acc, curr) => {
                acc[curr.day] ? acc[curr.day]+= curr.amount : acc[curr.day] = curr.amount;
                return acc;
            }, {});

        for (let [key, value] of Object.entries(temp)) {
            daysList[key - 1] = {"x": key, "y": value};
        }

        setList(daysList);
    }

    useEffect(() => {
        processData(props.list);
    }, [props.list])

    return (
        <View style={styles.view}>
            <VictoryChart domain={{x: [0, 31]}} padding={{left: 55, right: 55, top: 15, bottom: 5}} >
            <VictoryLine
                style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                  }}
                minDomain={90000}  
                padding={{ left: 70, top: 30, bottom: 30, right: 30 }}
                width={330}
                height={300}
                data={list}
            />
            </VictoryChart>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 2,
    },
})

export default LineChart;