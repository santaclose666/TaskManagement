import React from 'react';
import {Icon, IconElement} from '@ui-kitten/components';
import {Pressable, ViewStyle} from 'react-native';

interface IconCustomProps {
  name: string;
  hidenIcon?: boolean;
  color?: string;
  disable?: boolean;
  styleIcon?: ViewStyle;
  styleBtn?: ViewStyle;
  onPress?: () => void;
  children?: React.ReactNode;
}

const IconCustom = ({
  name,
  hidenIcon = false,
  color,
  disable = false,
  styleIcon,
  styleBtn,
  onPress,
  children,
}: IconCustomProps): IconElement => {
  return (
    <Pressable disabled={disable} onPress={onPress} style={styleBtn}>
      {children}
      {!hidenIcon && <Icon style={styleIcon} fill={color} name={name} />}
    </Pressable>
  );
};

export default IconCustom;
