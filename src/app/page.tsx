export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundColor: "#FFE98A",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "#8B1E3F",
            fontSize: "180px",
            fontWeight: 900,
            margin: 0,
            lineHeight: "0.9",
            textAlign: "center",
          }}
        >
          FASHION
          <br />
          DESIGNER
        </h1>

        <p
          style={{
            color: "#8B1E3F",
            fontSize: "24px",
            marginTop: "20px",
          }}
        >
          by Tanisha
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          backgroundColor: "#FFE98A",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* PHOTO */}
          <div
            style={{
              width: "500px",
              height: "650px",
              backgroundColor: "#FFF4C9",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <img
              src="/profile.jpg"
              alt="Tanisha"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* INTRO */}
          <div>
            <h2
              style={{
                color: "#8B1E3F",
                fontSize: "70px",
                lineHeight: "1",
              }}
            >
              HELLO,
              <br />
              I'M TANISHA
            </h2>

            <div
              style={{
                display: "inline-block",
                backgroundColor: "#FFF4C9",
                padding: "10px 20px",
                borderRadius: "999px",
                marginTop: "20px",
                marginBottom: "25px",
                fontWeight: 700,
                color: "#8B1E3F",
              }}
            >
              Fashion Designer ✦
            </div>

            <p
              style={{
                maxWidth: "600px",
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#1D1D1D",
              }}
            >
              Computer Science student exploring fashion,
              creativity and technology.
            </p>
          </div>
        </div>
      </section>
      <section
  style={{
    backgroundColor: "#FFE98A",
    padding: "0 80px 80px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "25px",
    }}
  >
    <div
      style={{
        backgroundColor: "#FFF4C9",
        padding: "35px",
        borderRadius: "25px",
      }}
    >
      <h3 style={{ color: "#8B1E3F" }}>
        01 BACKGROUND
      </h3>

      <p>Computer Science Student</p>
      <p>Fashion Designer</p>
      <p>Creative Technologist</p>
    </div>

    <div
      style={{
        backgroundColor: "#FFF4C9",
        padding: "35px",
        borderRadius: "25px",
      }}
    >
      <h3 style={{ color: "#8B1E3F" }}>
        02 SKILLS
      </h3>

      <p>Fashion Research</p>
      <p>Fashion Illustration</p>
      <p>Creative Direction</p>
      <p>Digital Design</p>
    </div>

    <div
      style={{
        backgroundColor: "#FFF4C9",
        padding: "35px",
        borderRadius: "25px",
      }}
    >
      <h3 style={{ color: "#8B1E3F" }}>
        03 TOOLS
      </h3>

      <p>Photoshop</p>
      <p>Canva</p>
      <p>Figma</p>
      <p>VS Code</p>
    </div>
  </div>
</section>
    </>
  );
}