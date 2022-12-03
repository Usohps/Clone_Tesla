import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
function App() {
  return (
    <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD')]
     h-screen bg-cover bg-center ">
      {/* blur-3xl */}
      <Navbar />
      <Heading />
      {/* <h1>Tesla Clone</h1> */}
    </div>
  );
}

export default App;
