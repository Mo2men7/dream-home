import Image from "next/image";
import { GiCryptEntrance } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineAirlineSeatLegroomNormal } from "react-icons/md";

function UnitCard({ name, img, interances, rooms, baths }) {
  return (
    // <div className="flex flex-col gap-2 items-center">
    <div className="flex flex-col gap-4">
      <Image
        src={img}
        width="400"
        height="200"
        alt="unit"
        className="rounded-md"
        placeholder="blur"
        loading="lazy"
      />
      <div className="px-2">
        <h1 className="text-xl">{name}</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center text-gray-500 justify-around">
        <div className="flex items-center gap-1">
          <span className="text-green-700">
            <GiCryptEntrance />
          </span>
          <span>{interances} inter</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-green-700">
            <MdOutlineBedroomParent />
          </span>
          <span>{rooms} rms</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-green-700">
            <MdOutlineAirlineSeatLegroomNormal />
          </span>
          <span>{baths} baths</span>
        </div>
      </div>
    </div>
  );
}

export default UnitCard;
