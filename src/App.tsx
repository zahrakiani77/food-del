import { RouterProvider } from "react-router";
import route from "./router";
const App = () => {
  return (
    <main className="min-h-screen flex items-start justify-center">
      <div className="w-full max-w-screen-2xl p-10">
        <RouterProvider router={route} />
      </div>
    </main>
  );
}

export default App