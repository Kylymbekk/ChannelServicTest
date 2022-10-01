import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ListItemComponent({item}) {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId: item.id,
        },
      })
      .then(d => {
        setPosts(d.data);
      })
      .catch(e => {
        console.log(e);
      });
    axios
      .get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          albumId: item.id,
        },
      })
      .then(data => {
        setPhotos(data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <View style={styles.block}>
      {photos.length > 0 ? (
        <Image
          style={styles.image}
          source={{
            uri: `${photos[0].url}`,
          }}
        />
      ) : null}
      <Text style={styles.textBody}>Autor: {item.name}</Text>
      <Text style={styles.textBody}>Company: {item.company.name}</Text>
      {posts.length > 0 ? (
        <Text style={styles.textBody}>{posts[0].title}</Text>
      ) : null}
      {posts.length > 0 ? (
        <Text style={styles.textBody}>{posts[0].body}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 250,
    width: 200,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
  },
  textBody: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default ListItemComponent;
