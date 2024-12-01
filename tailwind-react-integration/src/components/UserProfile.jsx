function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="mx-auto rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;