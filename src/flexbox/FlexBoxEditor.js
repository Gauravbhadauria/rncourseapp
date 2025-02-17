import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';

const FlexboxPlayground = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');
  const [alignSelf, setAlignSelf] = useState('auto');
  const [flexWrap, setFlexWrap] = useState('nowrap');
  const [gap, setGap] = useState(10);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Flexbox Playground
        </Text>

        {/* Flex Direction */}
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
          Flex
        </Text>
        <ScrollView horizontal>
          {['row', 'column', 'row-reverse', 'column-reverse'].map(value => (
            <Pressable key={value} onPress={() => setFlexDirection(value)}>
              <Text
                style={{
                  margin: 5,
                  padding: 10,
                  backgroundColor:
                    flexDirection === value ? 'orange' : 'lightgray',
                }}>
                {value}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Justify Content */}
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
          Justify Content
        </Text>
        <ScrollView horizontal>
          {[
            'flex-start',
            'center',
            'flex-end',
            'space-between',
            'space-around',
            'space-evenly',
          ].map(value => (
            <Pressable key={value} onPress={() => setJustifyContent(value)}>
              <Text
                style={{
                  margin: 5,
                  padding: 10,
                  backgroundColor:
                    justifyContent === value ? 'orange' : 'lightgray',
                }}>
                {value}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Align Items */}
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
          Align Items
        </Text>
        <ScrollView horizontal>
          {['flex-start', 'center', 'flex-end', 'stretch', 'baseline'].map(
            value => (
              <Pressable key={value} onPress={() => setAlignItems(value)}>
                <Text
                  style={{
                    margin: 5,
                    padding: 10,
                    backgroundColor:
                      alignItems === value ? 'orange' : 'lightgray',
                  }}>
                  {value}
                </Text>
              </Pressable>
            ),
          )}
        </ScrollView>

        {/* Align Self */}
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
          Align Self
        </Text>
        <ScrollView horizontal>
          {[
            'auto',
            'flex-start',
            'center',
            'flex-end',
            'stretch',
            'baseline',
          ].map(value => (
            <Pressable key={value} onPress={() => setAlignSelf(value)}>
              <Text
                style={{
                  margin: 5,
                  padding: 10,
                  backgroundColor: alignSelf === value ? 'orange' : 'lightgray',
                }}>
                {value}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Flex Wrap */}
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>
          Flex Wrap
        </Text>
        <ScrollView horizontal>
          {['nowrap', 'wrap', 'wrap-reverse'].map(value => (
            <Pressable key={value} onPress={() => setFlexWrap(value)}>
              <Text
                style={{
                  margin: 5,
                  padding: 10,
                  backgroundColor: flexWrap === value ? 'orange' : 'lightgray',
                }}>
                {value}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text>Gap ({gap}px):</Text>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map(value => (
            <Pressable key={value} onPress={() => setGap(value)}>
              <Text
                style={{
                  margin: 5,
                  padding: 10,
                  backgroundColor: gap === value ? 'orange' : 'lightgray',
                }}>
                {value}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Preview Box */}
        <View
          style={{
            borderWidth: 1,
            height: 400,
            borderColor: 'black',
            marginTop: 20,
            flexDirection,
            justifyContent,
            alignItems,
            alignSelf,
            flexWrap,
            gap,
          }}>
          {[...Array(5)].map((_, i) => (
            <View
              key={i}
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'blue',
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>{i + 1}</Text>
            </View>
          ))}
        </View>

        {/* Code Preview */}
        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 20}}>
          Generated Code
        </Text>
        <Text
          style={{backgroundColor: '#f0f0f0', padding: 10, marginTop: 10}}>{`
<View style={{
  flexDirection: '${flexDirection}',
  justifyContent: '${justifyContent}',
  alignItems: '${alignItems}',
  alignSelf: '${alignSelf}',
  flexWrap: '${flexWrap}',
  gap: ${gap},
}}>
  {[...Array(5)].map((_, i) => (
    <View key={i} style={{ width: 50, height: 50, backgroundColor: 'blue', margin: 5 ,justifyContent: 'center',
              alignItems: 'center',}} >
 <Text style={{color: 'white'}}>{i + 1}</Text>
    </View>
  ))}
</View>
      `}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlexboxPlayground;
