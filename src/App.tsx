import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <main className="min-h-screen flex items-start justify-center">
      <div className="w-full max-w-screen-2xl p-10">
        <Navbar />
      </div>
    </main>
  );
}

export default App