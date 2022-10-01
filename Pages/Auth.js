import * as React from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';

const Auth = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const user = 'Admin';
  const user_password = 'admin';

  const send = () => {
    if (user === login && user_password === password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'your login or password incorrect');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.block}>
        <Text style={styles.textHeader}>Autorization</Text>
        <View style={styles.box}>
          <Text style={styles.textBody}>login</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setLogin(e)}
            value={login}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.textBody}>password</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setPassword(e)}
            value={password}
          />
        </View>
        <Button
          title={'Submit'}
          color={'green'}
          style={styles.btn}
          onPress={() => send()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 200,
    width: 300,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
  },
  input: {
    width: '60%',
    height: 30,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 20,
    borderColor: 'blue',
    padding: 5,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: 'blue',
    marginBottom: 15,
  },
  textBody: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  btn: {
    backgroundColor: 'yellow',
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    borderRadius: 80,
  },
});

export default Auth;
