<<Smart Daily Assistant>>

Kısa açıklama: React Native ile geliştirilmiş, kullanıcı metinlerini AI destekli duygu analizi ile sınıflandıran mobil uygulama.

#Technologies:
React Native
JavaScript / TypeScript
Context API
HuggingFace Inference API
Android Emulator

#Özellikler 
- Kullanıcıdan metin girişi alma
- Hugging Face API ile AI destekli duygu analizi yapma
- Analiz sonuçlarını pozitif, negatif veya nötr olarak gösterme
- Geçmiş analizleri AsyncStorage ile saklama
- Haftalık özet ekranı(offline olarak çalışır)
- Basit ve kullanıcı dostu arayüz

#Gereksinimle
- Node.js   
- npm veya yarn 
- React Native CLI 
- Android Studio (emülatör veya gerçek cihaz için) -
- ava Development Kit (JDK)
- visual Studio Code

#kurulum adımları
- önce proje dosyası yuklenır
- visual Studio Code'ta kurulur
- terminelde:
  (npm install)
- Android Studio kurulur 
  Emülatör Başlatma:
cihazın yanındaki Play ikonuna bas → Emülatör açılır.
eğer emülatör mevcut degılse bu video dan yola çıkarak kura bilirsiniz
-->https://www.youtube.com/watch?v=sdrqDQAC3Gw 
(08:00) dakikadan baslayan adımları takip edebilirsiniz


#React Native CLI ile Uygulamayı Çalıştırma
- Metro Bundler’ı başlat:
    (npx react-native start)
- Başka bir terminal açın ve Android için uygulamayı çalıştırın:
    (npx react-native run-android)
Emülatör çalışıyorsa uygulama otomatik açılır.

#Kullanılan AI Modeli ve API:
AI Modeli:
https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest
- Metinleri pozitif, negatif veya nötr olarak sınıflandırır.
- Mobil uygulamalarda hızlı ve doğru sonuç verir.
API:
https://huggingface.co/docs/inference-providers/index
- Önce API’den gelen veri test edilerek formatı ve içeriği anlaşılır
- Modeli doğrudan Hugging Face sunucularında çalıştırır.
- React Native uygulamasında axios ile çağrılır.
- API Key gerektirir, .env dosyasında saklı

#AI araç kullanımı:
React Native ile projeyi ilk kez geliştiriyorum;Projede AI’dan yalnızca rehberlik ve arayüz tasarımı için biraz yardım aldım; API ve AsyncStorage işlemleri tamamen bana ait.

#Uygulamanın kısa ekran videosu mevcutur (ekran_video) adında
