export default function MapVideo() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
     

      {/* 🎥 VIDEO MAP */}
      <video
        src="/videos/india-map.mp4" // 👈 apni video ka path yaha dalna
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
        }}
      />
    </div>
  );
}