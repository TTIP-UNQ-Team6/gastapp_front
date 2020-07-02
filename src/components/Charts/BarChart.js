import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart } from "victory-native";

const BarChart = (props) => {
    const [list, setList] = useState();

    function processData() {
        const amountPerCat = props.list
            .map(elem => { return({"cat": elem.category.substring(0, 4), "amount": elem.amount}) })
            .reduce((acc, curr) => {
                acc[curr.cat] ? acc[curr.cat] + curr.amount : acc[curr.cat] = curr.amount;
                return acc;
            }, {});

        const result = [];

        for (let [key, value] of Object.entries(amountPerCat)) {
            result.push({"x": key, "y": value });
        }

        console.log("ACA MIRAME: ", result)

        setList(result);
    }

    useEffect(() => {
        processData();
    }, [])

    return (
        <View style={styles.view}>
            <VictoryChart domainPadding={10}>
            <VictoryBar
                style={{
                    data: {
                      fill: "#c43a31",
                      fillOpacity: 0.7
                    }
                  }}
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
        marginBottom: 10,
        borderRadius: 10,
        elevation: 2,
    },
})

export default BarChart;