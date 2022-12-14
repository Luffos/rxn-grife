import React from "react";
import { Text } from "../../index";
import { Styled } from "../Styled";

import type { ElementCallback } from "../../interfaces/Element";
import type { _TextProps } from "../../components/Text";

export const StyledFromText = (callback: ElementCallback) =>
  Styled(Text, callback) as unknown as typeof Text;
