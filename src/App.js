import Navbar from "./NavBar/Navbar";
import Header from "./Header/Header";
import Ionfood from "./IconFood/Ionfood";
import Bestcoffee from "./Bestcoffee/Bestcoffee";
import ThesClient from "./thescient/ThesClient";
import Footer from "./footer/Footer";
  import 'aos/dist/aos.css'; // استيراد الـ CSS
import AOS from 'aos'; // استيراد مكتبة AOS
function App() {

  AOS.init({
    offset: 120, // المسافة من أعلى الشاشة قبل ما الحركة تبدأ
    duration: 600, // المدة الزمنية للحركة
    delay: 100, // التأخير في بدء الحركة
  });
  
  
  
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <Ionfood />
        <Bestcoffee />
        <ThesClient />
        <Footer />
      </>
    </div>
  );
}

export default App;
