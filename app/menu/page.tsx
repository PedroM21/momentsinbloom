import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getMenuItems() {
  const query = `*[_type == "menu"]{
    _id, category, name, description, price}`;
  return await client.fetch(query);
}

export default async function Menu() {
  const items = await getMenuItems();

  const categories = [
    "Classic Blends",
    "Green & White Teas",
    "House Specialties",
    "Sweet & Savory Bites",
    "Coffee Companions",
  ];

  return (
    <div className="bg-[#DBDBC3] overflow-hidden">
      <Navigation />
      <main className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 pt-16 relative">
        <section className="col-span-4 md:col-span-8 lg:col-span-12 relative z-2 ">
          <div className="relative pt-24 pb-8 lg:hidden">
            <h3 className="relative text-center z-2">Menu</h3>
            <span className="absolute bottom-1/4  left-1/2 -translate-x-1/2 z-1 block w-[150px] h-2 mt-12 bg-[#DEA193]" />
          </div>
          <div className="hidden lg:block relative py-24">
            <h1 className="relative text-center z-2">Menu</h1>
            <span className="absolute bottom-1/4  left-1/2 -translate-x-1/2 z-1 block w-[225px] h-4 my-10 bg-[#DEA193]" />
          </div>

          <div className="lg:grid lg:grid-cols-12 space-y-16">
            {categories.map((category) => {
              const categoryItems = items.filter(
                (item) => item.category === category
              );
              if (categoryItems.length === 0) return null; // Skip empty categories

              return (
                <div key={category} className="lg:col-span-4 mx-auto">
                  <h3 className="text-center mb-4">{category}</h3>
                  {categoryItems.map((item) => (
                    <div key={item._id} className="p-4 flex justify-between">
                      <div className="space-y-2">
                        <p className="font-semibold">{item.name}</p>
                        <p>{item.description}</p>
                      </div>
                      <div className="font-bold">
                        <p>{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
        <Image
          src={"/Flower.png"}
          alt="Flower"
          width={200}
          height={200}
          className="hidden md:block md:absolute lg:-bottom-50 lg:-right-30 lg:w-200 lg:scale-x-[-1] lg:-rotate-15 z-1"
        />
      </main>
      <div className="z-2 relative">
        <Footer />
      </div>
    </div>
  );
}
