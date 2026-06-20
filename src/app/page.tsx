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
            fontSize: "220px",
            fontWeight: 900,
            margin: 0,
            lineHeight: "0.9",
            textAlign: "center",
            fontFamily: "var(--font-heading)",
          }}
        >
          FASHION
          <br />
          DESIGNER
        </h1>

        <p
          style={{
            color: "#8B1E3F",
            fontSize: "28px",
            fontStyle: "italic",
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

          <div>
            <h2
              style={{
                color: "#8B1E3F",
                fontSize: "85px",
                lineHeight: "0.95",
                fontFamily: "var(--font-heading)",
                marginBottom: "20px",
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
                padding: "12px 24px",
                borderRadius: "999px",
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
              creativity and technology. Passionate about
              storytelling, historical fashion, design
              research and digital experiences.
            </p>

            <div
              style={{
                marginTop: "35px",
                color: "#8B1E3F",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "30px",
                  marginBottom: "15px",
                }}
              >
                CURRENTLY OBSESSED WITH ✦
              </h3>

              <p>✦ Fashion History</p>
              <p>✦ Illustration</p>
              <p>✦ Digital Fashion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section
        style={{
          backgroundColor: "#FFE98A",
          padding: "0 80px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FF8FAB",
              padding: "35px",
              borderRadius: "30px",
            }}
          >
            <h3
              style={{
                color: "#8B1E3F",
                fontSize: "32px",
                fontFamily: "var(--font-heading)",
              }}
            >
              01 BACKGROUND
            </h3>

            <p>Computer Science Student</p>
            <p>Fashion Designer</p>
            <p>Creative Technologist</p>
          </div>

          <div
            style={{
              backgroundColor: "#A7C7E7",
              padding: "35px",
              borderRadius: "30px",
            }}
          >
            <h3
              style={{
                color: "#8B1E3F",
                fontSize: "32px",
                fontFamily: "var(--font-heading)",
              }}
            >
              02 SKILLS
            </h3>

            <p>Fashion Research</p>
            <p>Fashion Illustration</p>
            <p>Creative Direction</p>
            <p>Digital Design</p>
          </div>

          <div
            style={{
              backgroundColor: "#FFD166",
              padding: "35px",
              borderRadius: "30px",
            }}
          >
            <h3
              style={{
                color: "#8B1E3F",
                fontSize: "32px",
                fontFamily: "var(--font-heading)",
              }}
            >
              03 TOOLS
            </h3>

            <p>Photoshop</p>
            <p>Canva</p>
            <p>Figma</p>
            <p>VS Code</p>
          </div>
        </div>
      </section>
      <section
  style={{
    backgroundColor: "#FFE98A",
    padding: "0 80px 120px",
  }}
>
  <div
    style={{
      backgroundColor: "#FFF4C9",
      borderRadius: "40px",
      padding: "50px",
    }}
  >
    <h2
      style={{
        color: "#8B1E3F",
        fontSize: "70px",
        fontFamily: "var(--font-heading)",
        marginBottom: "20px",
      }}
    >
      LET'S CONNECT ✦
    </h2>

    <div
      style={{
        fontSize: "22px",
        lineHeight: "2",
        color: "#1D1D1D",
      }}
    >
      <p>📧 your@email.com</p>
      <p>📸 @your_instagram</p>
      <p>💼 LinkedIn</p>
      <p>📍 India</p>
    </div>
  </div>
</section>
{/* COLLECTION HEADING */}

<section
  style={{
    backgroundColor: "#FFE98A",
    padding: "0 80px 60px",
  }}
>
  <div
    style={{
      backgroundColor: "#FFF4C9",
      border: "4px solid #8B1E3F",
      borderRadius: "40px",
      padding: "70px",
      textAlign: "center",
    }}
  >
    <p
      style={{
        color: "#8B1E3F",
        letterSpacing: "6px",
      }}
    >
      COLLECTION
    </p>

    <h2
      style={{
        color: "#8B1E3F",
        fontSize: "120px",
        margin: "10px 0",
        fontFamily: "var(--font-heading)",
      }}
    >
      GIBSON GIRL
    </h2>

    <p
      style={{
        color: "#8B1E3F",
        fontSize: "26px",
        fontStyle: "italic",
      }}
    >
      1890 → 2026
    </p>
  </div>
</section>

{/* POSTER */}

<section
  style={{
    backgroundColor: "#FFE98A",
    padding: "0 80px",
  }}
>
  <img
    src="/gibson-cover.png"
    alt="Gibson Girl"
    style={{
      width: "100%",
      display: "block",
      borderRadius: "20px",
    }}
  />
</section>

{/* MOODBOARD */}

<section
  style={{
    backgroundColor: "#FFE98A",
    padding: "20px 80px",
  }}
>
  <img
    src="/gibson-moodboard.png"
    alt="Gibson Girl Moodboard"
    style={{
      width: "100%",
      display: "block",
      borderRadius: "20px",
    }}
  />
</section>

{/* ROMANTIC MUSE */}

<section
  style={{
    backgroundColor: "#FFE98A",
    padding: "0 80px 120px",
  }}
>
  <img
    src="/romantic-muse.png"
    alt="The Romantic Muse"
    style={{
      width: "100%",
      display: "block",
      borderRadius: "20px",
    }}
  />
</section>
<section
  style={{
    backgroundColor: "#FFE98A",
    padding: "0 80px 120px",
  }}
>
  <img
    src="/gilded empress.png"
    alt="The gilded empress"
    style={{
      width: "100%",
      display: "block",
      borderRadius: "20px",
    }}
  />
</section>
<section
  style={{
    backgroundColor: "#FFE98A",
    padding: "0 80px 120px",
  }}
>
  <img
    src="/Seafoam Siren.png"
    alt="The Seafoam Siren"
    style={{
      width: "100%",
      display: "block",
      borderRadius: "20px",
    }}
  />
</section>
    </>
  );
}