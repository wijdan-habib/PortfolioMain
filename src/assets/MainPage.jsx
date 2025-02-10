const MainPage = () => {
  return (
    <div className="h-screen w-screen bg-darkGray pt-4">
      <div className="bg-cream w-full h-96 mt-24 flex justify-between pl-5 pr-1 ">
        <div className="h-full w-[50%] text-brown font-semibold  flex justify-center items-center text-3xl flex-col">
          <h1 className="">Hi!! My Name Is <span className="font-imperial text-5xl">Wijdan</span>, a Frontend Developer.</h1>
          
          <h1 className="text-lg text-darkGray">Crafting beautiful and responsive web applications with React and Tailwind CSS</h1>
        </div>
        <div className="h-[95%] w-[40%] mt-2 bg-darkGray rounded-4xl ml-3 mr-4 flex justify-center">
            <img src="/public/web.svg" alt=""  className="w-96 "/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
