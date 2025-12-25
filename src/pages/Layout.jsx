import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex bg-[#F7F9FA] ">
      <div className="w-[0%] lg:w-[20%] bg-white border-r border-gray-200 ">
          <Sidebar />
      </div>
      <div className="lg:w-[80%] w-[100%] flex flex-col ">
        <Header />
        <div className="flex-1  overflow-auto">
          {children}
        </div>
      </div>

    </div>
  );
};

export default Layout;
