import Link from "next/link";
import Container from "../container";
import { Anton } from "next/font/google";


const font = Anton({subsets: ['latin'], weight: ['400']})
export default function Navbar() {
  return (
    <nav className=" sticky top-0 w-full bg-slate-200 z-30 shadow-sm navbar-expand-lg navbar-light bg-light">
      <div className=" py-4 border-b-[1px]">
        <Container>
          <div className=" flex items-center justify-between gap-3 md:gap-3">
            <Link href={'/'} className={font.className}>Market Iku</Link>
            <div className=" hidden md:block">Search</div>
            <div className=" flex items-center gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
 