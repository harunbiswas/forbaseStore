import MidHeader from "./MidHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <header className="header">
      <TopHeader />
      <MidHeader />
      <NavHeader />
    </header>
  );
}
