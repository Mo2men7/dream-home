import dreamHome from "@/public/dreamHome.png";
import Image from "next/image";
function Header() {
  return (
    <div>
      <Image
        src={dreamHome}
        width="60"
        height="60"
        quality={100}
        alt="Dream Home Logo"
      />
    </div>
  );
}

export default Header;
