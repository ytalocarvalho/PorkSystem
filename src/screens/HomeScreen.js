import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterComponent from '../components/Footer';

const HomeScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const navigateToScreen = () => {
    if (selectedRole === 'Manager') {
      navigation.navigate('Manager');
    } else if (selectedRole === 'Admin') {
      navigation.navigate('Admin');
    } else if (selectedRole === 'Kitchen') {
      navigation.navigate('Kitchen');
    }
  };

  const Container = styled(View);
  const Title = styled(Text);
  const PickerContainer = styled(View);
  const CustomPicker = styled(Picker);
  const CustomPickerItem = styled(Picker.Item);
  const Button = styled(TouchableOpacity);
  const ButtonText = styled(Text);
  const Divider = styled(View);

  return (
    <Container className="flex-1 bg-gray-800 p-6">
      <View className="flex-1 justify-center items-center">
        <Image source={require('../assets/images/porks-logo.png')} className="w-40 h-40 mb-4" resizeMode="contain" />
        <Title className="text-4xl font-bold text-white mb-8">Escolha o usuário</Title>
        <PickerContainer className="w-full max-w-md border border-gray-700 rounded-lg bg-gray-800 mb-6 shadow-lg">
          <CustomPicker
            selectedValue={selectedRole}
            className="h-14 text-lg text-white"
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
            mode="dropdown"
            itemStyle={{ height: 44, backgroundColor: 'gray', color: 'white' }}
          >
            <CustomPickerItem label="Selecione..." value="" />
            <CustomPickerItem label="Gerente" value="Manager" />
            <CustomPickerItem label="Administrador" value="Admin" />
            <CustomPickerItem label="Chefe de cozinha" value="Kitchen" />
          </CustomPicker>
        </PickerContainer>
        <Button
          className={`flex flex-row items-center justify-center px-6 py-3 rounded-full shadow-lg ${!selectedRole ? 'bg-gray-700' : 'bg-indigo-600'}`}
          onPress={navigateToScreen}
          disabled={!selectedRole}
        >
          <Icon name="arrow-right" size={24} color="white" />
          <ButtonText className="text-white text-lg font-bold ml-2">Avançar</ButtonText>
        </Button>
      </View>
      <Divider className="w-full h-px bg-gray-600 my-4" />
      <FooterComponent className="w-full" />
    </Container>
  );
};

export default HomeScreen;
