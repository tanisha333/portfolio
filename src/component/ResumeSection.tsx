export default function ResumeSection() {
  return (
    <section className="bg-[#FFF8EF] px-8 pb-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl text-[#C83E4D] font-bold mb-10">
          Background & Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#F6D65B] p-6 rounded-3xl">
            <h3 className="font-bold text-xl mb-4">
              Background
            </h3>

            <p>Computer Science Student</p>
            <p>Fashion Designer</p>
            <p>AI Enthusiast</p>
          </div>

          <div className="bg-[#A9C8FF] p-6 rounded-3xl">
            <h3 className="font-bold text-xl mb-4">
              Skills
            </h3>

            <p>Fashion Research</p>
            <p>Illustration</p>
            <p>Creative Direction</p>
          </div>

          <div className="bg-[#FFB089] p-6 rounded-3xl">
            <h3 className="font-bold text-xl mb-4">
              Tools
            </h3>

            <p>Photoshop</p>
            <p>Canva</p>
            <p>Figma</p>
            <p>VS Code</p>
          </div>

        </div>

      </div>

    </section>
  );
}