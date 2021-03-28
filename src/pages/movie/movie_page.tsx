
import React from 'react';
import { View, Button, Text } from 'react-native';



const MoviePage = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Movie ;D</Text>
    <Button
      title="Ir para home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
);

MoviePage.navigationOptions = {
  title: 'Movie',
}

export default MoviePage;
