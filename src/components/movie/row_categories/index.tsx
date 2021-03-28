
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import TMDB from '../../../providers/tmdb';
import { iMovie, Genre } from '../../../interfaces/movie';
import CardMovie from '../card_movie';
import styles from './styles';

interface Props {
  navigation: any;
  genre: Genre;
  big: boolean;
}

const RowCategories = ({ navigation, genre, big }: Props) => {
  const [movies, setMovies] = useState<iMovie[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await TMDB.get('/discover/movie?with_genres=' + genre.id);

      setMovies(result.data.results);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  function _row() {
    console.log(movies?.length);

    return (<View>
      {movies == undefined ?
        <View></View>
        :
        <View>
          <Text style={styles.title}>{genre.name.toUpperCase()}</Text>
          <ScrollView horizontal={true}>
            {movies.map(movie => {
              return (
                <CardMovie movie={movie} onPress={() => console.log(movie.title)} key={movie.id} big={big} />
              );
            })}
          </ScrollView>
        </View>}
    </View>);
  };


  return (
    <View>
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : _row()}
    </View>
  );
}



export default RowCategories;
