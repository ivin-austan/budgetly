const Toast = ({ icon, message, color }) => {
  return (
    <div
      className={`flex gap-2 items-center fixed top-5 left-1/2 transform -translate-x-1/2 ${color} text-white px-6 py-3 rounded shadow-lg transition-all duration-300 animate-slide-in`}
    >
      {icon && <span> {icon}</span>}
      <span>{message}</span>
    </div>
  );
};

export default Toast;
