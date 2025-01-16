import {View, Text} from 'react-native';
import React from 'react';
import {ArrowRight2, Profile2User} from 'iconsax-react-native';

export default function List() {
  return (
    <View>
      <View>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 20,
            color: 'blue',
            margin: 8,
          }}>
          Liste Ekle
        </Text>
      </View>
      <Text style={{fontSize: 25, fontWeight: 'bold', margin: 8}}>
        Listeler
      </Text>

      <View style={{gap: 18}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: 8,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Profile2User size="32" color="blue" />
            <Text>Tüm Kişiler</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>199</Text>
            <ArrowRight2 size="32" color="blue" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              gap: 5,
            }}>
            <Profile2User size="32" color="blue" />
            <Text>Tümü(Gmail)</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>199</Text>
            <ArrowRight2 size="32" color="blue" />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: 8,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Profile2User size="32" color="blue" />
            <Text>Tümü(iCloud)</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>0</Text>
            <ArrowRight2 size="32" color="blue" />
          </View>
        </View>
      </View>
    </View>
  );
}
