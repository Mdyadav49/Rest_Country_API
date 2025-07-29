# 🌍 Country Info Finder Web App

This project is a responsive web application that displays detailed information about countries. It allows users to:

- View country flags, population, region, and capital
- Filter countries by region
- Search countries by name
- View detailed information for any selected country
- Toggle between light and dark mode
- Save light/dark theme preference in localStorage

<br/>

## 📸 Preview

![Country Info App Preview](https://i.imgur.com/YF8VvBl.png)


---

## 🚀 Features

- 🔍 **Live search** for country names
- 🗂️ **Region-based filter**
- 📄 **Detailed info page** for each country (including native name, population, region, subregion, capital, domain, currencies, and languages)
- 🌙 **Dark/Light theme toggle** (with persistence using `localStorage`)
- 📁 Uses both **local static data** and **live REST Countries API**

---

## 🧠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **REST Countries API** – https://restcountries.com/v3.1
- **Google Fonts & Font Awesome Icons**

---

## 📁 Folder Structure

```bash
📦 project-root
 ┣ 📄 index.html            # Main homepage
 ┣ 📄 country.html          # Country detail page
 ┣ 📄 style.css             # Main styles
 ┣ 📄 country.css           # Styles for country.html
 ┣ 📄 script.js             # Logic for homepage
 ┣ 📄 country.js            # Logic for country page
 ┣ 📄 allCountriesData.js   # local saved data version of API
 ┗ 📁 images/               # Image assets like flags or icons
     ┗ 📄 searchIcon.svg
