import type { NextPage } from "next";
import Image from "next/image";

import Logo from "../utils/img/SkinClinic.svg";
import Truck from "../utils/img/Truck.svg";
import TwentyFour from "../utils/img/24h.svg";
import Shield from "../utils/img/shield.svg";
import Lamp from "../utils/img/lamp.svg";
import BeanBag from "../utils/img/BeanBag.svg";
import LivingRoom from "../utils/img/living-room.svg";
import Girl from "../utils/img/girl.svg";
import Bedroom from "../utils/img/bedroom.svg";
import Dining from "../utils/img/dining.svg";
import ImageLiving from "../utils/img/image-living-room.svg";
import IG1 from "../utils/img/IG-1.svg";
import IG2 from "../utils/img/IG-2.svg";
import IG3 from "../utils/img/IG-3.svg";
import IG4 from "../utils/img/IG-4.svg";
import Man from "../utils/img/man.svg";
import Warehouse from "../utils/img/warehouse.svg";
import Room from "../utils/img/room.svg";

const Home: NextPage = () => {
  return (
    <div>
      <nav className="flex justify-between py-12 max-w-screen-2xl mx-auto px-32">
        <Image src={Logo} />
        <ul className="hidden lg:flex  space-x-16 font-semibold text-sm">
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>Products</li>
          <li>Gallery</li>
        </ul>
      </nav>
      <section id="hero" className="bg-hero bg-cover">
        <div className="flex justify-end max-w-screen-2xl mx-auto px-32 py-40">
          <div className="flex flex-col md:w-1/2 bg-lightBlue rounded-xl md:py-9 md:px-10 space-y-5">
            <h2 className="text-base font-semibold leading-[19.5px] tracking-[3px]">
              New Arrival
            </h2>
            <h1 className="font-bold text-5xl text-primary leading-[65px]">
              Discover Our New Collection
            </h1>
            <p className="text-lg font-medium leading-[39px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="text-white font-bold text-base bg-primary rounded-full w-[229px] py-6">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section id="support" className="bg-lightBlue2">
        <div className="flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto px-32 py-12 space-x-[124px]">
          <div className="flex space-x-[27px]">
            <Image src={Truck} />
            <div>
              <h2 className="font-semibold text-2xl">Free Delivery</h2>
              <span className="font-normal text-base">
                Lorem ipsum dolor sir amet.
              </span>
            </div>
          </div>
          <div className="flex space-x-[27px]">
            <Image src={TwentyFour} />
            <div>
              <h2 className="font-semibold text-2xl">Free Delivery</h2>
              <span className="font-normal text-base">
                Lorem ipsum dolor sir amet.
              </span>
            </div>
          </div>
          <div className="flex space-x-[27px]">
            <Image src={Shield} />
            <div>
              <h2 className="font-semibold text-2xl">Free Delivery</h2>
              <span className="font-normal text-base">
                Lorem ipsum dolor sir amet.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="inspiration">
        <div className="max-w-screen-2xl mx-auto px-32 py-12 space-y-5">
          <div className="flex flex-col space-y-5 items-center">
            <h2 className="font-bold text-3xl">Inspiration Collection</h2>
            <span className="font-normal text-xl text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="relative flex justify-center space-x-[40px] pt-20 pb-5">
            <div>
              <Image src={LivingRoom} className="rounded-tl-[70px]" />
            </div>
            <div className="relative -top-10">
              <Image src={BeanBag} />
            </div>
            <div>
              <Image src={Lamp} className="rounded-br-[70px]" />
            </div>
          </div>
        </div>
      </section>
      <section id="beauty" className="bg-lightBlue2">
        <div className="flex max-w-screen-2xl mx-auto px-32 py-12 space-y-5 space-x-[62px] items-center">
          <div className="w-1/2 space-y-10">
            <h2 className="font-bold text-3xl leading-[39px]">
              Beauty Your Space
            </h2>
            <p className="text-gray text-xl leading-[39px]">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button className="bg-primary text-white py-6 rounded-full px-14 font-bold">
              LEARN MORE
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image
              src={Girl}
              className="rounded-tl-[60px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[60px]"
            />
          </div>
        </div>
      </section>
      <section id="browse">
        <div className="max-w-screen-2xl mx-auto px-32 py-12 space-y-5 border-b-[1px] border-darkGray">
          <div className="flex flex-col space-y-5 items-center">
            <h2 className="font-bold text-3xl">Browse The Range</h2>
            <span className="font-normal text-xl text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="relative flex justify-center space-x-[40px] pt-10">
            <div className="flex flex-col items-center space-y-5">
              <Image src={Dining} className="rounded-xl" />
              <span className="font-semibold text-2xl">Dining</span>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <Image src={ImageLiving} className="rounded-xl" />
              <span className="font-semibold text-2xl">Living</span>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <Image src={Bedroom} className="rounded-xl" />
              <span className="font-semibold text-2xl">Bedroom</span>
            </div>
          </div>
        </div>
      </section>
      <section id="browse border-b-1">
        <div className="max-w-screen-2xl mx-auto px-32 py-12 space-y-5">
          <div className="flex flex-col space-y-5 items-center">
            <h2 className="font-bold text-3xl">How It Works</h2>
            <span className="font-normal text-xl text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="relative flex justify-center space-x-[40px] pt-10">
            <div className="flex flex-col items-center space-y-5">
              <Image src={Man} className="rounded-xl" />
              <div className="rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center text-white font-bold text-2xl -top-14 relative">
                <div className="rounded-full bg-black w-[60px] h-[60px] flex justify-center items-center text-white font-bold text-2xl">
                  1.
                </div>
              </div>
              {/* <span className="font-semibold text-2xl">Dining</span> */}
            </div>
            <div className="flex flex-col items-center space-y-5">
              <Image src={Warehouse} className="rounded-xl" />
              <div className="rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center text-white font-bold text-2xl -top-14 relative">
                <div className="rounded-full bg-black w-[60px] h-[60px] flex justify-center items-center text-white font-bold text-2xl">
                  2.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <Image src={Room} className="rounded-xl" />
              <div className="rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center text-white font-bold text-2xl -top-14 relative">
                <div className="rounded-full bg-black w-[60px] h-[60px] flex justify-center items-center text-white font-bold text-2xl">
                  3.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="join" className="bg-lightBlue2">
        <div className="flex flex-col max-w-screen-2xl mx-auto px-32 py-12 space-y-10 space-x-[62px] items-center">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="font-bold text-3xl">Join Our Mailing List</h2>
            <span className="font-normal text-xl text-gray text-center leading-[39px]">
              Sign up to receive inspiration, product updates, and special
              offers
              <br />
              from our team.
            </span>
          </div>
          <div>
            <input
              type="text"
              className="py-7 px-11 w-[333px] "
              placeholder="example@gmail.com"
            />
            <button className="bg-primary text-white font-bold text-base py-7 px-11 ">
              Submit
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-primary text-white ">
        <div className="py-16 max-w-screen-2xl mx-auto px-32 flex-row flex items-center space-x-20">
          <div className="w-1/3 space-y-[30px]">
            <h2 className="font-bold text-2xl">Beauty Care</h2>
            <p className="leading-[35px] text-base">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <h2 className="font-bold text-2xl">Follow Us</h2>
          </div>
          <div className="w-2/3 space-y-[30px]">
            <h2 className="font-bold text-2xl">Instagram Shop</h2>
            <div className="flex space-x-5">
              <div>
                <Image src={IG1} />
              </div>
              <div>
                <Image src={IG2} />
              </div>
              <div>
                <Image src={IG3} />
              </div>
              <div>
                <Image src={IG4} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
