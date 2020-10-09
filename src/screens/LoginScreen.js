import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUserName] = useState('');
    const [contraseña, setPassword] = useState('');
    const [errortext, setErrortext] = useState('');


    function submitData()
    {
            const urlPostman = 'http://10.1.15.25:3600/login/';
            fetch(urlPostman, {
                method: 'post', 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    contraseña: contraseña,
                })
            });
       
          setErrortext('');
          if (!username) {
              alert('Por Favor completa el campo Usuario');
              return;
          }
          if (!contraseña) {
              alert('Por Favor completa la contraseña');
              return;
          }
       navigation.navigate('Calendar');
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../Images/logo-diario.png')} />
            <View style={styles.containerForm}>
                <View style={styles.userDiv}>
                    <Image style={styles.fotos} source={require('../Images/perfil.png')} />
                    <TextInput style={styles.form} placeholder='Usuario'
                        onChangeText={username => setUserName(username)}
                        defaultValue={username}
                    />
                </View>
                <View style={styles.contDiv}>
                    <Image style={styles.fotos} source={require('../Images/candado.png')} />
                    <TextInput style={styles.form} textContentType='password' placeholder='Contraseña'
                        onChangeText={contraseña => setPassword(contraseña)}
                        defaultValue={contraseña}
                        secureTextEntry={true}
                        placeholder='Contraseña'
                        type="password"
                        required
                    />
                </View>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() =>{submitData() && console.log(username + '/' + contraseña)}}
                >
                    <Text style={styles.ini}>Iniciar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() =>alert("Recordala para la proxima")}
                >
                    <Text style={styles.olvide}>
                        Olvidé mi contraseña
          </Text>
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.noTiene}>¿Aún no tienes cuenta? </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Register') }}>
                        <Text style={styles.crear}>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff'
    },
    containerForm: {
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: '5%',
        marginTop: '15%',
    },
    userDiv: {
        width: 271,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    contDiv: {
        width: 271,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    fotos: {
        width: 28,
        height: 28,
        marginRight: 11,
    },
    form: {
        height: 20,
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#020202',
        marginBottom: 4,
    },
    boton: {
        borderRadius: 50,
        backgroundColor: '#004680',
        width: 265,
        height: 42,
        marginTop: '15%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        justifyContent: 'center',
    },
    ini: {
        color: '#EEF2F5',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },
    olvide: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#216992',
        textAlign: 'center',
        marginTop: '15%',
        marginBottom: '15%',
    },
    noTiene: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#6A6565',
    },
    crear: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#004680',
    },
    center: {
        alignItems: 'center',
    },
});

export default LoginScreen;




