import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import db from '../db.json';
import {useNavigation} from '@react-navigation/native';
import DetailScreen from './DetailScreen';

export default function UserScreen() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const users = db.users;
  const navigation = useNavigation();
  //gruplama

  const [searchTerm, setSearchTerm] = useState('');

  // **Kullanıcıları filtrele**
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // **Gruplama işlemi (filtrelenmiş kullanıcılar üzerinden)**
  const groupedUsers = filteredUsers.reduce((groups, user) => {
    const firstLetter = user.name.charAt(0).toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(user);
    return groups;
  }, {});

  const sortedGroupedUsers = Object.keys(groupedUsers)
    .sort()
    .map(key => ({
      title: key,
      data: groupedUsers[key],
    }));

  return (
    <View style={{padding: 8, flex: 1}}>
      <View>
        <Text
          onPress={() => navigation.navigate('List')}
          style={{textAlign: 'right', color: 'blue', fontSize: 20}}>
          Listeler
        </Text>
      </View>
      <Text style={styles.text}>Kişiler</Text>
      <TextInput
        placeholder="Ara"
        style={styles.input}
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <View style={styles.myContainer}>
        <Image
          style={{width: 50, height: 50, borderRadius: 100}}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
        />
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>Fatma Zehra</Text>
          <Text>Kartım</Text>
        </View>
      </View>
      <View style={styles.alphabetContainer}>
        <ScrollView>
          {alphabet.map(letter => (
            <TouchableOpacity key={letter}>
              <Text style={styles.alphabetLetter}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        <SectionList
          sections={sortedGroupedUsers} // Gruplandırılmış veriyi ekranda göstermek
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.userItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', {user: item})}>
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#cdcdcd',
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
  },
  myContainer: {
    flexDirection: 'row',
    gap: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#cdcdcd',
    padding: 8,
  },
  textContainer: {justifyContent: 'center', alignItems: 'start'},
  alphabetContainer: {
    position: 'absolute',
    right: 15,
    top: 170,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  alphabetLetter: {
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#007AFF',
  },
  itemName: {
    borderBottomWidth: 0.5,
    borderColor: '#cdcdcd',
    paddingVertical: 10,
    width: '90%',
  },
  sectionHeader: {
    color: 'red',
    borderBottomWidth: 0.5,
    borderColor: '#cdcdcd',
    paddingVertical: 10,
    width: '90%',
  },
});
