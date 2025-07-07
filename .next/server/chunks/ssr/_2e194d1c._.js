module.exports = {

"[project]/app/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Button = ({ children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "px-3 py-1 bg-black text-white rounded hover:opacity-80 text-sm",
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 5,
        columnNumber: 3
    }, this);
const layers = [
    {
        name: "Head",
        options: [
            "/layers/Head/IMG_4051.png",
            "/layers/Head/IMG_4052.png",
            "/layers/Head/IMG_4053.png",
            "/layers/Head/IMG_4054.png",
            "/layers/Head/IMG_4055.png",
            "/layers/Head/IMG_4056.png",
            "/layers/Head/IMG_4057.png",
            "/layers/Head/IMG_4058.png",
            "/layers/Head/IMG_4059.png"
        ]
    },
    {
        name: "Eyes",
        options: [
            "/layers/Eyes/Untitled_Artwork14.png",
            "/layers/Eyes/Untitled_Artwork15.png",
            "/layers/Eyes/Untitled_Artwork16.png",
            "/layers/Eyes/Untitled_Artwork17.png",
            "/layers/Eyes/Untitled_Artwork18.png",
            "/layers/Eyes/Untitled_Artwork19.png",
            "/layers/Eyes/Untitled_Artwork20.png",
            "/layers/Eyes/Untitled_Artwork21.png",
            "/layers/Eyes/Untitled_Artwork22.png",
            "/layers/Eyes/Untitled_Artwork23.png",
            "/layers/Eyes/Untitled_Artwork24.png",
            "/layers/Eyes/Untitled_Artwork25.png",
            "/layers/Eyes/Untitled_Artwork26.png",
            "/layers/Eyes/Untitled_Artwork27.png"
        ]
    },
    {
        name: "MouthOpen",
        options: [
            "/layers/MouthOpen/MouthOpen.png"
        ]
    },
    {
        name: "MouthClosed",
        options: [
            "/layers/MouthClosed/Untitled_Artwork28.png",
            "/layers/MouthClosed/Untitled_Artwork29.png",
            "/layers/MouthClosed/Untitled_Artwork30.png",
            "/layers/MouthClosed/Untitled_Artwork31.png",
            "/layers/MouthClosed/Untitled_Artwork32.png",
            "/layers/MouthClosed/Untitled_Artwork33.png",
            "/layers/MouthClosed/Untitled_Artwork34.png",
            "/layers/MouthClosed/Untitled_Artwork35.png",
            "/layers/MouthClosed/Untitled_Artwork36.png",
            "/layers/MouthClosed/Untitled_Artwork37.png",
            "/layers/MouthClosed/Untitled_Artwork38.png",
            "/layers/MouthClosed/Untitled_Artwork39.png",
            "/layers/MouthClosed/Untitled_Artwork40.png",
            "/layers/MouthClosed/Untitled_Artwork41.png",
            "/layers/MouthClosed/Untitled_Artwork42.png",
            "/layers/MouthClosed/Untitled_Artwork43.png"
        ]
    },
    {
        name: "Face",
        options: [
            "/layers/Face/Untitled_Artwork1.png",
            "/layers/Face/Untitled_Artwork2.png",
            "/layers/Face/Untitled_Artwork3.png",
            "/layers/Face/Untitled_Artwork4.png",
            "/layers/Face/Untitled_Artwork5.png",
            "/layers/Face/Untitled_Artwork6.png",
            "/layers/Face/Untitled_Artwork7.png",
            "/layers/Face/Untitled_Artwork8.png",
            "/layers/Face/Untitled_Artwork9.png",
            "/layers/Face/Untitled_Artwork10.png",
            "/layers/Face/Untitled_Artwork11.png",
            "/layers/Face/Untitled_Artwork12.png",
            "/layers/Face/Untitled_Artwork13.png"
        ]
    }
];
function Page() {
    const [selectedLayerIndex, setSelectedLayerIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedImages, setSelectedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(layers.map(()=>null));
    const [canvasUrl, setCanvasUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelect = (layerIndex, imageUrl)=>{
        const updated = [
            ...selectedImages
        ];
        updated[layerIndex] = imageUrl;
        const layerName = layers[layerIndex].name;
        const mouthOpenIndex = layers.findIndex((l)=>l.name === "MouthOpen");
        const mouthClosedIndex = layers.findIndex((l)=>l.name === "MouthClosed");
        if (layerName === "MouthOpen") {
            updated[mouthClosedIndex] = null;
        } else if (layerName === "MouthClosed") {
            updated[mouthOpenIndex] = null;
        }
        setSelectedImages(updated);
    };
    const renderImage = ()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const width = 512;
        const height = 512;
        canvas.width = width;
        canvas.height = height;
        Promise.all(selectedImages.map((src, i)=>{
            return new Promise((resolve)=>{
                if (!src) return resolve(null);
                const img = new Image();
                if (!img) return resolve(null);
                img.crossOrigin = "anonymous";
                img.src = src;
                img.onload = ()=>resolve(img);
            });
        })).then((images)=>{
            images.forEach((img)=>{
                if (img) ctx.drawImage(img, 0, 0, width, height);
            });
            setCanvasUrl(canvas.toDataURL("image/png"));
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        renderImage();
    }, [
        selectedImages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-center py-4 bg-white border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "Peak PNGtuber Generator"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 96,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: [
                            "by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://x.com/HelloRyanHolmes",
                                target: "_blank",
                                className: "text-blue-500 hover:underline",
                                children: "HelloRyanHolmes"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 97,
                                columnNumber: 47
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 97,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 95,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full h-screen bg-gray-100 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/2 p-6 flex flex-col gap-4 overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: layers.map((layer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedLayerIndex(index),
                                                    className: `w-full text-left border rounded py-1 px-2 text-sm ${selectedLayerIndex === index ? "bg-black text-white" : "bg-white text-black"}`,
                                                    children: layer.name
                                                }, layer.name, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 103,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    onClick: ()=>{
                                                        setSelectedImages(layers.map(()=>null));
                                                        setCanvasUrl(null);
                                                    },
                                                    children: "Clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    onClick: ()=>{
                                                        const updated = [
                                                            ...selectedImages
                                                        ];
                                                        const layerNamesToRandomize = [
                                                            "Head",
                                                            "Eyes",
                                                            "MouthOpen",
                                                            "MouthClosed",
                                                            "Face"
                                                        ];
                                                        layerNamesToRandomize.forEach((name)=>{
                                                            const index = layers.findIndex((l)=>l.name === name);
                                                            if (index !== -1) {
                                                                const options = layers[index].options;
                                                                updated[index] = options[Math.floor(Math.random() * options.length)];
                                                            }
                                                        });
                                                        const mouthOpenIndex = layers.findIndex((l)=>l.name === "MouthOpen");
                                                        const mouthClosedIndex = layers.findIndex((l)=>l.name === "MouthClosed");
                                                        if (updated[mouthOpenIndex] && updated[mouthClosedIndex]) {
                                                            if (Math.random() > 0.5) {
                                                                updated[mouthClosedIndex] = null;
                                                            } else {
                                                                updated[mouthOpenIndex] = null;
                                                            }
                                                        }
                                                        setSelectedImages(updated);
                                                    },
                                                    children: "Randomize"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: canvasUrl,
                                                    download: "Peak.png",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                        children: "Download"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 114,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 102,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-[256px] h-[256px] border-4 border-black rounded bg-gray-50",
                                    children: canvasUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: canvasUrl,
                                        className: "absolute top-0 left-0 w-full h-full object-contain",
                                        alt: "Live Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 145,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 101,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/2 p-6 overflow-y-auto flex flex-wrap gap-4",
                            children: layers[selectedLayerIndex].options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 flex items-center justify-center border border-gray-400 rounded overflow-hidden cursor-pointer bg-white hover:opacity-80",
                                    onClick: ()=>handleSelect(selectedLayerIndex, opt),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: opt,
                                        style: {
                                            width: "150px",
                                            height: "150px",
                                            objectFit: "contain"
                                        },
                                        className: selectedImages[selectedLayerIndex] === opt ? "border border-blue-500" : "",
                                        alt: `Option ${i}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 162,
                                        columnNumber: 7
                                    }, this)
                                }, `layer-${selectedLayerIndex}-opt-${i}`, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 157,
                                    columnNumber: 5
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 155,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 100,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 99,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_2e194d1c._.js.map