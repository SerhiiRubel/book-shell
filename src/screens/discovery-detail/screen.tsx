import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

import {selectBooks} from '../../redux/books/slice';
import {AppStackRouteProp} from '../../navigation/app-stack';
import {styles} from './styles';

export type DiscoveryDetailProps = {
  route: AppStackRouteProp;
};

export const DiscoveryDetail: React.FC<DiscoveryDetailProps> = ({route}) => {
  const bookId = route.params?.id;

  const books = useSelector(selectBooks);
  const book = useMemo(
    () => books?.find(el => el.id === bookId),
    [bookId, books],
  );

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      {Boolean(book) && (
        <Card>
          <Card.Title title={book!.title} subtitle={book!.author} />
          <Card.Cover
            style={styles.cardCover}
            source={{uri: book!.coverImageUrl}}
            resizeMode={'contain'}
          />
          <Card.Content>
            <Title>Synopsis</Title>
            <Paragraph>{book!.synopsis}</Paragraph>
            <Paragraph style={styles.pages}>
              {`${book!.pageCount} pages`}
            </Paragraph>
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
};
