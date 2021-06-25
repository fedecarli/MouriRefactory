import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import someListener from './some-listener-library';

const getTimeStamp = () => {
  const date = new Date();
  return date.toLocaleString();
};

const Refactory = ({dataSet}) => {
  const [currentTimeStamp, setCurrentTimeStamp] = useState(() => {
    return getTimeStamp();
  });

  useEffect(() => {
    const listen = someListener.register(e => {
      // This callback for the listener is arbitrary and can
      // be ignored for this exercise
    });

    return () => {
      someListener.remove(listen);
    };
  }, []);

  const handleOnPress = useCallback(item => {}, []);

  const handleUpdateTimeStamp = useCallback(() => {
    setCurrentTimeStamp(getTimeStamp());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Current Time: {currentTimeStamp}</Text>
        <Button title="Update Timestamp" onPress={handleUpdateTimeStamp} />
      </View>
      <FlatList
        data={dataSet}
        keyExtractor={item => item.title}
        renderItem={({item, separators}) => {
          return (
            <TouchableHighlight
              onPress={() => handleOnPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={styles.button}>
                <Text>{item.title}</Text>
                <Text>{currentTimeStamp}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    width: '100%',
    height: 60,
  },
  button: {
    backgroundColor: 'grey',
    borderRadius: 30,
    padding: 20,
    marginBottom: 10,
  },
});

export default Refactory;

/*
  Write your notes below:

  - Remove getTimeStamp function inside of the component to prevent the recreation on every render
  - Remove the getTimeStamp call from flatlist because it was called on every re-render
  - Create the function handleOnPress to update the currentTimeStamp using useCallback to prevent the function to be recreated
  - Separate styles because it is a good practice

*/
