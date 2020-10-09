import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const RegisterScreen = ({
    navigation,
}) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const [errortext, setErrortext] = useState('');

    function submitData() {
        //fijarse IPv4 siempre, en caso de no funcionar el fetch, puede ser por que esta mal la IPv4.
        const urlPostman = 'http://10.1.15.25:3600/users/';

        fetch(urlPostman, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                contraseña: contraseña,
            })
        });

        setErrortext('');
        if (!username) {
            alert('Por Favor completa el campo Usuario');
            return;
        }
        if (!email) {
            alert('Por Favor completa el campo Email , example@gmail.com');
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
                <View style={styles.userDiv}>
                    <Image style={styles.fotos} source={require('../Images/perfil.png')} />
                    <TextInput style={styles.form} placeholder='Correo electronico'
                        onChangeText={email => setEmail(email)}
                        defaultValue={email}
                    />

                </View>

                <View style={styles.contDiv}>
                    <Image style={styles.fotos} source={require('../Images/candado.png')} />
                    <TextInput style={styles.form}
                        onChangeText={contraseña => setPassword(contraseña)}
                        defaultValue={contraseña}
                        secureTextEntry={true}
                        placeholder='Contraseña'
                        type="password"
                        required
                    />
                </View>

                <View style={styles.contTexto}>
                    <Text style={styles.info}>
                        Al presionar en <Text style={styles.bold}>"Registrarse"</Text>, aceptas nuestras <Text style={styles.bold}>Condiciones</Text> y la <Text style={styles.bold}>Política de datos y servicios.</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => { submitData() && console.log(username + ' / ' + email + ' / ' + contraseña) }}
                >
                    <Text style={styles.reg}>Registrarse</Text>
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.noTiene}>¿Ya tienes cuenta? </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Login') }}>
                        <Text style={styles.crear}>Iniciar Sesión</Text>
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
        width: '75%',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: '8%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    contDiv: {
        width: '75%',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
        marginTop: '8%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    contTexto: {
        width: '90%',
        alignItems: 'center',
    },
    boton: {
        borderRadius: 50,
        backgroundColor: '#004680',
        width: 265,
        height: 42,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        justifyContent: 'center',
    },
    reg: {
        color: '#EEF2F5',
        fontSize: 24,
        alignSelf: 'center',
    },
    info: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '10%',
    },
    bold: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
    },
    noTiene: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#6A6565',
        marginTop: '20%',
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

export default RegisterScreen;
