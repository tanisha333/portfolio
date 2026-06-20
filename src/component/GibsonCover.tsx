export default function GibsonCover() {
  return (
    <section
      style={{
        backgroundColor: "#F7EEDC",
        minHeight: "100vh",
        padding: "100px 80px",
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <p
          style={{
            letterSpacing: "8px",
            color: "#6D1020",
            marginBottom: "10px",
          }}
        >
          GIBSON GIRL
        </p>

        <h1
          style={{
            fontSize: "220px",
            lineHeight: "0.8",
            color: "#6D1020",
            margin: 0,
            fontFamily: "var(--font-heading)",
          }}
        >
          GIBSON
          <br />
          GIRL
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-150px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img
          src="/gibson-cover.png"
          alt="Gibson Girl"
          style={{
            width: "550px",
            maxWidth: "100%",
          }}
        />
      </div>

      <p
        style={{
          position: "absolute",
          right: "120px",
          top: "300px",
          fontSize: "40px",
          color: "#6D1020",
          fontStyle: "italic",
        }}
      >
        the original
        <br />
        influencer
      </p>

      <p
        style={{
          position: "absolute",
          left: "100px",
          top: "600px",
          maxWidth: "250px",
          color: "#6D1020",
          lineHeight: "1.8",
        }}
      >
        A MODERN
        <br />
        INTERPRETATION
        <br />
        OF
        <br />
        EDWARDIAN
        <br />
        ELEGANCE
      </p>

      <p
        style={{
          position: "absolute",
          right: "60px",
          top: "150px",
          writingMode: "vertical-rl",
          color: "#6D1020",
          letterSpacing: "3px",
        }}
      >
        1890 → 2026
      </p>
    </section>
  );
}