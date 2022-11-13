(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(3419)}])},9749:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(_param){let blurWidth,blurHeight;var src,{src:src1,sizes,unoptimized=!1,priority=!1,loading,className,quality,width,height,fill,style,onLoad,onLoadingComplete,placeholder="empty",blurDataURL,layout,objectFit,objectPosition,lazyBoundary,lazyRoot}=_param,all=_object_without_properties_loose(_param,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let configContext=_react.useContext(_imageConfigContext.ImageConfigContext),config=_react.useMemo(()=>{let c=configEnv||configContext||_imageConfig.imageConfigDefault,allSizes=[...c.deviceSizes,...c.imageSizes].sort((a,b)=>a-b),deviceSizes=c.deviceSizes.sort((a,b)=>a-b);return _extends({},c,{allSizes,deviceSizes})},[configContext]),rest=all,loader=rest.loader||_imageLoader.default;if(delete rest.loader,"__next_img_default"in loader){if("custom"===config.loader)throw Error('Image with src "'.concat(src1,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let customImageLoader=loader;loader=obj=>{let{config:_}=obj,opts=_object_without_properties_loose(obj,["config"]);return customImageLoader(opts)}}if(layout){"fill"===layout&&(fill=!0);let layoutStyle={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[layout];layoutStyle&&(style=_extends({},style,layoutStyle));let layoutSizes={responsive:"100vw",fill:"100vw"}[layout];layoutSizes&&!sizes&&(sizes=layoutSizes)}let staticSrc="",widthInt=getInt(width),heightInt=getInt(height);if("object"==typeof(src=src1)&&(isStaticRequire(src)||void 0!==src.src)){let staticImageData=isStaticRequire(src1)?src1.default:src1;if(!staticImageData.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));if(!staticImageData.height||!staticImageData.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));if(blurWidth=staticImageData.blurWidth,blurHeight=staticImageData.blurHeight,blurDataURL=blurDataURL||staticImageData.blurDataURL,staticSrc=staticImageData.src,!fill){if(widthInt||heightInt){if(widthInt&&!heightInt){let ratio=widthInt/staticImageData.width;heightInt=Math.round(staticImageData.height*ratio)}else if(!widthInt&&heightInt){let ratio1=heightInt/staticImageData.height;widthInt=Math.round(staticImageData.width*ratio1)}}else widthInt=staticImageData.width,heightInt=staticImageData.height}}let isLazy=!priority&&("lazy"===loading||void 0===loading);((src1="string"==typeof src1?src1:staticSrc).startsWith("data:")||src1.startsWith("blob:"))&&(unoptimized=!0,isLazy=!1),config.unoptimized&&(unoptimized=!0);let[blurComplete,setBlurComplete]=_react.useState(!1),[showAltText,setShowAltText]=_react.useState(!1),qualityInt=getInt(quality),imgStyle=Object.assign(fill?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit,objectPosition}:{},showAltText?{}:{color:"transparent"},style),blurStyle="blur"===placeholder&&blurDataURL&&!blurComplete?{backgroundSize:imgStyle.objectFit||"cover",backgroundPosition:imgStyle.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(_imageBlurSvg.getImageBlurSvg({widthInt,heightInt,blurWidth,blurHeight,blurDataURL}),'")')}:{},imgAttributes=function(param){let{config,src,unoptimized,width,quality,sizes,loader}=param;if(unoptimized)return{src,srcSet:void 0,sizes:void 0};let{widths,kind}=function(param,width,sizes){let{deviceSizes,allSizes}=param;if(sizes){let viewportWidthRe=/(^|\s)(1?\d?\d)vw/g,percentSizes=[];for(let match;match=viewportWidthRe.exec(sizes);match)percentSizes.push(parseInt(match[2]));if(percentSizes.length){let smallestRatio=.01*Math.min(...percentSizes);return{widths:allSizes.filter(s=>s>=deviceSizes[0]*smallestRatio),kind:"w"}}return{widths:allSizes,kind:"w"}}if("number"!=typeof width)return{widths:deviceSizes,kind:"w"};let widths=[...new Set([width,2*width].map(w=>allSizes.find(p=>p>=w)||allSizes[allSizes.length-1]))];return{widths,kind:"x"}}(config,width,sizes),last=widths.length-1;return{sizes:sizes||"w"!==kind?sizes:"100vw",srcSet:widths.map((w,i)=>"".concat(loader({config,src,quality,width:w})," ").concat("w"===kind?w:i+1).concat(kind)).join(", "),src:loader({config,src,quality,width:widths[last]})}}({config,src:src1,unoptimized,width:widthInt,quality:qualityInt,sizes,loader}),srcString=src1,linkProps={imageSrcSet:imgAttributes.srcSet,imageSizes:imgAttributes.sizes,crossOrigin:rest.crossOrigin},onLoadRef=_react.useRef(onLoad);_react.useEffect(()=>{onLoadRef.current=onLoad},[onLoad]);let onLoadingCompleteRef=_react.useRef(onLoadingComplete);_react.useEffect(()=>{onLoadingCompleteRef.current=onLoadingComplete},[onLoadingComplete]);let imgElementArgs=_extends({isLazy,imgAttributes,heightInt,widthInt,qualityInt,className,imgStyle,blurStyle,loading,config,fill,unoptimized,placeholder,loader,srcString,onLoadRef,onLoadingCompleteRef,setBlurComplete,setShowAltText},rest);return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(ImageElement,Object.assign({},imgElementArgs)),priority?_react.default.createElement(_head.default,null,_react.default.createElement("link",Object.assign({key:"__nimg-"+imgAttributes.src+imgAttributes.srcSet+imgAttributes.sizes,rel:"preload",as:"image",href:imgAttributes.srcSet?void 0:imgAttributes.src},linkProps))):null)};var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_interop_require_wildcard=__webpack_require__(1598).Z,_object_without_properties_loose=__webpack_require__(7273).Z,_react=_interop_require_wildcard(__webpack_require__(7294)),_head=_interop_require_default(__webpack_require__(3121)),_imageBlurSvg=__webpack_require__(2675),_imageConfig=__webpack_require__(139),_imageConfigContext=__webpack_require__(8730);__webpack_require__(7238);var _imageLoader=_interop_require_default(__webpack_require__(9824));let configEnv={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function isStaticRequire(src){return void 0!==src.default}function getInt(x){return"number"==typeof x||void 0===x?x:"string"==typeof x&&/^[0-9]+$/.test(x)?parseInt(x,10):NaN}function handleLoading(img,src,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized){if(!img||img["data-loaded-src"]===src)return;img["data-loaded-src"]=src;let p="decode"in img?img.decode():Promise.resolve();p.catch(()=>{}).then(()=>{if(img.parentNode){if("blur"===placeholder&&setBlurComplete(!0),null==onLoadRef?void 0:onLoadRef.current){let event=new Event("load");Object.defineProperty(event,"target",{writable:!1,value:img});let prevented=!1,stopped=!1;onLoadRef.current(_extends({},event,{nativeEvent:event,currentTarget:img,target:img,isDefaultPrevented:()=>prevented,isPropagationStopped:()=>stopped,persist(){},preventDefault(){prevented=!0,event.preventDefault()},stopPropagation(){stopped=!0,event.stopPropagation()}}))}(null==onLoadingCompleteRef?void 0:onLoadingCompleteRef.current)&&onLoadingCompleteRef.current(img)}})}let ImageElement=_param=>{var{imgAttributes,heightInt,widthInt,qualityInt,className,imgStyle,blurStyle,isLazy,fill,placeholder,loading,srcString,config,unoptimized,loader,onLoadRef,onLoadingCompleteRef,setBlurComplete,setShowAltText,onLoad,onError}=_param,rest=_object_without_properties_loose(_param,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return loading=isLazy?"lazy":loading,_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("img",Object.assign({},rest,imgAttributes,{width:widthInt,height:heightInt,decoding:"async","data-nimg":fill?"fill":"1",className:className,loading:loading,style:_extends({},imgStyle,blurStyle),ref:_react.useCallback(img=>{img&&(onError&&(img.src=img.src),img.complete&&handleLoading(img,srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized))},[srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,onError,unoptimized]),onLoad(event){let img=event.currentTarget;handleLoading(img,srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized)},onError(event){setShowAltText(!0),"blur"===placeholder&&setBlurComplete(!0),onError&&onError(event)}})))};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},2675:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImageBlurSvg=function(param){let{widthInt,heightInt,blurWidth,blurHeight,blurDataURL}=param,svgWidth=blurWidth||widthInt,svgHeight=blurHeight||heightInt,feComponentTransfer=blurDataURL.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return svgWidth&&svgHeight?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(svgWidth," ").concat(svgHeight,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(blurWidth&&blurHeight?"1":"20","'/%3E").concat(feComponentTransfer,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(blurDataURL,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(blurDataURL,"'/%3E%3C/svg%3E")}},9824:function(__unused_webpack_module,exports){"use strict";function defaultLoader(param){let{config,src,width,quality}=param;return src.endsWith(".svg")&&!config.dangerouslyAllowSVG?src:"".concat(config.path,"?url=").concat(encodeURIComponent(src),"&w=").concat(width,"&q=").concat(quality||75)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,defaultLoader.__next_img_default=!0,exports.default=defaultLoader},3419:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),next_image=__webpack_require__(5675),image_default=__webpack_require__.n(next_image),Shaded_module=__webpack_require__(5203),Shaded_module_default=__webpack_require__.n(Shaded_module);function Shaded(param){let{children,type,color="#D9EAF2",shadowColor="#86B6D3",shadowTop="0.5rem",contentPadding="1rem",customStyles={}}=param;return(0,jsx_runtime.jsxs)("div",{className:Shaded_module_default().shadedWrap,style:customStyles,children:["button"===type?(0,jsx_runtime.jsx)("button",{className:Shaded_module_default().shaded,style:{background:color,padding:contentPadding},children:children}):(0,jsx_runtime.jsx)("div",{className:Shaded_module_default().shaded,style:{background:color,padding:contentPadding},children:children}),(0,jsx_runtime.jsx)("div",{className:Shaded_module_default().shadedShadow,style:{background:shadowColor,top:shadowTop,padding:contentPadding},children:children}),(0,jsx_runtime.jsx)("div",{className:Shaded_module_default().hideContent,style:{padding:contentPadding},children:children})]})}var Header_module=__webpack_require__(7354),Header_module_default=__webpack_require__.n(Header_module);function Header(){return(0,jsx_runtime.jsxs)("div",{className:Header_module_default().container,children:[(0,jsx_runtime.jsx)(image_default(),{src:"./assets/logo.png",alt:"Logo",className:Header_module_default().logo,width:150,height:150}),(0,jsx_runtime.jsxs)("ul",{className:Header_module_default().menu,children:[(0,jsx_runtime.jsx)("li",{children:"關卡資訊"}),(0,jsx_runtime.jsx)("li",{children:"作品列表"}),(0,jsx_runtime.jsx)("li",{children:"攻略資源"}),(0,jsx_runtime.jsx)("li",{children:"求職專區"})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Shaded,{type:"button",customStyles:{marginRight:16},children:"註冊報名"}),(0,jsx_runtime.jsx)(Shaded,{children:"登入"})]})]})}var title={src:"./_next/static/media/title.7409e2f4.png",height:98,width:644,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJElEQVR4nGPcs3miwX8GBllGBoanQJqXgYGBA8j+AGSzAWkWAJtCB0M0GrRVAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},eventName={src:"./_next/static/media/eventName.3c9174b4.png",height:84,width:674,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIklEQVR4nGNsWn+qmpGRQZyBgeEsEHMDsRwQHwNiDSAWBgBopwSIU1fXOQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1},introduction_module=__webpack_require__(5490),introduction_module_default=__webpack_require__.n(introduction_module);function Introduction(){let zIndexTop={zIndex:5};return(0,jsx_runtime.jsxs)("div",{className:introduction_module_default().container,children:[(0,jsx_runtime.jsx)("div",{className:"".concat(introduction_module_default().skillIcon," ").concat(introduction_module_default().absolute),style:zIndexTop,children:(0,jsx_runtime.jsx)(image_default(),{src:"./assets/css3.png",alt:"css3",width:42,height:42})}),(0,jsx_runtime.jsx)("div",{className:"".concat(introduction_module_default().skillIcon," ").concat(introduction_module_default().absolute),style:{left:"74%",top:140,...zIndexTop},children:(0,jsx_runtime.jsx)(image_default(),{src:"./assets/html5.png",alt:"html5",width:42,height:42})}),(0,jsx_runtime.jsx)("div",{className:"".concat(introduction_module_default().skillIcon," ").concat(introduction_module_default().absolute),style:{left:"85.5%",top:40,...zIndexTop},children:(0,jsx_runtime.jsx)(image_default(),{src:"./assets/xd.png",alt:"xd",width:42,height:42})}),(0,jsx_runtime.jsx)("div",{className:"".concat(introduction_module_default().skillIcon," ").concat(introduction_module_default().absolute),style:{left:"96.5%",top:296,...zIndexTop},children:(0,jsx_runtime.jsx)(image_default(),{src:"./assets/js.png",alt:"js",width:42,height:42})}),(0,jsx_runtime.jsx)("div",{className:"".concat(introduction_module_default().skillIcon," ").concat(introduction_module_default().absolute),style:{left:"12.5%",top:300,...zIndexTop},children:(0,jsx_runtime.jsx)(image_default(),{src:"./assets/figma.png",alt:"figma",width:42,height:42})}),(0,jsx_runtime.jsx)(image_default(),{src:"./assets/dashed1.png",alt:"dashed1",width:280,height:127,className:introduction_module_default().absolute,style:{left:"2%",top:32}}),(0,jsx_runtime.jsx)(image_default(),{src:"./assets/dashed2.png",alt:"dashed2",width:119,height:62,className:introduction_module_default().absolute,style:{left:"77%",top:110}}),(0,jsx_runtime.jsx)(image_default(),{src:"./assets/dashed3.png",alt:"dashed3",width:92,height:223,className:introduction_module_default().absolute,style:{left:"91%",top:70}}),(0,jsx_runtime.jsx)(image_default(),{src:"./assets/dashed4.png",alt:"dashed4",width:146,height:140,className:introduction_module_default().absolute,style:{left:"85.5%",top:350}}),(0,jsx_runtime.jsx)(image_default(),{src:"./assets/dashed5.png",alt:"dashed5",width:1,height:58,className:introduction_module_default().absolute,style:{left:"16%",top:360}}),(0,jsx_runtime.jsx)(Shaded,{color:"#fcf4e2",shadowColor:"#bfb596",shadowTop:"1rem",contentPadding:"2rem",customStyles:{left:"18%",top:100,...zIndexTop},children:(0,jsx_runtime.jsx)(image_default(),{src:title,alt:"title",width:242,height:37})}),(0,jsx_runtime.jsx)(Shaded,{shadowTop:"1rem",contentPadding:"3rem",customStyles:{left:"44%",top:80},children:(0,jsx_runtime.jsx)(image_default(),{src:eventName,alt:"eventName",width:253,height:32})}),(0,jsx_runtime.jsxs)("div",{className:"".concat(introduction_module_default().eventRecords," ").concat(introduction_module_default().absolute),children:[(0,jsx_runtime.jsxs)("div",{className:introduction_module_default().recordContainer,children:[(0,jsx_runtime.jsx)("span",{className:introduction_module_default().record,children:"1295"}),(0,jsx_runtime.jsx)("span",{className:introduction_module_default().recordName,children:"Total"})]}),(0,jsx_runtime.jsxs)("div",{className:introduction_module_default().recordContainer,children:[(0,jsx_runtime.jsx)("span",{className:introduction_module_default().record,children:"1175"}),(0,jsx_runtime.jsx)("span",{className:introduction_module_default().recordName,children:"Personal"})]}),(0,jsx_runtime.jsxs)("div",{className:introduction_module_default().recordContainer,children:[(0,jsx_runtime.jsx)("span",{className:introduction_module_default().record,children:"46"}),(0,jsx_runtime.jsx)("span",{className:introduction_module_default().recordName,children:"Team"})]})]})]})}var Home_module=__webpack_require__(7953),Home_module_default=__webpack_require__.n(Home_module);function Home(){return(0,jsx_runtime.jsxs)("div",{className:Home_module_default().container,children:[(0,jsx_runtime.jsx)(Header,{}),(0,jsx_runtime.jsx)(Introduction,{})]})}},7354:function(module){module.exports={container:"Header_container__nEsGl",menu:"Header_menu__KwHlK"}},5490:function(module){module.exports={container:"introduction_container__YFJ3s",absolute:"introduction_absolute__mwYjy",skillIcon:"introduction_skillIcon__Hn6_5",eventRecords:"introduction_eventRecords__SDNx_",recordContainer:"introduction_recordContainer__afST6",record:"introduction_record__8eTZR",recordName:"introduction_recordName__JlbJG"}},5203:function(module){module.exports={shadedWrap:"Shaded_shadedWrap__EZYzp",shaded:"Shaded_shaded__t_Z6d",shadedShadow:"Shaded_shadedShadow__MRa1q",hideContent:"Shaded_hideContent__XQInL"}},7953:function(module){module.exports={container:"Home_container__bCOhY"}},5675:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(9749)}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);