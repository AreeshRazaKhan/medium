import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar background="#F7F4ED" />

      <section className="hero-section px-5  h-[calc(100vh-154.5px)] mt-21.5">
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full">
            <div className="max-w-[60%] ">
              <h1>
                Human <br /> stories & ideas
              </h1>
              <p className="fs-22 mt-12">
                A place to read, write, and deepen your understanding
              </p>

              <button className="btn btn-primary mt-12">Start reading</button>
            </div>
          </div>
        </div>
      </section>

      <Footer background="#F7F4ED" />
    </>
  );
}
