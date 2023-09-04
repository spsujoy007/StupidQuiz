import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    // <div className="bg-[#deefff] h-screen mainwork">
    <div className="bg-[#0f172a] h-screen mainwork">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
