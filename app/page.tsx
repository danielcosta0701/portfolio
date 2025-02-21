"use client"

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import images from "@/public/images";
import Image from "next/image";

export default function Home() {
  // Animação seção
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#F8F8F8", "#EDEDED"]);

  const experiences = [
    {
      title: "Front-end Developer",
      date: "Jan 2023 - Present",
      description: "Development of responsive and high-performance web interfaces."
    },
    {
      title: "Front-end Developer",
      date: "Jan 2023 - Present",
      description: "Development of responsive and high-performance web interfaces."
    }
  ];

  const contacts = [
    {
      label: "Email",
      value: "contato@email.com",
      type: "email",
    },
    {
      label: "Telefone",
      value: "+55 11 99999-9999",
      type: "tel",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/seuperfil",
      type: "url",
      url: "https://linkedin.com/in/seuperfil",
    },
  ];

  return (
    <>
      <main className="bg-off-white">
        <section className="min-h-dvh flex">
          <div className="flex-1 grid grid-cols-2 grid-rows-[1fr] gap-4 px-4 py-8 md:grid-cols-12">
            <div className="col-span-full row-span-1 bg-dark-gray">
              { /* image */}
            </div>

            <div className="col-span-full md:col-span-6">
              <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl">
                Haaron Santana
              </h1>
            </div>

            <div className="col-span-full md:col-span-3">
              <p className="leading-7 text-pretty font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed?</p>
            </div>
          </div>
        </section>

        <motion.div
          ref={targetRef}
          className="overflow-y-scroll"
          style={{ backgroundColor }}
        >
          <div className="grid grid-cols-2 gap-4 px-4 py-12 md:grid-cols-12">
            {images.map((image, index) => (
              <div key={index} className="w-full col-span-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <section>
          <div className="grid grid-cols-2 gap-4 px-4 py-12 md:grid-cols-12">
            <div className="col-span-full md:col-span-6">
              <h2 className="mt-10 scroll-m-20 text-6xl font-semibold tracking-tight transition-colors first:mt-0 md:sticky md:top-4">
                Sobre
              </h2>
            </div>

            <div className="flex flex-col gap-6 col-span-full md:col-span-6">
              <p className="leading-7 font-semibold">
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
                      <dt className="font-semibold text-base">{experience.title}</dt>
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
          <div className="col-span-full md:col-span-6 flex flex-col gap-12">
            <h2 className="mt-10 scroll-m-20 text-6xl font-semibold text-off-white tracking-tight transition-colors first:mt-0">
              Contato
            </h2>

            <dl className="[&>div]:mt-4 [&>div:first-child]:mt-0">
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
