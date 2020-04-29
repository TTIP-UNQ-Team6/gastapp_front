import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

export const getIcon = (name, size, color) => {

    const icons = {
        "up-arrow": <Icon name="arrow-up-bold-circle" size={size || 30} color="#008000" />,
        "down-arrow": <Icon name="arrow-down-bold-circle" size={size || 30} color="#DC0000" />,
        "balance": <Icon name="chart-line-variant" size={size || 30} color="#008000" />,
        "food": <Icon name="food" size={30} color="#F0E68C" />,
        "clothes": <Icon name="tshirt-crew" size={30} color="#87CEEB" />,
        "home appliances": <Icon name="home" size={30} color="#D3D3D3" />,
    };

    return(
        icons[name]
    );
}

