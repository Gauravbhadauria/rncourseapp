import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const data = [
  {id: '1', text: 'Short'},
  {id: '2', text: 'A bit longer'},
  {id: '3', text: 'Much longer text that takes more space'},
  {id: '4', text: 'Another short one'},
  {id: '5', text: 'Even longer text for testing'},
  {id: '6', text: 'Some random text here'},
  {id: '7', text: 'More text to wrap properly'},
];

const FlexboxDemo = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* justifyContent Examples */}
        <Text style={styles.header}>justifyContent: flex-start</Text>
        <View style={[styles.boxContainer, {justifyContent: 'flex-start'}]}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
        </View>

        <Text style={styles.header}>justifyContent: flex-end</Text>
        <View style={[styles.boxContainer, {justifyContent: 'flex-end'}]}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
        </View>

        <Text style={styles.header}>justifyContent: space-between</Text>
        <View style={[styles.boxContainer, {justifyContent: 'space-between'}]}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
        </View>

        <Text style={styles.header}>justifyContent: space-around</Text>
        <View style={[styles.boxContainer, {justifyContent: 'space-around'}]}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
        </View>

        <Text style={styles.header}>justifyContent: space-evenly</Text>
        <View style={[styles.boxContainer, {justifyContent: 'space-evenly'}]}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
        </View>

        {/* alignItems Examples */}
        <Text style={styles.header}>alignItems: flex-start</Text>
        <View
          style={[
            styles.boxContainer,
            {alignItems: 'flex-start', height: 100},
          ]}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
        </View>

        <Text style={styles.header}>alignItems: center</Text>
        <View
          style={[styles.boxContainer, {alignItems: 'center', height: 100}]}>
          <View style={[styles.box, styles.red]} />
          <View style={[styles.box, styles.blue]} />
        </View>

        <Text style={styles.header}>alignItems: stretch</Text>
        <View
          style={[styles.boxContainer, {alignItems: 'stretch', height: 100}]}>
          <View style={[styles.box, styles.red, {width: 'auto'}]} />
          <View style={[styles.box, styles.blue, {width: 'auto'}]} />
        </View>

        {/* alignSelf Examples */}
        <Text style={styles.header}>alignSelf: flex-start</Text>
        <View style={[styles.boxContainer, {height: 100}]}>
          <View style={[styles.box, styles.red, {alignSelf: 'flex-start'}]} />
        </View>

        <Text style={styles.header}>alignSelf: center</Text>
        <View style={[styles.boxContainer, {height: 100}]}>
          <View style={[styles.box, styles.blue, {alignSelf: 'center'}]} />
        </View>

        <Text style={styles.header}>alignSelf: flex-end</Text>
        <View style={[styles.boxContainer, {height: 100}]}>
          <View style={[styles.box, styles.green, {alignSelf: 'flex-end'}]} />
        </View>

        {/* flex: 1 vs flex: 2 Example */}
        <Text style={styles.header}>flex: 1 vs flex: 2</Text>
        <View style={[styles.boxContainer, {height: 100}]}>
          <View style={[styles.box, styles.red, {flex: 1}]} />
          <View style={[styles.box, styles.blue, {flex: 2}]} />
        </View>

        {/* flexWrap Example */}
        <Text style={styles.header}>flexWrap: wrap</Text>
        <View style={styles.wrapContainer}>
          {data.map(item => (
            <View key={item.id} style={styles.wrapBox}>
              <Text>{item.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  boxContainer: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
  red: {backgroundColor: 'red'},
  blue: {backgroundColor: 'blue'},
  green: {backgroundColor: 'green'},

  // Wrap styles
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 8,
  },
  wrapBox: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default FlexboxDemo;
