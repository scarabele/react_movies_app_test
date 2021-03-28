
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { iMovie } from '../../../interfaces/movie';
import { IMAGE_PATH } from '../../../providers/tmdb';
import styles from './styles';

interface Props {
  movie: iMovie;
  onPress: () => void;
  big: boolean;
}

const CardMovie = ({ movie, onPress, big }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={!big ? styles.img : styles.imgBig} source={{ uri: IMAGE_PATH + movie.poster_path }}></Image>
    </TouchableOpacity>
  );
}



export default CardMovie;
