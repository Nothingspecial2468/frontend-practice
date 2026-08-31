# 🍽️ Recipe Finder

A web application that allows users to search for delicious recipes from around the world using the TheMealDB API.

## ✨ Features

- **Search Functionality**: Search for recipes by meal name or keyword
- **Recipe Cards**: Browse search results with meal images, names, and categories
- **Detailed Recipe View**: Click on any recipe to see:
  - High-quality meal image
  - Complete recipe title
  - Meal category and cuisine type
  - Step-by-step instructions
  - Complete ingredients list with measurements
  - YouTube video link (when available)
- **Smooth Navigation**: Easy switching between search results and detailed views
- **Error Handling**: User-friendly error messages for failed searches or API issues
- **Responsive Design**: Works seamlessly on different screen sizes

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Dynamic functionality and API interaction
- **Font Awesome**: Icons for better UX
- **TheMealDB API**: Free meal database API

## 📚 How It Works

### Architecture

1. **Frontend Application**: 
   - User enters a meal name or keyword
   - JavaScript fetches data from TheMealDB API
   - Results are displayed as meal cards

2. **API Communication**:
   - **Search API**: `https://www.themealdb.com/api/json/v1/1/search.php?s={mealname}`
   - **Lookup API**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealid}`
   - The API acts as a middleman between frontend and database
   - Provides data in JSON format

3. **Data Flow**:
   ```
   User Input → Fetch Request → TheMealDB API → Database Query → JSON Response → Display Results
   ```

## 🚀 Getting Started

1. **Open the application**:
   - Open `index.html` in your web browser

2. **Search for a recipe**:
   - Type a meal name (e.g., "pasta", "pizza", "salad") in the search box
   - Press Enter or click the Search button

3. **View recipe details**:
   - Click on any meal card to view full recipe details
   - Instructions, ingredients, and YouTube link will be displayed

4. **Go back to results**:
   - Click the "Back to recipes" button to return to search results

## 📁 Project Structure

```
Recipe-Finder/
├── index.html       # HTML structure
├── style.css        # Styling and layout
├── script.js        # JavaScript logic and API calls
└── README.md        # Project documentation
```

## 💻 Key JavaScript Functions

### `searchMeals()`
- Handles user search input
- Fetches meal data from TheMealDB API
- Displays results or error messages
- Validates search input

### `displayMeals()`
- Creates meal cards for search results
- Shows meal image, name, and category
- Stores meal ID for detail lookup

### `handleMealClick()`
- Fetches detailed recipe information
- Processes ingredients (up to 20 per recipe)
- Generates detailed recipe view with:
  - Instructions
  - Ingredient list with measurements
  - YouTube video links
  - Cuisine information

## 🔑 API Response Properties

**Search Results Include**:
- `idMeal`: Unique meal identifier
- `strMeal`: Meal name
- `strMealThumb`: Meal image URL
- `strCategory`: Recipe category
- `strArea`: Country/region of origin

**Detailed Recipe Includes**:
- `strIngredient1-20`: Individual ingredients
- `strMeasure1-20`: Measurement for each ingredient
- `strInstructions`: Step-by-step cooking instructions
- `strYoutube`: YouTube video link (when available)
- `strArea`: Cuisine type/region

## 🎯 What We Learned

This project demonstrates:
1. **API Integration**: Communicating with external APIs using `fetch()`
2. **Data Processing**: Converting JSON responses to usable data
3. **DOM Manipulation**: Dynamically generating HTML content
4. **Error Handling**: Gracefully handling missing or null data
5. **Conditional Rendering**: Only displaying available data
6. **Event Handling**: Responding to user interactions
7. **Frontend-Backend Communication**: Understanding API as middleware between UI and database

## 📝 Example API Response Structure

```javascript
{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Teriyaki Chicken Casserole",
      "strMealThumb": "https://...",
      "strCategory": "Chicken",
      "strArea": "Japanese",
      "strIngredient1": "Soy sauce",
      "strMeasure1": "3/4 cup",
      "strIngredient2": "Water",
      "strMeasure2": "1/2 cup",
      "strInstructions": "Step-by-step instructions...",
      "strYoutube": "https://youtube.com/..."
    }
  ]
}
```

## 🐛 Debugging Tips

- Open **Developer Tools** (F12) → **Console** tab to see:
  - API responses
  - JavaScript errors
  - Network requests

- Common issues and fixes:
  - **Blank recipe details**: Check for `null` properties in API response
  - **Missing images**: Verify `strMealThumb` property exists
  - **No ingredients**: Ensure property name is `strIngredient` (not `strIngredients`)

## 🌟 Features to Enhance

Potential improvements for future versions:
- Add recipe filtering by category or cuisine
- Implement recipe favorites/bookmarking
- Add recipe rating system
- Create a dark mode theme
- Add recipe sharing functionality
- Implement recipe collections/meal plans
- Add nutritional information
- Implement caching for better performance

## 📖 API Documentation

Full documentation available at: https://www.themealdb.com/api.php

## 📄 License

Open source project for learning purposes.

---

**Enjoy exploring delicious recipes! 🍴👨‍🍳**
