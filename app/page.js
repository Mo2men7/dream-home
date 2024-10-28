import { format } from "date-fns";
import flag from "@/public/flag.svg";
import dreamHomeSVG from "@/public/dreamHome.svg";
import Image from "next/image";
import ColoredCard from "./_components/ColoredCard";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";

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

        <div className="col-span-2 row-span-3 col-start-1 row-start-4 rounded-md bg-gray-50 flex gap-2 p-2">
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
              <HiOutlineHomeModern />
            </ColoredCard>
          </div>
          {/* <span>4 apartments, 2 units, and a villa</span> */}
        </div>

        <div className="col-span-2 row-span-3 bg-gray-500 col-start-3 row-start-4 rounded-md">
          3
        </div>
        <div className="col-span-2 row-span-6 bg-gray-600 col-start-5 row-start-1 rounded-md">
          4
        </div>
      </main>
    </div>
  );
}
