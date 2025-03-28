import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { loadChecklists, saveChecklists, toggleCheck, clearAll } from '../slices/checklistSlice';
import Share from 'react-native-share';

const ClosingChecklist = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.checklist.closingChecklist);

  useEffect(() => {
    const initialItems = [
      { id: 1, text: 'Limpar todas as mesas antes de guardar', checked: false },
      { id: 2, text: 'Limpar parte externa do bar', checked: false },
      { id: 3, text: 'Verificar lixos dos banheiros', checked: false },
      { id: 4, text: 'Verificar lixos externos e dos balcões', checked: false },
      { id: 5, text: 'Verificar se não existem itens esquecidos do lado externo do bar', checked: false },
      { id: 6, text: 'Checar se portas estão fechadas', checked: false },
      { id: 7, text: 'Checar se alguma torneira foi esquecida aberta', checked: false },
      { id: 8, text: 'Desligar chopeiras', checked: false },
      { id: 9, text: 'Desligar todas as luzes', checked: false },
      { id: 10, text: 'Acionar alarme', checked: false }
    ];

    dispatch(loadChecklists()).then((action) => {
      if (action.payload.closingChecklist.length === 0) {
        dispatch({ type: 'checklist/clearAll', payload: { type: 'closingChecklist', initialItems } });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveChecklists());
  }, [items, dispatch]);

  const shareChecklist = async () => {
    const markedItems = items.filter(item => item.checked).map(item => `✔️ ${item.text}`).join('\n');
    const unmarkedItems = items.filter(item => !item.checked).map(item => `❌ ${item.text}`).join('\n');
    const message = `Checklist de Fechamento:\n\nItens Marcados:\n${markedItems}\n\nItens Não Marcados:\n${unmarkedItems}`;

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
              onValueChange={() => dispatch(toggleCheck({ type: 'closingChecklist', id: item.id }))}
              tintColors={{ true: '#4f46e5', false: 'white' }}
            />
            <Text style={{ color: 'white', marginLeft: 8 }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{ backgroundColor: '#4f46e5', padding: 12, borderRadius: 8, marginTop: 16 }}
        onPress={() => dispatch(clearAll({ type: 'closingChecklist' }))}
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

export default ClosingChecklist;
