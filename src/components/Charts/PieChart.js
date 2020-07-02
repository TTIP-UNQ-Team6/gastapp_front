import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryPie, VictoryContainer } from "victory-native";

const PieChart = (props) => {
    const [list, setList] = useState();

    function processData() {
        const elemsPerCat = props.list
            .map(elem => { return(elem.category.substring(0, 9)) })
            .reduce((acc, curr) => {
                acc[curr] ? acc[curr]++ : acc[curr] = 1;
                return acc;
            }, {});

        const result = [];

        Object.keys(elemsPerCat).forEach(cat => result.push({"x": cat, "y": elemsPerCat[cat] }));
        setList(result);
    }

    useEffect(() => {
        console.log("LISTA: ", list);
    }, [list])

    useEffect(() => {
        processData();
    }, [])

    return (
        <View style={styles.view}>
            <VictoryPie
                padding={{left: 90, top: 1, bottom: 1, right: 110}}
                height={350}
                colorScale="qualitative"
                data={list}
            />
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

export default PieChart;