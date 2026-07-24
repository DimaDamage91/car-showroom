# Car Showroom

Car Showroom is a virtual car showroom application where users can explore available vehicles, view detailed information about each model, and read customer reviews.

The application displays a catalog of vehicles fetched from the API, provides navigation between pages, and allows users to open a detailed vehicle page with additional information.

## Live Demo

🔗 Live website: [LIVE DEMO](https://dimadamage91.github.io/car-showroom/)

## Features

- Vehicle Catalog with available car models
- Fetching vehicle data from REST API
- Filtering products by vehicle category
- Detailed Vehicle Page with full information
- Dynamic routing using React Router
- Customer reviews display
- Loading states during data fetching
- Error handling for failed API requests
- Not Found page for invalid routes
- Responsive layout for different screen sizes

## Technologies Used

- HTML5
- CSS3
- SCSS
- TypeScript
- React
- React Router
- Vite
- Fetch API
- REST API
- Git
- ESLint

## API

The project uses DummyJSON API as a data source.

Products are fetched from:

https://dummyjson.com/products

The application filters products by vehicle category and displays only relevant car models.

## Project Structure

The project follows a modular architecture with separation between pages, components, and shared resources.

### Modules

Contains page-level components:

- HomePage
- VehicleDetailsPage
- NotFoundPage

### Components

Reusable UI components:

- VehicleCard
- VehicleList
- BackButton
- Rating
- Loader
- Header
- Footer
- ReviewForm
- ReviewsCard
- ReviewsList
- Search
- VehicleCard
- VehicleList

### Shared

Contains reusable project resources:

- API constants
- Fetch functions
- TypeScript interfaces

### Utils

- mixins
- scss variables

## ⚙️ Getting Started

#### 1.Clone the repository:

```
git clone https://github.com/DimaDamage91/car-showroom.git
```

#### 2.Navigate to the project directory:

```
cd car-showroom
```

#### 3.Install dependencies:

```
npm install
```

#### 4.Run the project locally:

```
npm run dev
```

#### 5.Open your browser and visit `http://localhost:5173/car-showroom/` to view the application.
