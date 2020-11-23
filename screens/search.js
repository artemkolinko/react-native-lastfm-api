import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import FoundTrack from '../components/found-track';
import APIKEY from '../keyapi';

const Search = () => {
  const [isLoading, setLoading] = useState(false);
  const [track, setTrack] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (track) {
      setLoading(true);
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${APIKEY}&format=json`
      )
        .then((response) => response.json())
        .then((json) => {
          setData(json.results.trackmatches.track);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setLoading(false));
    } else {
      setData(null);
    }
  }, [track]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(val) => setTrack(val)}
        placeholder="Enter track title"
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
          renderItem={({ item }) => (
            <FoundTrack
              track={item.name}
              artist={item.artist}
              imgurl={item.image[0]['#text']}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
  },
  flatList: {
    marginTop: 16,
  },
});

export default Search;
