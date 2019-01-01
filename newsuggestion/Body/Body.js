import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

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
                    <View style={styles.buttons}>
                    <TouchableOpacity style={styles.commonButton}>
                        <View>
                            <Text style={styles.buttonFontStyles}>پیشنهاد های من</Text>
                        </View>
                </TouchableOpacity>
                        <TouchableOpacity style={[styles.commonButton, styles.button]}>
                            <View style={styles.viewTouch}>
                                <Text style={styles.buttonFontStyles}>سرویس</Text>
                                <Image
                                    source={require('../image/dropDown.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.commonButton, styles.button]}>
                            <View style={styles.viewTouch}>
                                <Text style={styles.buttonFontStyles}>محصول</Text>
                                <Image
                                    source={require('../image/dropDown.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commonButton}>
                            <View>
                                <Text style={styles.buttonFontStyles}>جدیدترین</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.commonButton, {backgroundColor: '#ff795f'}]}>
                            <View>
                                <Text style={[styles.buttonFontStyles, {color: 'white'}]}>داغ ترین</Text>
                            </View>
                        </TouchableOpacity>
                    
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
        flex: 1
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    commonButton: {
        backgroundColor: '#f3f6fa',
        flex: .12,
        paddingVertical: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    
    button: {
        flex: .14,
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
    },
    buttonFontStyles: {
        color: 'black',
        fontSize: 14,
    },
    viewTouch:{
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    }
    
});