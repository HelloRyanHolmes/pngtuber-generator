"use client";
import { useState, useEffect } from "react";

const Button = ({ children, ...props }) => (
  <button className="px-3 py-1 bg-black text-white rounded hover:opacity-80 text-sm" {...props}>{children}</button>
);

const layers = [
  { name: "Head", options: [
    "/layers/Head/IMG_4051.PNG", "/layers/Head/IMG_4052.PNG", "/layers/Head/IMG_4053.PNG",
    "/layers/Head/IMG_4054.PNG", "/layers/Head/IMG_4055.PNG", "/layers/Head/IMG_4056.PNG",
    "/layers/Head/IMG_4057.PNG", "/layers/Head/IMG_4058.PNG", "/layers/Head/IMG_4059.PNG"
  ]},
  { name: "Eyes", options: [
    "/layers/Eyes/Untitled_Artwork14.png", "/layers/Eyes/Untitled_Artwork15.png", "/layers/Eyes/Untitled_Artwork16.png",
    "/layers/Eyes/Untitled_Artwork17.png", "/layers/Eyes/Untitled_Artwork18.png", "/layers/Eyes/Untitled_Artwork19.png",
    "/layers/Eyes/Untitled_Artwork20.png", "/layers/Eyes/Untitled_Artwork21.png", "/layers/Eyes/Untitled_Artwork22.png",
    "/layers/Eyes/Untitled_Artwork23.png", "/layers/Eyes/Untitled_Artwork24.png", "/layers/Eyes/Untitled_Artwork25.png",
    "/layers/Eyes/Untitled_Artwork26.png", "/layers/Eyes/Untitled_Artwork27.png"
  ]},
  { name: "MouthOpen", options: ["/layers/MouthOpen/MouthOpen.png"] },
  { name: "MouthClosed", options: [
    "/layers/MouthClosed/Untitled_Artwork28.png", "/layers/MouthClosed/Untitled_Artwork29.png", "/layers/MouthClosed/Untitled_Artwork30.png",
    "/layers/MouthClosed/Untitled_Artwork31.png", "/layers/MouthClosed/Untitled_Artwork32.png", "/layers/MouthClosed/Untitled_Artwork33.png",
    "/layers/MouthClosed/Untitled_Artwork34.png", "/layers/MouthClosed/Untitled_Artwork35.png", "/layers/MouthClosed/Untitled_Artwork36.png",
    "/layers/MouthClosed/Untitled_Artwork37.png", "/layers/MouthClosed/Untitled_Artwork38.png", "/layers/MouthClosed/Untitled_Artwork39.png",
    "/layers/MouthClosed/Untitled_Artwork40.png", "/layers/MouthClosed/Untitled_Artwork41.png", "/layers/MouthClosed/Untitled_Artwork42.png",
    "/layers/MouthClosed/Untitled_Artwork43.png"
  ]},
  { name: "Face", options: [
    "/layers/Face/Untitled_Artwork1.png", "/layers/Face/Untitled_Artwork2.png", "/layers/Face/Untitled_Artwork3.png",
    "/layers/Face/Untitled_Artwork4.png", "/layers/Face/Untitled_Artwork5.png", "/layers/Face/Untitled_Artwork6.png",
    "/layers/Face/Untitled_Artwork7.png", "/layers/Face/Untitled_Artwork8.png", "/layers/Face/Untitled_Artwork9.png",
    "/layers/Face/Untitled_Artwork10.png", "/layers/Face/Untitled_Artwork11.png", "/layers/Face/Untitled_Artwork12.png",
    "/layers/Face/Untitled_Artwork13.png"
  ]}
];

