import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.allContent}>
                    <View style={styles.commonStyle}>
                        <Text style={styles.mainTitleText}>پیشنهادها</Text>
                    </View>
                    <View style={styles.commonStyle}>
                        <Text style={styles.subTitleText}>چطور میتونیم پیام گستر را بهبود ببخشیم؟</Text>
                    </View>
                    <View style={[styles.suggTitle, styles.commonStyle]}>
                        <Text style={[styles.textInBoxes, styles.textInBox2]}>پیشنهاد خود را بنویسید ...</Text>
                    </View>
                    <View>
                    
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: .75,
        backgroundColor: 'white',
    },
    allContent: {
        paddingRight: 35,
        paddingTop: 20,
    },
    mainTitleText: {
        color: 'black',
        fontSize: 30,
    },
    subTitleText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
        
    },
    textInBoxes: {
        fontSize: 16,
        color: 'black'
    },
    textInBox2: {
        color: '#666666'
    },
    
    suggTitle: {
        borderWidth: 1,
        borderColor: '#dddddd',
        paddingVertical: 15,
        paddingHorizontal: 12,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    commonStyle: {
        marginTop: 30,
    },
    commonStyle2: {
        marginTop: 10,
    },
    
    
});