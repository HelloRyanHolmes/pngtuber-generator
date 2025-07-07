module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
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
const Button = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "px-4 py-2 bg-blue-500 text-white rounded",
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
    const [selectedImages, setSelectedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(layers.map((layer)=>layer.options[0]));
    const [canvasUrl, setCanvasUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelect = (layerIndex, imageUrl)=>{
        const updated = [
            ...selectedImages
        ];
        updated[layerIndex] = imageUrl;
        setSelectedImages(updated);
    };
    const renderImage = ()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const width = 2048;
        const height = 2048;
        canvas.width = width;
        canvas.height = height;
        Promise.all(selectedImages.map((src)=>{
            return new Promise((resolve)=>{
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.src = src;
                img.onload = ()=>resolve(img);
            });
        })).then((images)=>{
            images.forEach((img)=>ctx.drawImage(img, 0, 0, width, height));
            setCanvasUrl(canvas.toDataURL("image/png"));
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        renderImage();
    }, [
        selectedImages
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold",
                children: "Taco Builder"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            layers.map((layer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-semibold",
                            children: layer.name
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2 flex-wrap",
                            children: layer.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: option,
                                    onClick: ()=>handleSelect(index, option),
                                    className: `w-20 h-20 border-2 cursor-pointer ${selectedImages[index] === option ? "border-blue-500" : "border-transparent"}`,
                                    alt: "option"
                                }, option, false, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, layer.name, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold",
                        children: "Preview"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    canvasUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: canvasUrl,
                        alt: "Preview",
                        className: "w-[300px] h-[300px]"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 150,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            canvasUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: canvasUrl,
                download: "taco.png",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    children: "Download"
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__686a1ff1._.js.map