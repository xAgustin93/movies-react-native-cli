import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Modal, IconButton} from 'react-native-paper';
import YouTube from 'react-native-youtube';
import {getVideoMovie} from '../api/movies';

export default function ModalVideo(props) {
  const {show, setShow, idMovie} = props;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideoMovie(idMovie).then((response) => {
      response.results.forEach((video) => {
        if (video.site === 'YouTube') {
          setVideo(video.key);
          return;
        }
      });
    });
  }, []);

  return (
    <Modal visible={show} contentContainerStyle={styles.modal}>
      <YouTube videoId={video} style={styles.video} />
      <IconButton
        icon="close"
        onPress={() => setShow(false)}
        style={styles.close}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000',
    height: '120%',
    alignItems: 'center',
  },
  close: {
    backgroundColor: '#1ea1f2',
    width: 50,
    height: 50,
    borderRadius: 100,
    position: 'absolute',
    bottom: 100,
  },
  video: {
    alignSelf: 'stretch',
    height: 300,
  },
});
