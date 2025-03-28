import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { loadChecklists, saveChecklists, toggleCheck, clearAll } from '../slices/checklistSlice';
import Share from 'react-native-share';

const OpeningChecklist = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.checklist.openingChecklist);

  useEffect(() => {
    dispatch(loadChecklists());
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveChecklists());
  }, [items, dispatch]);

  const shareChecklist = async () => {
    const markedItems = items.filter(item => item.checked).map(item => `✔️ ${item.text}`).join('\n');
    const unmarkedItems = items.filter(item => !item.checked).map(item => `❌ ${item.text}`).join('\n');
    const message = `Checklist de Abertura:\n\nItens Marcados:\n${markedItems}\n\nItens Não Marcados:\n${unmarkedItems}`;

    const shareOptions = {
      title: 'Compartilhar Checklist',
      message: message,
    };

    try {
      await Share.open(shareOptions);
    } catch (err) {
      if (err.message !== 'User did not share') {
        Alert.alert('Erro', 'Ocorreu um erro ao compartilhar o checklist.');
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1f1f1f', padding: 16 }}>
      <ScrollView>
        {items.map(item => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <CheckBox
              value={item.checked}
              onValueChange={() => dispatch(toggleCheck({ type: 'openingChecklist', id: item.id }))}
              tintColors={{ true: '#4f46e5', false: 'white' }}
            />
            <Text style={{ color: 'white', marginLeft: 8 }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{ backgroundColor: '#4f46e5', padding: 12, borderRadius: 8, marginTop: 16 }}
        onPress={() => dispatch(clearAll({ type: 'openingChecklist' }))}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Desmarcar Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: '#1d4ed8', padding: 12, borderRadius: 8, marginTop: 16 }}
        onPress={shareChecklist}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OpeningChecklist;
