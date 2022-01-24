import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const Singup = (props: Props) => {
  return (
    <View>
      <Text>Singup Screen</Text>
    </View>
  );
};

export default Singup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
