import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { SentimentContext, SentimentProvider } from "./SentimentContext";

/**
 * Ana ekran bileşeni
 * Bu bileşen kullanıcıdan duygu girdisi alır,
 * analiz eder ve haftalık özet ekranına geçiş yapar.
 */
const MainScreen = () => {
  const { inputText, setInputText, result, history, loading, analyzeSentiment } =
    useContext(SentimentContext);

  // Ekran durumu: "sentiment" veya "summary"
  const [screen, setScreen] = useState<"sentiment" | "summary">("sentiment");

  /**
   * Girilen duyguya göre özet ve öneri döndürür
   * @param label - "positive" | "negative" | "neutral"
   */
  const getSummaryAndAdvice = (label: string) => {
    switch (label) {
      case "positive":
        return { summary: "Bugün olumlu bir gün. 🥳", advice: "Küçük bir ödül alabilirsin." };
      case "negative":
        return { summary: "Bugün olumsuz bir gün. 🙂", advice: "10 dakikalık mola verebilirsin." };
      case "neutral":
        return { summary: "Bugün ne olumlu ne olumsuz bir gün. 😐", advice: "Normal bir gün gibi davranabilirsin." };
      default:
        return { summary: "", advice: "" };
    }
  };

  /**
   * Duyguya göre arka plan rengi döndürür
   * @param label - "positive" | "negative" | "neutral"
   */
  const getBackgroundColor = (label: string) => {
    switch (label) {
      case "positive":
        return "#64ed84ff"; // yeşil ton
      case "negative":
        return "#f8d7da"; // kırmızı ton
      case "neutral":
        return "#fff3cd"; // sarı ton
      default:
        return "#fff";
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Başlık */}
      <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 20 }}>Merhaba 🥰</Text>

      {screen === "sentiment" ? (
        // Duygu analizi ekranı
        <View>
          {/* Kullanıcı girişi */}
          <TextInput
            placeholder="Bir cümle yaz..."
            value={inputText}
            onChangeText={setInputText}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />

          {/* Analiz butonu */}
          <Button
            title={loading ? "Analiz ediliyor..." : "Analiz Et"}
            onPress={analyzeSentiment}
          />

          {/* Haftalık özet ekranına geçiş */}
          <View style={{ marginVertical: 10 }}>
            <Button title="Haftalık Özet" onPress={() => setScreen("summary")} />
          </View>

          {/* Analiz sonucu */}
          {result && (
            <View style={{ marginTop: 20, borderRadius: 5, overflow: "hidden" }}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: getBackgroundColor(result.label),
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Duygu Analizi: {result.label}</Text>
                <Text>Özet: {getSummaryAndAdvice(result.label).summary}</Text>
                <Text>Öneri: {getSummaryAndAdvice(result.label).advice}</Text>
              </View>
            </View>
          )}
        </View>
      ) : (
        // Haftalık özet ekranı
        <View style={{ flex: 1 }}>
          {/* Geri dön butonu */}
          <Button title="Geri Dön" onPress={() => setScreen("sentiment")} />
          <Text style={{ fontSize: 20, marginVertical: 10, fontWeight: "bold" }}>
            Haftalık Özet
          </Text>
          <ScrollView style={{ marginTop: 10 }}>
            {history.length === 0 && <Text>Henüz analiz yapılmamış.</Text>}
            {history.map((item, idx) => {
              const { summary, advice } = getSummaryAndAdvice(item.label);
              return (
                <View
                  key={idx}
                  style={{
                    marginBottom: 15,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 5,
                    backgroundColor: getBackgroundColor(item.label),
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Girdi:</Text> <Text>{item.text}</Text>
                  <Text style={{ fontWeight: "bold" }}>Duygu:</Text> <Text>{item.label}</Text>
                  <Text style={{ fontWeight: "bold" }}>Özet:</Text> <Text>{summary}</Text>
                  <Text style={{ fontWeight: "bold" }}>Öneri:</Text> <Text>{advice}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

/**
 * Uygulama ana bileşeni
 * SentimentProvider ile MainScreen'i sarmalar
 */
export default function App() {
  return (
    <SentimentProvider>
      <MainScreen />
    </SentimentProvider>
  );
}
