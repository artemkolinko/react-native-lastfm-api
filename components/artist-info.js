import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function ArtistInfo({ name, imgurl, bio, tags }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: imgurl,
          }}
          style={styles.img}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.tags}>
            {tags.map((item, index) => {
              return (
                <Text style={styles.tag} key={index.toString()}>
                  {item.name}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
      <Text style={styles.content}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 8, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 42,
    marginBottom: 8,
  },
  tags: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: {
    padding: 2,
    paddingRight: 8,
    paddingLeft: 8,
    fontSize: 16,
    width: 'auto',
    marginRight: 4,
    marginBottom: 4,
    backgroundColor: '#778899',
    color: '#F0F8FF',
    borderRadius: 4,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ArtistInfo;
