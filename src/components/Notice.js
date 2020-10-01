import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Notice = () => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => { console.log('Noticia de Luis Suarez') }}>
                <View style={styles.container2}>
                    <Text style={styles.titulo}>
                        LUIS SUAREZ Y SU FICHAJE CON EL ATLETICO MADRID
                    </Text>
                    <Image style={styles.foto} source={require('../Images/luisSuarez.jpg')} />
                    <Text style={styles.texto}>
                        Luis Suárez explica su fichaje por el Atlético de Madrid: "Es un grande de España"
                        El delantero uruguayo ha agradecido también el apoyo de Leo Messi, crítico con el Barcelona y con la directiva tras expulsar a Suárez del equipo.
                   </Text>
                </View>
                <View style={styles.line} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { console.log('Noticia de Elecciones') }}>
                <View style={styles.container2}>
                    <Text style={styles.titulo}>
                        ELECCIONES Y CANDIDATOS EN EL PAIS
                    </Text>
                    <Image style={styles.foto} source={require('../Images/elecciones.jpg')} />
                    <Text style={styles.texto}>
                        El presidente de la Corte Electoral José Arocena informó a El País que prevé que antes de la medianoche estén los primeros resultados de la elección departamental desarrollada este domingo.
                   </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity onPress={() => { console.log('Noticia de Anima') }}>
                <View style={styles.container2}>
                    <Text style={styles.titulo}>
                        ANIMA: PROPUESTA PARA AMPLIAR EL ABANICO DE JOVENES EN TIC
                    </Text>
                    <Image style={styles.foto} source={require('../Images/anima.jpeg')} />
                    <Text style={styles.texto}>
                    Creer en las potencialidades de los jóvenes y en el poder transformador de la educación y del trabajo de calidad para el aprendizaje. Ese es el punto de partida de Ánima, un centro educativo que trabaja desde 2016 con una propuesta dirigida a estudiantes de entre 14 y 16 años que quieran cursar 4°, 5° y 6° año de bachillerato en administración o informática.
                   </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.line} />

            <TouchableOpacity onPress={() => { console.log('Noticia de DIversidad') }}>
                <View style={styles.container2}>
                    <Text style={styles.titulo}>
                        MILES MARCHAN POR LA DIVERSIDAD EN PLENA PANDEMIA
                    </Text>
                    <Image style={styles.foto} source={require('../Images/diversidad.jpeg')} />
                    <Text style={styles.texto}>
                    Miles de personas participaron este viernes (25.09.2020) de la Marcha por la Diversidad en Montevideo, que -a diferencia de otras manifestaciones masivas anuales uruguayas- mantuvo su edición presencial a pesar de la pandemia del COVID-19.
                   </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.line} />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    container2: {
        marginTop: '5%',
        marginBottom: '5%',
    },
    titulo: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Roboto',
        margin: '2%',
    },
    foto: {
        width: 350,
        height: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: '5%',
    },
    texto: {
        color: '#ffffff',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Roboto',
        margin: '2.5%',
    },
    line: {
        borderTopColor: 'gray',
        borderTopWidth: 1.5,
    }
})

export default Notice;