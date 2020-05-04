import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Text, Title, IconButton} from 'react-native-paper';
import {map} from 'lodash';
import {getMovieById} from '../api/movies';
import {BASE_PATH_IMG} from '../utils/constants';
import ModalVideo from '../components/ModalVideo';

export default function Movie(props) {
  const {route} = props;
  const {id} = route.params;
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  console.log(movie);

  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovie(response);
    });
  }, []);

  if (!movie) return null;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.poster}
          source={{uri: `${BASE_PATH_IMG}/w500${movie.poster_path}`}}
        />
        <View style={styles.viewPlay}>
          <IconButton
            icon="play"
            color="#000"
            size={30}
            style={styles.play}
            onPress={() => setShowVideo(true)}
          />
        </View>
        <View style={styles.viewInfo}>
          <Title>{movie.title}</Title>
          <View style={styles.viewGenres}>
            {map(movie.genres, (genres) => (
              <Text key={genres.id} style={styles.genre}>
                {genres.name}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
    </>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  viewPlay: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  play: {
    backgroundColor: '#fff',
    marginTop: -40,
    marginRight: 30,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  viewInfo: {
    marginHorizontal: 30,
  },
  viewGenres: {
    flexDirection: 'row',
  },
  genre: {
    marginRight: 10,
    color: '#8697a5',
  },
});
