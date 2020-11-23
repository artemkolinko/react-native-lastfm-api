import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import Track from '../components/track';
import APIKEY from '../keyapi';

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${APIKEY}&format=json`
    )
      .then((response) => response.json())
      .then((json) => {
        setTracks(json.tracks.track);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={tracks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Track
              track={item.name}
              artist={item.artist.name}
              imgurl={item.image[0]['#text']}
              navlink={() => navigation.navigate('Artist', item)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, backgroundColor: '#fff' },
});

export default Home;