export default function Page() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState(layers.map(() => null));
  const [canvasUrl, setCanvasUrl] = useState(null);

  const handleSelect = (layerIndex, imageUrl) => {
    const updated = [...selectedImages];
    updated[layerIndex] = imageUrl;

    const layerName = layers[layerIndex].name;
    const mouthOpenIndex = layers.findIndex(l => l.name === "MouthOpen");
    const mouthClosedIndex = layers.findIndex(l => l.name === "MouthClosed");

    if (layerName === "MouthOpen") {
      updated[mouthClosedIndex] = null;
    } else if (layerName === "MouthClosed") {
      updated[mouthOpenIndex] = null;
    }

    setSelectedImages(updated);
};

  const renderImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = 2048;
    const height = 2048;
    canvas.width = width;
    canvas.height = height;

    Promise.all(
      selectedImages.map((src, i) => {
        return new Promise(resolve => {
          if (!src) return resolve(null);
          const img = new Image();
          if (!img) return resolve(null);
          img.crossOrigin = "anonymous";
          img.src = src;
          img.onload = () => resolve(img);
        });
      })
    ).then(images => {
      images.forEach(img => {
        if (img) ctx.drawImage(img, 0, 0, width, height);
      });
      setCanvasUrl(canvas.toDataURL("image/png"));
    });
  };

  useEffect(() => {
    renderImage();
  }, [selectedImages]);

  return (
    <>
    <div className="w-full text-center py-4 bg-white border-b">
      <h1 className="text-2xl font-bold">Peak PNGtuber Generator</h1>
      <p className="text-sm text-gray-600">by <a href="https://x.com/HelloRyanHolmes" target="_blank" className="text-blue-500 hover:underline">HelloRyanHolmes</a></p>
    </div>
    <div className="flex w-full h-screen bg-gray-100 overflow-hidden">
      <div className="flex flex-row w-full">
        <div className="w-1/2 p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="space-y-2">
              {layers.map((layer, index) => (
                <button
                  key={layer.name}
                  onClick={() => setSelectedLayerIndex(index)}
                  className={`w-full text-left border rounded py-1 px-2 text-sm ${selectedLayerIndex === index ? "bg-black text-white" : "bg-white text-black"}`}
                >
                  {layer.name}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button onClick={() => {
                setSelectedImages(layers.map(() => null));
                setCanvasUrl(null);
              }}>Clear</Button>
              <Button onClick={() => {
                const updated = [...selectedImages];
                const layerNamesToRandomize = ["Head", "Eyes", "MouthOpen", "MouthClosed", "Face"];
                layerNamesToRandomize.forEach(name => {
                  const index = layers.findIndex(l => l.name === name);
                  if (index !== -1) {
                    const options = layers[index].options;
                    updated[index] = options[Math.floor(Math.random() * options.length)];
                  }
                });
                const mouthOpenIndex = layers.findIndex(l => l.name === "MouthOpen");
                const mouthClosedIndex = layers.findIndex(l => l.name === "MouthClosed");
                if (updated[mouthOpenIndex] && updated[mouthClosedIndex]) {
                  if (Math.random() > 0.5) {
                    updated[mouthClosedIndex] = null;
                  } else {
                    updated[mouthOpenIndex] = null;
                  }
                }
                setSelectedImages(updated);
              }}>Randomize</Button>
              <a href={canvasUrl} download="Peak.png">
                <Button>Download</Button>
              </a>
            </div>
          </div>
          <div className="relative w-[256px] h-[256px] border-4 border-black rounded bg-gray-50">
            {canvasUrl && (
              <img
                src={canvasUrl}
                className="absolute top-0 left-0 w-full h-full object-contain"
                alt="Live Preview"
              />
            )}
          </div>
        </div>
        <div className="w-1/2 p-6 overflow-y-auto flex flex-wrap gap-4">
  {layers[selectedLayerIndex].options.map((opt, i) => (
    <div
      key={`layer-${selectedLayerIndex}-opt-${i}`}
      className="w-16 h-16 flex items-center justify-center border border-gray-400 rounded overflow-hidden cursor-pointer bg-white hover:opacity-80"
      onClick={() => handleSelect(selectedLayerIndex, opt)}
    >
      <img
        src={opt}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
        className={selectedImages[selectedLayerIndex] === opt ? "border border-blue-500" : ""}
        alt={`Option ${i}`}
      />
    </div>
  ))}
</div>
        </div>
      </div>

  </>
  );
}
