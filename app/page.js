import { format } from "date-fns";
import flag from "@/public/flag.svg";
import dreamHomeSVG from "@/public/dreamHome.svg";
import sample from "@/public/meh.jpg";
import model from "@/public/model1.png";
import img2 from "@/public/img2.jpeg";
import img3 from "@/public/img3.jpeg";
import Image from "next/image";
import ColoredCard from "./_components/ColoredCard";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiBuilding } from "react-icons/pi";
import MessageCard from "./_components/MessageCard";
import UnitCard from "./_components/UnitCard";

export default function Home() {
  const todayDate = format(new Date(), "EEE, dd MMM yyyy");

  return (
    <div>
      <section className="flex items-center justify-between gap-2 text-gray-500 my-2">
        <span className="">{todayDate}</span>
        <div className="flex items-center gap-1">
          <Image src={flag} alt="saudi arabia flag" width={20} height={20} />
          <span>Saudi Arabia</span>
        </div>
      </section>

      <main className="grid grid-cols-8 grid-rows-6 gap-4 h-screen">
        <div
          className="col-span-6 row-span-3 rounded-md relative overflow-hidden"
          // style={{
          //   backgroundImage: `url(${model.src})`,
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <Image
            src={model}
            alt="model"
            width={450}
            height={250}
            className="absolute right-0"
          />

          <div
            id="firstContainer"
            className="flex flex-col justify-between h-full rounded-md"
          >
            <div className="flex items-center gap-10 bg-gray-100 w-1/2 rounded-br-xl p-5">
              <div>
                <small className="text-gray-500">Property Cost per Year</small>
                <p className="text-3xl">SAR 40,000</p>
              </div>
              <div>
                <small className="text-gray-500">Viewers</small>
                <p className="text-3xl">234</p>
              </div>
            </div>

            <div className="flex items-center gap-10 bg-gray-100 w-3/5 rounded-tr-xl p-2">
              <ColoredCard
                color="green"
                width="250px"
                height="150px"
                title="Nomber of Buildings"
                content="7 Buildings"
              >
                <PiBuilding />
              </ColoredCard>
              <ColoredCard
                color="blue"
                width="250px"
                height="150px"
                title="Nomber of Clients"
                content="123 Clients"
              >
                <PiBuilding />
              </ColoredCard>
            </div>
          </div>
        </div>

        <div
          id="statistics"
          className="col-span-4 row-span-3 row-start-4 rounded-lg bg-white flex gap-2 p-2 flex-wrap xl:flex-nowrap h-fit"
        >
          <div>
            <Image
              src={dreamHomeSVG}
              width="90"
              height="90"
              quality={100}
              alt="Dream Home Logo"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">New Property</h2>
              <span className="text-gray-500 text-md">
                The building is newly built and fully equipped with smart home
                technology for the interior systems, as well as exterior
                security measures.
              </span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2 my-2 justify-center">
            <ColoredCard
              width="150px"
              height="70px"
              color="green"
              title="Departments"
              content="4"
            >
              <HiOutlineHome />
            </ColoredCard>
            <ColoredCard
              width="150px"
              height="70px"
              color="blue"
              title="Villas"
              content="1"
            >
              <HiOutlineHomeModern />
            </ColoredCard>
            <ColoredCard
              width="150px"
              height="70px"
              color="yellow"
              title="Units"
              content="2"
            >
              <MdOutlineHomeWork />
            </ColoredCard>
          </div>
          {/* <span>4 apartments, 2 units, and a villa</span> */}
        </div>

        <div
          id="messages"
          className="col-span-2 row-span-3 col-start-5 row-start-4 p-2 rounded-lg bg-white h-fit"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Messages</span>
            <span className="bg-gray-100 rounded-full p-2">
              <FaBarsStaggered />
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <MessageCard
              img={sample}
              name="John Doe"
              message="Welcome to Dream Home, Our new property is now available."
            />
            <MessageCard
              img={sample}
              name="John Doe"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            />
            <MessageCard
              img={sample}
              name="John Doe"
              message="Dream Home, Our new property is now available."
            />
            <MessageCard
              img={sample}
              name="John Doe"
              message="Welcome to Dream Home, Our new property is now available."
            />
          </div>
        </div>

        <div
          id="list"
          className="col-span-2 row-span-6 col-start-7 rounded-lg bg-white p-2 h-fit"
        >
          <UnitCard
            name="Unit Number One"
            img={img2}
            interances="2"
            rooms="3"
            baths="2"
          />
          <hr className="my-3" />
          <UnitCard
            name="Unit Number One"
            img={img3}
            interances="2"
            rooms="4"
            baths="3"
          />
        </div>
      </main>
    </div>
  );
}
