import images from "@/data/images";
import experiences from "@/data/experiences";
import contacts from "@/data/contacts";
import Image from "next/image";

export default function Home() {
  const isEven = (number: number): boolean => number % 2 === 0
  return (
    <>
      <main className="bg-off-white">
        <section className="min-h-dvh flex">
          <div className="flex-1 grid grid-cols-2 grid-rows-[1fr] gap-4 px-4 py-8 md:grid-cols-12">
            <div className="col-span-full row-span-1 bg-dark-gray">
              { /* image */}
            </div>

            <div className="col-span-full md:col-span-6">
              <h1 className="scroll-m-20 text-6xl font-bold tracking-tight lg:text-4xl">
                Haaron Santana
              </h1>
            </div>

            <div className="col-span-full md:col-span-3">
              <p className="leading- font-semilbold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed?</p>
            </div>
          </div>
        </section>

        <div>
          <div className="grid grid-cols-2 gap-4 px-4 py-12 md:grid-cols-12">
            {images.map((image, index) => (
              <div key={index} className={`w-full col-span-full flex ${isEven(index) ? "md:justify-start" : "md:justify-end"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                  className="w-full md:max-w-[400px]"
                />
              </div>
            ))}
          </div>
        </div>

        <section>
          <div className="grid grid-cols-2 gap-4 px-4 py-12 md:grid-cols-12">
            <div className="col-span-full md:col-span-6">
              <h2 className="mt-10 scroll-m-20 text-6xl font-semibold tracking-tight transition-colors first:mt-0 md:sticky md:top-4">
                Sobre
              </h2>
            </div>

            <div className="flex flex-col gap-6 col-span-full md:col-span-6">
              <p className="leading-7 text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sunt.
              </p>

              <p className="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis ab voluptatem. Fuga omnis ullam voluptatum ipsa harum blanditiis voluptas?
              </p>

              <div className="bg-dark-gray h-[400px]">
                { /* image */}
              </div>

              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Experiência
              </h3>

              <dl className="[&>div]:mt-6 [&>div:first-child]:mt-0">
                {experiences.map((experience, index) => (
                  <div key={index}>
                    <div className="space-y-1">
                      <dt className="font-semibold">{experience.title}</dt>
                      <dd className="text-gray-500">{experience.date}</dd>
                    </div>
                    <p className="leading-7 mt-2">{experience.description}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark-gray text-off-white">
        <div className="grid grid-cols-2 gap-4 px-4 py-12 md:grid-cols-12">
            <div className="col-span-full">
              <h2 className="mb-8 scroll-m-20 text-6xl font-semibold text-off-white tracking-tight transition-colors">
                Contato
              </h2>
            </div>
              
            <div className="col-span-full">
              <dl className="flex flex-col md:flex-row gap-4 md:gap-8">
                {contacts.map((contact, index) => (
                  <div key={index} className="space-y-1">
                    <dt className="font-semibold text-[#6A6B71]">{contact.label}</dt>
                    <dd className="text-off-white">
                      {contact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
        </div>
      </footer>
    </>
  );
}
