import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { FetchItems } from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";
function App() {

   const fetchStatus = useSelector((store) => store.fetchStatus);

 
  return (
    <div>
      <Header />
      <FetchItems />
      {fetchStatus.currentFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default App;
