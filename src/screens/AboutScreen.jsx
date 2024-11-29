import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
    const currentDate = new Date().toLocaleDateString();

    return (
      <MainLayout>
        <View style={styles.container}>
          <Text style={styles.text}>App Name: Incredible ToDo List App</Text>
          <Text style={styles.text}>Developer: Your Name</Text>
          <Text style={styles.text}>Date: {currentDate}</Text>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </MainLayout>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;