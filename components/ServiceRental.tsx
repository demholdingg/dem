import { Car, Bike, ShieldCheck, MapPin } from "lucide-react";

export default function ServiceRental() {
  const features = [
    {
      icon: <Car className="text-sky-400" size={24} />,
      title: "Operational Car Rental",
      desc: "Tough vehicle fleet for both rugged terrain and urban areas.",
    },
    {
      icon: <Bike className="text-sky-400" size={24} />,
      title: "Field Motorcycle Rental",
      desc: "Fast mobility for technical inspections in crowded areas.",
    },
    {
      icon: <MapPin className="text-sky-400" size={24} />,
      title: "Regional Coverage",
      desc: "Available for PLN operations across various regional units.",
    },
    {
      icon: <ShieldCheck className="text-sky-400" size={24} />,
      title: "Routine Maintenance",
      desc: "Vehicles are always in prime condition through regular servicing.",
    },
  ];

  return (
    <div className="rounded-3xl bg-slate-900 p-8 border border-white/10 shadow-2xl">
      <div className="max-w-2xl">
        <h3 className="text-3xl font-bold text-white">
          PLN Operational Vehicle Rental
        </h3>
        <p className="mt-4 text-white/70">
          We provide integrated transportation solutions to support smooth
          electrical operations in various regions, ensuring your technical
          teams reach their destination safely and on time.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-4 rounded-2xl bg-white/5 border border-white/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
              {item.icon}
            </div>
            <h4 className="font-semibold text-white">{item.title}</h4>
            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
