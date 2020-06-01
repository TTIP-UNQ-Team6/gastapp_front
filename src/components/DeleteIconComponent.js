import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { getIcon } from '../icons';

const DeleteIconComponent = (props) => {
    return (
        <TouchableOpacity onPress={() => 
            Alert.alert(
                '¿Deseas eliminar este gasto?',
                '',
                [
                  {
                    text: 'Eliminar',
                    onPress: () => props.onPress()
                  },
                  {
                    text: 'Cancelar',
                    onPress: () => {},
                    style: "cancel"
                  },
                ],
                { cancelable: true }
              )
        }>
            {getIcon("delete", 45)}
        </TouchableOpacity>
    )
}

export default DeleteIconComponent;



() => props.onPress()