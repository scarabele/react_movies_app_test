
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Spotlight from './components/spotlight';
import RowCategories from '../../components/movie/row_categories';
import styles from '../../styles/styles';
import TMDB from '../../providers/tmdb';
import { Genre } from '../../interfaces/movie';
import { shuffle } from '../../utils'

const HomePage = ({ navigation }: any) => {
  const [genres, setGenres] = useState<Genre[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await TMDB.get('/genre/movie/list');
      console.log(result);

      setGenres(shuffle(result.data.genres).slice(0, 10));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  function _columnGenres() {
    console.log(genres?.length);

    return (<View>
      {genres == undefined ?
        <View></View>
        : <View>
          {genres.map((genre, index) => {
            return (
              <RowCategories navigation={navigation} genre={genre} key={genre.id} big={index == 5} />
            );
          })}
        </View>}
    </View>);
  };

  return (
    <View style={styles.screen}>
      <ScrollView horizontal={false}>
        <Spotlight />
        {isLoading ? (
          <Text>Loading ...</Text>
        ) : _columnGenres()}
      </ScrollView>
    </View>
  );
}

HomePage.navigationOptions = {
  title: 'Home',
}

export default HomePage;
