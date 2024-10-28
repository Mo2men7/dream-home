import { format } from "date-fns";
import flag from "@/public/flag.svg";
import Image from "next/image";

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
    </div>
  );
}
