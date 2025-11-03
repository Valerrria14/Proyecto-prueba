
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const[token, setToken] = useState(null);
  useEffect(() =>{
    const storedToken = localStorage.getItem("authToken");
    if (storedToken){
      setToken(storedToken);
    }
  }), 
    [];

  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold">Bienvenidos a mi página 😭😭</h1>
      {token && (
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          Cerrar session
        </button>
      )}

      {token ? (
        <div>
          <p className="text-green-600 text-xl">Haz inicado seccion exitosamente</p>
        </div>
      ) : ( 
        <div>
          <p className="text-red-600 text-xl">
            PArece que no haz inicado session</p>
          <link to="/login" className="mt-4 inline-block text-blue-500">
          Ir a la paguina de Login
          </link>
        </div>
        )}
    </div>
  );
}

export default Home;
