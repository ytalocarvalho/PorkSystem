import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const Footer = styled(View);
const FooterText = styled(Text);

const FooterComponent = () => {
  return (
    <Footer className="w-full p-4 bg-gray-800 flex-row justify-center items-center">
      <FooterText className="text-gray-400 text-sm">© 2024 Porks. Todos os direitos reservados.</FooterText>
    </Footer>
  );
};

export default FooterComponent;
