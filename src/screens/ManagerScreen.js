import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ManagerScreen = ({ navigation }) => {
  const Container = styled(View);
  const Item = styled(TouchableOpacity);
  const ItemText = styled(Text);
  const IconContainer = styled(View);

  const items = [
    { id: 1, name: 'Checklist abertura', icon: 'check-circle-outline', screen: 'OpeningChecklist' },
    { id: 2, name: 'Checklist fechamento', icon: 'check-circle-outline', screen: 'ClosingChecklist' },
    { id: 3, name: 'Contagem de estoque', icon: 'format-list-numbered', screen: 'StockCount' },
    { id: 4, name: 'Pesagem de chopp', icon: 'beer', screen: 'BeerWeight' },
    { id: 5, name: 'Anotações', icon: 'note-text', screen: 'Notes' },
  ];

  return (
    <Container className="flex-1 bg-gray-900 p-4">
      <ScrollView>
        {items.map(item => (
          <Item
            key={item.id}
            className="flex-row items-center p-4 bg-gray-800 rounded-lg mb-4"
            onPress={() => navigation.navigate(item.screen)}
          >
            <IconContainer className="mr-4">
              <Icon name={item.icon} size={24} color="white" />
            </IconContainer>
            <ItemText className="text-lg text-white">{item.name}</ItemText>
          </Item>
        ))}
      </ScrollView>
    </Container>
  );
};

export default ManagerScreen;
