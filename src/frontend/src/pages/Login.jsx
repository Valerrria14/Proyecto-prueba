export default function Login (){
    const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;
    return(
        <div className="flex items-center justify-center minn-h-screen bg-gray-100">
            <div className="p-S bg-white rounded-xl shadow-md text-center">
                <h1 className="text-2x1 fond-bold mb-4">Iniciar Seccion</h1>
                <p className="mb-6 text-orange-600">Usa tu cuenta de google</p>
                <a className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 " href={"GOOGLE_AUTH_URL"}>Inicar session con google</a>
            </div>
        </div>
    )
}