import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function getIcon(name, size, color) {
    
    const icons = {
        "up-arrow": <Icon name="arrow-up-bold-circle" size={size || 30} color={color ||"#008000"} />,
        "down-arrow": <Icon name="arrow-down-bold-circle" size={size || 30} color={color ||"#DC0000"} />,
        "balance": <Icon name="chart-line-variant" size={size || 30} color={color ||"#008000"} />,
        "food": <Icon name="food" size={30} color={color || "#F0E68C"} />,
        "clothes": <Icon name="tshirt-crew" size={30} color={color ||"#87CEEB"} />,
        "home appliances": <Icon name="home" size={30} color={color ||"#D3D3D3"} />,
        "plus": <Icon name="plus-box" size={size || 30} color={color ||"#1E90FF"} />,
        "exp-amount" : <Icon name="coin" size={size || 30} color={color ||"#A9A9A9"} />,
        "exp-category" : <Icon name="file-cabinet" size={size || 30} color={color ||"#A9A9A9"} />,
        "exp-description" : <Icon name="file-document-outline" size={size || 30} color={color ||"#A9A9A9"} />,
        "exp-date" : <Icon name="calendar-range" size={size || 30} color={color ||"#A9A9A9"} />,
        
    };

    return(
        icons[name]
    );
}

