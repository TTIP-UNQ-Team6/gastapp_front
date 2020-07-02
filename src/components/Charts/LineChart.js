import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryLine } from "victory-native";

const LineChart = (props) => {
    return (
        <View style={styles.view}>
            <VictoryLine
                padding={{ left: 70, top: 30, bottom: 30, right: 30 }}
                width={330}
                height={300}
                data={[
                    { x: "Cats", y: 35 },
                    { x: "Dogs", y: 40 },
                    { x: "Birds", y: 55 }
                ]}
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

export default LineChart;