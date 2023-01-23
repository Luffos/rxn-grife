import * as React from "react";
import { SafeAreaView } from "react-native";

// Text with extra pseudo-props (just declaration) of id and className
import { Text } from "rxn-grife";
import { MyText, MyRainbowText } from "./styles";

function App() {
  // PROOF OF CONCEPT, DO NOT USE IN PRODUCTION! ⚠️

  return (
    <SafeAreaView>
      <MyText>
        Hello there{" "}
        <Text style={{ color: "green" }} className="test">
          How are you? <Text> : )</Text>
        </Text>
      </MyText>

      <MyRainbowText style={{ fontWeight: "900" }}>
        DO YOU BELIEVE IN MAGIC
        <Text style={{ color: "black", fontSize: 50 }}>?</Text>
      </MyRainbowText>
    </SafeAreaView>
  );
}

export default App;
