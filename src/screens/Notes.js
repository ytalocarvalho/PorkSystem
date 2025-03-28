import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styled } from 'nativewind';

const Notes = () => {
  const [note, setNote] = useState('');

  const Container = styled(View);
  const NoteInput = styled(TextInput);

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <TextInput
        className="bg-gray-800 text-white p-4 rounded-lg mb-4"
        multiline
        placeholder="Escreva suas anotações aqui..."
        placeholderTextColor="gray"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Compartilhar" onPress={() => {}} />
    </View>
  );
};

export default Notes;
