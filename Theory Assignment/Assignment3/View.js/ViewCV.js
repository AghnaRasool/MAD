import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ViewCV() {
  const [cvData, setCVData] = useState({});

  useEffect(() => {
    loadCVData();
  }, []);

  const loadCVData = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      const email = await AsyncStorage.getItem('email');
      const phone = await AsyncStorage.getItem('phone');
      const education = await AsyncStorage.getItem('education');
      const experience = await AsyncStorage.getItem('experience');
      const skills = await AsyncStorage.getItem('skills');
      
      setCVData({ name, email, phone, education, experience, skills });
    } catch (error) {
      console.error('Error loading CV data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginLeft: 100,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Name</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{cvData.name}</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              marginLeft: 10,
              marginTop: 3,
            }}
          >
            Contact
          </Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contact}>{cvData.email}</Text>
          <Text style={styles.contact}> {cvData.phone}</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -210,
            marginLeft: 150,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Profile
            </Text>
          </View>
          <View style={{ ...styles.contact }}>
            <Text style={{ ...styles.contact, marginLeft: 80 }}>
              <b>Name:</b> {cvData.name}
            </Text>
            <Text style={{ ...styles.contact, marginLeft: 80 }}>
              <b>Education:</b> {cvData.education}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 155,
            marginLeft: 200,
          }}
        >
          <View style={{ width: 100 * 2 }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Work Summary
            </Text>
          </View>
          <View style={{ ...styles.contact, marginLeft: 0 }}>
            <Text style={{ ...styles.contact, marginLeft: 0 }}>
              <b>Experience: </b> {cvData.experience}
            </Text>
            <Text style={{ ...styles.contact, marginLeft: 0 }}> <b>Skills: </b>{cvData.skills}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 300,
    marginRight: 500,
    marginTop: 10,
    marginBottom: 10,
  },
  contact: {
    margin: 5,
  },
  rectangle: {
    width: 60 * 2,
    height: 50,
    backgroundColor: 'red',
    marginBottom: 10,
    marginTop: 20,
  },
  view1: {
    flex: 1,
    marginLeft: 50,
  },
  view2: {
    flex: 2,
    backgroundColor: 'transparent',
    marginLeft: 10,
  },
  pentagon: {
    backgroundColor: 'transparent',
  },
  pentagonInner: {
    marginTop: 34.5,
    width: 90,
    borderBottomColor: 'red',
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: 18,
    borderRightColor: 'transparent',
    borderRightWidth: 18,
    borderTopColor: 'red',
    borderTopWidth: 50,
  },
  pentagonBefore: {
    marginTop: 35,
    position: 'absolute',
    height: 0,
    width: 0,
    top: -35,
    left: 0,
    borderStyle: 'solid',
    borderBottomColor: 'red',
    borderBottomWidth: 35,
    borderLeftColor: 'transparent',
    borderLeftWidth: 45,
    borderRightColor: 'transparent',
    borderRightWidth: 45,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
  },
});