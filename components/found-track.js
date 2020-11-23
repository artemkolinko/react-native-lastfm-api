import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const FoundTrack = ({ track, artist, imgurl }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imgurl,
        }}
        style={styles.img}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.track}>{track}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 12, flexDirection: 'row' },
  img: { width: 48, height: 48, marginRight: 8 },
  track: { fontSize: 20 },
  artist: {
    fontSize: 20,
    color: '#778899',
  },
});

export default FoundTrack;
