import React from "react";
import { ScrollView } from "../../index";
import { Styled } from "../Styled";

import type { ElementCallback } from "../../interfaces/Element";
import type { _ScrollViewProps } from "../../components/ScrollView";

export const StyledFromScrollView = (callback: ElementCallback) =>
  Styled(ScrollView, callback) as unknown as typeof ScrollView;
