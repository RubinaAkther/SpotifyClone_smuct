import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <div className="w-full text-white p-4">
          <h1>Main Content Area</h1>
        </div>
      </div>
    </div>
  );
}
