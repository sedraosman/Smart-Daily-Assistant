Smart Daily Assistant

Short Description:
A mobile application built with React Native that classifies user text using AI-powered sentiment analysis.

Technologies

React Native

JavaScript / TypeScript

Context API

HuggingFace Inference API

Android Emulator

Features

Accepts text input from the user

Performs AI-powered sentiment analysis using the Hugging Face API

Displays results as positive, negative, or neutral

Saves previous analyses using AsyncStorage

Weekly summary screen (works offline)

Simple and user-friendly interface

Requirements

Node.js

npm or yarn

React Native CLI

Android Studio (for emulator or real device)

Java Development Kit (JDK)

Visual Studio Code

Installation Steps

Download the project files

Open the project in Visual Studio Code

In the terminal, run:

npm install


Install Android Studio

Start the emulator:
Click the Play icon next to the device → The emulator will launch.

If no emulator exists, you can create one using this video tutorial:
→ https://www.youtube.com/watch?v=sdrqDQAC3Gw

Follow the steps starting at 08:00.

Running the App with React Native CLI

Start Metro Bundler:

npx react-native start


Open another terminal and run the Android app:

npx react-native run-android


If the emulator is running, the app will open automatically.

AI Model and API Used
AI Model:

https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest

Classifies text as positive, negative, or neutral

Provides fast and accurate results for mobile apps

API:

https://huggingface.co/docs/inference-providers/index

First, the API response is tested to understand its structure

Runs the model directly on Hugging Face servers

Called using axios in the React Native app

Requires an API Key stored in a .env file


