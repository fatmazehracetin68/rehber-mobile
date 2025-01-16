import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import {Message, Call, Video, DocumentText1} from 'iconsax-react-native';
import {useRoute} from '@react-navigation/native';

export default function DetailScreen() {
  const route = useRoute();
  const {user} = route.params;
  const personSection = [
    {
      icon: <Message size="32" color="#FF8A65" />,
      title: 'Mesaj',
    },
    {
      icon: <Call size="32" color="#FF8A65" />,
      title: 'Tel',
    },
    {
      icon: <Video size="32" color="#FF8A65" />,
      title: 'görüntülü',
    },
    {
      icon: <DocumentText1 size="32" color="#FF8A65" />,
      title: 'mail',
    },
  ];

  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
        />
        <Text style={styles.name}>{user.name}</Text>
        <View style={styles.iconContainer}>
          {personSection.map((person, index) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'grey',
                  padding: 5,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 10,
                }}>
                {person.icon} <Text>{person.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.viewContainer}>
        <Image
          style={{width: 40, height: 40, borderRadius: 100}}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
        />
        <Text>Kişi Fotoğrafı ve Poster</Text>
      </View>
      <View
        style={[
          styles.viewContainer,
          {flexDirection: 'column', alignItems: 'start'},
        ]}>
        <Text>Cep</Text>
        <Text>{user.phone}</Text>
      </View>
      <View
        style={[
          styles.viewContainer,
          {flexDirection: 'column', alignItems: 'start'},
        ]}>
        <Text>Notlar</Text>
        <TextInput style={{height: 80}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  personContainer: {},
  image: {width: 'full', height: 300},
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  viewContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10,
    width: '95%',
    marginHorizontal: 'auto',
    padding: 10,
    borderRadius: 10,
  },
  name: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 10,
    top: 250,
    right: 120,
    fontSize: 25,
    padding: 5,
  },
});
