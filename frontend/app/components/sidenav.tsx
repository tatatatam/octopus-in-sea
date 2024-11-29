export const SideNav: React.FC = () => {
  return (
    <div
      className="bg-gray-800 w-[128px] fixed "
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <div className="flex justify-center items-center h-16 bg-gray-900">
        <h1 className="text-white">Logo</h1>
      </div>
      <ul className="text-white">
        <li className="p-4 hover:bg-gray-700">Home</li>
        <li className="p-4 hover:bg-gray-700">About</li>
        <li className="p-4 hover:bg-gray-700">Contact</li>
      </ul>
    </div>
  );
};
