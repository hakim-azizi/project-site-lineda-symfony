import { createBrowserRouter } from 'react-router-dom';
// Import the function to create a browser router
import { App } from './App';
// Import the root App component
import { Home } from './pages/Home';
// Import the Home page component
import { BestSeller } from './pages/BestSeller';
// Import the BestSeller page component
import { CartPage } from './pages/CartPage';
// Import the Cart page component
import { Category } from './pages/Category';
// Import the Category page component (supports nested routes)
import { Contact } from './pages/Contact';
// Import the Contact page component
import { Keyword } from './pages/Keyword';
// Import the Keyword page for learning specific topics
import { List } from './pages/List';
// Import the List page component
import { Login } from './pages/Login';
// Import the Login page component
import { Register }  from './pages/Register';
// Import the Register page component
import { TermOfSale } from './pages/TermsOfSale';
// Import the Terms of Sale page component
import { NotFound } from './pages/NotFound';
// Import the NotFound page component for handling 404 errors
import { Search } from './pages/Search';
// Import the Search page component

// Router configuration for the application using React Router's createBrowserRouter
export const router = createBrowserRouter([
  {
    // Root path of the application
    path: '/',
    element: <App />,
    children: [
      {
        // Home page
        path: '',
        element: <Home />,
      },
      {
        // Best-seller page with data fetched from API
        path: 'best-seller',
        element: <BestSeller />,
      },
      {
        // Cart page
        path: 'cart',
        element: <CartPage />,
      },
      {
        // Dynamic category page with nested routes
        path: ':slug/',
        element: <Category />,
        children: [
         {
            path: ':slug/',
            element: <Category />,
            children: [
              {
                 path: ':slug/',
                 element: <Category />,
               },
             ],
          },
        ],
      },
      {
        // Contact page
        path: 'contact',
        element: <Contact />,
      },
      {
        // Keyword page with data fetched from API
        path: 'learn-more/:slug',
        element: <Keyword />,
      },
      {
        // List page
        path: 'list',
        element: <List />,
      },
      {
        // Login page
        path: 'login',
        element: <Login />,
      },
      {
        // Register page
        path: 'register',
        element: <Register />,
      },
      {
        // Search page
        path: 'search',
        element: <Search />,
      },
    ],
  },
  {
    // Condition of Sale page (separate from other routes)
    path: '/condition-of-sale',
    element: <TermOfSale />,
  },
  {
    // 404 Not Found page
    path: '/404',
    element: <NotFound />,
  },
]);
