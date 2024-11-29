export const SideNav: React.FC = () => {
  return (
    <div
      className="bg-gray-800 w-[128px] fixed hidden sm:block md:block"
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <ul className="text-white">
        <li className="p-4 hover:bg-gray-700">
          <a href="/blog/dashboard">Home</a>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <a href="/blog/our">My blog</a>
        </li>
      </ul>
    </div>
  );
};
