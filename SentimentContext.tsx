import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";
import { HUGGINGFACE_TOKEN } from '@env';

/**
 * Duygu analizi sonucu tip tanımı
 */
export interface SentimentResult {
  label: string; // "positive" | "negative" | "neutral" | "ERROR"
  score: number; // 0-1 arasında olasılık skoru
  text: string;  // Analiz edilen metin
}

/**
 * Context içindeki değerlerin tip tanımı
 */
interface SentimentContextProps {
  inputText: string;
  setInputText: (text: string) => void;
  result: SentimentResult | null;
  history: SentimentResult[];
  loading: boolean;
  analyzeSentiment: () => Promise<void>;
}

/**
 * SentimentContext oluşturulması
 */
export const SentimentContext = createContext<SentimentContextProps>({
  inputText: "",
  setInputText: () => {},
  result: null,
  history: [],
  loading: false,
  analyzeSentiment: async () => {},
});

/**
 * SentimentProvider bileşeni
 * - inputText ve result yönetimi
 * - geçmiş kayıtları AsyncStorage ile saklama
 * - Hugging Face API üzerinden duygu analizi
 */
export const SentimentProvider = ({ children }: { children: ReactNode }) => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [history, setHistory] = useState<SentimentResult[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * AsyncStorage'dan geçmişi yükle
   */
  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem("@sentiment_history");
        if (json) setHistory(JSON.parse(json));
      } catch (err) {
        console.log("Geçmiş yüklenemedi:", err);
      }
    })();
  }, []);

  /**
   * Geçmişi AsyncStorage'a kaydet
   * @param newHistory 
   */
  const saveHistory = async (newHistory: SentimentResult[]) => {
    try {
      await AsyncStorage.setItem("@sentiment_history", JSON.stringify(newHistory));
    } catch (err) {
      console.log("Geçmiş kaydedilemedi:", err);
    }
  };

  /**
   * Duygu analizi fonksiyonu
   * Hugging Face API kullanır
   */
  const analyzeSentiment = async () => {
    if (!inputText) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://router.huggingface.co/hf-inference/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
        { inputs: inputText },
        {
          headers: {
              Authorization: `Bearer ${HUGGINGFACE_TOKEN}`,

            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      

      if (Array.isArray(data) && Array.isArray(data[0])) {
        const arr = data[0];

        // En yüksek score'u seç
        let maxItem = arr[0];
        arr.forEach((item) => {
          if (item.score > maxItem.score) maxItem = item;
        });

        const newResult: SentimentResult = {
          label: maxItem.label,
          score: maxItem.score,
          text: inputText,
        };

        // Sonucu state ve geçmişe ekle
        setResult(newResult);
        const newHistory = [...history, newResult];
        setHistory(newHistory);
        await saveHistory(newHistory);
      } else {
        Alert.alert("Hata", "Hiç sonuç bulunamadı.");
        setResult(null);
      }
    } catch (err: any) {
      console.error(err);
      Alert.alert("Hata", "Bir hata oluştu: " + (err.message || err));
      setResult({ label: "ERROR", score: 0, text: inputText });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SentimentContext.Provider
      value={{ inputText, setInputText, result, history, loading, analyzeSentiment }}
    >
      {children}
    </SentimentContext.Provider>
  );
};
