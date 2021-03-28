
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import TMDB, {IMAGE_PATH} from '../../../providers/tmdb';
import spotlightStyle from '../styles/spotlight_style';
import { iMovie } from '../../../interfaces/movie';
import FlatColumnButton from '../../../components/flat_column_button';

const Spotlight = ({ navigation }: any) => {
  const [movie, setMovie] = useState<iMovie>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await TMDB.get('/trending/movie/week');
      const data = result.data.results;

      setMovie(data[Math.floor(Math.random() * data.length)]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  function _cardMovie() {
    //console.log(movie?.title);

    return (<View style={spotlightStyle.container}>
      {movie == undefined ? (
        <View></View>
      ) :
        <ImageBackground style={spotlightStyle.img} source={{ uri: IMAGE_PATH + movie.poster_path }}>
          <LinearGradient
            colors={['transparent', 'transparent', 'rgba(0,0,0,0.9)']}
            style={spotlightStyle.mask}
          >
            <View style={spotlightStyle.maskItems}>
              <FlatColumnButton
                title="Minha lista"
                icon="plus"
                onPress={() => console.log('tap plus')} />
              <FontAwesome.Button
                style={spotlightStyle.button}
                name="play"
                backgroundColor="white"
                color="black"
                onPress={() => console.log('tap Comprar')}>
                Assistir
              </FontAwesome.Button>
              <FlatColumnButton
                title="Saiba mais"
                icon="exclamation-circle"
                onPress={() => console.log('tap Saiba mais')} />
            </View>
          </LinearGradient>
        </ImageBackground>}
    </View>);
  };


  return (
    <View>
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : _cardMovie()}
    </View>
  );
}

export default Spotlight;
