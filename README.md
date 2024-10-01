# House Price Prediction 🏠📈

**Exciting news! 🎉**  
I've developed a Machine Learning model to predict house prices in Bangalore! This project was built using a **Kaggle dataset** on Bangalore house prices, and it combines data processing, machine learning, and web development to create a powerful tool for property price prediction.

## Features
- **Machine Learning Model**: Trained using a Linear Regression algorithm for accurate price predictions.
- **Data Processing & Analysis**: Leveraged **Pandas** for thorough data exploration and cleaning.
- **Frontend & Backend Integration**: A sleek **React JS** frontend combined with a **Flask** backend server.
- **CRUD Application**: Built a complete CRUD (Create, Read, Update, Delete) application to manage data.
- **Real-Time Price Prediction**: The model predicts prices based on property attributes like square footage, bedrooms, bathrooms, and location.
- **UI Design**: Designed with **HTML** and **CSS** for an intuitive user interface.

## Tech Stack
- **Pandas**: For data cleaning, processing, and exploration.
- **Label Encoding**: Used to handle categorical variables and transform them into dummy variables.
- **Scikit-learn**: To train and test a Linear Regression model—great for handling linear data!
- **Scaling and Transformation**: Applied scaling techniques to optimize model accuracy.
- **Pickle**: Saved the trained model as a binary file for future use.
- **Flask**: A lightweight Python server to deploy the model and serve API endpoints.
- **React JS**: For building the interactive frontend.
- **HTML & CSS**: Used for styling the user interface.

## Project Overview
This project focuses on predicting house prices in Bangalore based on several factors:
- **Square Footage**
- **Number of Bedrooms (BHK)**
- **Number of Bathrooms**
- **Location Area**

Using the model, property dealers or buyers can estimate property prices in real-time by inputting the desired parameters. The predictions are powered by a **Linear Regression model**, which has been optimized through data scaling and feature engineering.

## How it Works
1. **Data Preprocessing**:
   - The data is cleaned and prepared using Pandas.
   - Categorical data such as location is encoded using label encoding.

2. **Model Training**:
   - The Scikit-learn **Linear Regression** algorithm is applied to train the model.
   - The data is scaled and transformed for improved accuracy.
   - The model is saved using the **Pickle** library.

3. **Deployment**:
   - A **Flask server** is used to serve the machine learning model.
   - The model is exposed through API endpoints to interact with the frontend.

4. **Frontend (React JS)**:
   - A user-friendly interface allows users to input property details and get real-time price predictions.
   - The CRUD functionality enables users to add, update, and delete entries.
