import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StockCount = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 5 },
    // Adicione mais itens conforme necessário
  ]);

  const Container = styled(View);
  const SearchInput = styled(TextInput);
  const ItemContainer = styled(View);
  const ItemText = styled(Text);
  const ItemQuantity = styled(Text);
  const ButtonContainer = styled(TouchableOpacity);

  const handleSearch = (text) => {
    setSearch(text);
    // Filtrar itens conforme o texto de busca
  };

  const handleScan = () => {
    // Lógica para escanear código de barras/QR
  };

  const handleUpdateQuantity = (id, increment) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + increment } : item
    ));
  };

  return (
    <Container className="flex-1 bg-gray-900 p-4">
      <SearchInput
        className="bg-gray-800 text-white p-4 rounded-lg mb-4"
        placeholder="Buscar item..."
        placeholderTextColor="gray"
        value={search}
        onChangeText={handleSearch}
      />
      <Button title="Escanear Código" onPress={handleScan} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemContainer className="flex-row items-center justify-between p-4 bg-gray-800 rounded-lg mb-4">
            <View>
              <ItemText className="text-white">{item.name}</ItemText>
              <ItemQuantity className="text-gray-400">Quantidade: {item.quantity}</ItemQuantity>
            </View>
            <View className="flex-row">
              <ButtonContainer
                className="p-2 bg-green-600 rounded-lg mr-2"
                onPress={() => handleUpdateQuantity(item.id, 1)}
              >
                <Icon name="plus" size={24} color="white" />
              </ButtonContainer>
              <ButtonContainer
                className="p-2 bg-red-600 rounded-lg"
                onPress={() => handleUpdateQuantity(item.id, -1)}
              >
                <Icon name="minus" size={24} color="white" />
              </ButtonContainer>
            </View>
          </ItemContainer>
        )}
      />
      <Button title="Compartilhar" onPress={() => {}} />
    </Container>
  );
};

export default StockCount;
