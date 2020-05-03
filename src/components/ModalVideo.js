// import React, {useState, useEffect} from 'react';
// import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
// import {getVideoMovie} from '../api/movies';

// export default function ModalVideo(props) {
//   const {show, setShow, idMovie} = props;
//   const [video, setVideo] = useState(null);
//   console.log(video);

//   useEffect(() => {
//     getVideoMovie(idMovie).then((response) => {
//       setVideo(response.results[0]);
//     });
//   }, []);

//   return (
//     <Modal
//       visible={show}
//       contentContainerStyle={{height: '100%', backgroundColor: '#000'}}>
//       <Text>HOLAAAA</Text>
//       <Button onPress={() => setShow(false)}>CERRAR</Button>
//     </Modal>
//   );
// }
