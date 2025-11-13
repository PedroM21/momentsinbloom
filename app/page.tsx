import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SeasonItemsCard from "@/components/SeasonalItemsCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-white">
        <Navigation />
      </div>
      <main className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        {/* Landing */}
        <section className="col-span-4 md:col-span-8 lg:col-span-12 h-screen relative">
          <div className="inset-0 bg-black opacity-60 absolute z-[-1]" />
          <Image
            className="z-[-2]"
            src="/banner.jpg"
            alt="Banner Image"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col justify-center items-center h-screen text-center gap-4 text-white">
            <h3 className="lg:text-[98px] ">Moments in Bloom</h3>
            <p className="px-12 lg:text-[31.25px] lg:w-1/2">
              Because the most beautiful moments in life deserve to bloom one
              comforting cup at a time.
            </p>
          </div>
        </section>
        {/* Seasonal Items */}
        <section className="col-span-4 md:col-span-8 lg:col-span-12 bg-[#DBDBC3] relative overflow-hidden">
          <div className="relative pt-24 pb-8 lg:hidden">
            <h3 className="relative text-center z-2">Seasonal Items</h3>
            <span className="absolute bottom-1/4 left-1/2 -translate-x-1/2 z-1 block w-[220px] h-2 mt-12 bg-[#DEA193]" />
          </div>
          <div className="hidden lg:block relative py-24">
            <h1 className="relative text-center z-2">Seasonal Items</h1>
            <span className="absolute bottom-1/4  left-1/2 -translate-x-1/2 z-1 block w-[330px] h-4 my-10 bg-[#DEA193]" />
          </div>
          <div className="flex flex-col items-center gap-4 border-2 border-[#DEA193] p-4 m-8 rounded-lg lg:w-3/4 lg:mx-auto">
            <SeasonItemsCard />
            {/* <div className="flex gap-4 p-2">
              <span className="w-2 h-2 bg-black rounded-full" />
              <span className="w-2 h-2 bg-black/50 rounded-full" />
              <span className="w-2 h-2 bg-black/50 rounded-full" />
              <span className="w-2 h-2 bg-black/50 rounded-full" />
            </div> */}
            <Link
              href={"/menu"}
              className="bg-[#DEA193] rounded-xl p-4 shadow-lg shadow-black/70 w-1/2 text-center cursor-pointer z-20 lg:w-[150px]"
            >
              Full Menu
            </Link>
          </div>
          <Image
            src={"/Flower.png"}
            alt="Flower"
            width={200}
            height={200}
            className="absolute flip-horizontal -rotate-100 top-[-30] right-[-40]  lg:w-[600px] lg:top-[-140] lg:-right-30"
          />
          <Image
            src={"/Flower.png"}
            alt="Flower"
            width={200}
            height={200}
            className="absolute rotate-75 -bottom-5 -left-10 lg:w-[600px] lg:bottom-[-160] lg:-left-20"
          />
          <div className="p-12" />
        </section>
        {/* About */}
        <section
          id="about"
          className="col-span-4 md:col-span-8 lg:col-span-12 bg-[#FFFFE3] relative"
        >
          <div className="relative pt-24 pb-8 lg:hidden">
            <h3 className="relative text-center z-2">About Us</h3>
            <span className="absolute bottom-1/4  left-1/2 -translate-x-1/2 z-1 block w-[150px] h-2 mt-12 bg-[#DEA193]" />
          </div>
          <div className="hidden lg:block relative py-24">
            <h1 className="relative text-center z-2">About Us</h1>
            <span className="absolute bottom-1/4  left-1/2 -translate-x-1/2 z-1 block w-[225px] h-4 my-10 bg-[#DEA193]" />
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:pb-24">
            <div className="px-8 space-y-2 lg:w-1/3">
              <p>
                Welcome to{" "}
                <span className="font-semibold">Moments in Bloom</span>, where
                every sip, bite, and shared smile is a celebration of life’s
                sweetest pauses.
              </p>
              <p>
                Our tearoom was born from a simple belief — that the most
                beautiful moments often unfold over a comforting cup of tea, a
                lovingly crafted pastry, and genuine conversation. Here, time
                slows down just enough for you to savor the present.
              </p>
              <p>
                From fragrant loose-leaf teas and rich, locally roasted coffee
                to freshly baked treats and seasonal delights, everything at
                Moments in Bloom is made with care, creativity, and a touch of
                elegance. Our cozy, floral-inspired space is designed to make
                you feel at home.
              </p>
              <p>Take a seat, pour a cup, and let your moment bloom.</p>
            </div>
            <div className="relative flex justify-center p-8 lg:w-1/2 lg:p-2 lg:pb-24">
              <div className="relative w-[70vw] max-w-[250px] aspect-square md:max-w-[450px] lg:max-w-[350px] xl:max-w-[450px]">
                {/* Border frames */}
                <div className="absolute inset-0 border -translate-x-2.5 -translate-y-1 sm:-translate-x-2 sm:translate-y-2 lg:translate-x-1 lg:translate-y-2" />
                <div className="absolute inset-0 border translate-x-1 translate-y-1 sm:-translate-x-3.5 sm:translate-y-3.5 lg:-translate-x-0.5 lg:translate-y-1" />
                <div className="absolute inset-0 border translate-x-4.5 translate-y-4 sm:-translate-x-5 sm:translate-y-5 lg:-translate-x-1.5 lg:translate-y-0" />
                <Image
                  src="/about.png"
                  alt="About Us Image"
                  fill
                  className="object-cover p-2 relative z-2"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Reservations */}
        <section
          id="reservations"
          className="col-span-4 md:col-span-8 lg:col-span-12 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/reservation.png')",
          }}
        >
          <div className="inset-0 bg-black opacity-60 absolute" />
          <div className="relative text-white pt-24 pb-8 lg:hidden">
            <h3 className="relative text-center z-2">Reservations</h3>
            <span className="absolute bottom-1/4  left-1/2 -translate-x-1/2 z-1 block w-[150px] h-2 mt-12 bg-[#DEA193]" />
          </div>
          <div className="hidden text-white lg:block relative py-24">
            <h1 className="text-center relative z-2">Reservations</h1>
            <span className="absolute bottom-1/4  left-1/2 -translate-x-1/2 z-1 block w-[225px] h-4 my-10 bg-[#DEA193]" />
          </div>
          <p className="text-[39.06px] font-semibold text-center text-white relative z-1">
            Book A Table
          </p>
          <a
            href="tel:+1234567890"
            className="block text-center bg-[#DEA193] w-1/2 rounded-xl p-2 shadow-lg shadow-black/70 cursor-pointer mt-8 mb-24 mx-auto relative z-1 md:w-40"
          >
            Call Now
          </a>
        </section>
        {/* Location */}
        <section className="col-span-4 md:col-span-8 lg:col-span-12 bg-[#DBDBC3] relative">
          <div className="flex flex-col gap-8 py-24 px-8 md:flex-row md:justify-between md:items-center md:px-16 lg:px-32">
            <div className="flex flex-col items-center">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={64}
                height={64}
                className="filter invert"
              />
              <h6>Moments in Bloom</h6>
            </div>
            <div className="space-y-2">
              <h5>Location</h5>
              <p>123 San Antonio, TX</p>
              <p>(123)-456-7890</p>
            </div>
            <div className="space-y-2">
              <h5>Hours</h5>
              <p>Monday - Friday</p>
              <p>6:00am - 4:00pm</p>
              <p>Saturday - Sunday</p>
              <p>7:00am - 3:00pm</p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
