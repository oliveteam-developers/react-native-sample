import React from 'react';
import { Button } from '@rneui/themed';

interface IProps {
  text: string;
  loading: boolean;
  styles?: any;
  onPress(): any;
}

const ButtonView = (props: IProps) => {
  const handleOnPress = () => {
    props.onPress();
  };

  return (
    <Button
      buttonStyle={props.styles}
      title={props.text}
      loading={props.loading}
      onPress={handleOnPress}
    />
  );
};

export default ButtonView;
