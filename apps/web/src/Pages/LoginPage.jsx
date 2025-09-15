import Login from "../Components/Login";
import image from "../assets/bg-finance.jpeg";
const LoginPage = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2">
        <img src={image} className="h-svh w-full  "></img>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
