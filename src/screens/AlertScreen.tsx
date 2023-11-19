import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: 'Ok',
          onPress: () => console.log('On Pressed'),
        },
      ],
      // {
      //   cancelable: true,
      //   onDismiss: () => console.log('On Dismiss')
      // }
    );
  };

  const showPrompt = () => {
    // Alert.prompt(
    //   'Está seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info: ', typeof valor),
    //   // tipo de prompt
    //   'secure-text',
    //   // valor por defecto
    //   'Hola Mundo',
    //   // keyboard type
    //   'number-pad'
    // )
    prompt(
      'Enter password',
      'Enter your password to claim',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: password => console.log('Ok Pressed, password: ', + password)}
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    )
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar Alert" onPress={showAlert} />
      <View style={{height: 10}}/>
      <Button title="Mostrar Promtp" onPress={showPrompt} />
    </View>
  );
};
