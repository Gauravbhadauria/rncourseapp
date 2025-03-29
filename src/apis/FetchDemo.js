import {View, Text, SafeAreaView, Button, Alert} from 'react-native';
import React from 'react';
const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const FetchDemo = () => {
  const getData = async () => {
    const response = await fetch(
      `${BASE_URL}posts/1`,
      {
        method: 'GET',
      },
      //in case of headers
      //     ,
      //     {
      //     headers:{
      //     Authorization:'bearer '+token
      //     }
      // }
    );
    const data = await response.json();
    //   .then(response => response.json())
    //   .then(data => {
    Alert.alert('data', JSON.stringify(data));
    //   });
  };
  const postData = async () => {
    const response = await fetch(`${BASE_URL}posts`, {
      method: 'POST',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    });
    const data = await response.json();
    Alert.alert('data', JSON.stringify(data));
  };

  const putData = async () => {
    const response = await fetch(`${BASE_URL}posts/1`, {
      method: 'PUT',
      body: {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    });
    const data = await response.json();
    Alert.alert('data', JSON.stringify(data));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
      }}>
      <Text style={{fontSize: 20}}>Integrate Apis with Fetch method</Text>
      <Button
        title="Get Data"
        onPress={() => {
          getData();
        }}
      />
      <Button
        title="Post Data"
        onPress={() => {
          postData();
        }}
      />
      <Button
        title="Put Data"
        onPress={() => {
          putData();
        }}
      />
      <Button title="Delete Data" />
      <Button title="Patch Data" />
    </SafeAreaView>
  );
};

export default FetchDemo;
