import MainFrame from '../components/MainFrame';

import banner from '../assets/banner.jpg';

function HomePage() {
  return (
    <MainFrame>
      <header class="flex flex-col items-center justify-center font-bold">
        <div class="bg-gradient-to-b from-transparent to-we-blue-950">
          <img class="max-w-full object-cover " src={banner} alt='site banner'/>
        </div>
      </header>
    </MainFrame>
  );
}

export default HomePage;