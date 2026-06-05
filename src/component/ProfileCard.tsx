export default function ProfileCard() {
  return (
    <section className="bg-[#FFF8EF] py-24">

      <div className="max-w-md mx-auto">

        <div className="bg-white rounded-[40px] p-8 shadow-lg">

          <div className="w-32 h-32 rounded-full bg-[#F6D65B] mx-auto" />

          <h2 className="text-center mt-6 text-3xl font-bold">
            Tanisha
          </h2>

          <p className="text-center text-[#C83E4D]">
            Fashion Designer
          </p>

          <div className="mt-8 space-y-3">

            <p>📸 @your_instagram</p>

            <p>📧 your@email.com</p>

            <p>📱 +91 xxxxxxxxxx</p>

            <p>📍 India</p>

          </div>

        </div>

      </div>

    </section>
  );
}