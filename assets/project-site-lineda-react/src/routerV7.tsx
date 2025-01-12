import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// Import functions to configure routing with React Router
import { App } from './App';
// Import the root application component
import { Home } from './pages/Home';
// Import the Home page component
import { BestSeller } from './pages/BestSeller';
// Import the BestSeller page component
import { CartPage } from './pages/CartPage';
// Import the Cart page component
import { Category } from './pages/Category';
// Import the Category page component (dynamic category routes)
import { Contact } from './pages/Contact';
// Import the Contact page component
import { Keyword } from './pages/Keyword';
// Import the Keyword page component for learning more about topics
import { List } from './pages/List';
// Import the List page component
import { Login } from './pages/Login';
// Import the Login page component
import { Register } from './pages/Register';
// Import the Register page component
import { TermOfSale } from './pages/TermsOfSale';
// Import the Terms of Sale page component
import { NotFound } from './pages/NotFound';
// Import the NotFound page component for 404 errors
import { Search } from './pages/Search';
// Import the Search page component

// Configure the application's routing structure
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        {/* Define the base route with the App component as the layout */}
        <Route index element={<Home />} />
        {/* Define the default (index) route to render the Home page */}
        <Route 
          path='best-seller' 
          element={<BestSeller />}
          />
        <Route path='cart' element={<CartPage />} />
        {/* Define the Cart page route */}
        <Route path=':slug/' element={<Category />}>
          {/* Define nested dynamic routes for categories */}
          <Route path=':slug/' element={<Category />}>
            <Route path=':slug/' element={<Category />} />
          </Route>
        </Route>
        <Route path='contact' element={<Contact />} />
        {/* Define the Contact page route */}
        <Route
          path='learn-more/:slug'
          element={<Keyword />}
        />
        <Route path='list' element={<List />} />
        {/* Define the List page route */}
        <Route path='login' element={<Login />} />
        {/* Define the Login page route */}
        <Route path='search/' element={<Search />} />
        {/* Define the Search page route */}
        <Route path='register' element={<Register />} />
        {/* Define the Register page route */}
      </Route>
      <Route path='/condition-of-sale' element={<TermOfSale />} />
      {/* Define the Terms of Sale page route */}
      <Route path='/404' element={<NotFound />} />
      {/* Define the 404 error page route */}
    </>
  )
);
