import React from "react";
import { Text } from "react-native";
import { Styled } from "../Styled";

import type { ElementCallback } from "../../interfaces/Element";
import type { _TextProps } from "../../components/Text";

class _Text extends React.Component<_TextProps> {}

export const StyledFromText = (callback: ElementCallback) =>
  Styled(Text, callback) as unknown as typeof _Text;
