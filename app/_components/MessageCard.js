import Image from "next/image";

function MessageCard({ img, name, message }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={img}
          width="50"
          height="50"
          alt="user profile"
          className="rounded-full"
        />
        <div>
          <h3>{name}</h3>
          <p className="text-gray-300">
            {message.length > 25 ? message.slice(0, 25) + "..." : message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
