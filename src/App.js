import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'components/loader/Loader';

const Navbar = lazy(() => import('./navbar/Navbar'));
const Conteiner = lazy(() => import('./components/phoneBook/Conteiner'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/Contacts'));
const LoginPage = lazy(() => import('./pages/LoginPage/Login'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/Register'));
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Conteiner title="Phonebook">
          <Navbar />
          <Routes>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<RegisterPage />} />
          </Routes>
        </Conteiner>
      </Suspense>
    </BrowserRouter>
  );
}
