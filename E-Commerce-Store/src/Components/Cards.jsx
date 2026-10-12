

export default function Cards({ title, para, icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Decorative background */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gray-50 transition-transform duration-300 group-hover:scale-150" />

      {/* Icon */}
      <div
        className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${color} text-3xl transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="relative mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
        {title}
      </h3>

      <p className="relative text-sm leading-7 text-gray-500">
        {para}
      </p>

      {/* Bottom accent */}
      <div className="mt-6 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}
