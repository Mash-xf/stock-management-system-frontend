import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './component/navbar';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <div className="container mt-4">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
