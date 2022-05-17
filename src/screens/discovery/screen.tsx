import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Card, Searchbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {
  booksRequest,
  selectBooks,
  selectIsBooksLoading,
} from '../../redux/books/slice';
import {AppStackNavigationProp} from '../../navigation/app-stack';
import {screenNames} from '../../constants';
import {styles} from './styles';

type DiscoveryProps = {
  navigation: AppStackNavigationProp;
};

export const Discovery: React.FC<DiscoveryProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsBooksLoading);

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const getBooks = useCallback(
    () => dispatch(booksRequest({searchQuery})),
    [dispatch, searchQuery],
  );

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        keyExtractor={item => item.id}
        style={styles.container}
        data={books}
        renderItem={({item}) => {
          return (
            <Card
              style={styles.card}
              onPress={() =>
                navigation.navigate(screenNames.DISCOVERY_DETAIL, {
                  id: item.id,
                  title: item.title,
                })
              }>
              <Card.Cover
                source={{uri: item.coverImageUrl}}
                resizeMode="contain"
              />
              <Card.Title title={item.title} subtitle={item.author} />
            </Card>
          );
        }}
        refreshing={isLoading}
        onRefresh={getBooks}
      />
    </>
  );
};
