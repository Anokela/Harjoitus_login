import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Headline, TextInput, Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

const Login = (props) => {
    const {colors} = props.theme
  return (
    <View style={styles.container}>
      <View style={styles.form}>
            <Headline style={[{color: colors.primaryVariant}, styles.headline]}>Login</Headline>
            <TextInput 
                label="Email"
                mode="outlined"
                left={<TextInput.Icon color={colors.primaryVariant} name="email" />}
                style={styles.textInput}
            />
            <TextInput
                label="Password"
                mode="outlined"
                left={<TextInput.Icon color={colors.primaryVariant} name="lock" />}
                style={styles.textInput}
            />
            <Button mode="contained" style={styles.button}>Submit</Button>
      </View>
    </View>
  );
};

export default withTheme(Login);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 16,
      marginRight: 16,
    },
    headline: {
        textAlign: 'center',
        marginBottom: 16,
    },
    form: {
        alignSelf: 'stretch',
    },
    textInput: {
        backgroundColor: '#fff',
        marginBottom: 8,
    },
  });