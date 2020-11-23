import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import ArtistInfo from '../components/artist-info';
import APIKEY from '../keyapi';

const Artist = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${route.params.artist.name}&api_key=${APIKEY}&format=json`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.artist);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ArtistInfo
          name={data.name}
          imgurl={data.image[3]['#text']}
          bio={data.bio.content}
          tags={data.tags.tag}
        />
      )}
    </ScrollView>
  );
};

export default Artist;
