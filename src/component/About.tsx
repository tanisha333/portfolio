export default function About() {
  return (
    <section className="bg-[#FFF8EF] py-24 px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <div className="h-[500px] rounded-[30px] bg-[#A9C8FF] flex items-center justify-center">

            YOUR PHOTO

          </div>
        </div>

        <div>

          <h2 className="text-6xl font-bold text-[#C83E4D]">
            HELLO!
          </h2>

          <h3 className="text-3xl mt-4 font-semibold">
            I'm Tanisha
          </h3>

          <p className="mt-6 text-lg leading-relaxed">
            Computer Science student exploring
            fashion, creativity, design and technology.
            Passionate about historical fashion,
            digital design and storytelling.
          </p>

        </div>

      </div>

    </section>
  );
}