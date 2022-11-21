import React from "react";
import { View } from "react-native";
import { Styled } from "../Styled";

import type { ElementCallback } from "../../interfaces/Element";
import type { _ViewProps } from "../../components/View";

class _View extends React.Component<_ViewProps> {}

export const StyledFromView = (callback: ElementCallback) =>
  Styled(View, callback) as unknown as typeof _View;