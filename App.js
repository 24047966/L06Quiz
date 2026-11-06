import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Button, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const MyApp = () => {
    const [answer1, setAnswer1] = useState('-');
    const [answer2, setAnswer2] = useState('-');
    const [answer3, setAnswer3] = useState('-');

    return (
        <View style={{flex: 1, paddingTop: 40, backgroundColor: '#E3F2FD'}}>
            <ScrollView style={{padding: 15}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#1565C0'}}>
                    Who's That Footballer? ⚽
                </Text>
                <Text>Choose your answers below.</Text>
                <Text></Text>

                <Text>1. Who is this footballer?</Text>
                <Image source={{uri: 'https://img.redbull.com/images/c_crop,x_1396,y_0,h_3623,w_2718/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2026/6/1/zq5ycxgy2gw96xt3v7jo/neymar-junior-ultimate-soccer-challenge-sao-paulo'}}
                       style={{width: 200, height: 200}} />
                <Picker selectedValue={answer1}
                        onValueChange={(value) => setAnswer1(value)}
                        style={{backgroundColor: '#BBDEFB'}}>
                    <Picker.Item label="-" value="-" />
                    <Picker.Item label="Neymar Jr" value="Neymar" />
                    <Picker.Item label="Lamine Yamal" value="Lamine Yamal" />
                    <Picker.Item label="Mbappe" value="Kylian Mbappe" />
                </Picker>
                <Text></Text>

                <Text>2. Who is this footballer?</Text>
                <Image source={{uri: 'https://s.yimg.com/lo/mysterio/api/5b34f459cc6a0764a2106ba66cfebd3c75292b6f1b9636db2da7ae640e4b91e7/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_jpg/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fforbes_contributor_845%2F32be6f43018e74be33dbdd569ed73633'}}
                       style={{width: 200, height: 200}} />
                <Picker selectedValue={answer2}
                        onValueChange={(value) => setAnswer2(value)}
                        style={{backgroundColor: '#BBDEFB'}}>
                    <Picker.Item label="-" value="-" />
                    <Picker.Item label="Neymar Jr" value="Neymar" />
                    <Picker.Item label="Lamine Yamal" value="Lamine Yamal" />
                    <Picker.Item label="Mbappe" value="Kylian Mbappe" />
                </Picker>
                <Text></Text>

                <Text>3. Who is this footballer?</Text>
                <Image source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/ad9c52ee-a625-4722-959c-2d954893a6a9.jpeg?crop=1xw:1xh;center,top'}}
                       style={{width: 200, height: 200}} />
                <Picker selectedValue={answer3}
                        onValueChange={(value) => setAnswer3(value)}
                        style={{backgroundColor: '#BBDEFB'}}>
                    <Picker.Item label="-" value="-" />
                    <Picker.Item label="Neymar Jr" value="Neymar" />
                    <Picker.Item label="Lamine Yamal" value="Lamine Yamal" />
                    <Picker.Item label="Mbappe" value="Kylian Mbappe" />
                </Picker>
                <Text></Text>

                <Button title="Submit Answers" color="#1976D2" onPress={() => {
                    let score = 0;

                    if (answer1 == 'Neymar') {
                        score = score + 1;
                    }
                    if (answer2 == 'Lamine Yamal') {
                        score = score + 1;
                    }
                    if (answer3 == 'Kylian Mbappe') {
                        score = score + 1;
                    }

                    let message = 'Keep trying!';
                    if (score == 2) {
                        message = 'So close! One more for a hat-trick!';
                    }
                    if (score == 3) {
                        message = 'Hat-trick! Well done!';
                    }

                    Alert.alert('Full-Time!',
                        'You got ' + score + '/3 correct.\n' + message);
                }} />
                <Text></Text>
            </ScrollView>
        </View>
    );
};

export default MyApp;