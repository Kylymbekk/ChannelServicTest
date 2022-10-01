import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import axios from 'axios';
import ListItemComponent from './ListItemComponent';

function Home() {
  const [web, setWeb] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        params: {
          limit: 10,
        },
      })
      .then(data => {
        setWeb(data.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', flexWrap: 'wrap'}}>
      <FlatList
        data={web}
        refreshing={loading}
        onRefresh={() => fetchUsers()}
        numColumns={'2'}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ListItemComponent item={item} />;
        }}
      />
    </View>
  );
}

export default Home;
