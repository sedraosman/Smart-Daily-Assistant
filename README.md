# 🤖 Smart Daily Assistant

Smart Daily Assistant is a mobile application built with **React Native** that classifies user text using **AI-powered sentiment analysis**.  
The app analyzes user input and determines whether the sentiment is positive, negative, or neutral through an external AI model.

---

## 🚀 Features

- Accepts text input from the user  
- Performs AI-powered sentiment analysis  
- Displays sentiment results as **positive, negative, or neutral**  
- Saves previous analyses using AsyncStorage  
- Weekly summary screen (works offline)  
- Simple and user-friendly interface  

---

## ⚙️ Technologies & Tools

- React Native  
- JavaScript / TypeScript  
- Context API  
- Hugging Face Inference API  
- Axios  
- AsyncStorage  
- Android Emulator  

---

## 🧠 AI Model & API

### AI Model
- **twitter-roberta-base-sentiment-latest**  
- Classifies text as positive, negative, or neutral  
- Optimized for fast and accurate sentiment analysis  

Model link:  
https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest

### API
- Hugging Face Inference API  
- Runs the model directly on Hugging Face servers  
- Integrated into the app using Axios  
- Requires an API key stored in a `.env` file  

API documentation:  
https://huggingface.co/docs/inference-providers/index

---

## 🧠 Purpose

This project was developed to practice:
- AI API integration in mobile applications  
- Text classification and sentiment analysis  
- State management using Context API  
- Data persistence with AsyncStorage  

It focuses on building a practical AI-powered mobile application with clean logic and a simple user experience.

---

## 📋 Requirements

- Node.js  
- npm or yarn  
- React Native CLI  
- Android Studio (emulator or real device)  
- Java Development Kit (JDK)  
- Visual Studio Code  

---

## 🛠️ Installation & Setup

1. Download or clone the project files  
2. Open the project in **Visual Studio Code**  
3. Install dependencies:
   ```bash
   npm install
