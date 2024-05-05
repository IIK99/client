import Link from "next/link";
import Container from "../container";
import FooterList from "./footerList";
import { FaXTwitter , FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className=" bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className=" flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className=" text-base font-bold">Shop categories</h3>
            <Link href={"#"}>Laptops</Link>
            <Link href={"#"}>Desktop</Link>
            <Link href={"#"}>Mouse</Link>
            <Link href={"#"}>Phones</Link>
            <Link href={"#"}>TWS</Link>
            <Link href={"#"}>Smart watch</Link>
          </FooterList>
          <FooterList>
            <h3 className=" text-base font-bold">Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>return & Exchanges</Link>
            <Link href={"#"}>Watch</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>
          <div className=" w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className=" text-base font-bold">About Us</h3>
            <p className=" mt-2">
              At our electronics store, we are dedicated to providing the latest
              and greatest device and accessories to our customer. With a wide
              selection of Laptops, desktop, mouse, phones, TWS, and smart
              watch.
            </p>
          </div>
          <FooterList>
            <h3 className=" text-base font-bold">Follow Us</h3>
            <div className=" flex gap-2">
              <Link href={"#"}>
                <FaXTwitter size={25} />
              </Link>
              <Link href={"#"}>
                <FaInstagram size={25} />
              </Link>
              <Link href={"#"}>
                <AiOutlineYoutube size={25} />
              </Link>
              <Link href={"#"}>
                <PiTiktokLogo size={25} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
      <p className="text-center pb-4 font-bold">
        Copyright Ikmal &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
