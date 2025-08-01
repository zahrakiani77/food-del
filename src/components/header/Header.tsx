import './Header.css'
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1>سفره‌ای پر از انتخاب،</h1>
        <TypeAnimation
          sequence={[
            "سفارش غذای سالم 🍲",
            5000,
            "تحویل سریع 🚀",
            5000,
            "تجربه‌ای لذیذ 😋",
            5000,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />
        <h3>«از طعم‌های محلی تا جهانی، همه روی یک سفره»</h3>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="auto"
        className="video"
      >
        <source src="../src/assets/images/header.webm" />
      </video>
    </div>
  );
}

export default Header