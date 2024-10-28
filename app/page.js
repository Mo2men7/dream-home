import { format } from "date-fns";
import flag from "@/public/flag.svg";
import dreamHomeSVG from "@/public/dreamHome.svg";
import sample from "@/public/meh.jpg";
import Image from "next/image";
import ColoredCard from "./_components/ColoredCard";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import MessageCard from "./_components/MessageCard";

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

      <main className="grid grid-cols-6 grid-rows-6 gap-4 h-screen">
        <div className="col-span-4 row-span-3 bg-gray-300 rounded-md">1</div>

        <div className="col-span-2 row-span-3 col-start-1 row-start-4 rounded-md bg-gray-50 flex gap-2 p-2 flex-wrap">
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

        <div className="col-span-2 row-span-3 p-2 col-start-3 row-start-4 rounded-md bg-gray-50">
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
        <div className="col-span-2 row-span-6 bg-gray-600 col-start-5 row-start-1 rounded-md">
          4
        </div>
      </main>
    </div>
  );
}
