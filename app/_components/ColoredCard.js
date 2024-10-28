function ColoredCard({ children, height, width, color, title, content }) {
  const colorClasses =
    {
      red: "bg-gradient-to-b from-red-100 to-red-200 text-red-800",
      blue: "bg-gradient-to-b from-blue-100 to-blue-200 text-blue-800",
      green: "bg-gradient-to-b from-green-100 to-green-200 text-green-800",
      yellow: "bg-gradient-to-b from-yellow-100 to-yellow-200 text-yellow-800",
    }[color] || "bg-gray-200 text-gray-800";

  return (
    <div
      className={`${colorClasses} px-4 rounded-xl flex flex-col justify-around`}
      style={{ width, height }}
    >
      <small className="flex items-center gap-1">
        {children}
        {title}
      </small>
      <p className="text-2xl">{content}</p>
    </div>
  );
}

export default ColoredCard;
