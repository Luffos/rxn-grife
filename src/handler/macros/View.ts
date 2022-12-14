import React from "react";
import { View } from "../../index";
import { Styled } from "../Styled";

import type { ElementCallback } from "../../interfaces/Element";
import type { _ViewProps } from "../../components/View";

export const StyledFromView = (callback: ElementCallback) =>
  Styled(View, callback) as unknown as typeof View;
