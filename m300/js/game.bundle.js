/*!
 * M300: ORBITAL SWEEPER — bundled single-file build.
 * Generated from demo_game/js/*.js + vendor/three.module.js (Three.js r170, MIT).
 * Three.js license: see vendor/THREE-LICENSE.txt.
 * Rebuild: demo_game/build_bundle.sh
 */
(()=>{var E0=Object.defineProperty;var T0=(s,t)=>{for(var e in t)E0(s,e,{get:t[e],enumerable:!0})};var In={};T0(In,{ACESFilmicToneMapping:()=>vc,AddEquation:()=>Oi,AddOperation:()=>Zp,AdditiveAnimationBlendMode:()=>vd,AdditiveBlending:()=>Ae,AgXToneMapping:()=>tm,AlphaFormat:()=>ud,AlwaysCompare:()=>mm,AlwaysDepth:()=>Ho,AlwaysStencilFunc:()=>Hh,AmbientLight:()=>yr,AnimationAction:()=>gc,AnimationClip:()=>Ps,AnimationLoader:()=>mu,AnimationMixer:()=>Lu,AnimationObjectGroup:()=>Pu,AnimationUtils:()=>hS,ArcCurve:()=>Ul,ArrayCamera:()=>bl,ArrowHelper:()=>ed,AttachedBindMode:()=>kh,Audio:()=>pc,AudioAnalyser:()=>Cu,AudioContext:()=>La,AudioListener:()=>Au,AudioLoader:()=>Tu,AxesHelper:()=>nd,BackSide:()=>Ve,BasicDepthPacking:()=>am,BasicShadowMap:()=>I0,BatchedMesh:()=>Il,Bone:()=>ma,BooleanKeyframeTrack:()=>bi,Box2:()=>Vu,Box3:()=>We,Box3Helper:()=>ju,BoxGeometry:()=>jt,BoxHelper:()=>Qu,BufferAttribute:()=>Xt,BufferGeometry:()=>$t,BufferGeometryLoader:()=>fc,ByteType:()=>ld,Cache:()=>pi,Camera:()=>dr,CameraHelper:()=>Ku,CanvasTexture:()=>Ms,CapsuleGeometry:()=>bs,CatmullRomCurve3:()=>Nl,CineonToneMapping:()=>Qp,CircleGeometry:()=>xr,ClampToEdgeWrapping:()=>sn,Clock:()=>Mr,Color:()=>St,ColorKeyframeTrack:()=>Ra,ColorManagement:()=>te,CompressedArrayTexture:()=>cu,CompressedCubeTexture:()=>hu,CompressedTexture:()=>gr,CompressedTextureLoader:()=>gu,ConeGeometry:()=>Si,ConstantAlphaFactor:()=>Xp,ConstantColorFactor:()=>Wp,Controls:()=>sd,CubeCamera:()=>Ml,CubeReflectionMapping:()=>_i,CubeRefractionMapping:()=>Bi,CubeTexture:()=>xs,CubeTextureLoader:()=>vu,CubeUVReflectionMapping:()=>Sr,CubicBezierCurve:()=>va,CubicBezierCurve3:()=>Fl,CubicInterpolant:()=>ic,CullFaceBack:()=>Fh,CullFaceFront:()=>Rp,CullFaceFrontBack:()=>C0,CullFaceNone:()=>Ap,Curve:()=>Mn,CurvePath:()=>kl,CustomBlending:()=>Ip,CustomToneMapping:()=>jp,CylinderGeometry:()=>ne,Cylindrical:()=>Hu,Data3DTexture:()=>oa,DataArrayTexture:()=>cr,DataTexture:()=>An,DataTextureLoader:()=>xu,DataUtils:()=>zg,DecrementStencilOp:()=>W0,DecrementWrapStencilOp:()=>X0,DefaultLoadingManager:()=>Dm,DepthFormat:()=>ds,DepthStencilFormat:()=>vs,DepthTexture:()=>ua,DetachedBindMode:()=>nm,DirectionalLight:()=>zn,DirectionalLightHelper:()=>Ju,DiscreteInterpolant:()=>sc,DodecahedronGeometry:()=>Hl,DoubleSide:()=>ze,DstAlphaFactor:()=>kp,DstColorFactor:()=>zp,DynamicCopyUsage:()=>og,DynamicDrawUsage:()=>eg,DynamicReadUsage:()=>sg,EdgesGeometry:()=>zl,EllipseCurve:()=>vr,EqualCompare:()=>um,EqualDepth:()=>Vo,EqualStencilFunc:()=>J0,EquirectangularReflectionMapping:()=>ms,EquirectangularRefractionMapping:()=>ta,Euler:()=>De,EventDispatcher:()=>Rn,ExtrudeGeometry:()=>Vl,FileLoader:()=>Hn,Float16BufferAttribute:()=>Zh,Float32BufferAttribute:()=>Lt,FloatType:()=>hn,Fog:()=>Tl,FogExp2:()=>El,FramebufferTexture:()=>lu,FrontSide:()=>kn,Frustum:()=>_s,GLBufferAttribute:()=>Fu,GLSL1:()=>cg,GLSL3:()=>zh,GreaterCompare:()=>dm,GreaterDepth:()=>Wo,GreaterEqualCompare:()=>pm,GreaterEqualDepth:()=>Go,GreaterEqualStencilFunc:()=>tg,GreaterStencilFunc:()=>Q0,GridHelper:()=>Yu,Group:()=>ue,HalfFloatType:()=>br,HemisphereLight:()=>_r,HemisphereLightHelper:()=>$u,IcosahedronGeometry:()=>Ts,ImageBitmapLoader:()=>Eu,ImageLoader:()=>Ls,ImageUtils:()=>_l,IncrementStencilOp:()=>G0,IncrementWrapStencilOp:()=>q0,InstancedBufferAttribute:()=>Hi,InstancedBufferGeometry:()=>dc,InstancedInterleavedBuffer:()=>Nu,InstancedMesh:()=>Cl,Int16BufferAttribute:()=>$h,Int32BufferAttribute:()=>Yh,Int8BufferAttribute:()=>Wh,IntType:()=>_c,InterleavedBuffer:()=>mr,InterleavedBufferAttribute:()=>ys,Interpolant:()=>As,InterpolateDiscrete:()=>na,InterpolateLinear:()=>xl,InterpolateSmooth:()=>Fo,InvertStencilOp:()=>$0,KeepStencilOp:()=>rs,KeyframeTrack:()=>bn,LOD:()=>wl,LatheGeometry:()=>Sa,Layers:()=>hr,LessCompare:()=>hm,LessDepth:()=>zo,LessEqualCompare:()=>xd,LessEqualDepth:()=>ps,LessEqualStencilFunc:()=>K0,LessStencilFunc:()=>Z0,Light:()=>Qn,LightProbe:()=>hc,Line:()=>Kn,Line3:()=>Gu,LineBasicMaterial:()=>qe,LineCurve:()=>xa,LineCurve3:()=>Ol,LineDashedMaterial:()=>nc,LineLoop:()=>Dl,LineSegments:()=>Cn,LinearFilter:()=>Te,LinearInterpolant:()=>Aa,LinearMipMapLinearFilter:()=>U0,LinearMipMapNearestFilter:()=>D0,LinearMipmapLinearFilter:()=>wn,LinearMipmapNearestFilter:()=>Wr,LinearSRGBColorSpace:()=>Ds,LinearToneMapping:()=>Jp,LinearTransfer:()=>Na,Loader:()=>je,LoaderUtils:()=>Pa,LoadingManager:()=>Ca,LoopOnce:()=>im,LoopPingPong:()=>rm,LoopRepeat:()=>sm,LuminanceAlphaFormat:()=>pd,LuminanceFormat:()=>fd,MOUSE:()=>A0,Material:()=>Be,MaterialLoader:()=>uc,MathUtils:()=>un,Matrix2:()=>zu,Matrix3:()=>Zt,Matrix4:()=>Wt,MaxEquation:()=>Up,Mesh:()=>it,MeshBasicMaterial:()=>xe,MeshDepthMaterial:()=>da,MeshDistanceMaterial:()=>fa,MeshLambertMaterial:()=>tc,MeshMatcapMaterial:()=>ec,MeshNormalMaterial:()=>jl,MeshPhongMaterial:()=>Kl,MeshPhysicalMaterial:()=>Jl,MeshStandardMaterial:()=>$e,MeshToonMaterial:()=>Ql,MinEquation:()=>Dp,MirroredRepeatWrapping:()=>ea,MixOperation:()=>Yp,MultiplyBlending:()=>Bh,MultiplyOperation:()=>Da,NearestFilter:()=>Ge,NearestMipMapLinearFilter:()=>L0,NearestMipMapNearestFilter:()=>P0,NearestMipmapLinearFilter:()=>er,NearestMipmapNearestFilter:()=>od,NeutralToneMapping:()=>em,NeverCompare:()=>cm,NeverDepth:()=>ko,NeverStencilFunc:()=>Y0,NoBlending:()=>mi,NoColorSpace:()=>ui,NoToneMapping:()=>gi,NormalAnimationBlendMode:()=>Tc,NormalBlending:()=>us,NotEqualCompare:()=>fm,NotEqualDepth:()=>qo,NotEqualStencilFunc:()=>j0,NumberKeyframeTrack:()=>Rs,Object3D:()=>ee,ObjectLoader:()=>bu,ObjectSpaceNormalMap:()=>lm,OctahedronGeometry:()=>wa,OneFactor:()=>Fp,OneMinusConstantAlphaFactor:()=>$p,OneMinusConstantColorFactor:()=>qp,OneMinusDstAlphaFactor:()=>Hp,OneMinusDstColorFactor:()=>Vp,OneMinusSrcAlphaFactor:()=>Bo,OneMinusSrcColorFactor:()=>Bp,OrthographicCamera:()=>fr,PCFShadowMap:()=>ad,PCFSoftShadowMap:()=>Cp,PMREMGenerator:()=>ha,Path:()=>Ss,PerspectiveCamera:()=>Ee,Plane:()=>qn,PlaneGeometry:()=>Jn,PlaneHelper:()=>td,PointLight:()=>oc,PointLightHelper:()=>Xu,Points:()=>Mi,PointsMaterial:()=>ga,PolarGridHelper:()=>Zu,PolyhedronGeometry:()=>zi,PositionalAudio:()=>Ru,PropertyBinding:()=>he,PropertyMixer:()=>mc,QuadraticBezierCurve:()=>_a,QuadraticBezierCurve3:()=>ya,Quaternion:()=>ge,QuaternionKeyframeTrack:()=>Cs,QuaternionLinearInterpolant:()=>rc,RED_GREEN_RGTC2_Format:()=>gl,RED_RGTC1_Format:()=>gd,REVISION:()=>w0,RGBADepthPacking:()=>om,RGBAFormat:()=>rn,RGBAIntegerFormat:()=>Ec,RGBA_ASTC_10x10_Format:()=>hl,RGBA_ASTC_10x5_Format:()=>ol,RGBA_ASTC_10x6_Format:()=>ll,RGBA_ASTC_10x8_Format:()=>cl,RGBA_ASTC_12x10_Format:()=>ul,RGBA_ASTC_12x12_Format:()=>dl,RGBA_ASTC_4x4_Format:()=>jo,RGBA_ASTC_5x4_Format:()=>tl,RGBA_ASTC_5x5_Format:()=>el,RGBA_ASTC_6x5_Format:()=>nl,RGBA_ASTC_6x6_Format:()=>il,RGBA_ASTC_8x5_Format:()=>sl,RGBA_ASTC_8x6_Format:()=>rl,RGBA_ASTC_8x8_Format:()=>al,RGBA_BPTC_Format:()=>Zr,RGBA_ETC2_EAC_Format:()=>Qo,RGBA_PVRTC_2BPPV1_Format:()=>Zo,RGBA_PVRTC_4BPPV1_Format:()=>Yo,RGBA_S3TC_DXT1_Format:()=>Xr,RGBA_S3TC_DXT3_Format:()=>$r,RGBA_S3TC_DXT5_Format:()=>Yr,RGBDepthPacking:()=>k0,RGBFormat:()=>dd,RGBIntegerFormat:()=>N0,RGB_BPTC_SIGNED_Format:()=>fl,RGB_BPTC_UNSIGNED_Format:()=>pl,RGB_ETC1_Format:()=>Jo,RGB_ETC2_Format:()=>Ko,RGB_PVRTC_2BPPV1_Format:()=>$o,RGB_PVRTC_4BPPV1_Format:()=>Xo,RGB_S3TC_DXT1_Format:()=>qr,RGDepthPacking:()=>H0,RGFormat:()=>md,RGIntegerFormat:()=>bc,RawShaderMaterial:()=>Zl,Ray:()=>ki,Raycaster:()=>Ou,RectAreaLight:()=>lc,RedFormat:()=>Sc,RedIntegerFormat:()=>Ua,ReinhardToneMapping:()=>Kp,RenderTarget:()=>yl,RepeatWrapping:()=>_n,ReplaceStencilOp:()=>V0,ReverseSubtractEquation:()=>Lp,RingGeometry:()=>Gl,SIGNED_RED_GREEN_RGTC2_Format:()=>vl,SIGNED_RED_RGTC1_Format:()=>ml,SRGBColorSpace:()=>Ie,SRGBTransfer:()=>ce,Scene:()=>pr,ShaderChunk:()=>Qt,ShaderLib:()=>Bn,ShaderMaterial:()=>Re,ShadowMaterial:()=>Yl,Shape:()=>xi,ShapeGeometry:()=>Wl,ShapePath:()=>id,ShapeUtils:()=>Yn,ShortType:()=>cd,Skeleton:()=>Rl,SkeletonHelper:()=>qu,SkinnedMesh:()=>Al,Source:()=>fi,Sphere:()=>we,SphereGeometry:()=>Xe,Spherical:()=>ku,SphericalHarmonics3:()=>cc,SplineCurve:()=>Ma,SpotLight:()=>ac,SpotLightHelper:()=>Wu,Sprite:()=>an,SpriteMaterial:()=>Qe,SrcAlphaFactor:()=>Oo,SrcAlphaSaturateFactor:()=>Gp,SrcColorFactor:()=>Op,StaticCopyUsage:()=>ag,StaticDrawUsage:()=>sa,StaticReadUsage:()=>ig,StereoCamera:()=>wu,StreamCopyUsage:()=>lg,StreamDrawUsage:()=>ng,StreamReadUsage:()=>rg,StringKeyframeTrack:()=>Ei,SubtractEquation:()=>Pp,SubtractiveBlending:()=>Oh,TOUCH:()=>R0,TangentSpaceNormalMap:()=>Vi,TetrahedronGeometry:()=>ws,Texture:()=>Pe,TextureLoader:()=>_u,TextureUtils:()=>_M,TorusGeometry:()=>Sn,TorusKnotGeometry:()=>ql,Triangle:()=>Xn,TriangleFanDrawMode:()=>B0,TriangleStripDrawMode:()=>O0,TrianglesDrawMode:()=>F0,TubeGeometry:()=>Xl,UVMapping:()=>xc,Uint16BufferAttribute:()=>la,Uint32BufferAttribute:()=>ca,Uint8BufferAttribute:()=>qh,Uint8ClampedBufferAttribute:()=>Xh,Uniform:()=>Du,UniformsGroup:()=>Uu,UniformsLib:()=>bt,UniformsUtils:()=>ym,UnsignedByteType:()=>Zn,UnsignedInt248Type:()=>gs,UnsignedInt5999Type:()=>hd,UnsignedIntType:()=>yi,UnsignedShort4444Type:()=>yc,UnsignedShort5551Type:()=>Mc,UnsignedShortType:()=>or,VSMShadowMap:()=>Wn,Vector2:()=>st,Vector3:()=>w,Vector4:()=>ie,VectorKeyframeTrack:()=>Is,VideoTexture:()=>ou,WebGL3DRenderTarget:()=>Gh,WebGLArrayRenderTarget:()=>Vh,WebGLCoordinateSystem:()=>$n,WebGLCubeRenderTarget:()=>Sl,WebGLMultipleRenderTargets:()=>rd,WebGLRenderTarget:()=>yn,WebGLRenderer:()=>pa,WebGLUtils:()=>wm,WebGPUCoordinateSystem:()=>ra,WireframeGeometry:()=>$l,WrapAroundEnding:()=>ia,ZeroCurvatureEnding:()=>ls,ZeroFactor:()=>Np,ZeroSlopeEnding:()=>cs,ZeroStencilOp:()=>z0,createCanvasElement:()=>vm});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var w0="170",A0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},R0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ap=0,Fh=1,Rp=2,C0=3,I0=0,ad=1,Cp=2,Wn=3,kn=0,Ve=1,ze=2,mi=0,us=1,Ae=2,Oh=3,Bh=4,Ip=5,Oi=100,Pp=101,Lp=102,Dp=103,Up=104,Np=200,Fp=201,Op=202,Bp=203,Oo=204,Bo=205,kp=206,Hp=207,zp=208,Vp=209,Gp=210,Wp=211,qp=212,Xp=213,$p=214,ko=0,Ho=1,zo=2,ps=3,Vo=4,Go=5,Wo=6,qo=7,Da=0,Yp=1,Zp=2,gi=0,Jp=1,Kp=2,Qp=3,vc=4,jp=5,tm=6,em=7,kh="attached",nm="detached",xc=300,_i=301,Bi=302,ms=303,ta=304,Sr=306,_n=1e3,sn=1001,ea=1002,Ge=1003,od=1004,P0=1004,er=1005,L0=1005,Te=1006,Wr=1007,D0=1007,wn=1008,U0=1008,Zn=1009,ld=1010,cd=1011,or=1012,_c=1013,yi=1014,hn=1015,br=1016,yc=1017,Mc=1018,gs=1020,hd=35902,ud=1021,dd=1022,rn=1023,fd=1024,pd=1025,ds=1026,vs=1027,Sc=1028,Ua=1029,md=1030,bc=1031,N0=1032,Ec=1033,qr=33776,Xr=33777,$r=33778,Yr=33779,Xo=35840,$o=35841,Yo=35842,Zo=35843,Jo=36196,Ko=37492,Qo=37496,jo=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,Zr=36492,fl=36494,pl=36495,gd=36283,ml=36284,gl=36285,vl=36286,im=2200,sm=2201,rm=2202,na=2300,xl=2301,Fo=2302,ls=2400,cs=2401,ia=2402,Tc=2500,vd=2501,F0=0,O0=1,B0=2,am=3200,om=3201,k0=3202,H0=3203,Vi=0,lm=1,ui="",Ie="srgb",Ds="srgb-linear",Na="linear",ce="srgb",z0=0,rs=7680,V0=7681,G0=7682,W0=7683,q0=34055,X0=34056,$0=5386,Y0=512,Z0=513,J0=514,K0=515,Q0=516,j0=517,tg=518,Hh=519,cm=512,hm=513,um=514,xd=515,dm=516,fm=517,pm=518,mm=519,sa=35044,eg=35048,ng=35040,ig=35045,sg=35049,rg=35041,ag=35046,og=35050,lg=35042,cg="100",zh="300 es",$n=2e3,ra=2001,Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=1234567,fs=Math.PI/180,lr=180/Math.PI;function xn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function _d(s,t){return(s%t+t)%t}function hg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ug(s,t,e){return s!==t?(e-s)/(t-s):0}function Jr(s,t,e){return(1-e)*s+e*t}function dg(s,t,e,n){return Jr(s,t,1-Math.exp(-e*n))}function fg(s,t=1){return t-Math.abs(_d(s,t*2)-t)}function pg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function mg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function gg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function vg(s,t){return s+Math.random()*(t-s)}function xg(s){return s*(.5-Math.random())}function _g(s){s!==void 0&&(Xd=s);let t=Xd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yg(s){return s*fs}function Mg(s){return s*lr}function Sg(s){return(s&s-1)===0&&s!==0}function bg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Eg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tg(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var un={DEG2RAD:fs,RAD2DEG:lr,generateUUID:xn,clamp:Se,euclideanModulo:_d,mapLinear:hg,inverseLerp:ug,lerp:Jr,damp:dg,pingpong:fg,smoothstep:pg,smootherstep:mg,randInt:gg,randFloat:vg,randFloatSpread:xg,seededRandom:_g,degToRad:yg,radToDeg:Mg,isPowerOfTwo:Sg,ceilPowerOfTwo:bg,floorPowerOfTwo:Eg,setQuaternionFromProperEuler:Tg,normalize:Jt,denormalize:nn},st=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],x=i[4],_=i[7],A=i[2],T=i[5],C=i[8];return r[0]=a*v+o*y+l*A,r[3]=a*g+o*x+l*T,r[6]=a*p+o*_+l*C,r[1]=c*v+u*y+h*A,r[4]=c*g+u*x+h*T,r[7]=c*p+u*_+h*C,r[2]=d*v+f*y+m*A,r[5]=d*g+f*x+m*T,r[8]=d*p+f*_+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=e*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=h*v,t[1]=(i*c-u*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(u*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new Zt;function gm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var wg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nr(s,t){return new wg[s](t)}function aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vm(){let s=aa("canvas");return s.style.display="block",s}var $d={};function zr(s){s in $d||($d[s]=!0,console.warn(s))}function Ag(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rg(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cg(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Na:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Yd=[.64,.33,.3,.6,.15,.06],Zd=[.2126,.7152,.0722],Jd=[.3127,.329],Kd=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ds]:{primaries:Yd,whitePoint:Jd,transfer:Na,toXYZ:Kd,fromXYZ:Qd,luminanceCoefficients:Zd,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Yd,whitePoint:Jd,transfer:ce,toXYZ:Kd,fromXYZ:Qd,luminanceCoefficients:Zd,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var Os,_l=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=aa("canvas")),Os.width=t.width,Os.height=t.height;let n=Os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=aa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ig=0,fi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Jc(i[a].image)):r.push(Jc(i[a]))}else r=Jc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_l.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pg=0,Pe=class s extends Rn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=sn,i=sn,r=Te,a=wn,o=rn,l=Zn,c=s.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=xn(),this.name="",this.source=new fi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _n:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _n:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=xc;Pe.DEFAULT_ANISOTROPY=1;var ie=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,_=(f+1)/2,A=(p+1)/2,T=(u+d)/4,C=(h+v)/4,I=(m+g)/4;return x>_&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):_>A?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Rn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Pe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fi(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Vh=class extends yn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new cr(null,t,e,n),this.texture.isRenderTargetTexture=!0}},oa=class extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gh=class extends yn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new oa(null,t,e,n),this.texture.isRenderTargetTexture=!0}},ge=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(h!==v||l!==d||c!==f||u!==m){let g=1-o,p=l*d+c*f+u*m+h*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,p*y);g=Math.sin(g*T)/A,o=Math.sin(o*T)/A}let _=o*y;if(l=l*g+d*_,c=c*g+f*_,u=u*g+m*_,h=h*g+v*_,g===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-o*f,t[e+2]=c*m+u*f+o*d-l*h,t[e+3]=u*m-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new w,jd=new ge,We=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(t.matrixWorld),this.union(Wa)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),qa.subVectors(this.max,Cr),Bs.subVectors(t.a,Cr),ks.subVectors(t.b,Cr),Hs.subVectors(t.c,Cr),Ii.subVectors(ks,Bs),Pi.subVectors(Hs,ks),Xi.subVectors(Bs,Hs);let e=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Xi.z,Xi.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Xi.z,0,-Xi.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Xi.y,Xi.x,0];return!Qc(e,Bs,ks,Hs,qa)||(e=[1,0,0,0,1,0,0,0,1],!Qc(e,Bs,ks,Hs,qa))?!1:(Xa.crossVectors(Ii,Pi),e=[Xa.x,Xa.y,Xa.z],Qc(e,Bs,ks,Hs,qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ri=[new w,new w,new w,new w,new w,new w,new w,new w],Nn=new w,Wa=new We,Bs=new w,ks=new w,Hs=new w,Ii=new w,Pi=new w,Xi=new w,Cr=new w,qa=new w,Xa=new w,$i=new w;function Qc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$i.fromArray(s,r);let o=i.x*Math.abs($i.x)+i.y*Math.abs($i.y)+i.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),u=n.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Lg=new We,Ir=new w,jc=new w,we=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);let e=Ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(jc)),this.expandByPoint(Ir.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new w,th=new w,$a=new w,Li=new w,eh=new w,Ya=new w,nh=new w,ki=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){th.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(th);let r=t.distanceTo(e)*.5,a=-this.direction.dot($a),o=Li.dot(this.direction),l=-Li.dot($a),c=Li.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(th).addScaledVector($a,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,r){eh.subVectors(e,t),Ya.subVectors(n,t),nh.crossVectors(eh,Ya);let a=this.direction.dot(nh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,t);let l=o*this.direction.dot(Ya.crossVectors(Li,Ya));if(l<0)return null;let c=o*this.direction.dot(eh.cross(Li));if(c<0||l+c>a)return null;let u=-o*Li.dot(nh);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class s{constructor(t,e,n,i,r,a,o,l,c,u,h,d,f,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,h,d,f,m,v,g)}set(t,e,n,i,r,a,o,l,c,u,h,d,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),a=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*h,m=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,v=c*h;e[0]=d+v*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,v=c*h;e[0]=d-v*o,e[4]=-a*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,m=o*u,v=o*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*u,e[4]=v-d*h,e[8]=m*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-v*h}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=a*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dg,t,Ug)}lookAt(t,e,n){let i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Di.crossVectors(n,gn),Di.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Di.crossVectors(n,gn)),Di.normalize(),Za.crossVectors(gn,Di),i[0]=Di.x,i[4]=Za.x,i[8]=gn.x,i[1]=Di.y,i[5]=Za.y,i[9]=gn.y,i[2]=Di.z,i[6]=Za.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],x=n[7],_=n[11],A=n[15],T=i[0],C=i[4],I=i[8],b=i[12],S=i[1],P=i[5],B=i[9],U=i[13],F=i[2],G=i[6],H=i[10],j=i[14],W=i[3],ot=i[7],dt=i[11],et=i[15];return r[0]=a*T+o*S+l*F+c*W,r[4]=a*C+o*P+l*G+c*ot,r[8]=a*I+o*B+l*H+c*dt,r[12]=a*b+o*U+l*j+c*et,r[1]=u*T+h*S+d*F+f*W,r[5]=u*C+h*P+d*G+f*ot,r[9]=u*I+h*B+d*H+f*dt,r[13]=u*b+h*U+d*j+f*et,r[2]=m*T+v*S+g*F+p*W,r[6]=m*C+v*P+g*G+p*ot,r[10]=m*I+v*B+g*H+p*dt,r[14]=m*b+v*U+g*j+p*et,r[3]=y*T+x*S+_*F+A*W,r[7]=y*C+x*P+_*G+A*ot,r[11]=y*I+x*B+_*H+A*dt,r[15]=y*b+x*U+_*j+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+g*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=h*g*c-v*d*c+v*l*f-o*g*f-h*l*p+o*d*p,x=m*d*c-u*g*c-m*l*f+a*g*f+u*l*p-a*d*p,_=u*v*c-m*h*c+m*o*f-a*v*f-u*o*p+a*h*p,A=m*h*l-u*v*l-m*o*d+a*v*d+u*o*g-a*h*g,T=e*y+n*x+i*_+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=y*C,t[1]=(v*d*r-h*g*r-v*i*f+n*g*f+h*i*p-n*d*p)*C,t[2]=(o*g*r-v*l*r+v*i*c-n*g*c-o*i*p+n*l*p)*C,t[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*C,t[4]=x*C,t[5]=(u*g*r-m*d*r+m*i*f-e*g*f-u*i*p+e*d*p)*C,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*p-e*l*p)*C,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*f+e*l*f)*C,t[8]=_*C,t[9]=(m*h*r-u*v*r-m*n*f+e*v*f+u*n*p-e*h*p)*C,t[10]=(a*v*r-m*o*r+m*n*c-e*v*c-a*n*p+e*o*p)*C,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*f-e*o*f)*C,t[12]=A*C,t[13]=(u*v*i-m*h*i+m*n*d-e*v*d-u*n*g+e*h*g)*C,t[14]=(m*o*i-a*v*i-m*n*l+e*v*l+a*n*g-e*o*g)*C,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,v=a*u,g=a*h,p=o*h,y=l*c,x=l*u,_=l*h,A=n.x,T=n.y,C=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+_)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(g+y)*T,i[7]=0,i[8]=(m+x)*C,i[9]=(g-y)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=zs.set(i[0],i[1],i[2]).length(),a=zs.set(i[4],i[5],i[6]).length(),o=zs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Fn.copy(this);let c=1/r,u=1/a,h=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,e.setFromRotationMatrix(Fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=$n){let l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(o===$n)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===ra)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=$n){let l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-r),d=(e+t)*c,f=(n+i)*u,m,v;if(o===$n)m=(a+r)*h,v=-2*h;else if(o===ra)m=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zs=new w,Fn=new Wt,Dg=new w(0,0,0),Ug=new w(1,1,1),Di=new w,Za=new w,gn=new w,tf=new Wt,ef=new ge,De=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ef.setFromEuler(this),this.setFromQuaternion(ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};De.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ng=0,nf=new w,Vs=new ge,oi=new Wt,Ja=new w,Pr=new w,Fg=new w,Og=new ge,sf=new w(1,0,0),rf=new w(0,1,0),af=new w(0,0,1),of={type:"added"},Bg={type:"removed"},Gs={type:"childadded",child:null},ih={type:"childremoved",child:null},ee=class s extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new w,e=new De,n=new ge,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Zt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(sf,t)}rotateY(t){return this.rotateOnAxis(rf,t)}rotateZ(t){return this.rotateOnAxis(af,t)}translateOnAxis(t,e){return nf.copy(t).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sf,t)}translateY(t){return this.translateOnAxis(rf,t)}translateZ(t){return this.translateOnAxis(af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ja.copy(t):Ja.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Pr,Ja,this.up):oi.lookAt(Ja,Pr,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(oi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(of),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bg),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(of),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Fg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Og,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ee.DEFAULT_UP=new w(0,1,0);ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new w,li=new w,sh=new w,ci=new w,Ws=new w,qs=new w,lf=new w,rh=new w,ah=new w,oh=new w,lh=new ie,ch=new ie,hh=new ie,Xn=class s{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),On.subVectors(t,e),i.cross(On);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){On.subVectors(i,e),li.subVectors(n,e),sh.subVectors(t,e);let a=On.dot(On),o=On.dot(li),l=On.dot(sh),c=li.dot(li),u=li.dot(sh),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,n),hh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(lh,r.x),a.addScaledVector(ch,r.y),a.addScaledVector(hh,r.z),a}static isFrontFacing(t,e,n,i){return On.subVectors(n,e),li.subVectors(t,e),On.cross(li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ws.subVectors(i,n),qs.subVectors(r,n),rh.subVectors(t,n);let l=Ws.dot(rh),c=qs.dot(rh);if(l<=0&&c<=0)return e.copy(n);ah.subVectors(t,i);let u=Ws.dot(ah),h=qs.dot(ah);if(u>=0&&h<=u)return e.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ws,a);oh.subVectors(t,r);let f=Ws.dot(oh),m=qs.dot(oh);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(qs,o);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return lf.subVectors(r,i),o=(h-u)/(h-u+(f-m)),e.copy(i).addScaledVector(lf,o);let p=1/(g+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Ws,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function uh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=_d(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uh(a,r,t+1/3),this.g=uh(a,r,t),this.b=uh(a,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=xm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return te.fromWorkingColorSpace(Je.copy(this),t),Math.round(Se(Je.r*255,0,255))*65536+Math.round(Se(Je.g*255,0,255))*256+Math.round(Se(Je.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,i=Je.g,r=Je.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ie){te.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,i=Je.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Ka);let n=Jr(Ui.h,Ka.h,e),i=Jr(Ui.s,Ka.s,e),r=Jr(Ui.l,Ka.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new St;St.NAMES=xm;var kg=0,Be=class extends Rn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=xn(),this.name="",this.blending=us,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xe=class extends Be{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},di=Hg();function Hg(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function cn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Se(s,-65504,65504),di.floatView[0]=s;let t=di.uint32View[0],e=t>>23&511;return di.baseTable[e]+((t&8388607)>>di.shiftTable[e])}function Vr(s){let t=s>>10;return di.uint32View[0]=di.mantissaTable[di.offsetTable[t]+(s&1023)]+di.exponentTable[t],di.floatView[0]}var zg={toHalfFloat:cn,fromHalfFloat:Vr},Ce=new w,Qa=new st,Xt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sa,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sa&&(t.usage=this.usage),t}},Wh=class extends Xt{constructor(t,e,n){super(new Int8Array(t),e,n)}},qh=class extends Xt{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Xh=class extends Xt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},$h=class extends Xt{constructor(t,e,n){super(new Int16Array(t),e,n)}},la=class extends Xt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Yh=class extends Xt{constructor(t,e,n){super(new Int32Array(t),e,n)}},ca=class extends Xt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Zh=class extends Xt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Vr(this.array[t*this.itemSize]);return this.normalized&&(e=nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=cn(e),this}getY(t){let e=Vr(this.array[t*this.itemSize+1]);return this.normalized&&(e=nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=cn(e),this}getZ(t){let e=Vr(this.array[t*this.itemSize+2]);return this.normalized&&(e=nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=cn(e),this}getW(t){let e=Vr(this.array[t*this.itemSize+3]);return this.normalized&&(e=nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=cn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=cn(e),this.array[t+1]=cn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=cn(e),this.array[t+1]=cn(n),this.array[t+2]=cn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=cn(e),this.array[t+1]=cn(n),this.array[t+2]=cn(i),this.array[t+3]=cn(r),this}},Lt=class extends Xt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vg=0,Tn=new Wt,dh=new ee,Xs=new w,vn=new We,Lr=new We,Oe=new w,$t=class s extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?ca:la)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new we);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(vn.min,Lr.min),vn.expandByPoint(Oe),Oe.addVectors(vn.max,Lr.max),vn.expandByPoint(Oe)):(vn.expandByPoint(Lr.min),vn.expandByPoint(Lr.max))}vn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Oe.fromBufferAttribute(o,c),l&&(Xs.fromBufferAttribute(t,c),Oe.add(Xs)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new w,l[I]=new w;let c=new w,u=new w,h=new w,d=new st,f=new st,m=new st,v=new w,g=new w;function p(I,b,S){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),o[I].add(v),o[b].add(v),o[S].add(v),l[I].add(g),l[b].add(g),l[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,b=y.length;I<b;++I){let S=y[I],P=S.start,B=S.count;for(let U=P,F=P+B;U<F;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let x=new w,_=new w,A=new w,T=new w;function C(I){A.fromBufferAttribute(i,I),T.copy(A);let b=o[I];x.copy(b),x.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(T,b);let P=_.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,b=y.length;I<b;++I){let S=y[I],P=S.start,B=S.count;for(let U=P,F=P+B;U<F;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new w,r=new w,a=new w,o=new w,l=new w,c=new w,u=new w,h=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Xt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cf=new Wt,Yi=new ki,ja=new we,hf=new w,to=new w,eo=new w,no=new w,fh=new w,io=new w,uf=new w,so=new w,it=class extends ee{constructor(t=new $t,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(fh.fromBufferAttribute(h,t),a?io.addScaledVector(fh,u):io.addScaledVector(fh.sub(e),u))}e.add(io)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(ja.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ja,hf)===null||Yi.origin.distanceToSquared(hf)>(t.far-t.near)**2))&&(cf.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(cf),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){let T=o.getX(_),C=o.getX(_+1),I=o.getX(_+2);i=ro(this,p,t,n,c,u,h,T,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);i=ro(this,a,t,n,c,u,h,y,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){let T=_,C=_+1,I=_+2;i=ro(this,p,t,n,c,u,h,T,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let y=g,x=g+1,_=g+2;i=ro(this,a,t,n,c,u,h,y,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Gg(s,t,e,n,i,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===kn,o),l===null)return null;so.copy(o),so.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:s}}function ro(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,to),s.getVertexPosition(l,eo),s.getVertexPosition(c,no);let u=Gg(s,t,e,n,to,eo,no,uf);if(u){let h=new w;Xn.getBarycoord(uf,to,eo,no,h),i&&(u.uv=Xn.getInterpolatedAttribute(i,o,l,c,h,new st)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,o,l,c,h,new st)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,h,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new w,materialIndex:0};Xn.getNormal(to,eo,no,d.normal),u.face=d,u.barycoord=h}return u}var jt=class s extends $t{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function m(v,g,p,y,x,_,A,T,C,I,b){let S=_/C,P=A/I,B=_/2,U=A/2,F=T/2,G=C+1,H=I+1,j=0,W=0,ot=new w;for(let dt=0;dt<H;dt++){let et=dt*P-U;for(let ct=0;ct<G;ct++){let ht=ct*S-B;ot[v]=ht*y,ot[g]=et*x,ot[p]=F,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[g]=0,ot[p]=T>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(ct/C),h.push(1-dt/I),j+=1}}for(let dt=0;dt<I;dt++)for(let et=0;et<C;et++){let ct=d+et+G*dt,ht=d+et+G*(dt+1),V=d+(et+1)+G*(dt+1),J=d+(et+1)+G*dt;l.push(ct,ht,J),l.push(ht,V,J),W+=6}o.addGroup(f,W,b),f+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ur(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function en(s){let t={};for(let e=0;e<s.length;e++){let n=ur(s[e]);for(let i in n)t[i]=n[i]}return t}function Wg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _m(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var ym={clone:ur,merge:en},qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends Be{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Wg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},dr=class extends ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new w,df=new st,ff=new st,Ee=class extends dr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,df,ff),e.subVectors(ff,df)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$s=-90,Ys=1,Ml=class extends ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ee($s,Ys,t,e);i.layers=this.layers,this.add(i);let r=new Ee($s,Ys,t,e);r.layers=this.layers,this.add(r);let a=new Ee($s,Ys,t,e);a.layers=this.layers,this.add(a);let o=new Ee($s,Ys,t,e);o.layers=this.layers,this.add(o);let l=new Ee($s,Ys,t,e);l.layers=this.layers,this.add(l);let c=new Ee($s,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xs=class extends Pe{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Te}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jt(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:mi});r.uniforms.tEquirect.value=e;let a=new it(i,r),o=e.minFilter;return e.minFilter===wn&&(e.minFilter=Te),new Ml(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},ph=new w,$g=new w,Yg=new Zt,qn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ph.subVectors(n,e).cross($g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ph),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yg.getNormalMatrix(t),i=this.coplanarPoint(ph).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new we,ao=new w,_s=class{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,g-f,_-p).normalize(),n[1].setComponents(l+r,d+c,g+f,_+p).normalize(),n[2].setComponents(l+a,d+u,g+m,_+y).normalize(),n[3].setComponents(l-a,d-u,g-m,_-y).normalize(),n[4].setComponents(l-o,d-h,g-v,_-x).normalize(),e===$n)n[5].setComponents(l+o,d+h,g+v,_+x).normalize();else if(e===ra)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ao.x=i.normal.x>0?t.max.x:t.min.x,ao.y=i.normal.y>0?t.max.y:t.min.y,ao.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mm(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zg(s){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],v=h[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let v=h[f];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Jn=class s extends $t{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let y=p*d-a;for(let x=0;x<c;x++){let _=x*h-r;m.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,_=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;f.push(x,_,T),f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_v=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ex=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ux=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Jg,alphahash_pars_fragment:Kg,alphamap_fragment:Qg,alphamap_pars_fragment:jg,alphatest_fragment:tv,alphatest_pars_fragment:ev,aomap_fragment:nv,aomap_pars_fragment:iv,batching_pars_vertex:sv,batching_vertex:rv,begin_vertex:av,beginnormal_vertex:ov,bsdfs:lv,iridescence_fragment:cv,bumpmap_pars_fragment:hv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:pv,color_fragment:mv,color_pars_fragment:gv,color_pars_vertex:vv,color_vertex:xv,common:_v,cube_uv_reflection_fragment:yv,defaultnormal_vertex:Mv,displacementmap_pars_vertex:Sv,displacementmap_vertex:bv,emissivemap_fragment:Ev,emissivemap_pars_fragment:Tv,colorspace_fragment:wv,colorspace_pars_fragment:Av,envmap_fragment:Rv,envmap_common_pars_fragment:Cv,envmap_pars_fragment:Iv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Vv,envmap_vertex:Lv,fog_vertex:Dv,fog_pars_vertex:Uv,fog_fragment:Nv,fog_pars_fragment:Fv,gradientmap_pars_fragment:Ov,lightmap_pars_fragment:Bv,lights_lambert_fragment:kv,lights_lambert_pars_fragment:Hv,lights_pars_begin:zv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Wv,lights_phong_fragment:qv,lights_phong_pars_fragment:Xv,lights_physical_fragment:$v,lights_physical_pars_fragment:Yv,lights_fragment_begin:Zv,lights_fragment_maps:Jv,lights_fragment_end:Kv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:rx,metalnessmap_fragment:ax,metalnessmap_pars_fragment:ox,morphinstance_vertex:lx,morphcolor_vertex:cx,morphnormal_vertex:hx,morphtarget_pars_vertex:ux,morphtarget_vertex:dx,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:Mx,iridescence_pars_fragment:Sx,opaque_fragment:bx,packing:Ex,premultiplied_alpha_fragment:Tx,project_vertex:wx,dithering_fragment:Ax,dithering_pars_fragment:Rx,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Lx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Ux,skinbase_vertex:Nx,skinning_pars_vertex:Fx,skinning_vertex:Ox,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:Hx,tonemapping_fragment:zx,tonemapping_pars_fragment:Vx,transmission_fragment:Gx,transmission_pars_fragment:Wx,uv_pars_fragment:qx,uv_pars_vertex:Xx,uv_vertex:$x,worldpos_vertex:Yx,background_vert:Zx,background_frag:Jx,backgroundCube_vert:Kx,backgroundCube_frag:Qx,cube_vert:jx,cube_frag:t_,depth_vert:e_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:s_,equirect_vert:r_,equirect_frag:a_,linedashed_vert:o_,linedashed_frag:l_,meshbasic_vert:c_,meshbasic_frag:h_,meshlambert_vert:u_,meshlambert_frag:d_,meshmatcap_vert:f_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:v_,meshphong_frag:x_,meshphysical_vert:__,meshphysical_frag:y_,meshtoon_vert:M_,meshtoon_frag:S_,points_vert:b_,points_frag:E_,shadow_vert:T_,shadow_frag:w_,sprite_vert:A_,sprite_frag:R_},bt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Bn={basic:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new St(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:en([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:en([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new St(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:en([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:en([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:en([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:en([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:en([bt.common,bt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:en([bt.lights,bt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Bn.physical={uniforms:en([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var oo={r:0,b:0,g:0},Ji=new De,C_=new Wt;function I_(s,t,e,n,i,r,a){let o=new St(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1,_=m(y);_===null?p(o,l):_&&_.isColor&&(p(_,1),x=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,x){let _=m(x);_&&(_.isCubeTexture||_.mapping===Sr)?(u===void 0&&(u=new it(new jt(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:ur(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ji.copy(x.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(Ji)),u.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,(h!==_||d!==_.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new it(new Jn(2,2),new Re({name:"BackgroundMaterial",uniforms:ur(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(oo,_m(s)),n.buffers.color.setClear(oo.r,oo.g,oo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:g}}function P_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(S,P,B,U,F){let G=!1,H=h(U,B,P);r!==H&&(r=H,c(r.object)),G=f(S,U,B,F),G&&m(S,U,B,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(S,P,B,U),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,P,B){let U=B.wireframe===!0,F=n[S.id];F===void 0&&(F={},n[S.id]=F);let G=F[P.id];G===void 0&&(G={},F[P.id]=G);let H=G[U];return H===void 0&&(H=d(l()),G[U]=H),H}function d(S){let P=[],B=[],U=[];for(let F=0;F<e;F++)P[F]=0,B[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,P,B,U){let F=r.attributes,G=P.attributes,H=0,j=B.getAttributes();for(let W in j)if(j[W].location>=0){let dt=F[W],et=G[W];if(et===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),dt===void 0||dt.attribute!==et||et&&dt.data!==et.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function m(S,P,B,U){let F={},G=P.attributes,H=0,j=B.getAttributes();for(let W in j)if(j[W].location>=0){let dt=G[W];dt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor));let et={};et.attribute=dt,dt&&dt.data&&(et.data=dt.data),F[W]=et,H++}r.attributes=F,r.attributesNum=H,r.index=U}function v(){let S=r.newAttributes;for(let P=0,B=S.length;P<B;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){let B=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;B[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),F[S]!==P&&(s.vertexAttribDivisor(S,P),F[S]=P)}function y(){let S=r.newAttributes,P=r.enabledAttributes;for(let B=0,U=P.length;B<U;B++)P[B]!==S[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function x(S,P,B,U,F,G,H){H===!0?s.vertexAttribIPointer(S,P,B,F,G):s.vertexAttribPointer(S,P,B,U,F,G)}function _(S,P,B,U){v();let F=U.attributes,G=B.getAttributes(),H=P.defaultAttributeValues;for(let j in G){let W=G[j];if(W.location>=0){let ot=F[j];if(ot===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){let dt=ot.normalized,et=ot.itemSize,ct=t.get(ot);if(ct===void 0)continue;let ht=ct.buffer,V=ct.type,J=ct.bytesPerElement,_t=V===s.INT||V===s.UNSIGNED_INT||ot.gpuType===_c;if(ot.isInterleavedBufferAttribute){let rt=ot.data,Pt=rt.stride,Bt=ot.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<W.locationSize;Ut++)p(W.location+Ut,rt.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<W.locationSize;Ut++)g(W.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Ut=0;Ut<W.locationSize;Ut++)x(W.location+Ut,et/W.locationSize,V,dt,Pt*J,(Bt+et/W.locationSize*Ut)*J,_t)}else{if(ot.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let rt=0;rt<W.locationSize;rt++)g(W.location+rt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let rt=0;rt<W.locationSize;rt++)x(W.location+rt,et/W.locationSize,V,dt,et*J,et/W.locationSize*rt*J,_t)}}else if(H!==void 0){let dt=H[j];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(W.location,dt);break;case 3:s.vertexAttrib3fv(W.location,dt);break;case 4:s.vertexAttrib4fv(W.location,dt);break;default:s.vertexAttrib1fv(W.location,dt)}}}}y()}function A(){I();for(let S in n){let P=n[S];for(let B in P){let U=P[B];for(let F in U)u(U[F].object),delete U[F];delete P[B]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let B in P){let U=P[B];for(let F in U)u(U[F].object),delete U[F];delete P[B]}delete n[S.id]}function C(S){for(let P in n){let B=n[P];if(B[S.id]===void 0)continue;let U=B[S.id];for(let F in U)u(U[F].object),delete U[F];delete B[S.id]}}function I(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function L_(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*d[v];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==rn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let I=C===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Zn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hn&&!I)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function U_(s){let t=this,e=null,n=0,i=!1,r=!1,a=new qn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,x=y*4,_=p.clippingState||null;l.value=_,_=u(m,d,x,f);for(let A=0;A!==x;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let v=h!==null?h.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function N_(s){let t=new WeakMap;function e(a,o){return o===ms?a.mapping=_i:o===ta&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ms||o===ta)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Sl(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fr=class extends dr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ir=4,pf=[.125,.215,.35,.446,.526,.582],os=20,mh=new fr,mf=new St,gh=null,vh=0,xh=0,_h=!1,as=(1+Math.sqrt(5))/2,Zs=1/as,gf=[new w(-as,Zs,0),new w(as,Zs,0),new w(-Zs,0,as),new w(Zs,0,as),new w(0,as,-Zs),new w(0,as,Zs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){gh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gh,vh,xh),this._renderer.xr.enabled=_h,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:br,format:rn,colorSpace:Ds,depthBuffer:!1},i=vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(r)),this._blurMaterial=O_(r,t,e)}return i}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,mh)}_sceneToCubeUV(t,e,n,i){let o=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(mf),u.toneMapping=gi,u.autoClear=!1;let f=new xe({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new it(new jt,f),v=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(mf),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;lo(i,y*x,p>2?x:0,x,x),u.setRenderTarget(i),v&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===_i||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;lo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,mh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gf[(i-r-1)%gf.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new it(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):os;g>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);let p=[],y=0;for(let C=0;C<os;++C){let I=C/v,b=Math.exp(-I*I/2);p.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;let _=this._sizeLods[i],A=3*_*(i>x-ir?i-x+ir:0),T=4*(this._cubeSize-_);lo(e,A,T,3*_,2*_),l.setRenderTarget(e),l.render(h,mh)}};function F_(s){let t=[],e=[],n=[],i=s,r=s-ir+1+pf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ir?l=pf[a-s+ir-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),x=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,I=T>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(b,v*m*T),x.set(d,g*m*T);let S=[T,T,T,T,T,T];_.set(S,p*m*T)}let A=new $t;A.setAttribute("position",new Xt(y,v)),A.setAttribute("uv",new Xt(x,g)),A.setAttribute("faceIndex",new Xt(_,p)),t.push(A),i>ir&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vf(s,t,e){let n=new yn(s,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function O_(s,t,e){let n=new Float32Array(os),i=new w(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xf(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function _f(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ms||l===ta,u=l===_i||l===Bi;if(c||u){let h=t.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ha(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new ha(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function k_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function H_(s,t,e,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=h.morphAttributes;for(let m in f){let v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,m=h.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){let A=y[x+0],T=y[x+1],C=y[x+2];d.push(A,T,T,C,C,A)}}else if(m!==void 0){let y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let A=x+0,T=x+1,C=x+2;d.push(A,T,T,C,C,A)}}else return;let g=new(gm(d)?ca:la)(d,1);g.version=v;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function z_(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function h(d,f,m,v){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*v[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function V_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function G_(s,t,e){let n=new WeakMap,i=new ie;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;f===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*A*4*h),C=new cr(T,_,A,h);C.type=hn,C.needsUpdate=!0;let I=x*4;for(let S=0;S<h;S++){let P=g[S],B=p[S],U=y[S],F=_*A*4*S;for(let G=0;G<P.count;G++){let H=G*I;f===!0&&(i.fromBufferAttribute(P,G),T[F+H+0]=i.x,T[F+H+1]=i.y,T[F+H+2]=i.z,T[F+H+3]=0),m===!0&&(i.fromBufferAttribute(B,G),T[F+H+4]=i.x,T[F+H+5]=i.y,T[F+H+6]=i.z,T[F+H+7]=0),v===!0&&(i.fromBufferAttribute(U,G),T[F+H+8]=i.x,T[F+H+9]=i.y,T[F+H+10]=i.z,T[F+H+11]=U.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new st(_,A)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function W_(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ua=class extends Pe{constructor(t,e,n,i,r,a,o,l,c,u=ds){if(u!==ds&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ds&&(n=yi),n===void 0&&u===vs&&(n=gs),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Sm=new Pe,yf=new ua(1,1),bm=new cr,Em=new oa,Tm=new xs,Mf=[],Sf=[],bf=new Float32Array(16),Ef=new Float32Array(9),Tf=new Float32Array(4);function Er(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Mf[i];if(r===void 0&&(r=new Float32Array(i),Mf[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function wc(s,t){let e=Sf[t];e===void 0&&(e=new Int32Array(t),Sf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function q_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function X_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function $_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function Y_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function Z_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Tf.set(n),s.uniformMatrix2fv(this.addr,!1,Tf),Ne(e,n)}}function J_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ef.set(n),s.uniformMatrix3fv(this.addr,!1,Ef),Ne(e,n)}}function K_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;bf.set(n),s.uniformMatrix4fv(this.addr,!1,bf),Ne(e,n)}}function Q_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function j_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function ty(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function ey(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function ny(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function iy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function sy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function ay(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yf.compareFunction=xd,r=yf):r=Sm,e.setTexture2D(t||r,i)}function oy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Em,i)}function ly(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Tm,i)}function cy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bm,i)}function hy(s){switch(s){case 5126:return q_;case 35664:return X_;case 35665:return $_;case 35666:return Y_;case 35674:return Z_;case 35675:return J_;case 35676:return K_;case 5124:case 35670:return Q_;case 35667:case 35671:return j_;case 35668:case 35672:return ty;case 35669:case 35673:return ey;case 5125:return ny;case 36294:return iy;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}function uy(s,t){s.uniform1fv(this.addr,t)}function dy(s,t){let e=Er(t,this.size,2);s.uniform2fv(this.addr,e)}function fy(s,t){let e=Er(t,this.size,3);s.uniform3fv(this.addr,e)}function py(s,t){let e=Er(t,this.size,4);s.uniform4fv(this.addr,e)}function my(s,t){let e=Er(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function gy(s,t){let e=Er(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vy(s,t){let e=Er(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function xy(s,t){s.uniform1iv(this.addr,t)}function _y(s,t){s.uniform2iv(this.addr,t)}function yy(s,t){s.uniform3iv(this.addr,t)}function My(s,t){s.uniform4iv(this.addr,t)}function Sy(s,t){s.uniform1uiv(this.addr,t)}function by(s,t){s.uniform2uiv(this.addr,t)}function Ey(s,t){s.uniform3uiv(this.addr,t)}function Ty(s,t){s.uniform4uiv(this.addr,t)}function wy(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Sm,r[a])}function Ay(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Em,r[a])}function Ry(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Tm,r[a])}function Cy(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||bm,r[a])}function Iy(s){switch(s){case 5126:return uy;case 35664:return dy;case 35665:return fy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return vy;case 5124:case 35670:return xy;case 35667:case 35671:return _y;case 35668:case 35672:return yy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return by;case 36295:return Ey;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}var Jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hy(e.type)}},Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iy(e.type)}},Qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function wf(s,t){s.seq.push(t),s.map[t.id]=t}function Py(s,t,e){let n=s.name,i=n.length;for(yh.lastIndex=0;;){let r=yh.exec(n),a=yh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){wf(e,c===void 0?new Jh(o,s,t):new Kh(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new Qh(o),wf(e,h)),e=h}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Py(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Af(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Ly=37297,Dy=0;function Uy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Rf=new Zt;function Ny(s){te._getMatrix(Rf,te.workingColorSpace,s);let t=`mat3( ${Rf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Na:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Cf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Uy(s.getShaderSource(t),a)}else return i}function Fy(s,t){let e=Ny(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Oy(s,t){let e;switch(t){case Jp:e="Linear";break;case Kp:e="Reinhard";break;case Qp:e="Cineon";break;case vc:e="ACESFilmic";break;case tm:e="AgX";break;case em:e="Neutral";break;case jp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var co=new w;function By(){te.getLuminanceCoefficients(co);let s=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ky(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Hy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Gr(s){return s!==""}function If(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(s){return s.replace(Vy,Wy)}var Gy=new Map;function Wy(s,t){let e=Qt[t];if(e===void 0){let n=Gy.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jh(e)}var qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(s){return s.replace(qy,Xy)}function Xy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Df(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $y(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ad?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case Bi:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case Yp:t="ENVMAP_BLENDING_MIX";break;case Zp:t="ENVMAP_BLENDING_ADD";break}return t}function Ky(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qy(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$y(e),c=Yy(e),u=Zy(e),h=Jy(e),d=Ky(e),f=ky(e),m=Hy(r),v=i.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(g=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==gi?Oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Fy("linearToOutputTexel",e.outputColorSpace),By(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=jh(a),a=If(a,e),a=Pf(a,e),o=jh(o),o=If(o,e),o=Pf(o,e),a=Lf(a),o=Lf(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+g+a,_=y+p+o,A=Af(i,i.VERTEX_SHADER,x),T=Af(i,i.FRAGMENT_SHADER,_);i.attachShader(v,A),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(P){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(T).trim(),G=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,A,T);else{let j=Cf(i,A,"vertex"),W=Cf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+j+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||F==="")&&(H=!1);H&&(P.diagnostics={runnable:G,programLog:B,vertexShader:{log:U,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(A),i.deleteShader(T),I=new ar(i,v),b=zy(i,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Ly)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}var jy=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new eu(t),e.set(t,n)),n}},eu=class{constructor(t){this.id=jy++,this.code=t,this.usedTimes=0}};function tM(s,t,e,n,i,r,a){let o=new hr,l=new tu,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,P,B,U){let F=B.fog,G=U.geometry,H=b.isMeshStandardMaterial?B.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),W=j&&j.mapping===Sr?j.image.height:null,ot=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=dt!==void 0?dt.length:0,ct=0;G.morphAttributes.position!==void 0&&(ct=1),G.morphAttributes.normal!==void 0&&(ct=2),G.morphAttributes.color!==void 0&&(ct=3);let ht,V,J,_t;if(ot){let le=Bn[ot];ht=le.vertexShader,V=le.fragmentShader}else ht=b.vertexShader,V=b.fragmentShader,l.update(b),J=l.getVertexShaderID(b),_t=l.getFragmentShaderID(b);let rt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,Ut=U.isBatchedMesh===!0,Dt=!!b.map,Q=!!b.matcap,at=!!j,L=!!b.aoMap,Ct=!!b.lightMap,lt=!!b.bumpMap,At=!!b.normalMap,mt=!!b.displacementMap,zt=!!b.emissiveMap,z=!!b.metalnessMap,E=!!b.roughnessMap,M=b.anisotropy>0,D=b.clearcoat>0,q=b.dispersion>0,K=b.iridescence>0,Y=b.sheen>0,Tt=b.transmission>0,ft=M&&!!b.anisotropyMap,gt=D&&!!b.clearcoatMap,Vt=D&&!!b.clearcoatNormalMap,nt=D&&!!b.clearcoatRoughnessMap,ut=K&&!!b.iridescenceMap,Rt=K&&!!b.iridescenceThicknessMap,It=Y&&!!b.sheenColorMap,vt=Y&&!!b.sheenRoughnessMap,kt=!!b.specularMap,qt=!!b.specularColorMap,re=!!b.specularIntensityMap,N=Tt&&!!b.transmissionMap,yt=Tt&&!!b.thicknessMap,Z=!!b.gradientMap,tt=!!b.alphaMap,Mt=b.alphaTest>0,xt=!!b.alphaHash,Gt=!!b.extensions,ye=gi;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ye=s.toneMapping);let Ye={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:V,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:_t,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ds,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:Q,envMap:at,envMapMode:at&&j.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Ct,bumpMap:lt,normalMap:At,displacementMap:d&&mt,emissiveMap:zt,normalMapObjectSpace:At&&b.normalMapType===lm,normalMapTangentSpace:At&&b.normalMapType===Vi,metalnessMap:z,roughnessMap:E,anisotropy:M,anisotropyMap:ft,clearcoat:D,clearcoatMap:gt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:nt,dispersion:q,iridescence:K,iridescenceMap:ut,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:It,sheenRoughnessMap:vt,specularMap:kt,specularColorMap:qt,specularIntensityMap:re,transmission:Tt,transmissionMap:N,thicknessMap:yt,gradientMap:Z,opaque:b.transparent===!1&&b.blending===us&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:Mt,alphaHash:xt,combine:b.combine,mapUv:Dt&&v(b.map.channel),aoMapUv:L&&v(b.aoMap.channel),lightMapUv:Ct&&v(b.lightMap.channel),bumpMapUv:lt&&v(b.bumpMap.channel),normalMapUv:At&&v(b.normalMap.channel),displacementMapUv:mt&&v(b.displacementMap.channel),emissiveMapUv:zt&&v(b.emissiveMap.channel),metalnessMapUv:z&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:ft&&v(b.anisotropyMap.channel),clearcoatMapUv:gt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(b.sheenRoughnessMap.channel),specularMapUv:kt&&v(b.specularMap.channel),specularColorMapUv:qt&&v(b.specularColorMap.channel),specularIntensityMapUv:re&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:yt&&v(b.thicknessMap.channel),alphaMapUv:tt&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(At||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Dt||tt),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pt,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:zt&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ze,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){let S=m[b.type],P;if(S){let B=Bn[S];P=ym.clone(B.uniforms)}else P=b.uniforms;return P}function A(b,S){let P;for(let B=0,U=u.length;B<U;B++){let F=u[B];if(F.cacheKey===S){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Qy(s,S,b,r),u.push(P)),P}function T(b){if(--b.usedTimes===0){let S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:I}}function eM(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function nM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Uf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,m,v,g){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),t++,p}function o(h,d,f,m,v,g){let p=a(h,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,m,v,g){let p=a(h,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||nM),n.length>1&&n.sort(d||Uf),i.length>1&&i.sort(d||Uf)}function u(){for(let h=t,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function iM(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Nf,s.set(n,[a])):i>=r.length?(a=new Nf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function sM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new St};break;case"SpotLight":e={position:new w,direction:new w,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function rM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var aM=0;function oM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lM(s){let t=new sM,e=rM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let i=new w,r=new Wt,a=new Wt;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,x=0,_=0,A=0,T=0,C=0;c.sort(oM);for(let b=0,S=c.length;b<S;b++){let P=c[b],B=P.color,U=P.intensity,F=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*U,h+=B.g*U,d+=B.b*U;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],U);C++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=H,f++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(B).multiplyScalar(U),H.distance=F,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;let j=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,P.castShadow){let W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=G,_++}v++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(B).multiplyScalar(U),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=H,g++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let j=P.shadow,W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,x++}n.point[m]=H,m++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(U),H.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==x||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=x,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=C,n.version=aM++)}function l(c,u){let h=0,d=0,f=0,m=0,v=0,g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let x=c[p];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),h++}else if(x.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Ff(s){let t=new lM(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cM(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Ff(s),t.set(i,[o])):r>=a.length?(o=new Ff(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var da=class extends Be{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends Be{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dM(s,t,e){let n=new _s,i=new st,r=new st,a=new ie,o=new da({depthPacking:om}),l=new fa,c={},u=e.maxTextureSize,h={[kn]:Ve,[Ve]:kn,[ze]:ze},d=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:hM,fragmentShader:uM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new $t;m.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new it(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad;let p=this.type;this.render=function(T,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let b=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(mi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let U=p!==Wn&&this.type===Wn,F=p===Wn&&this.type!==Wn;for(let G=0,H=T.length;G<H;G++){let j=T[G],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let ot=W.getFrameExtents();if(i.multiply(ot),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ot.x),i.x=r.x*ot.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ot.y),i.y=r.y*ot.y,W.mapSize.y=r.y)),W.map===null||U===!0||F===!0){let et=this.type!==Wn?{minFilter:Ge,magFilter:Ge}:{};W.map!==null&&W.map.dispose(),W.map=new yn(i.x,i.y,et),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let dt=W.getViewportCount();for(let et=0;et<dt;et++){let ct=W.getViewport(et);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),B.viewport(a),W.updateMatrices(j,et),n=W.getFrustum(),_(C,I,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Wn&&y(W,I),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,S,P)};function y(T,C){let I=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,I,f,v,null)}function x(T,C,I,b){let S=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let B=S.uuid,U=C.uuid,F=c[B];F===void 0&&(F={},c[B]=F);let G=F[U];G===void 0&&(G=S.clone(),F[U]=G,C.addEventListener("dispose",A)),S=G}if(S.visible=C.visible,S.wireframe=C.wireframe,b===Wn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=s.properties.get(S);B.light=I}return S}function _(T,C,I,b,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let U=t.update(T),F=T.material;if(Array.isArray(F)){let G=U.groups;for(let H=0,j=G.length;H<j;H++){let W=G[H],ot=F[W.materialIndex];if(ot&&ot.visible){let dt=x(T,ot,b,S);T.onBeforeShadow(s,T,C,I,U,dt,W),s.renderBufferDirect(I,null,U,dt,T,W),T.onAfterShadow(s,T,C,I,U,dt,W)}}}else if(F.visible){let G=x(T,F,b,S);T.onBeforeShadow(s,T,C,I,U,G,null),s.renderBufferDirect(I,null,U,G,T,null),T.onAfterShadow(s,T,C,I,U,G,null)}}let B=T.children;for(let U=0,F=B.length;U<F;U++)_(B[U],C,I,b,S)}function A(T){T.target.removeEventListener("dispose",A);for(let I in c){let b=c[I],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var fM={[ko]:Ho,[zo]:Wo,[Vo]:qo,[ps]:Go,[Ho]:ko,[Wo]:zo,[qo]:Vo,[Go]:ps};function pM(s,t){function e(){let N=!1,yt=new ie,Z=null,tt=new ie(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!N&&(s.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,xt,Gt,ye,Ye){Ye===!0&&(Mt*=ye,xt*=ye,Gt*=ye),yt.set(Mt,xt,Gt,ye),tt.equals(yt)===!1&&(s.clearColor(Mt,xt,Gt,ye),tt.copy(yt))},reset:function(){N=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let N=!1,yt=!1,Z=null,tt=null,Mt=null;return{setReversed:function(xt){if(yt!==xt){let Gt=t.get("EXT_clip_control");yt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let ye=Mt;Mt=null,this.setClear(ye)}yt=xt},getReversed:function(){return yt},setTest:function(xt){xt?rt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(xt){Z!==xt&&!N&&(s.depthMask(xt),Z=xt)},setFunc:function(xt){if(yt&&(xt=fM[xt]),tt!==xt){switch(xt){case ko:s.depthFunc(s.NEVER);break;case Ho:s.depthFunc(s.ALWAYS);break;case zo:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case Vo:s.depthFunc(s.EQUAL);break;case Go:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case qo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=xt}},setLocked:function(xt){N=xt},setClear:function(xt){Mt!==xt&&(yt&&(xt=1-xt),s.clearDepth(xt),Mt=xt)},reset:function(){N=!1,Z=null,tt=null,Mt=null,yt=!1}}}function i(){let N=!1,yt=null,Z=null,tt=null,Mt=null,xt=null,Gt=null,ye=null,Ye=null;return{setTest:function(le){N||(le?rt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(le){yt!==le&&!N&&(s.stencilMask(le),yt=le)},setFunc:function(le,Dn,ii){(Z!==le||tt!==Dn||Mt!==ii)&&(s.stencilFunc(le,Dn,ii),Z=le,tt=Dn,Mt=ii)},setOp:function(le,Dn,ii){(xt!==le||Gt!==Dn||ye!==ii)&&(s.stencilOp(le,Dn,ii),xt=le,Gt=Dn,ye=ii)},setLocked:function(le){N=le},setClear:function(le){Ye!==le&&(s.clearStencil(le),Ye=le)},reset:function(){N=!1,yt=null,Z=null,tt=null,Mt=null,xt=null,Gt=null,ye=null,Ye=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,A=null,T=null,C=new St(0,0,0),I=0,b=!1,S=null,P=null,B=null,U=null,F=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=j>=2);let ot=null,dt={},et=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),ht=new ie().fromArray(et),V=new ie().fromArray(ct);function J(N,yt,Z,tt){let Mt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(N,xt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Z;Gt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(yt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(yt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return xt}let _t={};_t[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(ps),lt(!1),At(Fh),rt(s.CULL_FACE),L(mi);function rt(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function Pt(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function Bt(N,yt){return h[N]!==yt?(s.bindFramebuffer(N,yt),h[N]=yt,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=yt),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=yt),!0):!1}function Ut(N,yt){let Z=f,tt=!1;if(N){Z=d.get(yt),Z===void 0&&(Z=[],d.set(yt,Z));let Mt=N.textures;if(Z.length!==Mt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Gt=Mt.length;xt<Gt;xt++)Z[xt]=s.COLOR_ATTACHMENT0+xt;Z.length=Mt.length,tt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Z)}function Dt(N){return m!==N?(s.useProgram(N),m=N,!0):!1}let Q={[Oi]:s.FUNC_ADD,[Pp]:s.FUNC_SUBTRACT,[Lp]:s.FUNC_REVERSE_SUBTRACT};Q[Dp]=s.MIN,Q[Up]=s.MAX;let at={[Np]:s.ZERO,[Fp]:s.ONE,[Op]:s.SRC_COLOR,[Oo]:s.SRC_ALPHA,[Gp]:s.SRC_ALPHA_SATURATE,[zp]:s.DST_COLOR,[kp]:s.DST_ALPHA,[Bp]:s.ONE_MINUS_SRC_COLOR,[Bo]:s.ONE_MINUS_SRC_ALPHA,[Vp]:s.ONE_MINUS_DST_COLOR,[Hp]:s.ONE_MINUS_DST_ALPHA,[Wp]:s.CONSTANT_COLOR,[qp]:s.ONE_MINUS_CONSTANT_COLOR,[Xp]:s.CONSTANT_ALPHA,[$p]:s.ONE_MINUS_CONSTANT_ALPHA};function L(N,yt,Z,tt,Mt,xt,Gt,ye,Ye,le){if(N===mi){v===!0&&(Pt(s.BLEND),v=!1);return}if(v===!1&&(rt(s.BLEND),v=!0),N!==Ip){if(N!==g||le!==b){if((p!==Oi||_!==Oi)&&(s.blendEquation(s.FUNC_ADD),p=Oi,_=Oi),le)switch(N){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ae:s.blendFunc(s.ONE,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ae:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,x=null,A=null,T=null,C.set(0,0,0),I=0,g=N,b=le}return}Mt=Mt||yt,xt=xt||Z,Gt=Gt||tt,(yt!==p||Mt!==_)&&(s.blendEquationSeparate(Q[yt],Q[Mt]),p=yt,_=Mt),(Z!==y||tt!==x||xt!==A||Gt!==T)&&(s.blendFuncSeparate(at[Z],at[tt],at[xt],at[Gt]),y=Z,x=tt,A=xt,T=Gt),(ye.equals(C)===!1||Ye!==I)&&(s.blendColor(ye.r,ye.g,ye.b,Ye),C.copy(ye),I=Ye),g=N,b=!1}function Ct(N,yt){N.side===ze?Pt(s.CULL_FACE):rt(s.CULL_FACE);let Z=N.side===Ve;yt&&(Z=!Z),lt(Z),N.blending===us&&N.transparent===!1?L(mi):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let tt=N.stencilWrite;o.setTest(tt),tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){S!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),S=N)}function At(N){N!==Ap?(rt(s.CULL_FACE),N!==P&&(N===Fh?s.cullFace(s.BACK):N===Rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),P=N}function mt(N){N!==B&&(H&&s.lineWidth(N),B=N)}function zt(N,yt,Z){N?(rt(s.POLYGON_OFFSET_FILL),(U!==yt||F!==Z)&&(s.polygonOffset(yt,Z),U=yt,F=Z)):Pt(s.POLYGON_OFFSET_FILL)}function z(N){N?rt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function E(N){N===void 0&&(N=s.TEXTURE0+G-1),ot!==N&&(s.activeTexture(N),ot=N)}function M(N,yt,Z){Z===void 0&&(ot===null?Z=s.TEXTURE0+G-1:Z=ot);let tt=dt[Z];tt===void 0&&(tt={type:void 0,texture:void 0},dt[Z]=tt),(tt.type!==N||tt.texture!==yt)&&(ot!==Z&&(s.activeTexture(Z),ot=Z),s.bindTexture(N,yt||_t[N]),tt.type=N,tt.texture=yt)}function D(){let N=dt[ot];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(N){ht.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ht.copy(N))}function vt(N){V.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),V.copy(N))}function kt(N,yt){let Z=c.get(yt);Z===void 0&&(Z=new WeakMap,c.set(yt,Z));let tt=Z.get(N);tt===void 0&&(tt=s.getUniformBlockIndex(yt,N.name),Z.set(N,tt))}function qt(N,yt){let tt=c.get(yt).get(N);l.get(yt)!==tt&&(s.uniformBlockBinding(yt,tt,N.__bindingPointIndex),l.set(yt,tt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ot=null,dt={},h={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,A=null,T=null,C=new St(0,0,0),I=0,b=!1,S=null,P=null,B=null,U=null,F=null,ht.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Pt,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:Dt,setBlending:L,setMaterial:Ct,setFlipSided:lt,setCullFace:At,setLineWidth:mt,setPolygonOffset:zt,setScissorTest:z,activeTexture:E,bindTexture:M,unbindTexture:D,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:ut,texImage3D:Rt,updateUBOMapping:kt,uniformBlockBinding:qt,texStorage2D:Vt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:gt,scissor:It,viewport:vt,reset:re}}function mM(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function gM(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function vM(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function nu(s,t,e,n){let i=xM(n);switch(e){case ud:return s*t;case fd:return s*t;case pd:return s*t*2;case Sc:return s*t/i.components*i.byteLength;case Ua:return s*t/i.components*i.byteLength;case md:return s*t*2/i.components*i.byteLength;case bc:return s*t*2/i.components*i.byteLength;case dd:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case Ec:return s*t*4/i.components*i.byteLength;case qr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $r:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $o:case Zo:return Math.max(s,16)*Math.max(t,8)/4;case Xo:case Yo:return Math.max(s,8)*Math.max(t,8)/2;case Jo:case Ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zr:case fl:case pl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gd:case ml:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gl:case vl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xM(s){switch(s){case Zn:case ld:return{byteLength:1,components:1};case or:case cd:case br:return{byteLength:2,components:1};case yc:case Mc:return{byteLength:2,components:4};case yi:case _c:case hn:return{byteLength:4,components:1};case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}var _M={contain:mM,cover:gM,fill:vM,getByteLength:nu};function yM(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,M){return f?new OffscreenCanvas(E,M):aa("canvas")}function v(E,M,D){let q=1,K=z(E);if((K.width>D||K.height>D)&&(q=D/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(q*K.width),Tt=Math.floor(q*K.height);h===void 0&&(h=m(Y,Tt));let ft=M?m(Y,Tt):h;return ft.width=Y,ft.height=Tt,ft.getContext("2d").drawImage(E,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Tt+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(E,M,D,q,K=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=M;if(M===s.RED&&(D===s.FLOAT&&(Y=s.R32F),D===s.HALF_FLOAT&&(Y=s.R16F),D===s.UNSIGNED_BYTE&&(Y=s.R8)),M===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.R8UI),D===s.UNSIGNED_SHORT&&(Y=s.R16UI),D===s.UNSIGNED_INT&&(Y=s.R32UI),D===s.BYTE&&(Y=s.R8I),D===s.SHORT&&(Y=s.R16I),D===s.INT&&(Y=s.R32I)),M===s.RG&&(D===s.FLOAT&&(Y=s.RG32F),D===s.HALF_FLOAT&&(Y=s.RG16F),D===s.UNSIGNED_BYTE&&(Y=s.RG8)),M===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RG8UI),D===s.UNSIGNED_SHORT&&(Y=s.RG16UI),D===s.UNSIGNED_INT&&(Y=s.RG32UI),D===s.BYTE&&(Y=s.RG8I),D===s.SHORT&&(Y=s.RG16I),D===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),D===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),D===s.UNSIGNED_INT&&(Y=s.RGB32UI),D===s.BYTE&&(Y=s.RGB8I),D===s.SHORT&&(Y=s.RGB16I),D===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),D===s.UNSIGNED_INT&&(Y=s.RGBA32UI),D===s.BYTE&&(Y=s.RGBA8I),D===s.SHORT&&(Y=s.RGBA16I),D===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&D===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),M===s.RGBA){let Tt=K?Na:te.getTransfer(q);D===s.FLOAT&&(Y=s.RGBA32F),D===s.HALF_FLOAT&&(Y=s.RGBA16F),D===s.UNSIGNED_BYTE&&(Y=Tt===ce?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(E,M){let D;return E?M===null||M===yi||M===gs?D=s.DEPTH24_STENCIL8:M===hn?D=s.DEPTH32F_STENCIL8:M===or&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===gs?D=s.DEPTH_COMPONENT24:M===hn?D=s.DEPTH_COMPONENT32F:M===or&&(D=s.DEPTH_COMPONENT16),D}function A(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ge&&E.minFilter!==Te?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){let M=E.target;M.removeEventListener("dispose",T),I(M),M.isVideoTexture&&u.delete(M)}function C(E){let M=E.target;M.removeEventListener("dispose",C),S(M)}function I(E){let M=n.get(E);if(M.__webglInit===void 0)return;let D=E.source,q=d.get(D);if(q){let K=q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(E),Object.keys(q).length===0&&d.delete(D)}n.remove(E)}function b(E){let M=n.get(E);s.deleteTexture(M.__webglTexture);let D=E.source,q=d.get(D);delete q[M.__cacheKey],a.memory.textures--}function S(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let K=0;K<M.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(M.__webglFramebuffer[q][K]);else s.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)s.deleteFramebuffer(M.__webglFramebuffer[q]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let D=E.textures;for(let q=0,K=D.length;q<K;q++){let Y=n.get(D[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(D[q])}n.remove(E)}let P=0;function B(){P=0}function U(){let E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function F(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function G(E,M){let D=n.get(E);if(E.isVideoTexture&&mt(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){let q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(D,E,M);return}}e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+M)}function H(E,M){let D=n.get(E);if(E.version>0&&D.__version!==E.version){V(D,E,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+M)}function j(E,M){let D=n.get(E);if(E.version>0&&D.__version!==E.version){V(D,E,M);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+M)}function W(E,M){let D=n.get(E);if(E.version>0&&D.__version!==E.version){J(D,E,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+M)}let ot={[_n]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[ea]:s.MIRRORED_REPEAT},dt={[Ge]:s.NEAREST,[od]:s.NEAREST_MIPMAP_NEAREST,[er]:s.NEAREST_MIPMAP_LINEAR,[Te]:s.LINEAR,[Wr]:s.LINEAR_MIPMAP_NEAREST,[wn]:s.LINEAR_MIPMAP_LINEAR},et={[cm]:s.NEVER,[mm]:s.ALWAYS,[hm]:s.LESS,[xd]:s.LEQUAL,[um]:s.EQUAL,[pm]:s.GEQUAL,[dm]:s.GREATER,[fm]:s.NOTEQUAL};function ct(E,M){if(M.type===hn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Te||M.magFilter===Wr||M.magFilter===er||M.magFilter===wn||M.minFilter===Te||M.minFilter===Wr||M.minFilter===er||M.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ot[M.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ot[M.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ot[M.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,dt[M.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,dt[M.minFilter]),M.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,et[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ge||M.minFilter!==er&&M.minFilter!==wn||M.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ht(E,M){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",T));let q=M.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let Y=F(M);if(Y!==E.__cacheKey){K[Y]===void 0&&(K[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[Y].usedTimes++;let Tt=K[E.__cacheKey];Tt!==void 0&&(K[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(M)),E.__cacheKey=Y,E.__webglTexture=K[Y].texture}return D}function V(E,M,D){let q=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=s.TEXTURE_3D);let K=ht(E,M),Y=M.source;e.bindTexture(q,E.__webglTexture,s.TEXTURE0+D);let Tt=n.get(Y);if(Y.version!==Tt.__version||K===!0){e.activeTexture(s.TEXTURE0+D);let ft=te.getPrimaries(te.workingColorSpace),gt=M.colorSpace===ui?null:te.getPrimaries(M.colorSpace),Vt=M.colorSpace===ui||ft===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let nt=v(M.image,!1,i.maxTextureSize);nt=zt(M,nt);let ut=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),It=x(M.internalFormat,ut,Rt,M.colorSpace,M.isVideoTexture);ct(q,M);let vt,kt=M.mipmaps,qt=M.isVideoTexture!==!0,re=Tt.__version===void 0||K===!0,N=Y.dataReady,yt=A(M,nt);if(M.isDepthTexture)It=_(M.format===vs,M.type),re&&(qt?e.texStorage2D(s.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,It,nt.width,nt.height,0,ut,Rt,null));else if(M.isDataTexture)if(kt.length>0){qt&&re&&e.texStorage2D(s.TEXTURE_2D,yt,It,kt[0].width,kt[0].height);for(let Z=0,tt=kt.length;Z<tt;Z++)vt=kt[Z],qt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,vt.width,vt.height,ut,Rt,vt.data):e.texImage2D(s.TEXTURE_2D,Z,It,vt.width,vt.height,0,ut,Rt,vt.data);M.generateMipmaps=!1}else qt?(re&&e.texStorage2D(s.TEXTURE_2D,yt,It,nt.width,nt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,ut,Rt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,It,nt.width,nt.height,0,ut,Rt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,It,kt[0].width,kt[0].height,nt.depth);for(let Z=0,tt=kt.length;Z<tt;Z++)if(vt=kt[Z],M.format!==rn)if(ut!==null)if(qt){if(N)if(M.layerUpdates.size>0){let Mt=nu(vt.width,vt.height,M.format,M.type);for(let xt of M.layerUpdates){let Gt=vt.data.subarray(xt*Mt/vt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,xt,vt.width,vt.height,1,ut,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,vt.width,vt.height,nt.depth,ut,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,It,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,vt.width,vt.height,nt.depth,ut,Rt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,It,vt.width,vt.height,nt.depth,0,ut,Rt,vt.data)}else{qt&&re&&e.texStorage2D(s.TEXTURE_2D,yt,It,kt[0].width,kt[0].height);for(let Z=0,tt=kt.length;Z<tt;Z++)vt=kt[Z],M.format!==rn?ut!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,vt.width,vt.height,ut,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,It,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,vt.width,vt.height,ut,Rt,vt.data):e.texImage2D(s.TEXTURE_2D,Z,It,vt.width,vt.height,0,ut,Rt,vt.data)}else if(M.isDataArrayTexture)if(qt){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,It,nt.width,nt.height,nt.depth),N)if(M.layerUpdates.size>0){let Z=nu(nt.width,nt.height,M.format,M.type);for(let tt of M.layerUpdates){let Mt=nt.data.subarray(tt*Z/nt.data.BYTES_PER_ELEMENT,(tt+1)*Z/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,nt.width,nt.height,1,ut,Rt,Mt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Rt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,ut,Rt,nt.data);else if(M.isData3DTexture)qt?(re&&e.texStorage3D(s.TEXTURE_3D,yt,It,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Rt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,ut,Rt,nt.data);else if(M.isFramebufferTexture){if(re)if(qt)e.texStorage2D(s.TEXTURE_2D,yt,It,nt.width,nt.height);else{let Z=nt.width,tt=nt.height;for(let Mt=0;Mt<yt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,It,Z,tt,0,ut,Rt,null),Z>>=1,tt>>=1}}else if(kt.length>0){if(qt&&re){let Z=z(kt[0]);e.texStorage2D(s.TEXTURE_2D,yt,It,Z.width,Z.height)}for(let Z=0,tt=kt.length;Z<tt;Z++)vt=kt[Z],qt?N&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ut,Rt,vt):e.texImage2D(s.TEXTURE_2D,Z,It,ut,Rt,vt);M.generateMipmaps=!1}else if(qt){if(re){let Z=z(nt);e.texStorage2D(s.TEXTURE_2D,yt,It,Z.width,Z.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Rt,nt)}else e.texImage2D(s.TEXTURE_2D,0,It,ut,Rt,nt);g(M)&&p(q),Tt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function J(E,M,D){if(M.image.length!==6)return;let q=ht(E,M),K=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+D);let Y=n.get(K);if(K.version!==Y.__version||q===!0){e.activeTexture(s.TEXTURE0+D);let Tt=te.getPrimaries(te.workingColorSpace),ft=M.colorSpace===ui?null:te.getPrimaries(M.colorSpace),gt=M.colorSpace===ui||Tt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,ut=[];for(let tt=0;tt<6;tt++)!Vt&&!nt?ut[tt]=v(M.image[tt],!0,i.maxCubemapSize):ut[tt]=nt?M.image[tt].image:M.image[tt],ut[tt]=zt(M,ut[tt]);let Rt=ut[0],It=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),kt=x(M.internalFormat,It,vt,M.colorSpace),qt=M.isVideoTexture!==!0,re=Y.__version===void 0||q===!0,N=K.dataReady,yt=A(M,Rt);ct(s.TEXTURE_CUBE_MAP,M);let Z;if(Vt){qt&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,kt,Rt.width,Rt.height);for(let tt=0;tt<6;tt++){Z=ut[tt].mipmaps;for(let Mt=0;Mt<Z.length;Mt++){let xt=Z[Mt];M.format!==rn?It!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,xt.width,xt.height,It,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,kt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,xt.width,xt.height,It,vt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,kt,xt.width,xt.height,0,It,vt,xt.data)}}}else{if(Z=M.mipmaps,qt&&re){Z.length>0&&yt++;let tt=z(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(nt){qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut[tt].width,ut[tt].height,It,vt,ut[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,ut[tt].width,ut[tt].height,0,It,vt,ut[tt].data);for(let Mt=0;Mt<Z.length;Mt++){let Gt=Z[Mt].image[tt].image;qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,Gt.width,Gt.height,It,vt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,kt,Gt.width,Gt.height,0,It,vt,Gt.data)}}else{qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,vt,ut[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,kt,It,vt,ut[tt]);for(let Mt=0;Mt<Z.length;Mt++){let xt=Z[Mt];qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,It,vt,xt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,kt,It,vt,xt.image[tt])}}}g(M)&&p(s.TEXTURE_CUBE_MAP),Y.__version=K.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function _t(E,M,D,q,K,Y){let Tt=r.convert(D.format,D.colorSpace),ft=r.convert(D.type),gt=x(D.internalFormat,Tt,ft,D.colorSpace),Vt=n.get(M),nt=n.get(D);if(nt.__renderTarget=M,!Vt.__hasExternalTextures){let ut=Math.max(1,M.width>>Y),Rt=Math.max(1,M.height>>Y);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,gt,ut,Rt,M.depth,0,Tt,ft,null):e.texImage2D(K,Y,gt,ut,Rt,0,Tt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),At(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,nt.__webglTexture,0,lt(M)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,nt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(E,M,D){if(s.bindRenderbuffer(s.RENDERBUFFER,E),M.depthBuffer){let q=M.depthTexture,K=q&&q.isDepthTexture?q.type:null,Y=_(M.stencilBuffer,K),Tt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=lt(M);At(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Y,M.width,M.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Y,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Y,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,E)}else{let q=M.textures;for(let K=0;K<q.length;K++){let Y=q[K],Tt=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),gt=x(Y.internalFormat,Tt,ft,Y.colorSpace),Vt=lt(M);D&&At(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,gt,M.width,M.height):At(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,gt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,gt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let K=q.__webglTexture,Y=lt(M);if(M.depthTexture.format===ds)At(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===vs)At(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Bt(E){let M=n.get(E),D=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let q=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=q}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,E)}else if(D){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=s.createRenderbuffer(),rt(M.__webglDepthbuffer[q],E,!1);else{let K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),rt(M.__webglDepthbuffer,E,!1);else{let q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(E,M,D){let q=n.get(E);M!==void 0&&_t(q.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Bt(E)}function Dt(E){let M=E.texture,D=n.get(E),q=n.get(M);E.addEventListener("dispose",C);let K=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Tt=K.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=M.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[ft]=[];for(let gt=0;gt<M.mipmaps.length;gt++)D.__webglFramebuffer[ft][gt]=s.createFramebuffer()}else D.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)D.__webglFramebuffer[ft]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let ft=0,gt=K.length;ft<gt;ft++){let Vt=n.get(K[ft]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&At(E)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ft=0;ft<K.length;ft++){let gt=K[ft];D.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[ft]);let Vt=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),ut=x(gt.internalFormat,Vt,nt,gt.colorSpace,E.isXRRenderTarget===!0),Rt=lt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ut,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,D.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(D.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),ct(s.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)_t(D.__webglFramebuffer[ft][gt],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt);else _t(D.__webglFramebuffer[ft],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,gt=K.length;ft<gt;ft++){let Vt=K[ft],nt=n.get(Vt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),ct(s.TEXTURE_2D,Vt),_t(D.__webglFramebuffer,E,Vt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),g(Vt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,q.__webglTexture),ct(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)_t(D.__webglFramebuffer[gt],E,M,s.COLOR_ATTACHMENT0,ft,gt);else _t(D.__webglFramebuffer,E,M,s.COLOR_ATTACHMENT0,ft,0);g(M)&&p(ft),e.unbindTexture()}E.depthBuffer&&Bt(E)}function Q(E){let M=E.textures;for(let D=0,q=M.length;D<q;D++){let K=M[D];if(g(K)){let Y=y(E),Tt=n.get(K).__webglTexture;e.bindTexture(Y,Tt),p(Y),e.unbindTexture()}}}let at=[],L=[];function Ct(E){if(E.samples>0){if(At(E)===!1){let M=E.textures,D=E.width,q=E.height,K=s.COLOR_BUFFER_BIT,Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(E),ft=M.length>1;if(ft)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);let Vt=n.get(M[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,D,q,0,0,D,q,K,s.NEAREST),l===!0&&(at.length=0,L.length=0,at.push(s.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(at.push(Y),L.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);let Vt=n.get(M[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let M=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function lt(E){return Math.min(i.maxSamples,E.samples)}function At(E){let M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mt(E){let M=a.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function zt(E,M){let D=E.colorSpace,q=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==Ds&&D!==ui&&(te.getTransfer(D)===ce?(q!==rn||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),M}function z(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Ut,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=At}function wm(s,t){function e(n,i=ui){let r,a=te.getTransfer(i);if(n===Zn)return s.UNSIGNED_BYTE;if(n===yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ld)return s.BYTE;if(n===cd)return s.SHORT;if(n===or)return s.UNSIGNED_SHORT;if(n===_c)return s.INT;if(n===yi)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===br)return s.HALF_FLOAT;if(n===ud)return s.ALPHA;if(n===dd)return s.RGB;if(n===rn)return s.RGBA;if(n===fd)return s.LUMINANCE;if(n===pd)return s.LUMINANCE_ALPHA;if(n===ds)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===Sc)return s.RED;if(n===Ua)return s.RED_INTEGER;if(n===md)return s.RG;if(n===bc)return s.RG_INTEGER;if(n===Ec)return s.RGBA_INTEGER;if(n===qr||n===Xr||n===$r||n===Yr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===$o||n===Yo||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Ko||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Ko)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===fl||n===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zr)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gd||n===ml||n===gl||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var bl=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},MM={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Pe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Re({vertexShader:SM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Rn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,v=new iu,g=e.getContextAttributes(),p=null,y=null,x=[],_=[],A=new st,T=null,C=new Ee;C.viewport=new ie;let I=new Ee;I.viewport=new ie;let b=[C,I],S=new bl,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=x[V];return J===void 0&&(J=new Kr,x[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=x[V];return J===void 0&&(J=new Kr,x[V]=J),J.getGripSpace()},this.getHand=function(V){let J=x[V];return J===void 0&&(J=new Kr,x[V]=J),J.getHandSpace()};function U(V){let J=_.indexOf(V.inputSource);if(J===-1)return;let _t=x[J];_t!==void 0&&(_t.update(V.inputSource,V.frame,c||a),_t.dispatchEvent({type:V.type,data:V.inputSource}))}function F(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let V=0;V<x.length;V++){let J=_[V];J!==null&&(_[V]=null,x[V].disconnect(J))}P=null,B=null,v.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,y=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new yn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,_t=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?vs:ds,_t=g.stencil?gs:yi);let Pt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new yn(d.textureWidth,d.textureHeight,{format:rn,type:Zn,depthTexture:new ua(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(V){for(let J=0;J<V.removed.length;J++){let _t=V.removed[J],rt=_.indexOf(_t);rt>=0&&(_[rt]=null,x[rt].disconnect(_t))}for(let J=0;J<V.added.length;J++){let _t=V.added[J],rt=_.indexOf(_t);if(rt===-1){for(let Bt=0;Bt<x.length;Bt++)if(Bt>=_.length){_.push(_t),rt=Bt;break}else if(_[Bt]===null){_[Bt]=_t,rt=Bt;break}if(rt===-1)break}let Pt=x[rt];Pt&&Pt.connect(_t)}}let H=new w,j=new w;function W(V,J,_t){H.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let rt=H.distanceTo(j),Pt=J.projectionMatrix.elements,Bt=_t.projectionMatrix.elements,Ut=Pt[14]/(Pt[10]-1),Dt=Pt[14]/(Pt[10]+1),Q=(Pt[9]+1)/Pt[5],at=(Pt[9]-1)/Pt[5],L=(Pt[8]-1)/Pt[0],Ct=(Bt[8]+1)/Bt[0],lt=Ut*L,At=Ut*Ct,mt=rt/(-L+Ct),zt=mt*-L;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(zt),V.translateZ(mt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Pt[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let z=Ut+mt,E=Dt+mt,M=lt-zt,D=At+(rt-zt),q=Q*Dt/E*z,K=at*Dt/E*z;V.projectionMatrix.makePerspective(M,D,q,K,z,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ot(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let J=V.near,_t=V.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),S.near=I.near=C.near=J,S.far=I.far=C.far=_t,(P!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,B=S.far),C.layers.mask=V.layers.mask|2,I.layers.mask=V.layers.mask|4,S.layers.mask=C.layers.mask|I.layers.mask;let rt=V.parent,Pt=S.cameras;ot(S,rt);for(let Bt=0;Bt<Pt.length;Bt++)ot(Pt[Bt],rt);Pt.length===2?W(S,C,I):S.projectionMatrix.copy(C.projectionMatrix),dt(V,S,rt)};function dt(V,J,_t){_t===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(_t.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=lr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let et=null;function ct(V,J){if(u=J.getViewerPose(c||a),m=J,u!==null){let _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;_t.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Bt=0;Bt<_t.length;Bt++){let Ut=_t[Bt],Dt=null;if(f!==null)Dt=f.getViewport(Ut);else{let at=h.getViewSubImage(d,Ut);Dt=at.viewport,Bt===0&&(t.setRenderTargetTextures(y,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(y))}let Q=b[Bt];Q===void 0&&(Q=new Ee,Q.layers.enable(Bt),Q.viewport=new ie,b[Bt]=Q),Q.matrix.fromArray(Ut.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ut.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Bt===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Q)}let Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){let Bt=h.getDepthInformation(_t[0]);Bt&&Bt.isValid&&Bt.texture&&v.init(t,Bt,i.renderState)}}for(let _t=0;_t<x.length;_t++){let rt=_[_t],Pt=x[_t];rt!==null&&Pt!==void 0&&Pt.update(rt,J,c||a)}et&&et(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let ht=new Mm;ht.setAnimationLoop(ct),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}},Ki=new De,EM=new Wt;function TM(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_m(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ve&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ve&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,Ki.copy(_),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),g.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(Ki)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wM(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=i[y.id];_===void 0&&(m(y),_=u(y),i[y.id]=_,y.addEventListener("dispose",g));let A=x.program;n.updateUBOMapping(y,A);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function u(y){let x=h();y.__bindingPointIndex=x;let _=s.createBuffer(),A=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=i[y.id],_=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,C=_.length;T<C;T++){let I=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,S=I.length;b<S;b++){let P=I[b];if(f(P,T,b,A)===!0){let B=P.__offset,U=Array.isArray(P.value)?P.value:[P.value],F=0;for(let G=0;G<U.length;G++){let H=U[G],j=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,B+F,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,_,A){let T=y.value,C=x+"_"+_;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{let I=A[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return A[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(y){let x=y.uniforms,_=0,A=16;for(let C=0,I=x.length;C<I;C++){let b=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,P=b.length;S<P;S++){let B=b[S],U=Array.isArray(B.value)?B.value:[B.value];for(let F=0,G=U.length;F<G;F++){let H=U[F],j=v(H),W=_%A,ot=W%j.boundary,dt=W+ot;_+=ot,dt!==0&&A-dt<j.storage&&(_+=A-dt),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=j.storage}}}let T=_%A;return T>0&&(_+=A-T),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){let x=y.target;x.removeEventListener("dispose",g);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var pa=class{constructor(t={}){let{canvas:e=vm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=gi,this.toneMappingExposure=1;let _=this,A=!1,T=0,C=0,I=null,b=-1,S=null,P=new ie,B=new ie,U=null,F=new St(0),G=0,H=e.width,j=e.height,W=1,ot=null,dt=null,et=new ie(0,0,H,j),ct=new ie(0,0,H,j),ht=!1,V=new _s,J=!1,_t=!1,rt=new Wt,Pt=new Wt,Bt=new w,Ut=new ie,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function at(){return I===null?W:1}let L=n;function Ct(R,O){return e.getContext(R,O)}try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){let O="webgl2";if(L=Ct(O,R),L===null)throw Ct(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let lt,At,mt,zt,z,E,M,D,q,K,Y,Tt,ft,gt,Vt,nt,ut,Rt,It,vt,kt,qt,re,N;function yt(){lt=new k_(L),lt.init(),qt=new wm(L,lt),At=new D_(L,lt,t,qt),mt=new pM(L,lt),At.reverseDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),zt=new V_(L),z=new eM,E=new yM(L,lt,mt,z,At,qt,zt),M=new N_(_),D=new B_(_),q=new Zg(L),re=new P_(L,q),K=new H_(L,q,zt,re),Y=new W_(L,K,q,zt),It=new G_(L,At,E),nt=new U_(z),Tt=new tM(_,M,D,lt,At,re,nt),ft=new TM(_,z),gt=new iM,Vt=new cM(lt),Rt=new I_(_,M,D,mt,Y,f,l),ut=new dM(_,Y,At),N=new wM(L,zt,At,mt),vt=new L_(L,lt,zt),kt=new z_(L,lt,zt),zt.programs=Tt.programs,_.capabilities=At,_.extensions=lt,_.properties=z,_.renderLists=gt,_.shadowMap=ut,_.state=mt,_.info=zt}yt();let Z=new su(_,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let R=lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(H,j,!1))},this.getSize=function(R){return R.set(H,j)},this.setSize=function(R,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,j=O,e.width=Math.floor(R*W),e.height=Math.floor(O*W),X===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(H*W,j*W).floor()},this.setDrawingBufferSize=function(R,O,X){H=R,j=O,W=X,e.width=Math.floor(R*X),e.height=Math.floor(O*X),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,O,X,$){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,O,X,$),mt.viewport(P.copy(et).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(ct)},this.setScissor=function(R,O,X,$){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,O,X,$),mt.scissor(B.copy(ct).multiplyScalar(W).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){mt.setScissorTest(ht=R)},this.setOpaqueSort=function(R){ot=R},this.setTransparentSort=function(R){dt=R},this.getClearColor=function(R){return R.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(R=!0,O=!0,X=!0){let $=0;if(R){let k=!1;if(I!==null){let pt=I.texture.format;k=pt===Ec||pt===bc||pt===Ua}if(k){let pt=I.texture.type,wt=pt===Zn||pt===yi||pt===or||pt===gs||pt===yc||pt===Mc,Nt=Rt.getClearColor(),Ft=Rt.getClearAlpha(),Yt=Nt.r,Kt=Nt.g,Ot=Nt.b;wt?(m[0]=Yt,m[1]=Kt,m[2]=Ot,m[3]=Ft,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Yt,v[1]=Kt,v[2]=Ot,v[3]=Ft,L.clearBufferiv(L.COLOR,0,v))}else $|=L.COLOR_BUFFER_BIT}O&&($|=L.DEPTH_BUFFER_BIT),X&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),gt.dispose(),Vt.dispose(),z.dispose(),M.dispose(),D.dispose(),Y.dispose(),re.dispose(),N.dispose(),Tt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Bd),Z.removeEventListener("sessionend",kd),qi.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let R=zt.autoReset,O=ut.enabled,X=ut.autoUpdate,$=ut.needsUpdate,k=ut.type;yt(),zt.autoReset=R,ut.enabled=O,ut.autoUpdate=X,ut.needsUpdate=$,ut.type=k}function xt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Gt(R){let O=R.target;O.removeEventListener("dispose",Gt),ye(O)}function ye(R){Ye(R),z.remove(R)}function Ye(R){let O=z.get(R).programs;O!==void 0&&(O.forEach(function(X){Tt.releaseProgram(X)}),R.isShaderMaterial&&Tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,X,$,k,pt){O===null&&(O=Dt);let wt=k.isMesh&&k.matrixWorld.determinant()<0,Nt=M0(R,O,X,$,k);mt.setMaterial($,wt);let Ft=X.index,Yt=1;if($.wireframe===!0){if(Ft=K.getWireframeAttribute(X),Ft===void 0)return;Yt=2}let Kt=X.drawRange,Ot=X.attributes.position,se=Kt.start*Yt,fe=(Kt.start+Kt.count)*Yt;pt!==null&&(se=Math.max(se,pt.start*Yt),fe=Math.min(fe,(pt.start+pt.count)*Yt)),Ft!==null?(se=Math.max(se,0),fe=Math.min(fe,Ft.count)):Ot!=null&&(se=Math.max(se,0),fe=Math.min(fe,Ot.count));let pe=fe-se;if(pe<0||pe===1/0)return;re.setup(k,$,Nt,X,Ft);let on,ae=vt;if(Ft!==null&&(on=q.get(Ft),ae=kt,ae.setIndex(on)),k.isMesh)$.wireframe===!0?(mt.setLineWidth($.wireframeLinewidth*at()),ae.setMode(L.LINES)):ae.setMode(L.TRIANGLES);else if(k.isLine){let Ht=$.linewidth;Ht===void 0&&(Ht=1),mt.setLineWidth(Ht*at()),k.isLineSegments?ae.setMode(L.LINES):k.isLineLoop?ae.setMode(L.LINE_LOOP):ae.setMode(L.LINE_STRIP)}else k.isPoints?ae.setMode(L.POINTS):k.isSprite&&ae.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ht=k._multiDrawStarts,si=k._multiDrawCounts,oe=k._multiDrawCount,Un=Ft?q.get(Ft).bytesPerElement:1,Fs=z.get($).currentProgram.getUniforms();for(let mn=0;mn<oe;mn++)Fs.setValue(L,"_gl_DrawID",mn),ae.render(Ht[mn]/Un,si[mn])}else if(k.isInstancedMesh)ae.renderInstances(se,pe,k.count);else if(X.isInstancedBufferGeometry){let Ht=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,si=Math.min(X.instanceCount,Ht);ae.renderInstances(se,pe,si)}else ae.render(se,pe)};function le(R,O,X){R.transparent===!0&&R.side===ze&&R.forceSinglePass===!1?(R.side=Ve,R.needsUpdate=!0,Ga(R,O,X),R.side=kn,R.needsUpdate=!0,Ga(R,O,X),R.side=ze):Ga(R,O,X)}this.compile=function(R,O,X=null){X===null&&(X=R),p=Vt.get(X),p.init(O),x.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==X&&R.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let $=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pt=k.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){let Nt=pt[wt];le(Nt,X,k),$.add(Nt)}else le(pt,X,k),$.add(pt)}),x.pop(),p=null,$},this.compileAsync=function(R,O,X=null){let $=this.compile(R,O,X);return new Promise(k=>{function pt(){if($.forEach(function(wt){z.get(wt).currentProgram.isReady()&&$.delete(wt)}),$.size===0){k(R);return}setTimeout(pt,10)}lt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Dn=null;function ii(R){Dn&&Dn(R)}function Bd(){qi.stop()}function kd(){qi.start()}let qi=new Mm;qi.setAnimationLoop(ii),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(R){Dn=R,Z.setAnimationLoop(R),R===null?qi.stop():qi.start()},Z.addEventListener("sessionstart",Bd),Z.addEventListener("sessionend",kd),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,O,I),p=Vt.get(R,x.length),p.init(O),x.push(p),Pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(Pt),_t=this.localClippingEnabled,J=nt.init(this.clippingPlanes,_t),g=gt.get(R,y.length),g.init(),y.push(g),Z.enabled===!0&&Z.isPresenting===!0){let pt=_.xr.getDepthSensingMesh();pt!==null&&Yc(pt,O,-1/0,_.sortObjects)}Yc(R,O,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ot,dt),Q=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Q&&Rt.addToRenderList(g,R),this.info.render.frame++,J===!0&&nt.beginShadows();let X=p.state.shadowsArray;ut.render(X,R,O),J===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,k=g.transmissive;if(p.setupLights(),O.isArrayCamera){let pt=O.cameras;if(k.length>0)for(let wt=0,Nt=pt.length;wt<Nt;wt++){let Ft=pt[wt];zd($,k,R,Ft)}Q&&Rt.render(R);for(let wt=0,Nt=pt.length;wt<Nt;wt++){let Ft=pt[wt];Hd(g,R,Ft,Ft.viewport)}}else k.length>0&&zd($,k,R,O),Q&&Rt.render(R),Hd(g,R,O);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(_,R,O),re.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],J===!0&&nt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Yc(R,O,X,$){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||V.intersectsSprite(R)){$&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);let wt=Y.update(R),Nt=R.material;Nt.visible&&g.push(R,wt,Nt,X,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||V.intersectsObject(R))){let wt=Y.update(R),Nt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ut.copy(wt.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Nt)){let Ft=wt.groups;for(let Yt=0,Kt=Ft.length;Yt<Kt;Yt++){let Ot=Ft[Yt],se=Nt[Ot.materialIndex];se&&se.visible&&g.push(R,wt,se,X,Ut.z,Ot)}}else Nt.visible&&g.push(R,wt,Nt,X,Ut.z,null)}}let pt=R.children;for(let wt=0,Nt=pt.length;wt<Nt;wt++)Yc(pt[wt],O,X,$)}function Hd(R,O,X,$){let k=R.opaque,pt=R.transmissive,wt=R.transparent;p.setupLightsView(X),J===!0&&nt.setGlobalState(_.clippingPlanes,X),$&&mt.viewport(P.copy($)),k.length>0&&Va(k,O,X),pt.length>0&&Va(pt,O,X),wt.length>0&&Va(wt,O,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function zd(R,O,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new yn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?br:Zn,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let pt=p.state.transmissionRenderTarget[$.id],wt=$.viewport||P;pt.setSize(wt.z,wt.w);let Nt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(F),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Q&&Rt.render(X);let Ft=_.toneMapping;_.toneMapping=gi;let Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),J===!0&&nt.setGlobalState(_.clippingPlanes,$),Va(R,X,$),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ot=0,se=O.length;Ot<se;Ot++){let fe=O[Ot],pe=fe.object,on=fe.geometry,ae=fe.material,Ht=fe.group;if(ae.side===ze&&pe.layers.test($.layers)){let si=ae.side;ae.side=Ve,ae.needsUpdate=!0,Vd(pe,X,$,on,ae,Ht),ae.side=si,ae.needsUpdate=!0,Kt=!0}}Kt===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt))}_.setRenderTarget(Nt),_.setClearColor(F,G),Yt!==void 0&&($.viewport=Yt),_.toneMapping=Ft}function Va(R,O,X){let $=O.isScene===!0?O.overrideMaterial:null;for(let k=0,pt=R.length;k<pt;k++){let wt=R[k],Nt=wt.object,Ft=wt.geometry,Yt=$===null?wt.material:$,Kt=wt.group;Nt.layers.test(X.layers)&&Vd(Nt,O,X,Ft,Yt,Kt)}}function Vd(R,O,X,$,k,pt){R.onBeforeRender(_,O,X,$,k,pt),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(_,O,X,$,R,pt),k.transparent===!0&&k.side===ze&&k.forceSinglePass===!1?(k.side=Ve,k.needsUpdate=!0,_.renderBufferDirect(X,O,$,k,R,pt),k.side=kn,k.needsUpdate=!0,_.renderBufferDirect(X,O,$,k,R,pt),k.side=ze):_.renderBufferDirect(X,O,$,k,R,pt),R.onAfterRender(_,O,X,$,k,pt)}function Ga(R,O,X){O.isScene!==!0&&(O=Dt);let $=z.get(R),k=p.state.lights,pt=p.state.shadowsArray,wt=k.state.version,Nt=Tt.getParameters(R,k.state,pt,O,X),Ft=Tt.getProgramCacheKey(Nt),Yt=$.programs;$.environment=R.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(R.isMeshStandardMaterial?D:M).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Gt),Yt=new Map,$.programs=Yt);let Kt=Yt.get(Ft);if(Kt!==void 0){if($.currentProgram===Kt&&$.lightsStateVersion===wt)return Wd(R,Nt),Kt}else Nt.uniforms=Tt.getUniforms(R),R.onBeforeCompile(Nt,_),Kt=Tt.acquireProgram(Nt,Ft),Yt.set(Ft,Kt),$.uniforms=Nt.uniforms;let Ot=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ot.clippingPlanes=nt.uniform),Wd(R,Nt),$.needsLights=b0(R),$.lightsStateVersion=wt,$.needsLights&&(Ot.ambientLightColor.value=k.state.ambient,Ot.lightProbe.value=k.state.probe,Ot.directionalLights.value=k.state.directional,Ot.directionalLightShadows.value=k.state.directionalShadow,Ot.spotLights.value=k.state.spot,Ot.spotLightShadows.value=k.state.spotShadow,Ot.rectAreaLights.value=k.state.rectArea,Ot.ltc_1.value=k.state.rectAreaLTC1,Ot.ltc_2.value=k.state.rectAreaLTC2,Ot.pointLights.value=k.state.point,Ot.pointLightShadows.value=k.state.pointShadow,Ot.hemisphereLights.value=k.state.hemi,Ot.directionalShadowMap.value=k.state.directionalShadowMap,Ot.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ot.spotShadowMap.value=k.state.spotShadowMap,Ot.spotLightMatrix.value=k.state.spotLightMatrix,Ot.spotLightMap.value=k.state.spotLightMap,Ot.pointShadowMap.value=k.state.pointShadowMap,Ot.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Kt,$.uniformsList=null,Kt}function Gd(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=ar.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Wd(R,O){let X=z.get(R);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function M0(R,O,X,$,k){O.isScene!==!0&&(O=Dt),E.resetTextureUnits();let pt=O.fog,wt=$.isMeshStandardMaterial?O.environment:null,Nt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ds,Ft=($.isMeshStandardMaterial?D:M).get($.envMap||wt),Yt=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ot=!!X.morphAttributes.position,se=!!X.morphAttributes.normal,fe=!!X.morphAttributes.color,pe=gi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pe=_.toneMapping);let on=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=on!==void 0?on.length:0,Ht=z.get($),si=p.state.lights;if(J===!0&&(_t===!0||R!==S)){let En=R===S&&$.id===b;nt.setState($,R,En)}let oe=!1;$.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==si.state.version||Ht.outputColorSpace!==Nt||k.isBatchedMesh&&Ht.batching===!1||!k.isBatchedMesh&&Ht.batching===!0||k.isBatchedMesh&&Ht.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ht.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||k.isInstancedMesh&&Ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ht.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ht.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ht.instancingMorph===!1&&k.morphTexture!==null||Ht.envMap!==Ft||$.fog===!0&&Ht.fog!==pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==nt.numPlanes||Ht.numIntersection!==nt.numIntersection)||Ht.vertexAlphas!==Yt||Ht.vertexTangents!==Kt||Ht.morphTargets!==Ot||Ht.morphNormals!==se||Ht.morphColors!==fe||Ht.toneMapping!==pe||Ht.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Ht.__version=$.version);let Un=Ht.currentProgram;oe===!0&&(Un=Ga($,O,k));let Fs=!1,mn=!1,Ar=!1,me=Un.getUniforms(),Gn=Ht.uniforms;if(mt.useProgram(Un.program)&&(Fs=!0,mn=!0,Ar=!0),$.id!==b&&(b=$.id,mn=!0),Fs||S!==R){mt.buffers.depth.getReversed()?(rt.copy(R.projectionMatrix),Rg(rt),Cg(rt),me.setValue(L,"projectionMatrix",rt)):me.setValue(L,"projectionMatrix",R.projectionMatrix),me.setValue(L,"viewMatrix",R.matrixWorldInverse);let Ri=me.map.cameraPosition;Ri!==void 0&&Ri.setValue(L,Bt.setFromMatrixPosition(R.matrixWorld)),At.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&me.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,mn=!0,Ar=!0)}if(k.isSkinnedMesh){me.setOptional(L,k,"bindMatrix"),me.setOptional(L,k,"bindMatrixInverse");let En=k.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),me.setValue(L,"boneTexture",En.boneTexture,E))}k.isBatchedMesh&&(me.setOptional(L,k,"batchingTexture"),me.setValue(L,"batchingTexture",k._matricesTexture,E),me.setOptional(L,k,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",k._indirectTexture,E),me.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",k._colorsTexture,E));let Rr=X.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&It.update(k,X,Un),(mn||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,me.setValue(L,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Gn.envMap.value=Ft,Gn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(Gn.envMapIntensity.value=O.environmentIntensity),mn&&(me.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&S0(Gn,Ar),pt&&$.fog===!0&&ft.refreshFogUniforms(Gn,pt),ft.refreshMaterialUniforms(Gn,$,W,j,p.state.transmissionRenderTarget[R.id]),ar.upload(L,Gd(Ht),Gn,E)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ar.upload(L,Gd(Ht),Gn,E),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&me.setValue(L,"center",k.center),me.setValue(L,"modelViewMatrix",k.modelViewMatrix),me.setValue(L,"normalMatrix",k.normalMatrix),me.setValue(L,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let En=$.uniformsGroups;for(let Ri=0,Ci=En.length;Ri<Ci;Ri++){let qd=En[Ri];N.update(qd,Un),N.bind(qd,Un)}}return Un}function S0(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function b0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,O,X){z.get(R.texture).__webglTexture=O,z.get(R.depthTexture).__webglTexture=X;let $=z.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){let X=z.get(R);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,X=0){I=R,T=O,C=X;let $=!0,k=null,pt=!1,wt=!1;if(R){let Ft=z.get(R);if(Ft.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(Ft.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(Ft.__hasExternalTextures)E.rebindTextures(R,z.get(R.texture).__webglTexture,z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ot=R.depthTexture;if(Ft.__boundDepthTexture!==Ot){if(Ot!==null&&z.has(Ot)&&(R.width!==Ot.image.width||R.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}let Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(wt=!0);let Kt=z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[O])?k=Kt[O][X]:k=Kt[O],pt=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?k=z.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?k=Kt[X]:k=Kt,P.copy(R.viewport),B.copy(R.scissor),U=R.scissorTest}else P.copy(et).multiplyScalar(W).floor(),B.copy(ct).multiplyScalar(W).floor(),U=ht;if(mt.bindFramebuffer(L.FRAMEBUFFER,k)&&$&&mt.drawBuffers(R,k),mt.viewport(P),mt.scissor(B),mt.setScissorTest(U),pt){let Ft=z.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ft.__webglTexture,X)}else if(wt){let Ft=z.get(R.texture),Yt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,X||0,Yt)}b=-1},this.readRenderTargetPixels=function(R,O,X,$,k,pt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){mt.bindFramebuffer(L.FRAMEBUFFER,Nt);try{let Ft=R.texture,Yt=Ft.format,Kt=Ft.type;if(!At.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-$&&X>=0&&X<=R.height-k&&L.readPixels(O,X,$,k,qt.convert(Yt),qt.convert(Kt),pt)}finally{let Ft=I!==null?z.get(I).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,O,X,$,k,pt,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){let Ft=R.texture,Yt=Ft.format,Kt=Ft.type;if(!At.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-$&&X>=0&&X<=R.height-k){mt.bindFramebuffer(L.FRAMEBUFFER,Nt);let Ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),L.readPixels(O,X,$,k,qt.convert(Yt),qt.convert(Kt),0);let se=I!==null?z.get(I).__webglFramebuffer:null;mt.bindFramebuffer(L.FRAMEBUFFER,se);let fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ag(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.deleteBuffer(Ot),L.deleteSync(fe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,X=0){R.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);let $=Math.pow(2,-X),k=Math.floor(R.image.width*$),pt=Math.floor(R.image.height*$),wt=O!==null?O.x:0,Nt=O!==null?O.y:0;E.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,wt,Nt,k,pt),mt.unbindTexture()},this.copyTextureToTexture=function(R,O,X=null,$=null,k=0){R.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],O=arguments[2],k=arguments[3]||0,X=null);let pt,wt,Nt,Ft,Yt,Kt,Ot,se,fe,pe=R.isCompressedTexture?R.mipmaps[k]:R.image;X!==null?(pt=X.max.x-X.min.x,wt=X.max.y-X.min.y,Nt=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,Yt=X.min.y,Kt=X.isBox3?X.min.z:0):(pt=pe.width,wt=pe.height,Nt=pe.depth||1,Ft=0,Yt=0,Kt=0),$!==null?(Ot=$.x,se=$.y,fe=$.z):(Ot=0,se=0,fe=0);let on=qt.convert(O.format),ae=qt.convert(O.type),Ht;O.isData3DTexture?(E.setTexture3D(O,0),Ht=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Ht=L.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Ht=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let si=L.getParameter(L.UNPACK_ROW_LENGTH),oe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Un=L.getParameter(L.UNPACK_SKIP_PIXELS),Fs=L.getParameter(L.UNPACK_SKIP_ROWS),mn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kt);let Ar=R.isDataArrayTexture||R.isData3DTexture,me=O.isDataArrayTexture||O.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Gn=z.get(R),Rr=z.get(O),En=z.get(Gn.__renderTarget),Ri=z.get(Rr.__renderTarget);mt.bindFramebuffer(L.READ_FRAMEBUFFER,En.__webglFramebuffer),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ci=0;Ci<Nt;Ci++)Ar&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(R).__webglTexture,k,Kt+Ci),R.isDepthTexture?(me&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(O).__webglTexture,k,fe+Ci),L.blitFramebuffer(Ft,Yt,pt,wt,Ot,se,pt,wt,L.DEPTH_BUFFER_BIT,L.NEAREST)):me?L.copyTexSubImage3D(Ht,k,Ot,se,fe+Ci,Ft,Yt,pt,wt):L.copyTexSubImage2D(Ht,k,Ot,se,fe+Ci,Ft,Yt,pt,wt);mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else me?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Ht,k,Ot,se,fe,pt,wt,Nt,on,ae,pe.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ht,k,Ot,se,fe,pt,wt,Nt,on,pe.data):L.texSubImage3D(Ht,k,Ot,se,fe,pt,wt,Nt,on,ae,pe):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,Ot,se,pt,wt,on,ae,pe.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,Ot,se,pe.width,pe.height,on,pe.data):L.texSubImage2D(L.TEXTURE_2D,k,Ot,se,pt,wt,on,ae,pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,si),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Un),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mn),k===0&&O.generateMipmaps&&L.generateMipmap(Ht),mt.unbindTexture()},this.copyTextureToTexture3D=function(R,O,X=null,$=null,k=0){return R.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,R=arguments[2],O=arguments[3],k=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,X,$,k)},this.initRenderTarget=function(R){z.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,mt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}},El=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Tl=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},mr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sa,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new w,ys=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Xt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qe=class extends Be{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Js,Dr=new w,Ks=new w,Qs=new w,js=new st,Ur=new st,Am=new Wt,ho=new w,Nr=new w,uo=new w,Of=new st,Mh=new st,Bf=new st,an=class extends ee{constructor(t=new Qe){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new $t;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mr(e,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new ys(n,3,0,!1)),Js.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=Js,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Am.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Qs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;fo(ho.set(-.5,-.5,0),Qs,a,Ks,i,r),fo(Nr.set(.5,-.5,0),Qs,a,Ks,i,r),fo(uo.set(.5,.5,0),Qs,a,Ks,i,r),Of.set(0,0),Mh.set(1,0),Bf.set(1,1);let o=t.ray.intersectTriangle(ho,Nr,uo,!1,Dr);if(o===null&&(fo(Nr.set(-.5,.5,0),Qs,a,Ks,i,r),Mh.set(0,1),o=t.ray.intersectTriangle(ho,uo,Nr,!1,Dr),o===null))return;let l=t.ray.origin.distanceTo(Dr);l<t.near||l>t.far||e.push({distance:l,point:Dr.clone(),uv:Xn.getInterpolation(Dr,ho,Nr,uo,Of,Mh,Bf,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function fo(s,t,e,n,i,r){js.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ur.x=r*js.x-i*js.y,Ur.y=i*js.x+r*js.y):Ur.copy(js),s.copy(t),s.x+=Ur.x,s.y+=Ur.y,s.applyMatrix4(Am)}var po=new w,kf=new w,wl=class extends ee{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){po.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(po);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){po.setFromMatrixPosition(t.matrixWorld),kf.setFromMatrixPosition(this.matrixWorld);let n=po.distanceTo(kf)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}},Hf=new w,zf=new ie,Vf=new ie,AM=new w,Gf=new Wt,mo=new w,Sh=new we,Wf=new Wt,bh=new ki,Al=class extends it{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kh,this.bindMatrix=new Wt,this.bindMatrixInverse=new Wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new We),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new we),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sh.copy(this.boundingSphere),Sh.applyMatrix4(i),t.ray.intersectsSphere(Sh)!==!1&&(Wf.copy(i).invert(),bh.copy(t.ray).applyMatrix4(Wf),!(this.boundingBox!==null&&bh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,bh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ie,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;zf.fromBufferAttribute(i.attributes.skinIndex,t),Vf.fromBufferAttribute(i.attributes.skinWeight,t),Hf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=Vf.getComponent(r);if(a!==0){let o=zf.getComponent(r);Gf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(AM.copy(Hf).applyMatrix4(Gf),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},ma=class extends ee{constructor(){super(),this.isBone=!0,this.type="Bone"}},An=class extends Pe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ge,u=Ge,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qf=new Wt,RM=new Wt,Rl=class s{constructor(t=[],e=[]){this.uuid=xn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:RM;qf.multiplyMatrices(o,e[r]),qf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new An(e,t,t,rn,hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ma),this.bones.push(a),this.boneInverses.push(new Wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let a=e[i];t.bones.push(a.uuid);let o=n[i];t.boneInverses.push(o.toArray())}return t}},Hi=class extends Xt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},tr=new Wt,Xf=new Wt,go=[],$f=new We,CM=new Wt,Fr=new it,Or=new we,Cl=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,CM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new We),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),$f.copy(t.boundingBox).applyMatrix4(tr),this.boundingBox.union($f)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new we),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),Or.copy(t.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,tr),Xf.multiplyMatrices(n,tr),Fr.matrixWorld=Xf,Fr.raycast(t,go);for(let a=0,o=go.length;a<o;a++){let l=go[a];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new An(new Float32Array(i*this.count),i,this.count,Sc,hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function Eh(s,t){return s-t}function IM(s,t){return s.z-t.z}function PM(s,t){return t.z-s.z}var ru=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},ln=new Wt,LM=new St(1,1,1),Th=new _s,vo=new We,Qi=new we,Br=new w,Yf=new w,DM=new w,wh=new ru,Ke=new it,xo=[];function UM(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function ji(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}var Il=class extends it{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,i){super(new $t,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new An(e,t,t,rn,hn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new An(e,t,t,Ua,yi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new An(e,t,t,rn,hn);n.colorSpace=te.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,u=new o.constructor(n*l),h=new Xt(u,l,c);e.setAttribute(r,h)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Xt(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,ln),this.getBoundingBoxAt(r,vo).applyMatrix4(ln),t.union(vo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new we);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,ln),this.getBoundingSphereAt(r,Qi).applyMatrix4(ln),t.union(Qi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Eh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;ln.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(LM.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Eh),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(let u in n.attributes){let h=e.getAttribute(u),d=n.getAttribute(u);UM(h,d,l);let f=h.itemSize;for(let m=h.count,v=c;m<v;m++){let g=l+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){let u=o.indexStart,h=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let d=0;d<a.count;d++)r.setX(u+d,l+a.getX(d));for(let d=a.count,f=h;d<f;d++)r.setX(u+d,l);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){let e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:u,vertexStart:h,reservedIndexCount:d}=c,f=r.index,m=f.array,v=t-h;for(let g=u;g<u+d;g++)m[g]=m[g]+v;f.array.copyWithin(e,u,u+d),f.addUpdateRange(e,d),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:u,reservedVertexCount:h}=c,d=r.attributes;for(let f in d){let m=d[f],{array:v,itemSize:g}=m;v.copyWithin(t*g,u*g,(u+h)*g),m.addUpdateRange(t*g,h*g)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new We,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;a&&(u=a.getX(u)),r.expandByPoint(Br.fromBufferAttribute(o,u))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new we;this.getBoundingBoxAt(t,vo),vo.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let h=c;a&&(h=a.getX(h)),Br.fromBufferAttribute(o,h),l=Math.max(l,r.center.distanceToSquared(Br))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){let n=this._instanceInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){let n=this._instanceInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){let n=this._colorsTexture.image.data,i=this._instanceInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){let n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){let e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){let n=this._instanceInfo,i=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=i.length||i[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){let e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Eh);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);ji(this._multiDrawCounts,i),ji(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ji(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ji(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ji(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new $t,this._initializeGeometry(r));let a=this.geometry;r.index&&ji(r.index.array,a.index.array);for(let o in r.attributes)ji(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Ke.material=this.material,Ke.geometry.index=a.index,Ke.geometry.attributes=a.attributes,Ke.geometry.boundingBox===null&&(Ke.geometry.boundingBox=new We),Ke.geometry.boundingSphere===null&&(Ke.geometry.boundingSphere=new we);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,u=i[c];Ke.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Ke.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Ke.geometry.boundingBox),this.getBoundingSphereAt(c,Ke.geometry.boundingSphere),Ke.raycast(t,xo);for(let h=0,d=xo.length;h<d;h++){let f=xo[h];f.object=this,f.batchId=o,e.push(f)}xo.length=0}Ke.material=null,Ke.geometry.index=null,Ke.geometry.attributes={},Ke.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data;d&&(ln.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Th.setFromProjectionMatrix(ln,t.coordinateSystem));let v=0;if(this.sortObjects){ln.copy(this.matrixWorld).invert(),Br.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ln),Yf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ln);for(let y=0,x=l.length;y<x;y++)if(l[y].visible&&l[y].active){let _=l[y].geometryIndex;this.getMatrixAt(y,ln),this.getBoundingSphereAt(_,Qi).applyMatrix4(ln);let A=!1;if(d&&(A=!Th.intersectsSphere(Qi)),!A){let T=h[_],C=DM.subVectors(Qi.center,Br).dot(Yf);wh.push(T.start,T.count,C,y)}}let g=wh.list,p=this.customSort;p===null?g.sort(r.transparent?PM:IM):p.call(this,g,n);for(let y=0,x=g.length;y<x;y++){let _=g[y];c[v]=_.start*o,u[v]=_.count,m[v]=_.index,v++}wh.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){let y=l[g].geometryIndex,x=!1;if(d&&(this.getMatrixAt(g,ln),this.getBoundingSphereAt(y,Qi).applyMatrix4(ln),x=!Th.intersectsSphere(Qi)),!x){let _=h[y];c[v]=_.start*o,u[v]=_.count,m[v]=g,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}},qe=class extends Be{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pl=new w,Ll=new w,Zf=new Wt,kr=new ki,_o=new we,Ah=new w,Jf=new w,Kn=class extends ee{constructor(t=new $t,e=new qe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Pl.fromBufferAttribute(e,i-1),Ll.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Pl.distanceTo(Ll);t.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;Zf.copy(i).invert(),kr.copy(t.ray).applyMatrix4(Zf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=u.getX(v),y=u.getX(v+1),x=yo(this,t,kr,l,p,y);x&&e.push(x)}if(this.isLineLoop){let v=u.getX(m-1),g=u.getX(f),p=yo(this,t,kr,l,v,g);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=yo(this,t,kr,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){let v=yo(this,t,kr,l,m-1,f);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yo(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Pl.fromBufferAttribute(a,i),Ll.fromBufferAttribute(a,r),e.distanceSqToSegment(Pl,Ll,Ah,Jf)>n)return;Ah.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ah);if(!(l<t.near||l>t.far))return{distance:l,point:Jf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Kf=new w,Qf=new w,Cn=class extends Kn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Kf.fromBufferAttribute(e,i),Qf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kf.distanceTo(Qf);t.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dl=class extends Kn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ga=class extends Be{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jf=new Wt,au=new ki,Mo=new we,So=new w,Mi=class extends ee{constructor(t=new $t,e=new ga){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;jf.copy(i).invert(),au.copy(t.ray).applyMatrix4(jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){let g=c.getX(m);So.fromBufferAttribute(h,g),tp(So,g,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,v=f;m<v;m++)So.fromBufferAttribute(h,m),tp(So,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tp(s,t,e,n,i,r,a){let o=au.distanceSqToPoint(s);if(o<e){let l=new w;au.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ou=class extends Pe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Te,this.magFilter=r!==void 0?r:Te,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},lu=class extends Pe{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ge,this.minFilter=Ge,this.generateMipmaps=!1,this.needsUpdate=!0}},gr=class extends Pe{constructor(t,e,n,i,r,a,o,l,c,u,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},cu=class extends gr{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=sn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},hu=class extends gr{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,_i),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},Ms=class extends Pe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new st:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,i=[],r=[],a=[],o=new w,l=new Wt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Se(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Se(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ul=class extends vr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Md(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var bo=new w,Rh=new Md,Ch=new Md,Ih=new Md,Nl=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(bo.subVectors(i[0],i[1]).add(i[0]),c=bo);let h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(bo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Rh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,v,g),Ch.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,v,g),Ih.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Rh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ch.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ih.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Rh.calc(l),Ch.calc(l),Ih.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ep(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function NM(s,t){let e=1-s;return e*e*t}function FM(s,t){return 2*(1-s)*s*t}function OM(s,t){return s*s*t}function Qr(s,t,e,n){return NM(s,t)+FM(s,e)+OM(s,n)}function BM(s,t){let e=1-s;return e*e*e*t}function kM(s,t){let e=1-s;return 3*e*e*s*t}function HM(s,t){return 3*(1-s)*s*s*t}function zM(s,t){return s*s*s*t}function jr(s,t,e,n,i){return BM(s,t)+kM(s,e)+HM(s,n)+zM(s,i)}var va=class extends Mn{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(t,i.x,r.x,a.x,o.x),jr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fl=class extends Mn{constructor(t=new w,e=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(t,i.x,r.x,a.x,o.x),jr(t,i.y,r.y,a.y,o.y),jr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends Mn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ol=class extends Mn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Mn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Qr(t,i.x,r.x,a.x),Qr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends Mn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Qr(t,i.x,r.x,a.x),Qr(t,i.y,r.y,a.y),Qr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(ep(o,l.x,c.x,u.x,h.x),ep(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new st().fromArray(i))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Nl,CubicBezierCurve:va,CubicBezierCurve3:Fl,EllipseCurve:vr,LineCurve:xa,LineCurve3:Ol,QuadraticBezierCurve:_a,QuadraticBezierCurve3:ya,SplineCurve:Ma}),kl=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Bl[i.type]().fromJSON(i))}return this}},Ss=class extends kl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xa(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new _a(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new va(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new vr(t,e,n,i,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Sa=class s extends $t{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Se(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,h=new w,d=new st,f=new w,m=new w,v=new w,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=e;y++){let x=n+y*u*i,_=Math.sin(x),A=Math.cos(x);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*_,h.y=t[T].y,h.z=t[T].x*A,a.push(h.x,h.y,h.z),d.x=y/e,d.y=T/(t.length-1),o.push(d.x,d.y);let C=l[3*T+0]*_,I=l[3*T+1],b=l[3*T+0]*A;c.push(C,I,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let _=x+y*t.length,A=_,T=_+t.length,C=_+t.length+1,I=_+1;r.push(A,T,I),r.push(C,I,T)}this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},bs=class s extends Sa{constructor(t=1,e=1,n=4,i=8){let r=new Ss;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},xr=class s extends $t{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new w,u=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class s extends $t{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,v=[],g=n/2,p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function y(){let _=new w,A=new w,T=0,C=(e-t)/n;for(let I=0;I<=r;I++){let b=[],S=I/r,P=S*(e-t)+t;for(let B=0;B<=i;B++){let U=B/i,F=U*l+o,G=Math.sin(F),H=Math.cos(F);A.x=P*G,A.y=-S*n+g,A.z=P*H,h.push(A.x,A.y,A.z),_.set(G,C,H).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-S),b.push(m++)}v.push(b)}for(let I=0;I<i;I++)for(let b=0;b<r;b++){let S=v[b][I],P=v[b+1][I],B=v[b+1][I+1],U=v[b][I+1];(t>0||b!==0)&&(u.push(S,P,U),T+=3),(e>0||b!==r-1)&&(u.push(P,B,U),T+=3)}c.addGroup(p,T,0),p+=T}function x(_){let A=m,T=new st,C=new w,I=0,b=_===!0?t:e,S=_===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;let P=m;for(let B=0;B<=i;B++){let F=B/i*l+o,G=Math.cos(F),H=Math.sin(F);C.x=b*H,C.y=g*S,C.z=b*G,h.push(C.x,C.y,C.z),d.push(0,S,0),T.x=G*.5+.5,T.y=H*.5*S+.5,f.push(T.x,T.y),m++}for(let B=0;B<i;B++){let U=A+B,F=P+B;_===!0?u.push(F,F+1,U):u.push(F+1,F,U),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Si=class s extends ne{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class s extends $t{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new w,_=new w,A=new w;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],_),f(e[T+2],A),l(x,_,A,y)}function l(y,x,_,A){let T=A+1,C=[];for(let I=0;I<=T;I++){C[I]=[];let b=y.clone().lerp(_,I/T),S=x.clone().lerp(_,I/T),P=T-I;for(let B=0;B<=P;B++)B===0&&I===T?C[I][B]=b:C[I][B]=b.clone().lerp(S,B/P)}for(let I=0;I<T;I++)for(let b=0;b<2*(T-I)-1;b++){let S=Math.floor(b/2);b%2===0?(d(C[I][S+1]),d(C[I+1][S]),d(C[I][S])):(d(C[I][S+1]),d(C[I+1][S+1]),d(C[I+1][S]))}}function c(y){let x=new w;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){let y=new w;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let _=g(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(_,1-A)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){let x=a[y+0],_=a[y+2],A=a[y+4],T=Math.max(x,_,A),C=Math.min(x,_,A);T>.9&&C<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){let _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function m(){let y=new w,x=new w,_=new w,A=new w,T=new st,C=new st,I=new st;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),T.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),I.set(a[S+4],a[S+5]),A.copy(y).add(x).add(_).divideScalar(3);let P=g(A);v(T,S+0,y,P),v(C,S+2,x,P),v(I,S+4,_,P)}}function v(y,x,_,A){A<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},Hl=class s extends zi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Eo=new w,To=new w,Ph=new w,wo=new Xn,zl=class extends $t{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(fs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:g,c:p}=wo;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),wo.getNormal(Ph),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let x=(y+1)%3,_=h[y],A=h[x],T=wo[u[y]],C=wo[u[x]],I=`${_}_${A}`,b=`${A}_${_}`;b in d&&d[b]?(Ph.dot(d[b].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),d[b]=null):I in d||(d[I]={index0:c[y],index1:c[x],normal:Ph.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:g}=d[m];Eo.fromBufferAttribute(o,v),To.fromBufferAttribute(o,g),f.push(Eo.x,Eo.y,Eo.z),f.push(To.x,To.y,To.z)}this.setAttribute("position",new Lt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},xi=class extends Ss{constructor(t){super(t),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ss().fromJSON(i))}return this}},VM={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Rm(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,f;if(n&&(r=$M(s,t,r,e)),s.length>80*e){o=c=s[0],l=u=s[1];for(let m=e;m<i;m+=e)h=s[m],d=s[m+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return ba(r,a,e,o,l,f,0),a}};function Rm(s,t,e,n,i){let r,a;if(i===sS(s,t,e,n)>0)for(r=t;r<e;r+=n)a=np(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=np(r,s[r],s[r+1],a);return a&&Ac(a,a.next)&&(Ta(a),a=a.next),a}function Es(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ac(e,e.next)||ve(e.prev,e,e.next)===0)){if(Ta(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ba(s,t,e,n,i,r,a){if(!s)return;!a&&r&&QM(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?WM(s,n,i,r):GM(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ta(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=qM(Es(s),t,e),ba(s,t,e,n,i,r,2)):a===2&&XM(s,t,e,n,i,r):ba(Es(s),t,e,n,i,r,1);break}}}function GM(s){let t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&sr(i,o,r,l,a,c,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function WM(s,t,e,n){let i=s.prev,r=s,a=s.next;if(ve(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,u=i.y,h=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=uu(f,m,t,e,n),y=uu(v,g,t,e,n),x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&sr(o,u,l,h,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&sr(o,u,l,h,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&sr(o,u,l,h,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&sr(o,u,l,h,c,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function qM(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ac(i,r)&&Cm(i,n,n.next,r)&&Ea(i,r)&&Ea(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ta(n),Ta(n.next),n=s=r),n=n.next}while(n!==s);return Es(n)}function XM(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eS(a,o)){let l=Im(a,o);a=Es(a,a.next),l=Es(l,l.next),ba(a,t,e,n,i,r,0),ba(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function $M(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Rm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(tS(c));for(i.sort(YM),r=0;r<i.length;r++)e=ZM(i[r],e);return e}function YM(s,t){return s.x-t.x}function ZM(s,t){let e=JM(s,t);if(!e)return t;let n=Im(e,s);return Es(n,n.next),Es(e,e.next)}function JM(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&sr(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Ea(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&KM(i,e)))&&(i=e,u=h)),e=e.next;while(e!==o);return i}function KM(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function QM(s,t,e,n){let i=s;do i.z===0&&(i.z=uu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,jM(i)}function jM(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function uu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function tS(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function sr(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function eS(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!nS(s,t)&&(Ea(s,t)&&Ea(t,s)&&iS(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||Ac(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ac(s,t){return s.x===t.x&&s.y===t.y}function Cm(s,t,e,n){let i=Ro(ve(s,t,e)),r=Ro(ve(s,t,n)),a=Ro(ve(e,n,s)),o=Ro(ve(e,n,t));return!!(i!==r&&a!==o||i===0&&Ao(s,e,t)||r===0&&Ao(s,n,t)||a===0&&Ao(e,s,n)||o===0&&Ao(e,t,n))}function Ao(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ro(s){return s>0?1:s<0?-1:0}function nS(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cm(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ea(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function iS(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Im(s,t){let e=new du(s.i,s.x,s.y),n=new du(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function np(s,t,e,n){let i=new du(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ta(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function du(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sS(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Yn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];ip(t),sp(n,t);let a=t.length;e.forEach(ip);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,sp(n,e[l]);let o=VM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ip(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function sp(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Vl=class s extends $t{constructor(t=new xi([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Lt(i,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:rS,x,_=!1,A,T,C,I;p&&(x=p.getSpacedPoints(u),_=!0,d=!1,A=p.computeFrenetFrames(u,!1),T=new w,C=new w,I=new w),d||(g=0,f=0,m=0,v=0);let b=o.extractPoints(c),S=b.shape,P=b.holes;if(!Yn.isClockWise(S)){S=S.reverse();for(let Q=0,at=P.length;Q<at;Q++){let L=P[Q];Yn.isClockWise(L)&&(P[Q]=L.reverse())}}let U=Yn.triangulateShape(S,P),F=S;for(let Q=0,at=P.length;Q<at;Q++){let L=P[Q];S=S.concat(L)}function G(Q,at,L){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(at,L)}let H=S.length,j=U.length;function W(Q,at,L){let Ct,lt,At,mt=Q.x-at.x,zt=Q.y-at.y,z=L.x-Q.x,E=L.y-Q.y,M=mt*mt+zt*zt,D=mt*E-zt*z;if(Math.abs(D)>Number.EPSILON){let q=Math.sqrt(M),K=Math.sqrt(z*z+E*E),Y=at.x-zt/q,Tt=at.y+mt/q,ft=L.x-E/K,gt=L.y+z/K,Vt=((ft-Y)*E-(gt-Tt)*z)/(mt*E-zt*z);Ct=Y+mt*Vt-Q.x,lt=Tt+zt*Vt-Q.y;let nt=Ct*Ct+lt*lt;if(nt<=2)return new st(Ct,lt);At=Math.sqrt(nt/2)}else{let q=!1;mt>Number.EPSILON?z>Number.EPSILON&&(q=!0):mt<-Number.EPSILON?z<-Number.EPSILON&&(q=!0):Math.sign(zt)===Math.sign(E)&&(q=!0),q?(Ct=-zt,lt=mt,At=Math.sqrt(M)):(Ct=mt,lt=zt,At=Math.sqrt(M/2))}return new st(Ct/At,lt/At)}let ot=[];for(let Q=0,at=F.length,L=at-1,Ct=Q+1;Q<at;Q++,L++,Ct++)L===at&&(L=0),Ct===at&&(Ct=0),ot[Q]=W(F[Q],F[L],F[Ct]);let dt=[],et,ct=ot.concat();for(let Q=0,at=P.length;Q<at;Q++){let L=P[Q];et=[];for(let Ct=0,lt=L.length,At=lt-1,mt=Ct+1;Ct<lt;Ct++,At++,mt++)At===lt&&(At=0),mt===lt&&(mt=0),et[Ct]=W(L[Ct],L[At],L[mt]);dt.push(et),ct=ct.concat(et)}for(let Q=0;Q<g;Q++){let at=Q/g,L=f*Math.cos(at*Math.PI/2),Ct=m*Math.sin(at*Math.PI/2)+v;for(let lt=0,At=F.length;lt<At;lt++){let mt=G(F[lt],ot[lt],Ct);rt(mt.x,mt.y,-L)}for(let lt=0,At=P.length;lt<At;lt++){let mt=P[lt];et=dt[lt];for(let zt=0,z=mt.length;zt<z;zt++){let E=G(mt[zt],et[zt],Ct);rt(E.x,E.y,-L)}}}let ht=m+v;for(let Q=0;Q<H;Q++){let at=d?G(S[Q],ct[Q],ht):S[Q];_?(C.copy(A.normals[0]).multiplyScalar(at.x),T.copy(A.binormals[0]).multiplyScalar(at.y),I.copy(x[0]).add(C).add(T),rt(I.x,I.y,I.z)):rt(at.x,at.y,0)}for(let Q=1;Q<=u;Q++)for(let at=0;at<H;at++){let L=d?G(S[at],ct[at],ht):S[at];_?(C.copy(A.normals[Q]).multiplyScalar(L.x),T.copy(A.binormals[Q]).multiplyScalar(L.y),I.copy(x[Q]).add(C).add(T),rt(I.x,I.y,I.z)):rt(L.x,L.y,h/u*Q)}for(let Q=g-1;Q>=0;Q--){let at=Q/g,L=f*Math.cos(at*Math.PI/2),Ct=m*Math.sin(at*Math.PI/2)+v;for(let lt=0,At=F.length;lt<At;lt++){let mt=G(F[lt],ot[lt],Ct);rt(mt.x,mt.y,h+L)}for(let lt=0,At=P.length;lt<At;lt++){let mt=P[lt];et=dt[lt];for(let zt=0,z=mt.length;zt<z;zt++){let E=G(mt[zt],et[zt],Ct);_?rt(E.x,E.y+x[u-1].y,x[u-1].x+L):rt(E.x,E.y,h+L)}}}V(),J();function V(){let Q=i.length/3;if(d){let at=0,L=H*at;for(let Ct=0;Ct<j;Ct++){let lt=U[Ct];Pt(lt[2]+L,lt[1]+L,lt[0]+L)}at=u+g*2,L=H*at;for(let Ct=0;Ct<j;Ct++){let lt=U[Ct];Pt(lt[0]+L,lt[1]+L,lt[2]+L)}}else{for(let at=0;at<j;at++){let L=U[at];Pt(L[2],L[1],L[0])}for(let at=0;at<j;at++){let L=U[at];Pt(L[0]+H*u,L[1]+H*u,L[2]+H*u)}}n.addGroup(Q,i.length/3-Q,0)}function J(){let Q=i.length/3,at=0;_t(F,at),at+=F.length;for(let L=0,Ct=P.length;L<Ct;L++){let lt=P[L];_t(lt,at),at+=lt.length}n.addGroup(Q,i.length/3-Q,1)}function _t(Q,at){let L=Q.length;for(;--L>=0;){let Ct=L,lt=L-1;lt<0&&(lt=Q.length-1);for(let At=0,mt=u+g*2;At<mt;At++){let zt=H*At,z=H*(At+1),E=at+Ct+zt,M=at+lt+zt,D=at+lt+z,q=at+Ct+z;Bt(E,M,D,q)}}}function rt(Q,at,L){l.push(Q),l.push(at),l.push(L)}function Pt(Q,at,L){Ut(Q),Ut(at),Ut(L);let Ct=i.length/3,lt=y.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);Dt(lt[0]),Dt(lt[1]),Dt(lt[2])}function Bt(Q,at,L,Ct){Ut(Q),Ut(at),Ut(Ct),Ut(at),Ut(L),Ut(Ct);let lt=i.length/3,At=y.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Dt(At[0]),Dt(At[1]),Dt(At[3]),Dt(At[1]),Dt(At[2]),Dt(At[3])}function Ut(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Dt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return aS(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Bl[i.type]().fromJSON(i)),new s(n,t.options)}},rS={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new st(r,a),new st(o,l),new st(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-h),new st(d,1-m),new st(v,1-p)]:[new st(o,1-l),new st(u,1-h),new st(f,1-m),new st(g,1-p)]}};function aS(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ts=class s extends zi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},wa=class s extends zi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Gl=class s extends $t{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],h=t,d=(e-t)/i,f=new w,m=new st;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let v=0;v<i;v++){let g=v*(n+1);for(let p=0;p<n;p++){let y=p+g,x=y,_=y+n+1,A=y+n+2,T=y+1;o.push(x,_,T),o.push(_,A,T)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wl=class s extends $t{constructor(t=new xi([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Lt(i,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function c(u){let h=i.length/3,d=u.extractPoints(e),f=d.shape,m=d.holes;Yn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Yn.isClockWise(y)===!0&&(m[g]=y.reverse())}let v=Yn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){let y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,p=v.length;g<p;g++){let y=v[g],x=y[0]+h,_=y[1]+h,A=y[2]+h;n.push(x,_,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return oS(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function oS(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Xe=class s extends $t{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new w,d=new w,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],x=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){let T=A/e;h.x=-t*Math.cos(i+T*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(i+T*r)*Math.sin(a+x*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(T+_,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=u[p][y+1],_=u[p][y],A=u[p+1][y],T=u[p+1][y+1];(p!==0||a>0)&&f.push(x,_,T),(p!==n-1||l<Math.PI)&&f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ws=class s extends zi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Sn=class s extends $t{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],u=new w,h=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let v=m/i*r,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(v),h.y=(t+e*Math.cos(g))*Math.sin(v),h.z=e*Math.sin(g),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;a.push(v,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ql=class s extends $t{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],u=[],h=new w,d=new w,f=new w,m=new w,v=new w,g=new w,p=new w;for(let x=0;x<=n;++x){let _=x/n*r*Math.PI*2;y(_,r,a,t,f),y(_+.01,r,a,t,m),g.subVectors(m,f),p.addVectors(m,f),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let A=0;A<=i;++A){let T=A/i*Math.PI*2,C=-e*Math.cos(T),I=e*Math.sin(T);h.x=f.x+(C*p.x+I*v.x),h.y=f.y+(C*p.y+I*v.y),h.z=f.z+(C*p.z+I*v.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(x/n),u.push(A/i)}}for(let x=1;x<=n;x++)for(let _=1;_<=i;_++){let A=(i+1)*(x-1)+(_-1),T=(i+1)*x+(_-1),C=(i+1)*x+_,I=(i+1)*(x-1)+_;o.push(A,T,I),o.push(T,C,I)}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(u,2));function y(x,_,A,T,C){let I=Math.cos(x),b=Math.sin(x),S=A/_*x,P=Math.cos(S);C.x=T*(2+P)*.5*I,C.y=T*(2+P)*b*.5,C.z=T*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Xl=class s extends $t{constructor(t=new ya(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new st,u=new w,h=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function v(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),y(),p()}function g(x){u=t.getPointAt(x/e,u);let _=a.normals[x],A=a.binormals[x];for(let T=0;T<=i;T++){let C=T/i*Math.PI*2,I=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+I*A.x,l.y=b*_.y+I*A.y,l.z=b*_.z+I*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=i;_++){let A=(i+1)*(x-1)+(_-1),T=(i+1)*x+(_-1),C=(i+1)*x+_,I=(i+1)*(x-1)+_;m.push(A,T,I),m.push(T,C,I)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=i;_++)c.x=x/e,c.y=_/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Bl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},$l=class extends $t{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new w,r=new w;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,f=h.count;for(let m=d,v=d+f;m<v;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),y=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),rp(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,h=3*o+(c+1)%3;i.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),rp(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Lt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function rp(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var ap=Object.freeze({__proto__:null,BoxGeometry:jt,CapsuleGeometry:bs,CircleGeometry:xr,ConeGeometry:Si,CylinderGeometry:ne,DodecahedronGeometry:Hl,EdgesGeometry:zl,ExtrudeGeometry:Vl,IcosahedronGeometry:Ts,LatheGeometry:Sa,OctahedronGeometry:wa,PlaneGeometry:Jn,PolyhedronGeometry:zi,RingGeometry:Gl,ShapeGeometry:Wl,SphereGeometry:Xe,TetrahedronGeometry:ws,TorusGeometry:Sn,TorusKnotGeometry:ql,TubeGeometry:Xl,WireframeGeometry:$l}),Yl=class extends Be{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new St(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Zl=class extends Re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},$e=class extends Be{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jl=class extends $e{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Kl=class extends Be{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new St(16777215),this.specular=new St(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ql=class extends Be{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new St(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jl=class extends Be{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},tc=class extends Be{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ec=class extends Be{static get type(){return"MeshMatcapMaterial"}constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new St(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},nc=class extends qe{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function hs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Pm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Lm(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function fu(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function Sd(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function lS(s,t,e,n,i=30){let r=s.clone();r.name=t;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<e||m>=n)){h.push(c.times[f]);for(let v=0;v<u;++v)d.push(c.values[f*u+v])}}h.length!==0&&(c.times=hs(h,c.times.constructor),c.values=hs(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function cS(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){let o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0,h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=o.times.length-1,v;if(r<=o.times[0]){let p=u,y=h-u;v=o.values.slice(p,y)}else if(r>=o.times[m]){let p=m*h+u,y=p+h-u;v=o.values.slice(p,y)}else{let p=o.createInterpolant(),y=u,x=h-u;p.evaluate(r),v=p.resultBuffer.slice(y,x)}l==="quaternion"&&new ge().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let p=0;p<g;++p){let y=p*f+d;if(l==="quaternion")ge.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{let x=f-d*2;for(let _=0;_<x;++_)c.values[y+_]-=v[_]}}}return s.blendMode=vd,s}var hS={convertArray:hs,isTypedArray:Pm,getKeyframeOrder:Lm,sortedArray:fu,flattenJSON:Sd,subclip:lS,makeClipAdditive:cS},As=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ic=class extends As{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ls,endingEnd:ls}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case cs:r=t,o=2*e-n;break;case ia:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cs:a=t,l=2*n-e;break;case ia:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+y*a[c+A]+x*a[l+A]+_*a[h+A];return r}},Aa=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},sc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ic(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case na:e=this.InterpolantFactoryMethodDiscrete;break;case xl:e=this.InterpolantFactoryMethodLinear;break;case Fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Pm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let v=e[h+m];if(v!==e[d+m]||v!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=xl;var bi=class extends bn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=na;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends bn{};Ra.prototype.ValueTypeName="color";var Rs=class extends bn{};Rs.prototype.ValueTypeName="number";var rc=class extends As{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let u=c+o;c!==u;c+=4)ge.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cs=class extends bn{InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends bn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=na;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends bn{};Is.prototype.ValueTypeName="vector";var Ps=class{constructor(t="",e=-1,n=[],i=Tc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(dS(n[a]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=Lm(l);l=fu(l,1,u),c=fu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Rs(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){let c=t[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,v){if(f.length!==0){let g=[],p=[];Sd(f,g,p,m),g.length!==0&&v.push(new h(d,g,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(let v in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let x=d[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new Rs(".morphTargetInfluence["+v+"]",g,p))}l=f.length*a}else{let f=".bones["+e[h].name+"]";n(Is,f+".position",d,"pos",i),n(Cs,f+".quaternion",d,"rot",i),n(Is,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function uS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Ra;case"quaternion":return Cs;case"bool":case"boolean":return bi;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function dS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=uS(s.type);if(s.times===void 0){let e=[],n=[];Sd(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var pi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ca=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},Dm=new Ca,je=class{constructor(t){this.manager=t!==void 0?t:Dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};je.DEFAULT_MATERIAL_NAME="__DEFAULT";var hi={},pu=class extends Error{constructor(t,e){super(t),this.response=e}},Hn=class extends je{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=pi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(hi[t]!==void 0){hi[t].push({onLoad:e,onProgress:n,onError:i});return}hi[t]=[],hi[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=hi[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let T=0,C=u.length;T<C;T++){let I=u[T];I.onProgress&&I.onProgress(A)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new pu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{pi.add(t,c);let u=hi[t];delete hi[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=hi[t];if(u===void 0)throw this.manager.itemError(t),c;delete hi[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}},mu=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Ps.parse(t[n]);e.push(i)}return e}},gu=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=[],o=new gr,l=new Hn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(h){l.load(t[h],function(d){let f=r.parse(d,!0);a[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Te),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let h=0,d=t.length;h<d;++h)u(h);else l.load(t,function(h){let d=r.parse(h,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+v]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Te),o.format=d.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}},Ls=class extends je{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=pi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=aa("img");function l(){u(),pi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}},vu=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=new xs;r.colorSpace=Ie;let a=new Ls(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},xu=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new An,o=new Hn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:sn,a.wrapT=c.wrapT!==void 0?c.wrapT:sn,a.magFilter=c.magFilter!==void 0?c.magFilter:Te,a.minFilter=c.minFilter!==void 0?c.minFilter:Te,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=wn),c.mipmapCount===1&&(a.minFilter=Te),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,i),a}},_u=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=new Pe,a=new Ls(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Qn=class extends ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},_r=class extends Qn{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Lh=new Wt,op=new w,lp=new w,Ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;op.setFromMatrixPosition(t.matrixWorld),e.position.copy(op),lp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lp),e.updateMatrixWorld(),Lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yu=class extends Ia{constructor(){super(new Ee(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=lr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ac=class extends Qn{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.target=new ee,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},cp=new Wt,Hr=new w,Dh=new w,Mu=class extends Ia{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hr),Dh.copy(n.position),Dh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dh),n.updateMatrixWorld(),i.makeTranslation(-Hr.x,-Hr.y,-Hr.z),cp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp)}},oc=class extends Qn{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Su=class extends Ia{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zn=class extends Qn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.target=new ee,this.shadow=new Su}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yr=class extends Qn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},lc=class extends Qn{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},cc=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new w)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},hc=class extends Qn{constructor(t=new cc,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},uc=class s extends je{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,a=new Hn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new St().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let a=t.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new St().setHex(a.value);break;case"v2":i.uniforms[r].value=new st().fromArray(a.value);break;case"v3":i.uniforms[r].value=new w().fromArray(a.value);break;case"v4":i.uniforms[r].value=new ie().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Zt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Wt().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new st().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let e={ShadowMaterial:Yl,SpriteMaterial:Qe,RawShaderMaterial:Zl,ShaderMaterial:Re,PointsMaterial:ga,MeshPhysicalMaterial:Jl,MeshStandardMaterial:$e,MeshPhongMaterial:Kl,MeshToonMaterial:Ql,MeshNormalMaterial:jl,MeshLambertMaterial:tc,MeshDepthMaterial:da,MeshDistanceMaterial:fa,MeshBasicMaterial:xe,MeshMatcapMaterial:ec,LineDashedMaterial:nc,LineBasicMaterial:qe,Material:Be};return new e[t]}},Pa=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},dc=class extends $t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},fc=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Hn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(f,m){if(e[m]!==void 0)return e[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),y=nr(g.type,p),x=new mr(y,g.stride);return x.uuid=g.uuid,e[m]=x,x}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let a=t.isInstancedBufferGeometry?new dc:new $t,o=t.data.index;if(o!==void 0){let f=nr(o.type,o.array);a.setIndex(new Xt(f,1))}let l=t.data.attributes;for(let f in l){let m=l[f],v;if(m.isInterleavedBufferAttribute){let g=i(t.data,m.data);v=new ys(g,m.itemSize,m.offset,m.normalized)}else{let g=nr(m.type,m.array),p=m.isInstancedBufferAttribute?Hi:Xt;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),a.setAttribute(f,v)}let c=t.data.morphAttributes;if(c)for(let f in c){let m=c[f],v=[];for(let g=0,p=m.length;g<p;g++){let y=m[g],x;if(y.isInterleavedBufferAttribute){let _=i(t.data,y.data);x=new ys(_,y.itemSize,y.offset,y.normalized)}else{let _=nr(y.type,y.array);x=new Xt(_,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}a.morphAttributes[f]=v}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){let v=h[f];a.addGroup(v.start,v.count,v.materialIndex)}let d=t.data.boundingSphere;if(d!==void 0){let f=new w;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new we(f,d.radius)}return t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}},bu=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=this.path===""?Pa.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;let o=new Hn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+t+".",h.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Pa.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new Hn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(t,e),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),u=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,u),this.bindLightTargets(c),e!==void 0){let h=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new xi().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=new Rl().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new fc;for(let r=0,a=t.length;r<a;r++){let o,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in ap?o=ap[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new uc;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){let l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Ps.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:nr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Ca(e);r=new Ls(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=t.length;c<u;c++){let h=t[c],d=h.url;if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new An(p.data,p.width,p.height)))}i[h.uuid]=new fi(f)}else{let f=o(h.url);i[h.uuid]=new fi(f)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:nr(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Ls(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.url;if(Array.isArray(c)){let u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=await r(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new An(m.data,m.width,m.height)))}n[l.uuid]=new fi(u)}else{let u=await r(l.url);n[l.uuid]=new fi(u)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){let o=t[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l=e[o.image],c=l.data,u;Array.isArray(c)?(u=new xs,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new An:u=new Pe,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,fS)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],hp),u.wrapT=n(o.wrap[1],hp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,up)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,up)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),i[o.uuid]=u}return i}parseObject(t,e,n,i,r){let a;function o(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(t.type){case"Scene":a=new pr,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new St(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Tl(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new El(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Ee(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new fr(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new yr(t.color,t.intensity);break;case"DirectionalLight":a=new zn(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new oc(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new lc(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new ac(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new _r(t.color,t.groundColor,t.intensity);break;case"LightProbe":a=new hc().fromJSON(t);break;case"SkinnedMesh":u=o(t.geometry),h=l(t.material),a=new Al(u,h),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":u=o(t.geometry),h=l(t.material),a=new it(u,h);break;case"InstancedMesh":u=o(t.geometry),h=l(t.material);let d=t.count,f=t.instanceMatrix,m=t.instanceColor;a=new Cl(u,h,d),a.instanceMatrix=new Hi(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new Hi(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=o(t.geometry),h=l(t.material),a=new Il(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._visibility=t.visibility,a._active=t.active,a._bounds=t.bounds.map(v=>{let g=new We;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);let p=new we;return p.radius=v.sphereRadius,p.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:p}}),a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._geometryCount=t.geometryCount,a._matricesTexture=c(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid));break;case"LOD":a=new wl;break;case"Line":a=new Kn(o(t.geometry),l(t.material));break;case"LineLoop":a=new Dl(o(t.geometry),l(t.material));break;case"LineSegments":a=new Cn(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new Mi(o(t.geometry),l(t.material));break;case"Sprite":a=new an(l(t.material));break;case"Group":a=new ue;break;case"Bone":a=new ma;break;default:a=new ee}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let f=0;f<d.length;f++){let m=d[f];a.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);let d=t.levels;for(let f=0;f<d.length;f++){let m=d[f],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ee}})}},fS={UVMapping:xc,CubeReflectionMapping:_i,CubeRefractionMapping:Bi,EquirectangularReflectionMapping:ms,EquirectangularRefractionMapping:ta,CubeUVReflectionMapping:Sr},hp={RepeatWrapping:_n,ClampToEdgeWrapping:sn,MirroredRepeatWrapping:ea},up={NearestFilter:Ge,NearestMipmapNearestFilter:od,NearestMipmapLinearFilter:er,LinearFilter:Te,LinearMipmapNearestFilter:Wr,LinearMipmapLinearFilter:wn},Eu=class extends je{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=pi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return pi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),pi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});pi.add(t,l),r.manager.itemStart(t)}},Co,La=class{static getContext(){return Co===void 0&&(Co=new(window.AudioContext||window.webkitAudioContext)),Co}static setContext(t){Co=t}},Tu=class extends je{constructor(t){super(t)}load(t,e,n,i){let r=this,a=new Hn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{let c=l.slice(0);La.getContext().decodeAudioData(c,function(h){e(h)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(t)}}},dp=new Wt,fp=new Wt,ts=new Wt,wu=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ee,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ee,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,ts.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(fs*e.fov*.5)/e.zoom,o,l;fp.elements[12]=-i,dp.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,ts.elements[0]=2*e.near/(l-o),ts.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ts),o=-a*e.aspect-r,l=a*e.aspect-r,ts.elements[0]=2*e.near/(l-o),ts.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ts)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(fp),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(dp)}},Mr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=pp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function pp(){return performance.now()}var es=new w,mp=new ge,pS=new w,ns=new w,Au=class extends ee{constructor(){super(),this.type="AudioListener",this.context=La.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Mr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);let e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(es,mp,pS),ns.set(0,0,-1).applyQuaternion(mp),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(es.x,i),e.positionY.linearRampToValueAtTime(es.y,i),e.positionZ.linearRampToValueAtTime(es.z,i),e.forwardX.linearRampToValueAtTime(ns.x,i),e.forwardY.linearRampToValueAtTime(ns.y,i),e.forwardZ.linearRampToValueAtTime(ns.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(es.x,es.y,es.z),e.setOrientation(ns.x,ns.y,ns.z,n.x,n.y,n.z)}},pc=class extends ee{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}},is=new w,gp=new ge,mS=new w,ss=new w,Ru=class extends pc{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(is,gp,mS),ss.set(0,0,1).applyQuaternion(gp);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(is.x,n),e.positionY.linearRampToValueAtTime(is.y,n),e.positionZ.linearRampToValueAtTime(is.z,n),e.orientationX.linearRampToValueAtTime(ss.x,n),e.orientationY.linearRampToValueAtTime(ss.y,n),e.orientationZ.linearRampToValueAtTime(ss.z,n)}else e.setPosition(is.x,is.y,is.z),e.setOrientation(ss.x,ss.y,ss.z)}},Cu=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},mc=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;let o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){ge.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let a=this._workIndex*r;ge.multiplyQuaternionsFlat(t,a,t,e,t,n),ge.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]+t[n+a]*i}}},bd="\\[\\]\\.:\\/",gS=new RegExp("["+bd+"]","g"),Ed="[^"+bd+"]",vS="[^"+bd.replace("\\.","")+"]",xS=/((?:WC+[\/:])*)/.source.replace("WC",Ed),_S=/(WCOD+)?/.source.replace("WCOD",vS),yS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ed),MS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ed),SS=new RegExp("^"+xS+_S+yS+MS+"$"),bS=["material","materials","bones","map"],Iu=class{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gS,"")}static parseTrackName(t){let e=SS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);bS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Iu;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=xn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=t.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],f=d.uuid,m=e[f];if(m===void 0){m=l++,e[f]=m,t.push(d);for(let v=0,g=a;v!==g;++v)r[v].push(new he(d,n[v],i[v]))}else if(m<c){o=t[m];let v=--c,g=t[v];e[g.uuid]=m,t[m]=g,e[f]=v,t[v]=d;for(let p=0,y=a;p!==y;++p){let x=r[p],_=x[v],A=x[m];x[m]=_,A===void 0&&(A=new he(d,n[p],i[p])),x[v]=A}}else t[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,u=e[c];if(u!==void 0&&u>=r){let h=r++,d=t[h];e[d.uuid]=u,t[u]=d,e[c]=h,t[h]=l;for(let f=0,m=i;f!==m;++f){let v=n[f],g=v[h],p=v[u];v[u]=g,v[h]=p}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],u=c.uuid,h=e[u];if(h!==void 0)if(delete e[u],h<r){let d=--r,f=t[d],m=--a,v=t[m];e[f.uuid]=h,t[h]=f,e[v.uuid]=d,t[d]=v,t.pop();for(let g=0,p=i;g!==p;++g){let y=n[g],x=y[d],_=y[m];y[h]=x,y[d]=_,y.pop()}}else{let d=--a,f=t[d];d>0&&(e[f.uuid]=h),t[h]=f,t.pop();for(let m=0,v=i;m!==v;++m){let g=n[m];g[h]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(h);for(let d=u,f=l.length;d!==f;++d){let m=l[d];h[d]=new he(m,t,e)}return h}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=t[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},gc=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,a=r.length,o=new Array(a),l={endingStart:ls,endingEnd:ls};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let a=this._updateTime(e),o=this._updateWeight(t);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Tc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,a=n===rm;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===im){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){let o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=cs,i.endingEnd=cs):(t?i.endingStart=this.zeroSlopeAtStart?cs:ls:i.endingStart=ia,e?i.endingEnd=this.zeroSlopeAtEnd?cs:ls:i.endingEnd=ia)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}},ES=new Float32Array(1),Lu=class extends Rn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let v=e&&e._propertyBindings[h].binding.parsedPath;m=new mc(he.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{let o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;let h=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Aa(new Float32Array(2),new Float32Array(2),1,ES),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,a=typeof t=="string"?Ps.findByName(i,t):t,o=a!==null?a.uuid:t,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Tc),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new gc(this,a,e,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ps.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Du=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},TS=0,Uu=class extends Rn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:TS++}),this.name="",this.usage=sa,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},Nu=class extends mr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Fu=class{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},vp=new Wt,Ou=class{constructor(t,e,n=0,i=1/0){this.ray=new ki(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vp),this}intersectObject(t,e=!0,n=[]){return Bu(t,this,n,e),n.sort(xp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Bu(t[i],this,n,e);return n.sort(xp),n}};function xp(s,t){return s.distance-t.distance}function Bu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Bu(r[a],t,e,!0)}}var ku=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Hu=class{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},zu=class s{constructor(t,e,n,i){s.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}},_p=new st,Vu=class{constructor(t=new st(1/0,1/0),e=new st(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_p.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_p).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yp=new w,Io=new w,Gu=class{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){yp.subVectors(t,this.start),Io.subVectors(this.end,this.start);let n=Io.dot(Io),r=Io.dot(yp)/n;return e&&(r=Se(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Mp=new w,Wu=class extends ee{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new $t,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,u=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Lt(i,3));let r=new qe({fog:!1,toneMapped:!1});this.cone=new Cn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Mp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Mp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Fi=new w,Po=new Wt,Uh=new Wt,qu=class extends Cn{constructor(t){let e=Um(t),n=new $t,i=[],r=[],a=new St(0,0,1),o=new St(0,1,0);for(let c=0;c<e.length;c++){let u=e[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Lt(i,3)),n.setAttribute("color",new Lt(r,3));let l=new qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Uh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){let o=e[r];o.parent&&o.parent.isBone&&(Po.multiplyMatrices(Uh,o.matrixWorld),Fi.setFromMatrixPosition(Po),i.setXYZ(a,Fi.x,Fi.y,Fi.z),Po.multiplyMatrices(Uh,o.parent.matrixWorld),Fi.setFromMatrixPosition(Po),i.setXYZ(a+1,Fi.x,Fi.y,Fi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Um(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Um(s.children[e]));return t}var Xu=class extends it{constructor(t,e,n){let i=new Xe(e,4,2),r=new xe({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},wS=new w,Sp=new St,bp=new St,$u=class extends ee{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new wa(e);i.rotateY(Math.PI*.5),this.material=new xe({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Xt(a,3)),this.add(new it(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");Sp.copy(this.light.color),bp.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?Sp:bp;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(wS.setFromMatrixPosition(this.light.matrixWorld).negate())}},Yu=class extends Cn{constructor(t=10,e=10,n=4473924,i=8947848){n=new St(n),i=new St(i);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=e;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let u=new $t;u.setAttribute("position",new Lt(l,3)),u.setAttribute("color",new Lt(c,3));let h=new qe({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Zu=class extends Cn{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new St(r),a=new St(a);let o=[],l=[];if(e>1)for(let h=0;h<e;h++){let d=h/e*(Math.PI*2),f=Math.sin(d)*t,m=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,m);let v=h&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){let d=h&1?r:a,f=t-t/n*h;for(let m=0;m<i;m++){let v=m/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f;o.push(g,0,p),l.push(d.r,d.g,d.b),v=(m+1)/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f,o.push(g,0,p),l.push(d.r,d.g,d.b)}}let c=new $t;c.setAttribute("position",new Lt(o,3)),c.setAttribute("color",new Lt(l,3));let u=new qe({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Ep=new w,Lo=new w,Tp=new w,Ju=class extends ee{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new $t;i.setAttribute("position",new Lt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new qe({fog:!1,toneMapped:!1});this.lightPlane=new Kn(i,r),this.add(this.lightPlane),i=new $t,i.setAttribute("position",new Lt([0,0,0,0,0,1],3)),this.targetLine=new Kn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ep.setFromMatrixPosition(this.light.matrixWorld),Lo.setFromMatrixPosition(this.light.target.matrixWorld),Tp.subVectors(Lo,Ep),this.lightPlane.lookAt(Lo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Lo),this.targetLine.scale.z=Tp.length()}},Do=new w,Me=new dr,Ku=class extends Cn{constructor(t){let e=new $t,n=new qe({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){l(m),l(v)}function l(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}e.setAttribute("position",new Lt(i,3)),e.setAttribute("color",new Lt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new St(16755200),u=new St(16711680),h=new St(43775),d=new St(16777215),f=new St(3355443);this.setColors(c,u,h,d,f)}setColors(t,e,n,i,r){let o=this.geometry.getAttribute("color");o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){let t=this.geometry,e=this.pointMap,n=1,i=1;Me.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),be("c",e,t,Me,0,0,-1),be("t",e,t,Me,0,0,1),be("n1",e,t,Me,-n,-i,-1),be("n2",e,t,Me,n,-i,-1),be("n3",e,t,Me,-n,i,-1),be("n4",e,t,Me,n,i,-1),be("f1",e,t,Me,-n,-i,1),be("f2",e,t,Me,n,-i,1),be("f3",e,t,Me,-n,i,1),be("f4",e,t,Me,n,i,1),be("u1",e,t,Me,n*.7,i*1.1,-1),be("u2",e,t,Me,-n*.7,i*1.1,-1),be("u3",e,t,Me,0,i*2,-1),be("cf1",e,t,Me,-n,0,1),be("cf2",e,t,Me,n,0,1),be("cf3",e,t,Me,0,-i,1),be("cf4",e,t,Me,0,i,1),be("cn1",e,t,Me,-n,0,-1),be("cn2",e,t,Me,n,0,-1),be("cn3",e,t,Me,0,-i,-1),be("cn4",e,t,Me,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function be(s,t,e,n,i,r,a){Do.set(i,r,a).unproject(n);let o=t[s];if(o!==void 0){let l=e.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Do.x,Do.y,Do.z)}}var Uo=new We,Qu=class extends Cn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new $t;r.setIndex(new Xt(n,1)),r.setAttribute("position",new Xt(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Uo.setFromObject(this.object),Uo.isEmpty())return;let e=Uo.min,n=Uo.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},ju=class extends Cn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new $t;r.setIndex(new Xt(n,1)),r.setAttribute("position",new Lt(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},td=class extends Kn{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new $t;a.setAttribute("position",new Lt(r,3)),a.computeBoundingSphere(),super(a,new qe({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new $t;l.setAttribute("position",new Lt(o,3)),l.computeBoundingSphere(),this.add(new it(l,new xe({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},wp=new w,No,Nh,ed=class extends ee{constructor(t=new w(0,0,1),e=new w(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",No===void 0&&(No=new $t,No.setAttribute("position",new Lt([0,0,0,0,1,0],3)),Nh=new ne(0,.5,1,5,1),Nh.translate(0,-.5,0)),this.position.copy(e),this.line=new Kn(No,new qe({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new it(Nh,new xe({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{wp.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(wp,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},nd=class extends Cn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new $t;i.setAttribute("position",new Lt(e,3)),i.setAttribute("color",new Lt(n,3));let r=new qe({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new St,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},id=class{constructor(){this.type="ShapePath",this.color=new St,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ss,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let y=[];for(let x=0,_=p.length;x<_;x++){let A=p[x],T=new xi;T.curves=A.curves,y.push(T)}return y}function n(p,y){let x=y.length,_=!1;for(let A=x-1,T=0;T<x;A=T++){let C=y[A],I=y[T],b=I.x-C.x,S=I.y-C.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(C=y[T],b=-b,I=y[A],S=-S),p.y<C.y||p.y>I.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{let P=S*(p.x-C.x)-b*(p.y-C.y);if(P===0)return!0;if(P<0)continue;_=!_}}else{if(p.y!==C.y)continue;if(I.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=I.x)return!0}}return _}let i=Yn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l,c=[];if(r.length===1)return o=r[0],l=new xi,l.curves=o.curves,c.push(l),c;let u=!i(r[0].getPoints());u=t?!u:u;let h=[],d=[],f=[],m=0,v;d[m]=void 0,f[m]=[];for(let p=0,y=r.length;p<y;p++)o=r[p],v=o.getPoints(),a=i(v),a=t?!a:a,a?(!u&&d[m]&&m++,d[m]={s:new xi,p:v},d[m].s.curves=o.curves,u&&m++,f[m]=[]):f[m].push({h:o,p:v[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,y=0;for(let x=0,_=d.length;x<_;x++)h[x]=[];for(let x=0,_=d.length;x<_;x++){let A=f[x];for(let T=0;T<A.length;T++){let C=A[T],I=!0;for(let b=0;b<d.length;b++)n(C.p,d[b].p)&&(x!==b&&y++,I?(I=!1,h[b].push(C)):p=!0);I&&h[x].push(C)}}y>0&&p===!1&&(f=h)}let g;for(let p=0,y=d.length;p<y;p++){l=d[p].s,c.push(l),g=f[p];for(let x=0,_=g.length;x<_;x++)l.holes.push(g[x].h)}return c}},sd=class extends Rn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}},rd=class extends yn{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var dn=1295200304,Rc=2200,Tr=new w(0,-2650,0),AS=.34,wd=.0026,Nm=Math.PI/2,Fm=wd*.62,Om=.35,RS=.86,CS=1.006,Wm=new w(.49,-.1,-.866).normalize(),IS=9e3,Bm=3e3,km={x:5200,y:1050},PS=1.055,LS=1.25,Hm=new St(4888298),zm=new St(16751178),DS=.62,US=132106,Vm=7200,Gm=3e3,Cc=12e3,Td=15e3,Fa=760,jn={x:1900,y:1150,z:1900,cy:120,cz:170},qm=1024,Xm=512,NS=2048,FS=1024,OS=2048,BS=1024,kS=1024,HS=512,zS=16773855,VS=3.1,GS=3823220,WS=2766404,qS=.95,XS=2767437,$S=.22,YS=2380414,ZS=.8;function Ti(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Oa(s){return s<0?0:s>1?1:s}function ke(s,t,e){return s+(t-s)*e}function Pn(s,t,e){let n=Oa((e-s)/(t-s));return n*n*(3-2*n)}function JS(s,t){let e=s*Math.PI/180,n=t*Math.PI/180;return new w(Math.cos(e)*Math.cos(n),Math.sin(e),Math.cos(e)*Math.sin(n))}function Ic(s){let t=Ti(s),e=new Uint8Array(512),n=new Float32Array(256),i=new Uint8Array(256);for(let r=0;r<256;r++)i[r]=r;for(let r=255;r>0;r--){let a=Math.floor(t()*(r+1)),o=i[r];i[r]=i[a],i[a]=o}for(let r=0;r<512;r++)e[r]=i[r&255];for(let r=0;r<256;r++)n[r]=t();return function(r,a,o){let l=Math.floor(r),c=Math.floor(a),u=Math.floor(o),h=r-l,d=a-c,f=o-u,m=h*h*(3-2*h),v=d*d*(3-2*d),g=f*f*(3-2*f),p=l&255,y=c&255,x=u&255,_=p+1&255,A=y+1&255,T=x+1&255,C=n[e[e[e[p]+y]+x]],I=n[e[e[e[_]+y]+x]],b=n[e[e[e[p]+A]+x]],S=n[e[e[e[_]+A]+x]],P=n[e[e[e[p]+y]+T]],B=n[e[e[e[_]+y]+T]],U=n[e[e[e[p]+A]+T]],F=n[e[e[e[_]+A]+T]],G=C+(I-C)*m,H=b+(S-b)*m,j=P+(B-P)*m,W=U+(F-U)*m,ot=G+(H-G)*v,dt=j+(W-j)*v;return ot+(dt-ot)*g}}function Ad(s){let t=Ti(s),e=256,n=new Float32Array(e*e);for(let r=0;r<n.length;r++)n[r]=t();let i=(r,a)=>(r%a+a)%a;return function(r,a,o){let l=Math.floor(r),c=Math.floor(a),u=r-l,h=a-c,d=u*u*(3-2*u),f=h*h*(3-2*h),m=i(l,o),v=i(l+1,o),g=i(c,e),p=i(c+1,e),y=n[g*e+m],x=n[g*e+v],_=n[p*e+m],A=n[p*e+v],T=y+(x-y)*d,C=_+(A-_)*d;return T+(C-T)*f}}function Us(s,t,e,n,i){let r=n*t-.5,a=(1-i)*e-.5,o=Math.floor(r),l=Math.floor(a),c=r-o,u=a-l,h=(o%t+t)%t,d=((o+1)%t+t)%t,f=l<0?0:l>e-1?e-1:l,m=l+1<0?0:l+1>e-1?e-1:l+1,v=s[f*t+h],g=s[f*t+d],p=s[m*t+h],y=s[m*t+d],x=v+(g-v)*c,_=p+(y-p)*c;return x+(_-x)*u}var Rd=.545,KS=[{lat:55,lon:0,radius:.52,strength:.2},{lat:32,lon:68,radius:.4,strength:.16},{lat:64,lon:-74,radius:.38,strength:.15},{lat:-18,lon:42,radius:.42,strength:.14},{lat:-48,lon:-96,radius:.34,strength:.12},{lat:8,lon:-152,radius:.4,strength:.13},{lat:72,lon:152,radius:.3,strength:.12},{lat:-40,lon:132,radius:.3,strength:.11},{lat:24,lon:-25,radius:.28,strength:.1}];function QS(){let s=qm,t=Xm,e=new Float32Array(s*t),n=new Float32Array(s*t),i=new Float32Array(s*t),r=Ic(dn^439041101),a=Ic(dn^1584364171),o=Ic(dn^2618105391),l=Ic(dn^1061837676),c=KS.map(u=>({dir:JS(u.lat,u.lon),cosRadius:Math.cos(u.radius),strength:u.strength}));for(let u=0;u<t;u++){let h=(.5-(u+.5)/t)*Math.PI,d=Math.cos(h),f=Math.sin(h),m=Math.abs(h),v=.115*Math.exp(-Math.pow(h/.13,2))-.15*Math.exp(-Math.pow((m-.46)/.13,2))+.078*Math.exp(-Math.pow((m-.95)/.24,2))+.05*Pn(1.08,1.42,m);for(let g=0;g<s;g++){let p=((g+.5)/s-.5)*Math.PI*2,y=d*Math.cos(p),x=f,_=d*Math.sin(p),A=0,T=.5,C=1.45;for(let H=0;H<5;H++)A+=T*r(y*C+11.3,x*C-7.1,_*C+3.7),T*=.5,C*=2.05;A/=.96875;for(let H=0;H<c.length;H++){let j=c[H],W=y*j.dir.x+x*j.dir.y+_*j.dir.z;if(W>j.cosRadius){let ot=(W-j.cosRadius)/(1-j.cosRadius);A+=j.strength*ot*ot*(3-2*ot)}}e[u*s+g]=A;let I=0,b=.5,S=2.2;for(let H=0;H<3;H++)I+=b*a(y*S+11.3,x*S-2.2,_*S+6.1),b*=.5,S*=2.1;n[u*s+g]=I/.875;let P=l(y*2.1+3.1,x*2.1-9.2,_*2.1+5.5),B=l(y*2.1+12.7,x*2.1+4.4,_*2.1-7.9),U=0,F=.5,G=2.6;for(let H=0;H<5;H++)U+=F*o(y*G+(P-.5)*2.4,x*G+(B-.5)*2.4,_*G),F*=.5,G*=2.1;i[u*s+g]=U/.96875+v}}return{height:e,moisture:n,cloud:i,W:s,H:t}}function jS(s){let t=NS,e=FS,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=i.createImageData(t,e),a=r.data,o=Ad(dn^742215263),{height:l,moisture:c,W:u,H:h}=s,d=Rd;for(let f=0;f<e;f++){let m=1-(f+.5)/e,v=(m-.5)*Math.PI,g=Math.abs(v),p=g*57.29578,y=1.16+.075*(o(.13,m*7,7)-.5)+.04*(o(.41,m*19,11)-.5),x=Pn(y,y+.07,g),_,A,T,C,I,b;p<20?(_=22,A=58,T=30,C=152,I=130,b=84):p<40?(_=30,A=64,T=34,C=164,I=140,b=92):p<56?(_=30,A=60,T=36,C=140,I=126,b=88):p<68?(_=38,A=60,T=42,C=116,I=112,b=88):(_=66,A=72,T=66,C=98,I=98,b=88);for(let S=0;S<t;S++){let P=(S+.5)/t,B=Pn(1.34,.74,g),U=o(P*12,m*6,12)-.5,F=o(P*24,m*12,24)-.5,G=o(P*48,m*24,48)-.5,H=o(P*96,m*48,96)-.5,j=o(P*192,m*96,192)-.5,W=(U*.28+F*.26+G*.24+H*.14+j*.08)*B,ot=Us(l,u,h,P,m),dt=Us(c,u,h,P,m),ct=ot+W*.085-d,ht,V,J;if(ct<=0){let rt=Oa(-ct/.045),Pt=Math.pow(1-rt,1.35);ht=2+21*Pt,V=9+58*Pt,J=26+48*Pt;let Bt=W*20;if(ht+=Bt*.45,V+=Bt*.95,J+=Bt*.75,x>.001){let Ut=x*(.55+.45*(W+.5));ht=ke(ht,168,Ut),V=ke(V,190,Ut),J=ke(J,204,Ut)}}else{let rt=Oa(ct/.32),Pt=Oa(Pn(.36,.62,dt)+F*.2);ht=ke(C,_,Pt),V=ke(I,A,Pt),J=ke(b,T,Pt);let Bt=W*55;ht+=Bt*1.15,V+=Bt*1,J+=Bt*.62;let Ut=Pn(.46,.88,rt)*.7;ht=ke(ht,106,Ut),V=ke(V,99,Ut),J=ke(J,92,Ut);let Dt=Pn(.96,1,rt)*Pn(.55,1,g)*.7;ht=ke(ht,224,Dt),V=ke(V,230,Dt),J=ke(J,236,Dt);let Q=Pn(.014,0,ct);ht=ke(ht,146,Q*.32),V=ke(V,130,Q*.32),J=ke(J,100,Q*.32);let at=x*(.78+.22*(W+.5));ht=ke(ht,226,at),V=ke(V,232,at),J=ke(J,240,at)}let _t=(f*t+S)*4;a[_t]=ht<0?0:ht>255?255:ht,a[_t+1]=V<0?0:V>255?255:V,a[_t+2]=J<0?0:J>255?255:J,a[_t+3]=255}}return i.putImageData(r,0,0),n}function tb(s){let t=kS,e=HS,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=i.createImageData(t,e),a=r.data,o=Ad(dn^2009191397),{cloud:l,W:c,H:u}=s;for(let h=0;h<e;h++){let d=1-(h+.5)/e,f=Math.abs((d-.5)*Math.PI),m=Pn(1.45,1.05,f)*.6+.4;for(let v=0;v<t;v++){let g=(v+.5)/t,p=Us(l,c,u,g,d),y=o(g*96,d*48,96)-.5,x=o(g*192,d*96,192)-.5,_=(y*.65+x*.35)*m,A=Pn(.575,.8,p+_*.1);A*=.85+.3*_,A=Oa(A);let T=(h*t+v)*4;a[T]=255,a[T+1]=252,a[T+2]=248,a[T+3]=Math.round(A*255)}}return i.putImageData(r,0,0),n}function eb(s){let t=OS,e=BS,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=i.createImageData(t,e),a=r.data,o=Ti(dn^305441741),l=Ad(dn^2343432205),{height:c,moisture:u,W:h,H:d}=s,f=Rd;function m(y,x,_,A,T){if(y<0||x<0||y>=t||x>=e)return;let C=(x*t+y)*4,I=a[C]+_;a[C]=I>255?255:I,I=a[C+1]+A,a[C+1]=I>255?255:I,I=a[C+2]+T,a[C+2]=I>255?255:I,a[C+3]=255}for(let y=0;y<e;y+=1){let x=1-(y+.5)/e,_=Math.abs((x-.5)*Math.PI),A=.3+.7*Math.exp(-Math.pow((_-.72)/.52,2));for(let T=0;T<t;T++){let C=(T+.5)/t,I=Us(c,h,d,C,x);if(I<=f)continue;let b=I-f,S=1-Pn(.004,.07,b),P=Us(u,h,d,C,x),B=l(C*8+3.3,x*4+7.7,8),U=.4+2.4*A*(.35+.65*S)*(.45+.55*P)*(.45+.55*B),F=(y*t+T)*4;a[F]=Math.min(255,a[F]+U*.9),a[F+1]=Math.min(255,a[F+1]+U*.62),a[F+2]=Math.min(255,a[F+2]+U*.34),a[F+3]=255}}let v=15e4,g=1.2;for(let y=0;y<v;y++){let x=o(),_=o(),A=Us(c,h,d,x,_);if(A<=f)continue;let T=A-f,C=(_-.5)*Math.PI,I=Math.abs(C);if(I>g)continue;let b=Us(u,h,d,x,_),S=1-Pn(.005,.085,T),P=.16+.84*Math.exp(-Math.pow((I-.72)/.55,2)),B=l(x*8+3.3,_*4+7.7,8),U=.035+.62*S*P*(.4+.6*b)*(.4+.6*B);if(o()>U)continue;let F=Math.min(t-1,Math.floor(x*t)),G=Math.min(e-1,Math.floor((1-_)*e)),H=Math.pow(o(),2),j=2+Math.floor(o()*(4+16*H)),W=.45+.55*o(),ot=o();for(let dt=0;dt<j;dt++){let et=1.5+11*H,ct=Math.round((o()-.5)*2*et),ht=Math.round((o()-.5)*2*et),V=(95+160*H)*W*(.6+.4*o()),J=V,_t=V*(ot>.82?.98:.72+.16*ot),rt=V*(ot>.82?.92:.34+.22*ot);m(F+ct,G+ht,J,_t,rt),m(F+ct+1,G+ht,J*.3,_t*.3,rt*.3),m(F+ct-1,G+ht,J*.3,_t*.3,rt*.3),m(F+ct,G+ht+1,J*.3,_t*.3,rt*.3),m(F+ct,G+ht-1,J*.3,_t*.3,rt*.3)}if(H>.5){let dt=Math.round(6+18*H);for(let et=-dt;et<=dt;et++)for(let ct=-dt;ct<=dt;ct++){let ht=Math.sqrt(ct*ct+et*et)/dt;if(ht>=1)continue;let V=(1-ht)*(1-ht)*30*H;m(F+ct,G+et,V,V*.62,V*.34)}}}let p=[{lat:52,lon:-8,size:1},{lat:47,lon:12,size:.85},{lat:58,lon:-22,size:.75},{lat:44,lon:30,size:.7},{lat:61,lon:4,size:.62},{lat:50,lon:-36,size:.55},{lat:36,lon:18,size:.9},{lat:40,lon:-18,size:.68}];for(let y of p){let x=y.lat*Math.PI/180,_=y.lon*Math.PI/180,A=Math.floor((_/(Math.PI*2)+.5)*t),T=Math.floor((.5-x/Math.PI)*e),C=y.size,I=Math.floor(180+320*C),b=Math.round(10+22*C);for(let S=-b;S<=b;S++)for(let P=-b;P<=b;P++){let B=Math.sqrt(P*P+S*S)/b;if(B>=1)continue;let U=(1-B)*(1-B)*26*C;m(A+P,T+S,U,U*.6,U*.32)}for(let S=0;S<I;S++){let P=o()*Math.PI*2,B=Math.pow(o(),.55)*(12+22*C),U=Math.round(Math.cos(P)*B),F=Math.round(Math.sin(P)*B*.72),G=(130+125*o())*(.7+.3*C);m(A+U,T+F,G,G*.74,G*.4),m(A+U+1,T+F,G*.28,G*.21,G*.11)}}for(let y=3;y<a.length;y+=4)a[y]=255;return i.putImageData(r,0,0),n}function nb(s){let t=qm,e=Xm,n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d"),r=i.createImageData(t,e),a=r.data,{height:o}=s,l=Rd,c=26,u=h=>h>l?h:l;for(let h=0;h<e;h++){let d=h>0?h-1:h,f=h<e-1?h+1:h,m=Math.abs((.5-(h+.5)/e)*Math.PI);for(let v=0;v<t;v++){let g=(v-1+t)%t,p=(v+1)%t,y=u(o[h*t+v]),x=u(o[h*t+g]),_=u(o[h*t+p]),A=u(o[d*t+v]),T=u(o[f*t+v]),C=(_-x)*.5*c,I=(A-T)*.5*c,b=-C,S=-I,P=1,B=1/Math.sqrt(b*b+S*S+P*P);b*=B,S*=B,P*=B;let U=o[h*t+v],F=0;U<=l?F=255:m>1.14&&(F=70);let G=(h*t+v)*4;a[G]=Math.round((b*.5+.5)*255),a[G+1]=Math.round((S*.5+.5)*255),a[G+2]=Math.round((P*.5+.5)*255),a[G+3]=F}}return i.putImageData(r,0,0),n}function ib(s){let t=document.createElement("canvas");t.width=s,t.height=s;let e=t.getContext("2d"),n=s/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.022,"rgba(255,253,246,1)"),i.addColorStop(.058,"rgba(255,243,218,0.95)"),i.addColorStop(.105,"rgba(255,226,178,0.55)"),i.addColorStop(.17,"rgba(255,206,142,0.27)"),i.addColorStop(.27,"rgba(255,187,110,0.11)"),i.addColorStop(.44,"rgba(255,172,102,0.04)"),i.addColorStop(.7,"rgba(120,175,255,0.018)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,s,s);let r=e.createRadialGradient(n,n,0,n,n,s*.045);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.45,"rgba(255,255,252,0.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(0,0,s,s),e.save(),e.translate(n,n),e.scale(.98,.14);let a=e.createRadialGradient(0,0,0,0,0,n);return a.addColorStop(0,"rgba(235,246,255,0.50)"),a.addColorStop(.18,"rgba(190,225,255,0.24)"),a.addColorStop(.5,"rgba(130,190,255,0.06)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(-n,-n,s,s*2),e.restore(),t}function sb(){let e=document.createElement("canvas");e.width=1024,e.height=256;let n=e.getContext("2d");n.save(),n.translate(1024/2,256/2),n.scale(3.6,1);let i=n.createRadialGradient(0,0,0,0,0,116);return i.addColorStop(0,"rgba(215,236,255,0.55)"),i.addColorStop(.08,"rgba(160,208,255,0.26)"),i.addColorStop(.3,"rgba(92,156,255,0.07)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.beginPath(),n.arc(0,0,116,0,Math.PI*2),n.fill(),n.restore(),e}function rb(s){let t=document.createElement("canvas");t.width=s,t.height=s;let e=t.getContext("2d"),n=Ti(dn^1370193437);e.globalCompositeOperation="lighter";let i=[{x:.34,y:.44,r:.3,color:[70,108,210],alpha:.085},{x:.58,y:.34,r:.24,color:[96,88,190],alpha:.07},{x:.47,y:.62,r:.26,color:[40,110,170],alpha:.06},{x:.7,y:.58,r:.18,color:[140,90,170],alpha:.045},{x:.26,y:.66,r:.16,color:[60,90,160],alpha:.05}];for(let r of i){let a=e.createRadialGradient(r.x*s,r.y*s,0,r.x*s,r.y*s,r.r*s),[o,l,c]=r.color;a.addColorStop(0,`rgba(${o},${l},${c},${r.alpha})`),a.addColorStop(.45,`rgba(${o},${l},${c},${r.alpha*.45})`),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(0,0,s,s)}for(let r=0;r<240;r++){let a=n()*s,o=n()*s,l=.015+n()*.05;e.fillStyle=`rgba(200,220,255,${l})`,e.beginPath(),e.arc(a,o,.6+n()*1.1,0,Math.PI*2),e.fill()}return t}function ab(){let e=document.createElement("canvas");e.width=1024,e.height=512;let n=e.getContext("2d"),i=Wm,r=(Math.atan2(i.z,i.x)/(Math.PI*2)+.5)*1024,a=(Math.asin(i.y)/Math.PI+.5)*512,o=r,l=512-a,c=n.createLinearGradient(0,0,0,512);c.addColorStop(0,"#010205"),c.addColorStop(.4,"#02050c"),c.addColorStop(.5,"#071426"),c.addColorStop(.62,"#0b2340"),c.addColorStop(.75,"#12395f"),c.addColorStop(.86,"#1a5e8e"),c.addColorStop(1,"#0a1a2c"),n.fillStyle=c,n.fillRect(0,0,1024,512),n.globalCompositeOperation="lighter";let u=n.createRadialGradient(o,512*.8,0,o,512*.8,512*.55);u.addColorStop(0,"rgba(110,190,255,0.55)"),u.addColorStop(.35,"rgba(60,130,210,0.30)"),u.addColorStop(.75,"rgba(20,60,120,0.12)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(0,512*.42,1024,512*.58);let h=n.createLinearGradient(0,512*.56,0,512*.7);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.55,"rgba(110,190,255,0.10)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(0,512*.56,1024,512*.14);let d=n.createRadialGradient(o,l,0,o,l,120);d.addColorStop(0,"rgba(255,252,240,1)"),d.addColorStop(.06,"rgba(255,236,200,0.95)"),d.addColorStop(.16,"rgba(255,206,140,0.42)"),d.addColorStop(.4,"rgba(255,170,90,0.10)"),d.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=d,n.fillRect(o-130,l-130,260,260),n.globalCompositeOperation="lighter";let f=(o+1024*.5)%1024;for(let m=0;m<90;m++){let v=Ti(dn^24589+m)(),g=f+(v-.5)*1024*.28,p=512*.8+(Ti(dn^1950+m)()-.5)*512*.18,y=2+5*Ti(dn^451+m)(),x=n.createRadialGradient(g,p,0,g,p,y*3);x.addColorStop(0,"rgba(255,190,110,0.28)"),x.addColorStop(1,"rgba(255,150,70,0)"),n.fillStyle=x,n.fillRect(g-y*3,p-y*3,y*6,y*6)}return n.globalCompositeOperation="source-over",e}function Gi(s,{srgb:t=!0,repeat:e=!1,anisotropy:n=4}={}){let i=new Ms(s);return t&&(i.colorSpace=Ie),i.wrapS=e?_n:sn,i.wrapT=sn,i.anisotropy=n,i.minFilter=wn,i.magFilter=Te,i.generateMipmaps=!0,i.needsUpdate=!0,i}var ob=`
varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,lb=`
uniform sampler2D uDayMap;
uniform sampler2D uNightMap;
uniform sampler2D uNormalMap;
uniform sampler2D uCloudMap;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereColor;
uniform vec3 uSunsetColor;
uniform float uCloudDrift;
uniform float uBumpStrength;

varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  vec3 baseNormal = normalize(vWorldNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);

  // \u7403\u9762\u5207\u7EBF\u7A7A\u95F4\uFF1A\u5207\u5411 = \u4E1C\uFF08+u\uFF09\uFF0C\u526F\u5207\u5411 = \u5317\uFF08+v\uFF09
  vec3 tangent = normalize(cross(vec3(0.0, 1.0, 0.0), baseNormal) + vec3(1e-4, 0.0, 0.0));
  vec3 bitangent = normalize(cross(baseNormal, tangent));

  vec4 normalSample = texture2D(uNormalMap, vUv);
  vec2 bump = (normalSample.xy * 2.0 - 1.0) * uBumpStrength;
  vec3 normal = normalize(baseNormal + tangent * bump.x + bitangent * bump.y);
  float oceanMask = normalSample.a;

  float cloudDensity = texture2D(uCloudMap, vUv + vec2(uCloudDrift, 0.0)).a;

  vec3 albedo = texture2D(uDayMap, vUv).rgb;
  albedo *= 1.0 - cloudDensity * 0.42;

  float ndl = dot(normal, uSunDirection);
  float direct = max(ndl, 0.0);
  // \u6668\u660F\u7EBF\u9644\u8FD1\u7528\u4E00\u6BB5\u67D4\u548C\u7684\u201C\u6563\u5C04\u5149\u201D\u8FC7\u6E21\uFF0C\u907F\u514D\u663C\u591C\u8FB9\u7F18\u51FA\u73B0\u751F\u786C\u5207\u8FB9
  float softLight = smoothstep(-0.16, 0.10, ndl);
  float twilight = exp(-ndl * ndl / 0.0225); // \u4EE5\u6668\u660F\u7EBF\u4E3A\u5CF0\u503C\u7684\u6696\u8272\u5E26

  // \u663C\u9762\uFF1A\u504F\u6DF1\u7684\u5199\u5B9E\u5730\u8868\uFF0C\u907F\u514D HUD \u88AB\u9AD8\u4EAE\u5730\u7403\u5403\u6389
  vec3 sunColor = vec3(1.0, 0.955, 0.885);
  vec3 color = albedo * (sunColor * (direct * 1.3 + softLight * 0.10 + 0.014) + vec3(0.007, 0.011, 0.021));
  color += albedo * uSunsetColor * twilight * 0.10;

  // \u6D77\u6D0B\u955C\u9762\u9AD8\u5149\uFF08\u6536\u7D27\u3001\u538B\u6697\uFF0C\u907F\u514D\u8FC7\u66DD\u767D\u6591\uFF09
  vec3 halfDir = normalize(uSunDirection + viewDir);
  float ndh = max(dot(normal, halfDir), 0.0);
  float specular = pow(ndh, 260.0) * oceanMask * smoothstep(-0.02, 0.20, ndl) * 1.15;
  float sheen = pow(ndh, 20.0) * oceanMask * smoothstep(-0.10, 0.28, ndl) * 0.035;
  color += sunColor * (specular + sheen);

  // \u591C\u9762\u57CE\u5E02\u706F\uFF08\u4E91\u5C42\u906E\u6321 + \u6696\u8272\uFF09
  vec3 cityLights = texture2D(uNightMap, vUv).rgb;
  float nightMix = 1.0 - smoothstep(-0.16, 0.12, ndl);
  color += cityLights * vec3(1.0, 0.90, 0.72) * 2.4 * nightMix * (1.0 - cloudDensity * 0.5);

  // \u5730\u7403\u8FB9\u7F18\u5927\u6C14\u6563\u5C04\uFF1A\u663C\u4FA7\u8FB9\u7F18\u5148\u53E0\u4E00\u5C42\u6DE1\u84DD\u8272\u5927\u6C14\u7EB1\uFF0C\u518D\u52A0\u5F3A\u8FB9\u7F18\u5149
  float viewFacing = clamp(dot(baseNormal, viewDir), 0.0, 1.0);
  float fresnel = pow(1.0 - viewFacing, 3.2);
  float sunFacing = smoothstep(-0.5, 0.65, dot(baseNormal, uSunDirection));
  float dayHaze = pow(1.0 - viewFacing, 2.6) * smoothstep(-0.12, 0.5, ndl);
  color = mix(color, uAtmosphereColor * 0.55, clamp(dayHaze * 0.4, 0.0, 0.5));
  vec3 rim = mix(uAtmosphereColor, uSunsetColor, twilight * 0.85);
  color += rim * fresnel * (0.26 + 2.3 * sunFacing);

  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor.rgb += (fract(52.9829189 * fract(0.06711056 * gl_FragCoord.x + 0.00583715 * gl_FragCoord.y)) - 0.5) / 255.0;
}
`,cb=`
varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vWorldNormal = normalize(vWorldPosition - EARTH_CENTER_LITERAL);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,hb=`
uniform sampler2D uCloudMap;
uniform vec3 uSunDirection;
uniform float uDrift;
uniform float uOpacity;

varying vec2 vUv;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

void main() {
  float density = texture2D(uCloudMap, vUv + vec2(uDrift, 0.0)).a;
  if (density < 0.015) discard;

  vec3 normal = normalize(vWorldNormal);
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  float ndl = dot(normal, uSunDirection);
  float day = smoothstep(-0.20, 0.26, ndl);
  float twilight = pow(clamp(1.0 - abs(ndl) * 2.2, 0.0, 1.0), 2.0);
  float rim = pow(1.0 - clamp(dot(normal, viewDir), 0.0, 1.0), 2.2);

  vec3 lit = vec3(1.0, 0.985, 0.96) * (0.022 + 0.97 * day) * (0.86 + 0.14 * density);
  lit = mix(lit, vec3(1.0, 0.52, 0.24) * (0.16 + 0.8 * day), twilight * 0.55);
  lit += vec3(0.5, 0.68, 1.0) * rim * 0.32 * day;
  lit += vec3(1.0, 0.60, 0.28) * (1.0 - day) * density * 0.085; // \u57CE\u5E02\u706F\u4ECE\u4E0B\u65B9\u6620\u4EAE\u591C\u4E91

  float alpha = density * uOpacity * (0.28 + 0.72 * clamp(day + 0.30, 0.0, 1.0));
  gl_FragColor = vec4(lit, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor.rgb += (fract(52.9829189 * fract(0.06711056 * gl_FragCoord.x + 0.00583715 * gl_FragCoord.y)) - 0.5) / 255.0;
}
`,ub=`
varying vec3 vWorldPosition;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,db=`
uniform vec3 uEarthCenter;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereColor;
uniform vec3 uSunsetColor;
uniform float uEarthRadius;
uniform float uShellRadius;
uniform float uRingWidth;   // \u7D27\u8D34\u8FB9\u7F18\u7684\u4EAE\u73AF\u89D2\u5BBD\uFF08\u5F27\u5EA6\uFF09
uniform float uHaloWidth;   // \u5916\u5C42\u67D4\u548C\u5149\u6655\u89D2\u5BBD\uFF08\u5F27\u5EA6\uFF09
uniform float uRingGain;
uniform float uHaloGain;
uniform float uIntensity;

varying vec3 vWorldPosition;

void main() {
  vec3 rayDir = normalize(vWorldPosition - cameraPosition);
  vec3 toCenter = uEarthCenter - cameraPosition;
  float distToCenter = length(toCenter);
  vec3 centerDir = toCenter / distToCenter;

  // \u5C04\u7EBF\u4E0E\u201C\u5730\u5FC3\u65B9\u5411\u201D\u7684\u5939\u89D2\uFF0C\u4EE5\u53CA\u5730\u7403\u8FB9\u7F18\u5BF9\u5E94\u7684\u89D2\u5EA6
  float angle = acos(clamp(dot(rayDir, centerDir), -1.0, 1.0));
  float limbAngle = asin(clamp(uEarthRadius / distToCenter, 0.0, 1.0));
  float above = angle - limbAngle; // >0 \u8868\u793A\u5728\u53EF\u89C1\u8FB9\u7F18\u4E4B\u5916\u7684\u592A\u7A7A\u4FA7

  // \u88AB\u5730\u7403\u672C\u4F53\u6321\u4F4F\u7684\u5C04\u7EBF\uFF08\u7531\u6DF1\u5EA6\u6D4B\u8BD5\u4E5F\u4F1A\u5254\u9664\uFF0C\u8FD9\u91CC\u76F4\u63A5\u4E22\u5F03\u4EE5\u7701\u586B\u5145\u7387\uFF09
  if (above < -0.004) discard;

  // \u76F8\u673A\u5728\u58F3\u5185\u65F6\u4E0D\u5B58\u5728\u8F6E\u5ED3\u786C\u8FB9\uFF1B\u76F8\u673A\u5728\u58F3\u5916\u65F6\u8BA9\u5149\u6655\u5728\u58F3\u5C42\u8FB9\u754C\u524D\u5E73\u6ED1\u8870\u51CF\u5230 0
  float edgeFade = 1.0;
  if (distToCenter > uShellRadius * 0.995) {
    float shellAngle = asin(clamp(uShellRadius / distToCenter, 0.0, 1.0));
    float maxAbove = shellAngle - limbAngle;
    edgeFade = smoothstep(0.0, max(0.05, maxAbove * 0.35), maxAbove - above);
  }

  float ring = exp(-max(above, 0.0) / uRingWidth);
  float halo = exp(-max(above, 0.0) / uHaloWidth);
  float glow = (uRingGain * ring + uHaloGain * halo) * edgeFade;

  // \u8FD1\u4F3C\u7684\u5927\u6C14\u91C7\u6837\u70B9\u6CD5\u7EBF\uFF0C\u7528\u4E8E\u663C\u591C\u4E0E\u6668\u660F\u6696\u8272
  vec3 closest = cameraPosition + rayDir * dot(toCenter, rayDir);
  vec3 normalAt = normalize(closest - uEarthCenter);
  float sunFacing = dot(normalAt, uSunDirection);
  float day = smoothstep(-0.28, 0.42, sunFacing);
  float twilight = pow(clamp(1.0 - abs(sunFacing) * 2.0, 0.0, 1.0), 2.5);
  // \u6696\u8272\u53EA\u51FA\u73B0\u5728\u8D34\u8FB9\u7684\u7A84\u5E26\u91CC\uFF0C\u4E0D\u7ED9\u6574\u7247\u5929\u7A7A\u67D3\u8272
  float limbMask = exp(-max(above, 0.0) / 0.10);

  vec3 color = mix(uAtmosphereColor * 0.12, uAtmosphereColor, day);
  color = mix(color, uSunsetColor, twilight * 0.7 * limbMask);
  float sunBoost = 0.18 + 1.25 * day;

  gl_FragColor = vec4(color * glow * sunBoost * uIntensity, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  // \u8F93\u51FA\u7A7A\u95F4\u6296\u52A8\uFF0C\u6253\u6563\u6697\u90E8\u6E10\u53D8\u8272\u5E26
  gl_FragColor.rgb += (fract(52.9829189 * fract(0.06711056 * gl_FragCoord.x + 0.00583715 * gl_FragCoord.y)) - 0.5) / 255.0;
}
`,fb=`
attribute float aSize;
attribute vec3 aColor;
attribute float aPhase;
attribute float aSpeed;
attribute float aAlpha;

uniform float uTime;
uniform float uPixelRatio;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  float twinkle = 0.72 + 0.28 * sin(uTime * aSpeed + aPhase);
  gl_PointSize = aSize * uPixelRatio;
  vColor = aColor * (0.75 + 0.25 * twinkle);
  vAlpha = aAlpha * twinkle;
}
`,pb=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float a = smoothstep(0.5, 0.04, d);
  if (a <= 0.004) discard;
  gl_FragColor = vec4(vColor, a * vAlpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,mb=`
attribute float aSize;
attribute float aPhase;
attribute float aBrightness;

uniform float uTime;
uniform float uPixelRatio;

varying float vAlpha;

void main() {
  vec3 p = position;
  float s1 = sin(uTime * 0.043 + aPhase * 6.2831853);
  float c1 = cos(uTime * 0.037 + aPhase * 4.1);
  float s2 = sin(uTime * 0.051 + aPhase * 2.7);
  p.x += s1 * 6.0;
  p.y += c1 * 4.0;
  p.z += s2 * 6.0;
  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = aSize * uPixelRatio;
  vAlpha = aBrightness;
}
`,gb=`
varying float vAlpha;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p);
  float a = smoothstep(0.5, 0.12, d);
  if (a <= 0.004) discard;
  gl_FragColor = vec4(vec3(0.62, 0.78, 1.0), a * vAlpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function vb(){let s=Ti(dn^837854663),t=Vm+Gm,e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),l=new w(-.28,.58,.76).normalize(),c=new w(1,0,0).cross(l).normalize(),u=l.clone().cross(c).normalize(),h=new w,d=0,f=(v,g,p,y,x,_)=>{e[d*3]=v.x*g,e[d*3+1]=v.y*g,e[d*3+2]=v.z*g,n[d*3]=y[0],n[d*3+1]=y[1],n[d*3+2]=y[2],i[d]=p,r[d]=s()*Math.PI*2,a[d]=_,o[d]=x,d++};for(let v=0;v<Vm;v++){let g=s()*2-1,p=s()*Math.PI*2,y=Math.sqrt(1-g*g),x=new w(y*Math.cos(p),g,y*Math.sin(p)),_=Cc+s()*(Td-Cc),A=s(),T=1.3+1*s(),C=.3+.42*s();A>.9?(T=2.5+1.5*s(),C=.8+.2*s()):A>.7&&(T=1.7+.8*s(),C=.55+.3*s());let I=s(),b;I>.9?b=[1,.78,.56]:I>.72?b=[.86,.9,1]:b=[.94,.97,1];let S=.55+.45*s();b=[b[0]*S,b[1]*S,b[2]*S],f(x,_,T,b,C,.6+s()*2.4)}for(let v=0;v<Gm;v++){let g=s()*Math.PI*2,p=(s()+s()+s()-1.5)/1.5;h.copy(c).multiplyScalar(Math.cos(g)).addScaledVector(u,Math.sin(g)).addScaledVector(l,p*.11).normalize();let y=Cc+s()*(Td-Cc),x=1+1.2*s(),_=.16+.32*s(),A=.5+.4*s(),T=[.78*A,.86*A,1*A];f(h.clone(),y,x,T,_,.4+s()*1.6)}let m=new $t;return m.setAttribute("position",new Xt(e,3)),m.setAttribute("aColor",new Xt(n,3)),m.setAttribute("aSize",new Xt(i,1)),m.setAttribute("aPhase",new Xt(r,1)),m.setAttribute("aSpeed",new Xt(a,1)),m.setAttribute("aAlpha",new Xt(o,1)),m.boundingSphere=new we(new w,Td+100),m}function xb(){let s=Ti(dn^1790034643),t=new Float32Array(Fa*3),e=new Float32Array(Fa),n=new Float32Array(Fa),i=new Float32Array(Fa);for(let a=0;a<Fa;a++)t[a*3]=(s()*2-1)*jn.x*.5,t[a*3+1]=(s()*2-1)*jn.y*.5+jn.cy,t[a*3+2]=(s()*2-1)*jn.z*.5+jn.cz,e[a]=.7+s()*1.5,n[a]=s(),i[a]=.05+s()*.22;let r=new $t;return r.setAttribute("position",new Xt(t,3)),r.setAttribute("aSize",new Xt(e,1)),r.setAttribute("aPhase",new Xt(n,1)),r.setAttribute("aBrightness",new Xt(i,1)),r.boundingSphere=new we(new w(0,jn.cy,jn.cz),Math.max(jn.x,jn.y,jn.z)),r}function $m({scene:s,renderer:t}={}){if(!s)throw new Error("[M300] createWorld: scene is required");let e=t?t.getPixelRatio():1,n=t&&t.capabilities?Math.min(8,t.capabilities.getMaxAnisotropy()):4,i=s.background,r=s.environment,a=s.environmentIntensity,o=QS(),l=Gi(jS(o),{srgb:!0,repeat:!0,anisotropy:n}),c=Gi(eb(o),{srgb:!0,repeat:!0,anisotropy:n}),u=Gi(tb(o),{srgb:!1,repeat:!0,anisotropy:n}),h=Gi(nb(o),{srgb:!1,repeat:!0,anisotropy:n}),d=Gi(ab(),{srgb:!0,anisotropy:2});d.mapping=ms;let f=Gi(ib(512),{srgb:!0,anisotropy:2}),m=Gi(sb(),{srgb:!0,anisotropy:2}),v=Gi(rb(512),{srgb:!0,anisotropy:2}),g=new ue;g.name="world-root",s.add(g),s.background=new St(US),s.environment=d,s.environmentIntensity=DS;let p=Wm.clone(),y=new ue;y.position.copy(Tr),y.rotation.x=AS,g.add(y);let x=new Xe(Rc,128,64),_=new Re({uniforms:{uDayMap:{value:l},uNightMap:{value:c},uNormalMap:{value:h},uCloudMap:{value:u},uSunDirection:{value:p},uAtmosphereColor:{value:Hm.clone()},uSunsetColor:{value:zm.clone()},uCloudDrift:{value:0},uBumpStrength:{value:.85}},vertexShader:ob,fragmentShader:lb}),A=new it(x,_);A.name="earth",A.frustumCulled=!1,y.add(A);let T=new Xe(Rc*CS,96,48),C=new Re({uniforms:{uCloudMap:{value:u},uSunDirection:{value:p},uDrift:{value:0},uOpacity:{value:RS}},vertexShader:cb.replace("EARTH_CENTER_LITERAL",`vec3(${Tr.x.toFixed(2)}, ${Tr.y.toFixed(2)}, ${Tr.z.toFixed(2)})`),fragmentShader:hb,transparent:!0,depthWrite:!1,side:kn}),I=new it(T,C);I.name="earth-clouds",I.frustumCulled=!1,I.renderOrder=2,y.add(I);let b=[];function S(Dt){let Q=Rc*Dt.scale,at=new Xe(Q,96,48),L=new Re({uniforms:{uEarthCenter:{value:Tr.clone()},uSunDirection:{value:p},uAtmosphereColor:{value:Hm.clone()},uSunsetColor:{value:zm.clone()},uEarthRadius:{value:Rc},uShellRadius:{value:Q},uRingWidth:{value:Dt.ringWidth},uHaloWidth:{value:Dt.haloWidth},uRingGain:{value:Dt.ringGain},uHaloGain:{value:Dt.haloGain},uIntensity:{value:Dt.intensity}},vertexShader:ub,fragmentShader:db,transparent:!0,depthWrite:!1,blending:Ae,side:Ve}),Ct=new it(at,L);return Ct.position.copy(Tr),Ct.frustumCulled=!1,Ct.renderOrder=3,g.add(Ct),b.push(Ct),Ct}S({scale:PS,ringWidth:.022,haloWidth:.22,ringGain:.72,haloGain:.14,intensity:1}),S({scale:LS,ringWidth:.05,haloWidth:.3,ringGain:.14,haloGain:.13,intensity:1});let P=new zn(zS,VS);P.position.copy(p).multiplyScalar(2400),P.target.position.set(0,0,0),g.add(P),g.add(P.target);let B=new ue;B.position.copy(p).multiplyScalar(IS),g.add(B);let U=new Qe({map:f,color:16777215,transparent:!0,blending:Ae,depthWrite:!1,depthTest:!0,opacity:.95}),F=new an(U);F.scale.set(Bm,Bm,1),F.renderOrder=6,B.add(F);let G=new Qe({map:m,color:12376575,transparent:!0,blending:Ae,depthWrite:!1,depthTest:!0,opacity:.22}),H=new an(G);H.scale.set(km.x,km.y,1),H.material.rotation=-.1,H.renderOrder=6,B.add(H);let j=vb(),W=new Re({uniforms:{uTime:{value:0},uPixelRatio:{value:e}},vertexShader:fb,fragmentShader:pb,transparent:!0,depthWrite:!1,blending:Ae}),ot=new Mi(j,W);ot.name="stars",ot.frustumCulled=!1,ot.renderOrder=1,g.add(ot);let dt=[],et=[{dir:new w(-.52,.52,-.68),scale:15e3,rot:.6,color:7180248,opacity:.2},{dir:new w(.28,.78,-.56),scale:11e3,rot:-1.1,color:8220608,opacity:.14},{dir:new w(-.78,.12,-.61),scale:9e3,rot:1.9,color:4161472,opacity:.1}];for(let Dt of et){let Q=new Qe({map:v,color:Dt.color,transparent:!0,blending:Ae,depthWrite:!1,depthTest:!1,opacity:Dt.opacity}),at=new an(Q);at.position.copy(Dt.dir.clone().normalize()).multiplyScalar(13500),at.scale.set(Dt.scale,Dt.scale*.72,1),at.material.rotation=Dt.rot,at.renderOrder=1,g.add(at),dt.push(at)}let ct=xb(),ht=new Re({uniforms:{uTime:{value:0},uPixelRatio:{value:e}},vertexShader:mb,fragmentShader:gb,transparent:!0,depthWrite:!1,blending:Ae}),V=new Mi(ct,ht);V.name="near-dust",V.frustumCulled=!1,V.renderOrder=4,g.add(V);let J=new _r(GS,WS,qS);g.add(J);let _t=new yr(XS,$S);g.add(_t);let rt=new zn(YS,ZS);rt.position.set(120,-1600,-300),rt.target.position.set(0,0,0),g.add(rt),g.add(rt.target);let Pt=0;function Bt(Dt,Q,at,L){let Ct=Number.isFinite(Dt)?Math.min(Math.max(Dt,0),.1):.016,lt=Number.isFinite(Q)?Q:Pt+=Ct,At=Nm+lt*wd,mt=Nm+Om+lt*Fm;A.rotation.y=At,I.rotation.y=mt;let zt=(Om+lt*(Fm-wd))/(Math.PI*2);_.uniforms.uCloudDrift.value=zt,C.uniforms.uDrift.value=zt,W.uniforms.uTime.value=lt,ht.uniforms.uTime.value=lt}function Ut(){s.remove(g),s.background=i,s.environment=r,s.environmentIntensity=a,d.dispose(),x.dispose(),T.dispose();for(let Dt of b)Dt.geometry.dispose(),Dt.material.dispose();j.dispose(),ct.dispose(),_.dispose(),C.dispose(),W.dispose(),ht.dispose(),U.dispose(),G.dispose();for(let Dt of dt)Dt.material.dispose();l.dispose(),c.dispose(),u.dispose(),h.dispose(),f.dispose(),m.dispose(),v.dispose()}return{update:Bt,sunDirection:p,dispose:Ut}}function Ym(){let h=null,d=null,f=null,m=null,v=null,g=!1,p=!1,y=!1,x=null,_=0,A=0,T=0,C=0,I=[],b=[],S=0,P=Object.create(null),B=new Set,U=()=>h?h.currentTime:0,F=z=>z<0?0:z>1?1:z,G=(z,E)=>z+Math.random()*(E-z);function H(z,E){if(typeof setTimeout!="function"){try{z()}catch{}return 0}let M=setTimeout(()=>{B.delete(M);try{z()}catch{}},Math.max(0,E));return B.add(M),M}function j(z,E){try{if(typeof z.cancelAndHoldAtTime=="function"){z.cancelAndHoldAtTime(E);return}}catch{}try{z.cancelScheduledValues(E),z.setValueAtTime(z.value,E)}catch{}}function W(z,E,M,D,q){let K=E+Math.max(D,0)+Math.max(q,0);return z.setValueAtTime(1e-4,E),z.linearRampToValueAtTime(Math.max(M,2e-4),E+Math.max(D,.001)),z.exponentialRampToValueAtTime(1e-4,K),K}function ot(){return h!==null&&g&&S<48}function dt(z){if(typeof h.createStereoPanner!="function")return null;let E=h.createStereoPanner();return E.pan.value=z,E}function et(z){if(!ot())return 0;let E=z||{},M=E.type||"sine",D=Math.max(Number(E.freq)||440,1),q=Number(E.glide)||0,K=Math.max(Number(E.peak)||.05,2e-4),Y=Math.max(Number(E.attack)||.005,.001),Tt=Math.max(Number(E.decay)||.2,.001),ft=Math.max(Number(E.delay)||0,0),gt=E.filter||null,Vt=E.dest||d,nt=U()+.01+ft,ut=h.createOscillator(),Rt=h.createGain();Rt.gain.value=1e-4,ut.type=M,ut.frequency.setValueAtTime(D,nt),q>0&&q!==1&&ut.frequency.exponentialRampToValueAtTime(Math.max(D*q,1),nt+Y+Tt*.9);let It=ut;if(gt){let kt=h.createBiquadFilter();kt.type=gt.type||"lowpass",kt.frequency.value=Math.max(Number(gt.freq)||1200,10),kt.Q.value=Number.isFinite(gt.q)?gt.q:.7,ut.connect(kt),It=kt}let vt=W(Rt.gain,nt,K,Y,Tt);return It.connect(Rt),Rt.connect(Vt),S+=1,ut.onended=()=>{S=Math.max(0,S-1);try{ut.disconnect()}catch{}try{It.disconnect()}catch{}try{Rt.disconnect()}catch{}},ut.start(nt),ut.stop(vt+.02),vt-U()}function ct(z){if(!ot()||!v)return 0;let E=z||{},M=Math.max(Number(E.peak)||.05,2e-4),D=Math.max(Number(E.attack)||.005,.001),q=Math.max(Number(E.decay)||.15,.001),K=Math.max(Number(E.delay)||0,0),Y=E.filterType||"lowpass",Tt=Math.max(Number(E.freq)||800,10),ft=Math.max(Number(E.freqEnd)||0,0),gt=Number.isFinite(E.q)?E.q:.8,Vt=E.dest||d,nt=U()+.01+K,ut=h.createBufferSource();ut.buffer=v,ut.loop=!0,ut.playbackRate.value=G(.9,1.1);let Rt=h.createBiquadFilter();Rt.type=Y,Rt.frequency.setValueAtTime(Tt,nt),ft>0&&Rt.frequency.exponentialRampToValueAtTime(ft,nt+D+q),Rt.Q.value=gt;let It=h.createGain();It.gain.value=1e-4;let vt=W(It.gain,nt,M,D,q);return ut.connect(Rt),Rt.connect(It),It.connect(Vt),S+=1,ut.onended=()=>{S=Math.max(0,S-1);try{ut.disconnect()}catch{}try{Rt.disconnect()}catch{}try{It.disconnect()}catch{}},ut.start(nt,G(0,2*.5)),ut.stop(vt+.02),vt-U()}function ht(){let z=Math.max(1,Math.floor(h.sampleRate*2));v=h.createBuffer(1,z,h.sampleRate);let E=v.getChannelData(0);for(let M=0;M<z;M+=1)E[M]=Math.random()*2-1}function V(){let z=h.createBufferSource();z.buffer=v,z.loop=!0;let E=h.createBiquadFilter();E.type="highpass",E.frequency.value=850,E.Q.value=.5;let M=h.createBiquadFilter();M.type="bandpass",M.frequency.value=2600,M.Q.value=.8;let D=h.createGain();D.gain.value=0,z.connect(E),E.connect(M),M.connect(D),D.connect(d),z.start(),I.push(z),b.push({param:D.gain,group:"rcs",scale:.24,applied:-1});let q=h.createBufferSource();q.buffer=v,q.loop=!0;let K=h.createBiquadFilter();K.type="lowpass",K.frequency.value=180,K.Q.value=.7;let Y=h.createBiquadFilter();Y.type="highpass",Y.frequency.value=28,Y.Q.value=.5;let Tt=h.createGain();Tt.gain.value=0,q.connect(K),K.connect(Y),Y.connect(Tt),Tt.connect(d),q.start(),I.push(q),b.push({param:Tt.gain,group:"main",scale:.62,applied:-1});let ft=h.createBufferSource();ft.buffer=v,ft.loop=!0;let gt=h.createBiquadFilter();gt.type="bandpass",gt.frequency.value=430,gt.Q.value=1.1;let Vt=h.createGain();Vt.gain.value=0,ft.connect(gt),gt.connect(Vt),Vt.connect(d),ft.start(),I.push(ft),b.push({param:Vt.gain,group:"main",scale:.22,applied:-1});let nt=h.createGain();nt.gain.value=0;let ut=h.createBiquadFilter();ut.type="lowpass",ut.frequency.value=130,ut.Q.value=.6;let Rt=[{freq:46,amp:.5,detune:-4},{freq:63.5,amp:.3,detune:3},{freq:92,amp:.15,detune:-2}];for(let It of Rt){let vt=h.createOscillator();vt.type="sine",vt.frequency.value=It.freq,vt.detune.value=It.detune;let kt=h.createGain();kt.gain.value=It.amp,vt.connect(kt),kt.connect(ut),vt.start(),I.push(vt)}ut.connect(nt),nt.connect(d),b.push({param:nt.gain,group:"main",scale:.14,applied:-1})}function J(z){if(!h)return;z>0?(T+=(_-T)*(1-Math.exp(-z/.07)),C+=(A-C)*(1-Math.exp(-z/.22))):(T=_,C=A);let E=U();for(let M of b){let D=M.group==="rcs"?T:C,q=M.scale*D;if(Math.abs(q-M.applied)>.002){try{M.param.setTargetAtTime(q,E,.04)}catch{}M.applied=q}}}function _t(){let z=U()+.05,E=[],M=[],D=h.createGain();D.gain.value=1e-4,D.connect(d),M.push(D);let q=h.createBiquadFilter();q.type="lowpass",q.frequency.value=350,q.Q.value=.4;let K=h.createGain();K.gain.value=.5,K.connect(q),q.connect(D),M.push(q,K);let Y=dt(-.32),Tt=dt(.32);Y&&(Y.connect(K),M.push(Y)),Tt&&(Tt.connect(K),M.push(Tt));let ft=[{type:"sine",freq:55,gain:.28,side:-1},{type:"sine",freq:55.32,gain:.1,side:1},{type:"sine",freq:82.41,gain:.16,side:-1},{type:"sine",freq:110,gain:.12,side:1},{type:"sine",freq:130.81,gain:.05,side:-1},{type:"triangle",freq:220,gain:.02,side:1}],gt=[];for(let Mt of ft){let xt=h.createOscillator();xt.type=Mt.type,xt.frequency.value=Mt.freq;let Gt=h.createGain();Gt.gain.value=Mt.gain,xt.connect(Gt),Mt.side<0&&Y?Gt.connect(Y):Mt.side>0&&Tt?Gt.connect(Tt):Gt.connect(K),xt.start(z),E.push(xt),M.push(Gt),gt.push({osc:xt,gain:Gt})}let Vt=h.createOscillator();Vt.type="sine",Vt.frequency.value=.021;let nt=h.createGain();nt.gain.value=120,Vt.connect(nt),nt.connect(q.frequency),Vt.start(z),E.push(Vt),M.push(nt);let ut=h.createOscillator();ut.type="sine",ut.frequency.value=.017;let Rt=h.createGain();Rt.gain.value=4.5,ut.connect(Rt);for(let Mt of[3,5]){let xt=gt[Mt];xt&&Rt.connect(xt.osc.detune)}ut.start(z),E.push(ut),M.push(Rt);let It=h.createBufferSource();It.buffer=v,It.loop=!0;let vt=h.createBiquadFilter();vt.type="bandpass",vt.frequency.value=1200,vt.Q.value=.45;let kt=h.createGain();kt.gain.value=.32,It.connect(vt),vt.connect(kt),kt.connect(D),It.start(z,G(0,2*.5)),E.push(It),M.push(It,vt,kt);let qt=h.createOscillator();qt.type="sine",qt.frequency.value=.037;let re=h.createGain();re.gain.value=.1,qt.connect(re),re.connect(kt.gain),qt.start(z),E.push(qt),M.push(re);let N=h.createOscillator();N.type="sine",N.frequency.value=329.63;let yt=h.createGain();yt.gain.value=.012,N.connect(yt),yt.connect(D),N.start(z),E.push(N),M.push(N,yt);let Z=h.createOscillator();Z.type="sine",Z.frequency.value=.043;let tt=h.createGain();tt.gain.value=.006,Z.connect(tt),tt.connect(yt.gain),Z.start(z),E.push(Z),M.push(tt),D.gain.setValueAtTime(1e-4,z),D.gain.linearRampToValueAtTime(.18,z+2.5),x={out:D,sources:E,nodes:M}}function rt(){if(y=!0,!(!h||!g||x))try{_t()}catch{x=null}}function Pt(){y=!1;let z=x;if(!z||!h)return;x=null;let E=U();j(z.out.gain,E);try{z.out.gain.linearRampToValueAtTime(1e-4,E+1.2)}catch{}H(()=>{for(let M of z.sources)try{M.stop()}catch{}},(1.2+.15)*1e3),H(()=>{for(let M of z.nodes)try{M.disconnect()}catch{}},(1.2+.35)*1e3)}function Bt(){let z=x;if(x=null,!!z){for(let E of z.sources)try{E.stop()}catch{}for(let E of z.nodes)try{E.disconnect()}catch{}}}let Ut={ui(){et({type:"sine",freq:1180,glide:1.28,peak:.09,attack:.004,decay:.085}),et({type:"sine",freq:2360,peak:.02,attack:.003,decay:.04})},select(){et({type:"triangle",freq:784,peak:.07,attack:.005,decay:.11,filter:{type:"lowpass",freq:2600,q:.7}}),et({type:"sine",freq:1046.5,peak:.08,attack:.005,decay:.16,delay:.06}),ct({peak:.022,attack:.001,decay:.018,filterType:"highpass",freq:3200})},capture(){ct({peak:.05,attack:.008,decay:.1,filterType:"bandpass",freq:900,freqEnd:1500,q:1.4}),et({type:"sine",freq:118,glide:.42,peak:.2,attack:.004,decay:.26}),et({type:"triangle",freq:174,glide:.6,peak:.05,attack:.004,decay:.16}),et({type:"triangle",freq:1420,glide:.94,peak:.028,attack:.002,decay:.14,filter:{type:"lowpass",freq:4200,q:.8}}),et({type:"sine",freq:2130,glide:.98,peak:.016,attack:.002,decay:.09}),ct({peak:.05,attack:.002,decay:.05,filterType:"bandpass",freq:2400,q:1.2})},arm(){et({type:"triangle",freq:96,glide:3.1,peak:.05,attack:.06,decay:.55,filter:{type:"lowpass",freq:900,q:1.2}}),ct({peak:.07,attack:.2,decay:.45,filterType:"bandpass",freq:620,freqEnd:2400,q:2.2}),et({type:"sine",freq:150,glide:.62,peak:.07,attack:.003,decay:.1,delay:.62}),ct({peak:.03,attack:.002,decay:.04,filterType:"bandpass",freq:1800,q:2,delay:.62})},dock(){et({type:"sine",freq:82,glide:.42,peak:.26,attack:.004,decay:.5}),ct({peak:.1,attack:.003,decay:.22,filterType:"lowpass",freq:520,freqEnd:180,q:.8}),et({type:"triangle",freq:196,glide:.985,peak:.03,attack:.003,decay:.7}),et({type:"triangle",freq:262.5,glide:.99,peak:.022,attack:.003,decay:.55}),et({type:"triangle",freq:331.5,glide:.995,peak:.014,attack:.003,decay:.45}),ct({peak:.035,attack:.002,decay:.12,filterType:"bandpass",freq:1600,q:4})},undock(){et({type:"sine",freq:104,glide:.5,peak:.1,attack:.003,decay:.2}),ct({peak:.12,attack:.012,decay:.5,filterType:"highpass",freq:1500,q:.6}),ct({peak:.06,attack:.01,decay:.3,filterType:"lowpass",freq:700,q:.7}),et({type:"sine",freq:1568,peak:.015,attack:.002,decay:.06})},coin(){et({type:"sine",freq:1046.5,peak:.08,attack:.004,decay:.12}),et({type:"sine",freq:1568,peak:.06,attack:.004,decay:.22,delay:.075}),et({type:"sine",freq:2093,peak:.02,attack:.003,decay:.16,delay:.075})},success(){[523.25,659.25,783.99,1046.5].forEach((E,M)=>{let D=M*.095;et({type:"sine",freq:E,peak:.075,attack:.006,decay:.45,delay:D}),et({type:"triangle",freq:E*2,peak:.012,attack:.005,decay:.3,delay:D})}),et({type:"sine",freq:130.81,peak:.045,attack:.05,decay:1.2}),et({type:"sine",freq:196,peak:.03,attack:.05,decay:1}),ct({peak:.015,attack:.25,decay:.8,filterType:"highpass",freq:4200,q:.5})},fail(){et({type:"triangle",freq:392,glide:.794,peak:.07,attack:.01,decay:.3,filter:{type:"lowpass",freq:1600,q:.7}}),et({type:"triangle",freq:311.1,glide:.84,peak:.06,attack:.01,decay:.35,delay:.13,filter:{type:"lowpass",freq:1400,q:.7}}),et({type:"sine",freq:65.4,peak:.06,attack:.02,decay:.8}),ct({peak:.02,attack:.01,decay:.3,filterType:"lowpass",freq:400,q:.6})},warning(){for(let z of[0,.23])et({type:"triangle",freq:740,peak:.09,attack:.008,decay:.15,delay:z,filter:{type:"lowpass",freq:2e3,q:.9}}),et({type:"sine",freq:1480,peak:.018,attack:.006,decay:.1,delay:z})},alarm(){[988,740,988].forEach((E,M)=>{let D=M*.24;et({type:"triangle",freq:E,glide:1.12,peak:.085,attack:.008,decay:.2,delay:D,filter:{type:"lowpass",freq:2400,q:.8}}),et({type:"sine",freq:E*.5,peak:.03,attack:.01,decay:.18,delay:D})})},repair(){for(let z=0;z<7;z+=1)ct({peak:G(.02,.045),attack:.001,decay:G(.015,.045),filterType:"highpass",freq:G(2200,3600),q:.7,delay:G(0,.34)});ct({peak:.03,attack:.05,decay:.3,filterType:"bandpass",freq:1300,freqEnd:2e3,q:2}),et({type:"triangle",freq:180,glide:1.9,peak:.035,attack:.04,decay:.4,filter:{type:"lowpass",freq:1200,q:.9}}),et({type:"sine",freq:880,glide:1.5,peak:.035,attack:.005,decay:.22,delay:.42})}};function Dt(){if(h&&g)return!0;if(h&&!g)try{let E=h;h=null;let M=E.close();M&&typeof M.catch=="function"&&M.catch(()=>{})}catch{h=null}let z=typeof globalThis<"u"?globalThis.AudioContext||globalThis.webkitAudioContext:null;if(!z)return!1;try{try{h=new z({latencyHint:"interactive"})}catch{h=new z}}catch{return h=null,!1}try{return m=h.createDynamicsCompressor(),m.threshold.value=-14,m.knee.value=24,m.ratio.value=12,m.attack.value=.002,m.release.value=.2,f=h.createGain(),f.gain.value=p?0:1,d=h.createGain(),d.gain.value=.5,d.connect(f),f.connect(m),m.connect(h.destination),ht(),V(),S=0,T=_,C=A,J(0),g=!0,!0}catch{g=!1;try{let M=h;if(h=null,M){let D=M.close();D&&typeof D.catch=="function"&&D.catch(()=>{})}}catch{h=null}return d=null,f=null,m=null,v=null,b.length=0,I.length=0,!1}}function Q(){if(!Dt())return!1;if(h.state==="suspended"&&typeof h.resume=="function")try{let z=h.resume();z&&typeof z.catch=="function"&&z.catch(()=>{})}catch{}return y&&!x&&rt(),!0}function at(z){if(p=!!z,h&&f){let E=U();j(f.gain,E);try{f.gain.linearRampToValueAtTime(p?0:1,E+.06)}catch{}}return p}function L(){return p}function Ct(){return at(!p)}function lt(z){if(!h||!g)return;let E=Number.isFinite(z)?Math.min(Math.max(z,0),.1):0;E<=0||J(E)}function At(z,E){let M=Number(z),D=Number(E);_=Number.isFinite(M)?F(M):0,A=Number.isFinite(D)?F(D):0}function mt(z){if(!h||!g||typeof z!="string")return!1;let E=Ut[z];if(!E)return!1;let M=U();if(P[z]!==void 0&&M-P[z]<.02)return!1;if(P[z]=M,h.state==="suspended"&&typeof h.resume=="function")try{let D=h.resume();D&&typeof D.catch=="function"&&D.catch(()=>{})}catch{}try{return E(),!0}catch{return!1}}function zt(){y=!1,Bt();for(let E of B)clearTimeout(E);B.clear();for(let E of I)try{E.stop()}catch{}I.length=0,b.length=0,S=0;for(let E of Object.keys(P))delete P[E];let z=h;if(h=null,g=!1,d=null,f=null,m=null,v=null,T=0,C=0,_=0,A=0,z)try{let E=z.close();E&&typeof E.catch=="function"&&E.catch(()=>{})}catch{}}return{init:Q,setMuted:at,isMuted:L,toggleMute:Ct,update:lt,setThrust:At,play:mt,startAmbient:rt,stopAmbient:Pt,dispose:zt}}var Zm="0.10.0",Jm="M300",Km="ORBITAL SWEEPER",Qm="\u8F68\u9053\u6E05\u9053\u592B",jm={cyan:7137535,cyanDim:2850710,amber:16757844,green:6553520,red:16736109,white:14674687,hull:10135224,hullDark:2765378,gold:14263100,solar:662579,deep:198156},Et={rcsAccel:2.6,mainAccel:9,brakeAccel:2.8,linearDamping:0,maxSpeed:45,deltaVMaxBase:220,batteryMax:100,batteryRegen:3.6,batteryDrainRcs:1.5,batteryDrainMain:6,batteryDrainArm:8,batteryDrainMatch:10,batteryDrainService:16,radarDrain:.22,armRangeBase:10,captureSpeedBase:2.78,captureHold:1.25,serviceRange:11,serviceSpeed:1.5,serviceHold:3,cargoBase:4,largeSpeedFactor:.66,largeHoldBonus:.35,hullMax:100,collideDamageMin:4,collideDamageScale:9,cameraDist:30,cameraMinDist:15,cameraMaxDist:62,cameraPitchMin:-.55,cameraPitchMax:1.05,cameraSmooth:8,zoomSmooth:6,matchEfficiency:1.18,matchCooldown:.9,attitudePitchRate:.95,attitudeYawRate:.8,attitudeRollRate:1.6,attitudeDamping:7,mouseAttitudeSensitivity:.0034,cameraChaseHeight:.2,cameraChaseLookAhead:12,cameraModeDefault:"chase",dockApproachRange:46,dockTractorRange:30,dockTractorSpeed:2.6},_e={position:{x:0,y:30,z:400},dockPort:{x:0,y:22,z:379},spawn:{x:0,y:24,z:351},spawnYaw:0,radius:26},ti=[{id:1,name:"\u6F14\u793A\u65E5 01",subtitle:"\u6E05\u9053\u592B\u9996\u79C0",location:"LEO \xB7 600 km \xB7 53\xB0",timeLimit:480,debrisCount:12,required:4,largeCount:0,satellites:0,satelliteRequired:0,seed:20311001,driftScale:.55,brief:["\u4E00\u9897 1000 kg \u7EA7\u9000\u5F79\u536B\u661F\u5728\u4E00\u65E5\u524D\u89E3\u4F53\uFF0C\u5F62\u6210\u7EA6 100 \u5757\u788E\u7247\u3002","\u9A7E\u9A76 500 kg \u7EA7 M300 \u670D\u52A1\u8239\uFF0C\u6355\u83B7\u5E76\u8FD4\u6E2F\u4EA4\u4ED8 4 \u5757\u788E\u7247\u3002","\u8FD9\u662F\u516C\u53F8\u7B2C\u4E00\u6B21\u5E26\u5BA2\u6237\u7684\u6F14\u793A\u98DE\u884C\u2014\u2014\u522B\u628A\u8239\u649E\u574F\u3002"],objective:"\u4EA4\u4ED8 4 \u5757\u788E\u7247",story:"\u9996\u79C0\u5B8C\u6210\u3002\u79CD\u5B50\u8F6E\u6865\u63A5\u6B3E\u5230\u8D26\uFF0C\u8463\u4E8B\u4F1A\u6279\u51C6\u4E86\u7B2C\u4E00\u6B21\u7CFB\u7EDF\u5347\u7EA7\u3002"},{id:2,name:"\u6F14\u793A\u65E5 02",subtitle:"\u53CC\u7EBF\u670D\u52A1",location:"LEO \xB7 600 km \xB7 \u8282\u70B9 A-07",timeLimit:540,debrisCount:18,required:6,largeCount:1,satellites:1,satelliteRequired:1,seed:20311002,driftScale:.8,brief:["\u5BA2\u6237\u8282\u70B9 A-07 \u59FF\u6001\u5931\u6548\uFF0C\u8F68\u9053\u670D\u52A1\u5408\u540C\u8FDB\u5165\u9A8C\u8BC1\u9636\u6BB5\u3002","\u4EA4\u4ED8 6 \u5757\u788E\u7247\uFF0C\u5E76\u5B8C\u6210 1 \u6B21\u8282\u70B9\u68C0\u4FEE\uFF08\u8FD1\u8DDD\u4FDD\u6301 + \u673A\u68B0\u81C2\u4F5C\u4E1A\uFF09\u3002","\u53CC\u7EBF\u4F5C\u4E1A\u4F1A\u6D88\u8017\u66F4\u591A\u63A8\u8FDB\u5242\u2014\u2014\u89C4\u5212\u597D\u8FD4\u6E2F\u65F6\u673A\u3002"],objective:"\u4EA4\u4ED8 6 \u5757\u788E\u7247 + \u68C0\u4FEE 1 \u4E2A\u8282\u70B9",story:"\u5BA2\u6237\u8282\u70B9\u6062\u590D\u3002\u7B2C\u4E8C\u7B14\u670D\u52A1\u56DE\u6B3E\u5230\u8D26\uFF0C\u516C\u53F8\u7EC8\u4E8E\u6709\u4E86\u4E00\u6761\u80FD\u8BB2\u6E05\u695A\u7684\u4EA7\u54C1\u7EBF\u3002"},{id:3,name:"\u7EC8\u5C40\u9A8C\u6536",subtitle:"\u788E\u7247\u4E91\u6DF1\u5904",location:"LEO \xB7 600 km \xB7 \u9AD8\u5BC6\u5EA6\u533A",timeLimit:600,debrisCount:24,required:8,largeCount:2,satellites:1,satelliteRequired:1,seed:20311003,driftScale:1.15,brief:["\u788E\u7247\u4E91\u8FDB\u5165\u9AD8\u5BC6\u5EA6\u6F14\u5316\u9636\u6BB5\uFF0C\u5176\u4E2D\u5305\u542B\u4E24\u5757\u5927\u578B\u7ED3\u6784\u4EF6\u3002","\u4EA4\u4ED8 8 \u5757\u788E\u7247\uFF08\u542B\u5927\u578B\u4EF6\uFF09+ \u5B8C\u6210 1 \u6B21\u5BA2\u6237\u8282\u70B9\u670D\u52A1\uFF0C\u62FF\u4E0B A \u8F6E\u3002","\u5927\u578B\u788E\u7247\u9700\u8981\u66F4\u4F4E\u7684\u76F8\u5BF9\u901F\u5EA6\uFF0C\u8D27\u8231\u5360\u7528\u4E5F\u66F4\u5927\u3002"],objective:"\u4EA4\u4ED8 8 \u5757\u788E\u7247\uFF08\u542B\u5927\u578B\u4EF6\uFF09+ \u68C0\u4FEE 1 \u4E2A\u8282\u70B9",story:"\u9A8C\u6536\u901A\u8FC7\u3002\u788E\u7247\u5728\u518D\u5165\u8D70\u5ECA\u91CC\u70E7\u6210\u4E00\u6761\u5149\uFF0C\u5269\u4E0B\u7684\u6545\u4E8B\u4EA4\u7ED9\u5E02\u573A\u3002"}],Fe={cruiseSpeed:12,servoGain:.55,accelGain:1.9,maxAccelFactor:1.55,standoffPad:3,alignAngle:.24,alignSpeed:.5,abortReserve:4,phaseWeights:{approach:.62,align:.18,capture:.2}},fn={unit:"\u4E07\u5143",debrisValue:{small:4,large:12},satelliteValue:25,waveBonus:[20,35,55],investor:[30,45,60],repairCost:8,repairAmount:30,startMoney:0},t0={small:{label:"\u5C0F\u578B\u788E\u7247",cargo:1,value:4,radius:[.7,1.5]},medium:{label:"\u4E2D\u578B\u788E\u7247",cargo:1,value:7,radius:[1.5,2.6]},large:{label:"\u5927\u578B\u788E\u7247",cargo:2,value:12,radius:[2.6,3.6]}},e0=[{id:"panel",label:"\u592A\u9633\u7FFC\u6B8B\u7247",weight:3},{id:"truss",label:"\u6841\u67B6\u65AD\u6BB5",weight:3},{id:"tank",label:"\u63A8\u8FDB\u5242\u8D2E\u7BB1",weight:2},{id:"dish",label:"\u5929\u7EBF\u53CD\u5C04\u9762",weight:2},{id:"bus",label:"\u536B\u661F\u8231\u6BB5",weight:1.5},{id:"foil",label:"\u9694\u70ED\u5C42\u788E\u5757",weight:2},{id:"ring",label:"\u7ED3\u6784\u73AF\u6BB5",weight:1.5}],Ba=[{id:"arm",name:"\u673A\u68B0\u81C2",short:"ARM",icon:"\u2301",desc:"\u52A0\u957F\u81C2\u5C55\u4E0E\u672B\u7AEF\u7F13\u51B2\uFF0C\u6269\u5927\u6355\u83B7\u5305\u7EBF\u3002",tiers:[{cost:18,range:13,speed:3.2,text:"\u81C2\u5C55 10 \u2192 13 m\uFF0C\u6355\u83B7\u901F\u5EA6 \u2264 3.2 m/s"},{cost:32,range:16,speed:3.8,text:"\u81C2\u5C55 13 \u2192 16 m\uFF0C\u6355\u83B7\u901F\u5EA6 \u2264 3.8 m/s"}]},{id:"cargo",name:"\u8D27\u8231",short:"BAY",icon:"\u25A6",desc:"\u5916\u6302\u5F0F\u788E\u7247\u6536\u7EB3\u67B6\uFF0C\u5355\u6B21\u8FD4\u6E2F\u53EF\u5E26\u56DE\u66F4\u591A\u3002",tiers:[{cost:16,cargo:6,text:"\u8D27\u8231\u5BB9\u91CF 4 \u2192 6 \u683C"},{cost:28,cargo:8,text:"\u8D27\u8231\u5BB9\u91CF 6 \u2192 8 \u683C"}]},{id:"deltaV",name:"\u63A8\u8FDB\u5242\u50A8\u7BB1",short:"\u0394v",icon:"\u25C6",desc:"\u589E\u52A0\u5316\u5B66\u63A8\u8FDB\u5242\u88C5\u8F7D\u91CF\uFF0C\u5EF6\u957F\u5355\u6B21\u51FA\u822A\u65F6\u95F4\u3002",tiers:[{cost:22,deltaV:300,text:"\u0394v \u9884\u7B97 220 \u2192 300 m/s"},{cost:38,deltaV:380,text:"\u0394v \u9884\u7B97 300 \u2192 380 m/s"}]},{id:"assist",name:"\u81EA\u4E3B\u5339\u914D",short:"AUTO",icon:"\u25CE",desc:"\u4F18\u5316\u89C6\u89C9\u4F3A\u670D\u4E0E\u63A8\u529B\u5206\u914D\uFF0C\u964D\u4F4E\u81EA\u52A8\u901F\u5EA6\u5339\u914D\u7684\u4EE3\u4EF7\u3002",tiers:[{cost:20,efficiency:1.08,battery:8,text:"\u5339\u914D\u635F\u8017 \u22128%\uFF0C\u8017\u7535 \u22122"},{cost:34,efficiency:1,battery:6,text:"\u5339\u914D\u635F\u8017 \u221215%\uFF0C\u8017\u7535 \u22124"}]}];function Pc(s={}){let t=Math.min(s.arm||0,2),e=Math.min(s.cargo||0,2),n=Math.min(s.deltaV||0,2),i=Math.min(s.assist||0,2),r=Ba[0].tiers,a=Ba[3].tiers;return{armRange:t>0?r[t-1].range:Et.armRangeBase,captureSpeed:t>0?r[t-1].speed:Et.captureSpeedBase,cargoMax:e>0?[4,6,8][e]:Et.cargoBase,deltaVMax:n>0?[220,300,380][n]:Et.deltaVMaxBase,matchEfficiency:i>0?a[i-1].efficiency:Et.matchEfficiency,matchBattery:i>0?a[i-1].battery:Et.batteryDrainMatch}}function n0(s){let{credits:t=0,hull:e=0,timeLeft:n=0,totalDelivered:i=0,required:r=0}=s;return i<r?"C":t>=380&&e>=60&&n>=60?"S":t>=260&&e>=35?"A":"B"}var i0={S:{title:"A \u8F6E \xB7 \u8D85\u989D\u8BA4\u8D2D",text:"\u6295\u8D44\u4EBA\u770B\u5230\u4E86\u771F\u6B63\u7684\u5728\u8F68\u670D\u52A1\u80FD\u529B\u3002M300 \u8239\u961F\u6269\u7F16\u8BA1\u5212\u901A\u8FC7\uFF0C\u4E0B\u4E00\u7AD9\uFF1A\u591A\u8239\u534F\u540C\u3002",tone:"green"},A:{title:"A \u8F6E \xB7 \u610F\u5411\u4E66",text:"\u6307\u6807\u8FBE\u6807\uFF0C\u5BA2\u6237\u613F\u610F\u7EED\u7B7E\u3002\u516C\u53F8\u6D3B\u4E0B\u6765\u4E86\uFF0C\u4F46\u8981\u8BC1\u660E\u8FD9\u4E0D\u662F\u4E00\u6B21\u6F02\u4EAE\u7684\u6F14\u793A\u3002",tone:"cyan"},B:{title:"\u79CD\u5B50\u8F6E \xB7 \u6865\u63A5",text:"\u4EFB\u52A1\u5B8C\u6210\uFF0C\u4F46\u7ECF\u6D4E\u6027\u8FD8\u4E0D\u591F\u597D\u3002\u8463\u4E8B\u4F1A\u8981\u6C42\u4E0B\u4E00\u8F6E\u62FF\u51FA\u53EF\u590D\u5236\u7684\u6210\u672C\u66F2\u7EBF\u3002",tone:"amber"},C:{title:"\u6F14\u793A\u5931\u8D25",text:"\u788E\u7247\u8FD8\u7559\u5728\u8F68\u9053\u4E0A\u3002\u516C\u53F8\u9700\u8981\u91CD\u65B0\u56DE\u7B54\uFF1A\u6211\u4EEC\u5230\u5E95\u89E3\u51B3\u8C01\u7684\u4EC0\u4E48\u95EE\u9898\u3002",tone:"red"}},Cd={center:{x:0,y:25,z:20},spreadX:300,spreadZ:250,spreadY:85,minRadius:70,maxRadius:430,minSeparation:9,backgroundDebris:26,targetAutoRange:320},s0=["NORAD 4","CZ-6A \u4E0A\u9762\u7EA7","STARLINK-3","COSMOS \u6B8B\u7247","FENGYUN \u788E\u7247","GAOFEN \u6B8B\u7247","ARIANE 5","H-2A \u6B8B\u7247","NOAA \u65E7\u661F","IRIDIUM \u6B8B\u7247"];function ei(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ln={range(s,t,e){return t+(e-t)*s()},int(s,t,e){return Math.floor(t+(e-t+1)*s())},pick(s,t){return t[Math.floor(s()*t.length)]},sign(s){return s()<.5?-1:1},unit(s){let t=s()*2-1,e=s()*Math.PI*2,n=Math.sqrt(1-t*t);return new w(n*Math.cos(e),t,n*Math.sin(e))},scatter(s,t,e){return t.x+=(s()*2-1)*e,t.y+=(s()*2-1)*e,t.z+=(s()*2-1)*e,t}};function Le(s,t,e){return s<t?t:s>e?e:s}function He(s){return s==null||Number.isNaN(s)?"0":s>=100?s.toFixed(0):s.toFixed(s%1===0?0:1)}function Ns(s){let t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Id(s){return s>=1e3?(s/1e3).toFixed(2)+" km":s>=100?s.toFixed(0)+" m":s.toFixed(1)+" m"}function r0(s){return s.toFixed(s<10?2:1)+" m/s"}function wi(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,{canvas:e,ctx:e.getContext("2d")}}function Ai(s,{srgb:t=!0,repeat:e=null,anisotropy:n=4}={}){let i=new Ms(s);return t&&(i.colorSpace=Ie),e&&(i.wrapS=_n,i.wrapT=_n,i.repeat.set(e[0],e[1])),i.anisotropy=n,i.needsUpdate=!0,i}var _b=[["\u9F20\u6807\u62D6\u52A8","\u8FFD\u5C3E\uFF1A\u63A7\u5236\u4FEF\u4EF0/\u504F\u822A \xB7 \u81EA\u7531\u89C2\u5BDF\uFF1A\u73AF\u7ED5\u76F8\u673A"],["\u65B9\u5411\u952E","\u4FEF\u4EF0 / \u504F\u822A\u59FF\u6001"],["Q / E","\u6EDA\u8F6C\u59FF\u6001"],["WASD","\u6CBF\u8239\u4F53\u524D\u540E / \u5DE6\u53F3\u5E73\u79FB\uFF08RCS\uFF09"],["SPACE / C","\u6CBF\u8239\u4F53\u4E0A / \u4E0B\u5E73\u79FB\uFF08RCS\uFF09"],["SHIFT","\u4E3B\u53D1\u52A8\u673A\uFF08\u6CBF\u673A\u5934\u65B9\u5411\uFF09"],["X","\u53CD\u63A8\u5236\u52A8"],["F","\u81EA\u52A8\u5339\u914D\u76EE\u6807\u901F\u5EA6"],["G","\u81EA\u52A8\u89C4\u5212\u6293\u53D6 / \u53D6\u6D88\u81EA\u52A8\u89C4\u5212"],["R\uFF08\u6309\u4F4F\uFF09","\u673A\u68B0\u81C2\u6355\u83B7 / \u8282\u70B9\u68C0\u4FEE"],["V","\u5207\u6362\u8FFD\u5C3E / \u81EA\u7531\u89C2\u5BDF\u76F8\u673A"],["TAB / ESC / M","\u5207\u6362\u76EE\u6807 / \u6682\u505C / \u97F3\u6548"]];function yb(){return`<div class="control-table">${_b.map(([s,t])=>`<div class="control-row"><span class="key">${s}</span><span>${t}</span></div>`).join("")}</div>`}var Lc=class{constructor({root:t,screensRoot:e}){this.root=t,this.screensRoot=e,this.muted=!1,this.currentScreen=null,this.cache={},this.radarCanvas=null,this.radarCtx=null,this._buildHud(),this._buildScreens(),this.toastTimers=[],this.waveIntroTimer=null}_buildHud(){this.root.innerHTML=`
      <div class="hud" id="hud">
        <div class="hud-top-left hud-panel mission-panel">
          <div class="mission-eyebrow">
            <span id="hud-wave">\u6F14\u793A\u65E5 01</span>
            <span class="dim" id="hud-location">LEO \xB7 600 km</span>
          </div>
          <div class="mission-title" id="hud-mission-title">\u6E05\u9053\u592B\u9996\u79C0</div>
          <div class="mission-objective">
            <span class="label">\u76EE\u6807</span>
            <span id="hud-objective">\u4EA4\u4ED8 4 \u5757\u788E\u7247</span>
          </div>
          <div class="mission-progress">
            <div class="bar slim"><div class="bar-fill cyan" id="hud-progress-fill"></div></div>
            <span class="mono" id="hud-progress-text">0 / 4</span>
          </div>
          <div class="mission-sat" id="hud-sat-row">
            <span class="label">\u8282\u70B9\u68C0\u4FEE</span>
            <span class="mono" id="hud-sat-text">0 / 1</span>
          </div>
          <div class="timer-block">
            <div class="timer mono" id="hud-timer">08:00</div>
            <div class="timer-label">\u8F68\u9053\u7A97\u53E3\u5269\u4F59</div>
          </div>
        </div>

        <div class="hud-top-right">
          <div class="hud-panel money-panel">
            <span class="money-label">\u7D2F\u8BA1\u6536\u5165</span>
            <span class="money-value mono">\xA5 <span id="hud-credits">0</span><small>\u4E07\u5143</small></span>
          </div>
          <div class="hud-panel mini-panel" id="hud-mute-indicator">\u97F3\u6548 \u5F00</div>
          <div class="hud-panel mini-panel mode-panel" id="hud-mode">CHASE \u76F8\u673A \xB7 V \u5207\u6362</div>
        </div>

        <div class="hud-bottom-left">
          <div class="hud-panel systems-panel">
            <div class="gauge-row">
              <span class="gauge-label">\u0394v \u63A8\u8FDB\u5242</span>
              <div class="bar"><div class="bar-fill cyan" id="hud-dv-fill"></div></div>
              <span class="gauge-value mono" id="hud-dv-text">220 / 220</span>
            </div>
            <div class="gauge-row">
              <span class="gauge-label">\u7535\u91CF</span>
              <div class="bar"><div class="bar-fill amber" id="hud-battery-fill"></div></div>
              <span class="gauge-value mono" id="hud-battery-text">100%</span>
            </div>
            <div class="gauge-row">
              <span class="gauge-label">\u8239\u4F53</span>
              <div class="bar"><div class="bar-fill green" id="hud-hull-fill"></div></div>
              <span class="gauge-value mono" id="hud-hull-text">100%</span>
            </div>
            <div class="cargo-row">
              <span class="gauge-label">\u8D27\u8231</span>
              <div class="cargo-pips" id="hud-cargo-pips"></div>
              <span class="gauge-value mono" id="hud-cargo-text">0 / 4</span>
            </div>
            <div class="attitude-row">
              <span class="gauge-label">\u59FF\u6001</span>
              <div class="attitude-horizon"><div class="ah-line" id="ah-line"></div><div class="ah-dot"></div></div>
              <span class="gauge-value mono" id="hud-attitude-text">P 0\xB0 \xB7 R 0\xB0</span>
            </div>
            <div class="speed-row">
              <span class="gauge-label">\u8239\u901F</span>
              <span class="mono" id="hud-speed-text">0.0 m/s</span>
            </div>
          </div>
        </div>

        <div class="hud-bottom-right">
          <div class="radar-panel">
            <canvas id="radar" width="200" height="200"></canvas>
            <div class="radar-label"><span>\u5C40\u90E8\u8F68\u9053\u6001\u52BF</span><span class="mono" id="radar-range">R 520 m</span></div>
            <div class="radar-depot mono" id="radar-depot"><i></i><span id="radar-depot-text">\u8865\u7ED9\u7AD9 -- m</span></div>
          </div>
        </div>

        <div class="crosshair" id="crosshair">
          <div class="crosshair-ring"></div>
          <div class="crosshair-dot"></div>
        </div>

        <div class="capture-readout" id="capture-readout">
          <div class="capture-ring" id="capture-ring"></div>
          <div class="capture-label mono" id="capture-label">\u6355\u83B7</div>
        </div>

        <div class="target-marker" id="target-marker">
          <div class="tm-corners"><i></i><i></i><i></i><i></i></div>
          <div class="tm-label">
            <strong id="tm-name">\u76EE\u6807</strong>
            <span class="mono" id="tm-data">0 m \xB7 0.00 m/s</span>
            <span class="tm-state" id="tm-state">\u8FDC\u8DDD</span>
          </div>
        </div>

        <div class="station-marker" id="station-marker">
          <div class="sm-icon"></div>
          <div class="sm-label">
            <strong>M300 \u8865\u7ED9\u7AD9</strong>
            <span class="mono" id="sm-data">0 m \xB7 0.00 m/s</span>
            <span class="tm-state" id="sm-state">DEPOT-01</span>
          </div>
        </div>

        <div class="edge-arrow" id="edge-arrow"><span>\u25B2</span></div>

        <div class="prompt" id="prompt"><span class="prompt-key"></span><span class="prompt-text"></span></div>
        <div class="auto-hint" id="auto-hint"></div>

        <div class="warnings" id="warnings"></div>
        <div class="autopilot-panel" id="autopilot-panel">
          <div class="ap-head">
            <span class="ap-kicker">AUTO CAPTURE</span>
            <span class="ap-target" id="ap-target"></span>
          </div>
          <div class="ap-phase-row">
            <span class="ap-phase" id="ap-phase">\u63A5\u8FD1\u7AD9\u4F4D</span>
            <span class="mono" id="ap-progress-text">0%</span>
          </div>
          <div class="ap-bar"><div class="ap-bar-fill" id="ap-bar-fill"></div></div>
          <div class="ap-stats">
            <div><span>\u9884\u8BA1 \u0394v</span><strong class="mono" id="ap-dv">0</strong></div>
            <div><span>\u5DF2\u7528 \u0394v</span><strong class="mono" id="ap-used">0</strong></div>
            <div><span>\u8DDD\u79BB</span><strong class="mono" id="ap-dist">0 m</strong></div>
            <div><span>\u76F8\u5BF9\u901F\u5EA6</span><strong class="mono" id="ap-rel">0.00</strong></div>
          </div>
          <div class="ap-hint">G \u53D6\u6D88 \xB7 \u624B\u52A8\u8F93\u5165\u5C06\u4E2D\u65AD</div>
        </div>
        <div class="toasts" id="toasts"></div>

        <div class="wave-intro" id="wave-intro">
          <div class="wi-kicker"></div>
          <div class="wi-title"></div>
          <div class="wi-sub"></div>
        </div>

        <div class="control-hint">
          <span><b>WASD</b> \u5E73\u79FB</span>
          <span><b>\u65B9\u5411\u952E</b> \u59FF\u6001</span>
          <span><b>Q/E</b> \u6EDA\u8F6C</span>
          <span><b>SHIFT</b> \u4E3B\u53D1</span>
          <span><b>F</b> \u5339\u914D</span>
          <span><b>G</b> \u81EA\u52A8\u6293\u53D6</span>
          <span><b>R</b> \u6355\u83B7</span>
          <span><b>V</b> \u89C6\u89D2</span>
          <span><b>TAB</b> \u76EE\u6807</span>
        </div>
      </div>
      <div class="damage-vignette" id="damage-vignette"></div>
      <div class="vignette"></div>
      <div class="scanlines"></div>
    `,this.el={hud:this._q("#hud"),wave:this._q("#hud-wave"),location:this._q("#hud-location"),missionTitle:this._q("#hud-mission-title"),objective:this._q("#hud-objective"),progressFill:this._q("#hud-progress-fill"),progressText:this._q("#hud-progress-text"),satRow:this._q("#hud-sat-row"),satText:this._q("#hud-sat-text"),timer:this._q("#hud-timer"),credits:this._q("#hud-credits"),muteIndicator:this._q("#hud-mute-indicator"),dvFill:this._q("#hud-dv-fill"),dvText:this._q("#hud-dv-text"),batteryFill:this._q("#hud-battery-fill"),batteryText:this._q("#hud-battery-text"),hullFill:this._q("#hud-hull-fill"),hullText:this._q("#hud-hull-text"),cargoPips:this._q("#hud-cargo-pips"),cargoText:this._q("#hud-cargo-text"),speedText:this._q("#hud-speed-text"),attitudeText:this._q("#hud-attitude-text"),ahLine:this._q("#ah-line"),modeChip:this._q("#hud-mode"),autoHint:this._q("#auto-hint"),autopilotPanel:this._q("#autopilot-panel"),apTarget:this._q("#ap-target"),apPhase:this._q("#ap-phase"),apProgressText:this._q("#ap-progress-text"),apBarFill:this._q("#ap-bar-fill"),apDv:this._q("#ap-dv"),apUsed:this._q("#ap-used"),apDist:this._q("#ap-dist"),apRel:this._q("#ap-rel"),radar:this._q("#radar"),radarRange:this._q("#radar-range"),radarDepot:this._q("#radar-depot"),radarDepotText:this._q("#radar-depot-text"),crosshair:this._q("#crosshair"),captureReadout:this._q("#capture-readout"),captureRing:this._q("#capture-ring"),captureLabel:this._q("#capture-label"),targetMarker:this._q("#target-marker"),tmName:this._q("#tm-name"),tmData:this._q("#tm-data"),tmState:this._q("#tm-state"),stationMarker:this._q("#station-marker"),smData:this._q("#sm-data"),smState:this._q("#sm-state"),edgeArrow:this._q("#edge-arrow"),prompt:this._q("#prompt"),promptKey:this._q("#prompt .prompt-key"),promptText:this._q("#prompt .prompt-text"),warnings:this._q("#warnings"),toasts:this._q("#toasts"),waveIntro:this._q("#wave-intro"),damage:this._q("#damage-vignette")},this.radarCtx=this.el.radar.getContext("2d"),this._setupRadar(),this._cargoPips=8,this.el.cargoPips.innerHTML=Array.from({length:8},()=>"<i></i>").join(""),this._cargoPipEls=Array.from(this.el.cargoPips.children)}_q(t){return document.querySelector(t)}_setupRadar(){let e=Math.min(window.devicePixelRatio||1,2);this.el.radar.width=200*e,this.el.radar.height=200*e,this.el.radar.style.width="200px",this.el.radar.style.height="200px",this.radarCtx.scale(e,e),this.radarSize=200}_buildScreens(){this.screensRoot.innerHTML='<div class="screen-layer" id="screen-layer"></div>',this.screenLayer=this._q("#screen-layer")}_screen(t,e){let n=document.createElement("div");n.className="screen",n.dataset.screen=t,n.innerHTML=`<div class="screen-inner">${e}</div>`,this.screenLayer.appendChild(n);let i=this.screenLayer.querySelectorAll(".screen");if(i.length>1)for(let r=0;r<i.length-1;r++)i[r].remove();return this.currentScreen=t,requestAnimationFrame(()=>n.classList.add("active")),n}showScreen(t){if(!t){this.hideScreens();return}let e=this.screenLayer.querySelector(`[data-screen="${t}"]`);if(e)return e.classList.add("active"),this.currentScreen=t,e}hideScreens(){this.screenLayer.querySelectorAll(".screen").forEach(t=>t.classList.remove("active")),this.currentScreen=null}setHudVisible(t){this.el.hud.classList.toggle("visible",t),this.el.hud.classList.toggle("hidden",!t)}hideLoading(){let t=this._q("#loading");t&&(t.classList.add("done"),setTimeout(()=>t.remove(),700))}setMuted(t){this.muted=t,this.el.muteIndicator.textContent=t?"\u97F3\u6548 \u5173":"\u97F3\u6548 \u5F00",document.querySelectorAll("[data-mute-label]").forEach(e=>{e.textContent=t?"\u97F3\u6548\uFF1A\u5173":"\u97F3\u6548\uFF1A\u5F00"})}showTitle({onStart:t,onBrief:e,onArchive:n,onMute:i}){let r=this._screen("title",`
      <div class="title-screen">
        <div class="title-kicker"><span class="dot"></span> LOCAL ARCADE DEMO \xB7 v${Zm}</div>
        <div class="title-lockup">
          <div class="title-logo">${Jm}<span class="title-logo-sub">/01</span></div>
          <h1 class="title-cn">${Qm}</h1>
          <div class="title-en">${Km}</div>
        </div>
        <p class="title-tagline">
          600 km \u4F4E\u8F68 \xB7 100 \u5757\u788E\u7247 \xB7 \u4E00\u8258 500 kg \u7EA7\u670D\u52A1\u8239\u3002<br/>
          \u5728\u4E0B\u4E00\u8F6E\u878D\u8D44\u8BC4\u5BA1\u524D\uFF0C\u5B8C\u6210 M300 \u7684\u7B2C\u4E00\u6B21\u516C\u5F00\u6F14\u793A\u3002
        </p>
        <div class="title-actions">
          <button class="btn btn-primary" data-action="start"><span>\u5F00\u59CB\u6F14\u793A</span><kbd>ENTER</kbd></button>
          <button class="btn" data-action="brief">\u4EFB\u52A1\u7B80\u62A5</button>
          <button class="btn" data-action="archive">\u7814\u7A76\u6863\u6848</button>
        </div>
        <div class="title-meta">
          <span>6DOF \u98DE\u884C \xB7 \u65B9\u5411\u952E\u59FF\u6001 \xB7 WASD \u5E73\u79FB \xB7 G \u81EA\u52A8\u89C4\u5212\u6293\u53D6 \xB7 V \u5207\u6362\u89C6\u89D2</span>
        </div>
        <div class="title-footer">
          <span>\u79D1\u5E7B\u8857\u673A\u6F14\u793A \xB7 \u975E\u5DE5\u7A0B\u4EFF\u771F \xB7 \u4EC5\u672C\u5730\u8FD0\u884C</span>
          <button class="btn btn-ghost" data-action="mute" data-mute-label>\u97F3\u6548\uFF1A${this.muted?"\u5173":"\u5F00"}</button>
        </div>
      </div>
    `);r.querySelector('[data-action="start"]').addEventListener("click",t),r.querySelector('[data-action="brief"]').addEventListener("click",e),r.querySelector('[data-action="archive"]').addEventListener("click",n),r.querySelector('[data-action="mute"]').addEventListener("click",i)}showBriefing(t,{onBegin:e,onBack:n}){let i=this._screen("brief",`
      <div class="panel wide briefing">
        <div class="screen-head">
          <div class="kicker">MISSION BRIEF \xB7 ${t.name}</div>
          <h2>${t.name} \xB7 ${t.subtitle}</h2>
          <div class="subline"><span>${t.location}</span><span class="mono">\u7A97\u53E3 ${Ns(t.timeLimit)}</span><span>\u76EE\u6807\uFF1A${t.objective}</span></div>
        </div>
        <div class="brief-grid">
          <div class="brief-col">
            <h3>\u7B80\u62A5</h3>
            ${t.brief.map(r=>`<p class="brief-line">${r}</p>`).join("")}
            <div class="brief-note">
              <span class="note-mark">!</span>
              <span>\u76F8\u5BF9\u901F\u5EA6\u63A7\u5236\u5728 10 km/h\uFF082.78 m/s\uFF09\u4EE5\u5185\uFF0C\u673A\u68B0\u81C2\u624D\u80FD\u7A33\u5B9A\u6355\u83B7\u3002\u5927\u578B\u788E\u7247\u5305\u7EBF\u66F4\u7D27\uFF1B\u65E0\u4EBA\u503C\u5B88\u65F6\u53EF\u6309 G \u8BA9\u81EA\u52A8\u89C4\u5212\u6267\u884C\u63A5\u8FD1\u3001\u5BF9\u51C6\u4E0E\u6355\u83B7\u3002</span>
            </div>
          </div>
          <div class="brief-col">
            <h3>\u64CD\u4F5C</h3>
            ${yb()}
          </div>
        </div>
        <div class="screen-foot">
          <button class="btn" data-action="back">\u8FD4\u56DE</button>
          <button class="btn btn-primary" data-action="begin">\u5F00\u59CB\u51FA\u822A <kbd>ENTER</kbd></button>
        </div>
      </div>
    `);i.querySelector('[data-action="begin"]').addEventListener("click",e),i.querySelector('[data-action="back"]').addEventListener("click",n)}showPause({onResume:t,onRetry:e,onTitle:n,onArchive:i,onMute:r}){let a=this._screen("pause",`
      <div class="panel pause-panel">
        <div class="kicker">SIMULATION PAUSED</div>
        <h2>\u6682\u505C</h2>
        <p class="muted">\u8F68\u9053\u7A97\u53E3\u5DF2\u51BB\u7ED3\u3002\u8C03\u6574\u4E00\u4E0B\u8BA1\u5212\u518D\u7EE7\u7EED\u3002</p>
        <div class="pause-actions">
          <button class="btn btn-primary" data-action="resume">\u7EE7\u7EED\u4EFB\u52A1 <kbd>ESC</kbd></button>
          <button class="btn" data-action="retry">\u91CD\u8BD5\u672C\u65E5\u6F14\u793A</button>
          <button class="btn" data-action="archive">\u7814\u7A76\u6863\u6848</button>
          <button class="btn btn-ghost" data-action="mute" data-mute-label>\u97F3\u6548\uFF1A${this.muted?"\u5173":"\u5F00"}</button>
          <button class="btn btn-danger" data-action="title">\u653E\u5F03\u5E76\u8FD4\u56DE\u6807\u9898</button>
        </div>
      </div>
    `);a.querySelector('[data-action="resume"]').addEventListener("click",t),a.querySelector('[data-action="retry"]').addEventListener("click",e),a.querySelector('[data-action="archive"]').addEventListener("click",i),a.querySelector('[data-action="mute"]').addEventListener("click",r),a.querySelector('[data-action="title"]').addEventListener("click",n)}showDock(t,{onContinue:e}){let n=t.items.length?t.items.map(a=>`
        <div class="ledger-row">
          <span>${a.label}</span>
          <span class="mono">${a.sizeClass==="large"?"\u5927\u578B \xB7 ":""}\xA5 ${He(a.value)} \u4E07</span>
        </div>`).join(""):'<div class="ledger-row dim"><span>\u672C\u6B21\u6CA1\u6709\u643A\u5E26\u788E\u7247</span><span>\u2014</span></div>',i=t.objectiveMet;this._screen("dock",`
      <div class="panel dock-panel">
        <div class="screen-head">
          <div class="kicker">DOCKING COMPLETE \xB7 DEPOT-01</div>
          <h2>\u5DF2\u5BF9\u63A5 M300 \u8865\u7ED9\u7AD9</h2>
          <div class="subline"><span>${t.waveName}</span><span>\u8D27\u8231\u5378\u8F7D \xB7 \u63A8\u8FDB\u5242\u8865\u7ED9 \xB7 \u7535\u6C60\u5145\u7535</span></div>
        </div>
        <div class="dock-grid">
          <div>
            <h3>\u672C\u6B21\u4EA4\u4ED8</h3>
            <div class="ledger">${n}</div>
            <div class="ledger-row total">
              <span>\u788E\u7247\u56DE\u6B3E</span><span class="mono">\xA5 ${He(t.cash)} \u4E07</span>
            </div>
            <div class="ledger-row">
              <span>\u8865\u7ED9\u5B8C\u6210</span><span class="mono">\u0394v ${t.dvMax} m/s \xB7 \u7535\u91CF 100%</span>
            </div>
          </div>
          <div class="dock-objective">
            <div class="dock-kicker">\u4EFB\u52A1\u8FDB\u5EA6</div>
            <div class="dock-progress-big">${t.progress.delivered} <span>/ ${t.progress.required}</span></div>
            <div class="dock-progress-label">\u788E\u7247\u5DF2\u4EA4\u4ED8</div>
            ${t.progress.satelliteRequired?`<div class="dock-sat">\u8282\u70B9\u670D\u52A1 ${t.progress.satellitesDone} / ${t.progress.satelliteRequired}</div>`:""}
            <div class="dock-status ${i?"ok":"pending"}">
              ${i?"\u672C\u65E5\u4EFB\u52A1\u76EE\u6807\u5DF2\u5B8C\u6210":"\u76EE\u6807\u5C1A\u672A\u5B8C\u6210\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u51FA\u8231\u4F5C\u4E1A"}
            </div>
          </div>
        </div>
        <div class="screen-foot">
          <button class="btn btn-primary" data-action="continue">
            ${i?"\u5B8C\u6210\u672C\u65E5\u6F14\u793A \u2192":"\u7EE7\u7EED\u4F5C\u4E1A \u2192"}
          </button>
        </div>
      </div>
    `).querySelector('[data-action="continue"]').addEventListener("click",e)}showShop(t,{onBuy:e,onRepair:n,onContinue:i}){let r=t.upgrades.map(h=>{let d=Array.from({length:h.maxLevel},(m,v)=>`<i class="${v<h.level?"on":""}"></i>`).join(""),f=h.maxed?'<span class="shop-max">\u5DF2\u6EE1\u7EA7</span>':`<button class="btn btn-buy" data-buy="${h.id}" ${h.canAfford?"":"disabled"}>
             \xA5 ${He(h.cost)} \u4E07 \xB7 \u5347\u7EA7
           </button>`;return`
        <div class="upgrade-card ${h.maxed?"maxed":""}">
          <div class="upgrade-icon">${h.icon}</div>
          <div class="upgrade-body">
            <div class="upgrade-name">${h.name}<span class="upgrade-short mono">${h.short}</span></div>
            <div class="upgrade-desc">${h.desc}</div>
            <div class="upgrade-effect">${h.effectText}</div>
            <div class="upgrade-pips">${d}</div>
          </div>
          ${f}
        </div>`}).join(""),a=t.repair?`
      <div class="upgrade-card repair-card">
        <div class="upgrade-icon">\u271A</div>
        <div class="upgrade-body">
          <div class="upgrade-name">\u8239\u4F53\u7EF4\u4FEE<span class="upgrade-short mono">HULL</span></div>
          <div class="upgrade-desc">\u4FEE\u8865\u5FAE\u6D41\u661F\u4E0E\u78B0\u649E\u635F\u4F24\uFF0C\u6062\u590D ${t.repair.amount}% \u8239\u4F53\u3002</div>
          <div class="upgrade-effect">\u5F53\u524D\u8239\u4F53 ${t.repair.hull}%</div>
        </div>
        <button class="btn btn-buy" data-repair="1" ${t.repair.canAfford?"":"disabled"}>
          \xA5 ${He(t.repair.cost)} \u4E07 \xB7 \u7EF4\u4FEE
        </button>
      </div>`:"",o=t.ledger.map(h=>`
      <div class="ledger-row ${h.kind==="total"?"total":""}">
        <span>${h.label}</span><span class="mono">${h.value}</span>
      </div>`).join(""),l=t.isFinal?"\u67E5\u770B\u6700\u7EC8\u8BC4\u7EA7 \u2192":`\u8FDB\u5165 ${t.nextWaveName} \u2192`,c=this._screen("shop",`
      <div class="panel wide shop-panel">
        <div class="screen-head">
          <div class="kicker">${t.waveName} \xB7 COMPLETE</div>
          <h2>${t.waveTitle}</h2>
          <p class="story">${t.story}</p>
        </div>
        <div class="shop-ledger">
          <div class="ledger-head">\u7ED3\u7B97</div>
          <div class="ledger">${o}</div>
          <div class="shop-money">\u53EF\u7528\u8D44\u91D1 <span class="mono">\xA5 ${He(t.credits)} \u4E07</span></div>
        </div>
        <div class="shop-upgrades">
          <div class="ledger-head">\u8239\u575E\u5347\u7EA7</div>
          <div class="upgrade-grid">${r}${a}</div>
        </div>
        <div class="screen-foot">
          <span class="foot-hint">\u5347\u7EA7\u7ACB\u5373\u751F\u6548\uFF0C\u4E0B\u4E00\u65E5\u6F14\u793A\u7EE7\u627F\u5168\u90E8\u6539\u88C5\u3002</span>
          <button class="btn btn-primary" data-action="continue">${l}</button>
        </div>
      </div>
    `);c.querySelectorAll("[data-buy]").forEach(h=>{h.addEventListener("click",()=>e(h.dataset.buy))});let u=c.querySelector("[data-repair]");u&&u.addEventListener("click",n),c.querySelector('[data-action="continue"]').addEventListener("click",i)}showResult(t,{onRestart:e,onTitle:n,onArchive:i}){let r=this._screen("result",`
      <div class="panel wide result-panel grade-${t.grade}">
        <div class="result-grade-wrap">
          <div class="result-grade">${t.grade}</div>
          <div class="result-grade-ring"></div>
        </div>
        <div class="result-head">
          <div class="kicker">A-ROUND REVIEW \xB7 \u6F14\u793A\u9A8C\u6536</div>
          <h2>${t.title}</h2>
          <p class="story">${t.text}</p>
        </div>
        <div class="result-stats">
          ${t.stats.map(a=>`
            <div class="result-stat">
              <span>${a.label}</span>
              <strong class="mono">${a.value}</strong>
            </div>`).join("")}
        </div>
        <div class="result-timeline">
          ${t.timeline.map(a=>`<div class="tl-row"><span>${a.label}</span><span>${a.text}</span></div>`).join("")}
        </div>
        <div class="screen-foot">
          <button class="btn" data-action="archive">\u7814\u7A76\u6863\u6848</button>
          <button class="btn" data-action="restart">\u518D\u6765\u4E00\u6B21</button>
          <button class="btn btn-primary" data-action="title">\u8FD4\u56DE\u6807\u9898</button>
        </div>
      </div>
    `);r.querySelector('[data-action="restart"]').addEventListener("click",e),r.querySelector('[data-action="title"]').addEventListener("click",n),r.querySelector('[data-action="archive"]').addEventListener("click",i)}showFail(t,{onRetry:e,onTitle:n}){let i=this._screen("fail",`
      <div class="panel fail-panel">
        <div class="kicker danger">MISSION ABORTED</div>
        <h2>\u6F14\u793A\u4E2D\u65AD</h2>
        <p class="fail-reason">${t.reason}</p>
        <p class="muted">${t.hint}</p>
        <div class="fail-stats">
          ${t.stats.map(r=>`<div class="result-stat"><span>${r.label}</span><strong class="mono">${r.value}</strong></div>`).join("")}
        </div>
        <div class="screen-foot">
          <button class="btn" data-action="title">\u8FD4\u56DE\u6807\u9898</button>
          <button class="btn btn-primary" data-action="retry">\u91CD\u8BD5\u672C\u65E5\u6F14\u793A</button>
        </div>
      </div>
    `);i.querySelector('[data-action="retry"]').addEventListener("click",e),i.querySelector('[data-action="title"]').addEventListener("click",n)}showArchive({onClose:t}){this._screen("archive",`
      <div class="panel wide archive-panel">
        <div class="screen-head">
          <div class="kicker">RESEARCH ARCHIVE \xB7 \u9879\u76EE\u80CC\u666F</div>
          <h2>\u7814\u7A76\u6863\u6848\uFF1A\u8F68\u9053\u670D\u52A1\u4E0E\u788E\u7247\u6E05\u7406</h2>
          <div class="subline"><span>\u672C\u9875\u8BF4\u660E\u6E38\u620F\u4E0E\u672C\u5730\u7814\u7A76\u6587\u6863\u7684\u5173\u7CFB\uFF0C\u4EE5\u53CA\u54EA\u4E9B\u5730\u65B9\u88AB\u8857\u673A\u5316\u3002</span></div>
        </div>
        <div class="archive-scroll">
          <div class="archive-warning">
            <strong>\u8FD9\u4E0D\u662F\u4EFF\u771F\u3002</strong>
            \u6E38\u620F\u7528\u8857\u673A\u7269\u7406\u548C\u7B80\u5316\u8D44\u6E90\u8D26\u672C\u8868\u8FBE\u9879\u76EE\u8BA8\u8BBA\u4E2D\u7684\u4EFB\u52A1\u76F4\u89C9\uFF0C\u4E0D\u80FD\u7528\u4E8E\u4EFB\u4F55\u5DE5\u7A0B\u3001\u7ECF\u6D4E\u6216\u5B89\u5168\u6027\u5224\u65AD\u3002
          </div>
          <h3>\u4E00\u3001\u573A\u666F\u4E0E\u4EFB\u52A1\u5047\u8BBE</h3>
          <ul>
            <li>\u53C2\u8003\u8F68\u9053\uFF1A600 km \u8FD1\u5730\u8F68\u9053\u300153\xB0 \u503E\u89D2\uFF1B\u6BCD\u661F\u8D28\u91CF 1000 kg\uFF0C\u5047\u8BBE\u5747\u5300\u788E\u88C2\u4E3A\u7EA6 100 \u5757\u788E\u7247\u3002</li>
            <li>\u7206\u70B8\u80FD\u91CF\u7EA6 10% \u8F6C\u5316\u4E3A\u788E\u7247\u5E73\u52A8\u80FD\u3001\u7206\u70B8\u4E00\u5929\u540E\u5F00\u5DE5\uFF0C\u5747\u4E3A\u5206\u6790\u5047\u8BBE\u3002</li>
            <li>\u8FD1\u8DDD\u4F5C\u4E1A\u95E8\u69DB\uFF1A\u76F8\u5BF9\u8DDD\u79BB &lt; 100 m\u3001\u76F8\u5BF9\u901F\u5EA6 &lt; 10 km/h \u540E\u8FDB\u5165\u8FD1\u8DDD\u9636\u6BB5\uFF1B\u5355\u76EE\u6807\u64CD\u4F5C\u6309 10 \u5206\u949F\u9884\u7B97\u3002</li>
            <li>\u670D\u52A1\u8239\u6309 500 kg \u51FA\u53D1\u6E7F\u8D28\u91CF\u8BA8\u8BBA\uFF0C\u6BD4\u8F83 20 N \u7EA7\u5C0F\u5316\u63A8\u3001216 N \u7EA7\u53CC\u7EC4\u5143\u52A8\u529B\u4E0E 2.4 kW \u7535\u63A8\uFF1B\u6E38\u620F\u53D6\u201C\u5316\u5B66\u63A8\u8FDB + \u592A\u9633\u7FFC\u201D\u7684\u8FD1\u671F\u8DEF\u7EBF\u3002</li>
            <li>\u56DE\u6536\u7AD9/\u8865\u7ED9\u7AD9\u3001\u8D27\u8231\u5BB9\u91CF\u4E0E\u79BB\u8F68\u5305\u5171\u540C\u9650\u5236\u5355\u8239\u4EFB\u52A1\u8282\u594F\u3002</li>
          </ul>
          <h3>\u4E8C\u3001\u6E38\u620F\u91CC\u88AB\u7B80\u5316\u7684\u5730\u65B9</h3>
          <ul>
            <li>\u6CA1\u6709\u771F\u5B9E\u8F68\u9053\u79EF\u5206\u3001J2 \u8FDB\u52A8\u3001\u6709\u9650\u63A8\u529B\u4EA4\u4F1A\u6216\u63A5\u89E6\u52A8\u529B\u5B66\uFF1B\u98DE\u8239\u6309\u76F8\u673A\u5750\u6807\u5E73\u79FB\u3002</li>
            <li>\u788E\u7247\u6570\u91CF\u3001\u901F\u5EA6\u3001\u4EF7\u503C\u4E3A\u53EF\u73A9\u6027\u53C2\u6570\uFF0C\u4E0D\u4EE3\u8868\u771F\u5B9E\u76EE\u6807\u961F\u5217\u6216\u5546\u4E1A\u4EF7\u683C\u3002</li>
            <li>\u673A\u68B0\u81C2\u6355\u83B7\u7528\u201C\u8DDD\u79BB + \u76F8\u5BF9\u901F\u5EA6 + \u6309\u4F4F R\u201D\u5224\u5B9A\uFF1B\u81EA\u52A8\u89C4\u5212\u7528\u901F\u5EA6\u4F3A\u670D\u4E0E\u59FF\u6001\u5BF9\u51C6\uFF0C\u4E0D\u662F\u6700\u4F18\u8F68\u8FF9\u89C4\u5212\u3002</li>
            <li>\u5347\u7EA7\u3001\u8425\u6536\u3001\u878D\u8D44\u60C5\u8282\u5747\u4E3A\u865A\u6784\u53D9\u4E8B\uFF1B\u9879\u76EE\u6587\u6863\u4E2D\u7684\u6210\u672C\u3001\u5E02\u573A\u89C4\u6A21\u4E0E\u5468\u671F\u662F\u6761\u4EF6\u6027\u7814\u7A76\u3002</li>
            <li>\u6E38\u620F\u4E0D\u58F0\u79F0\u9A8C\u8BC1\u4E86\u788E\u7247\u6E05\u7406\u3001\u8282\u70B9\u670D\u52A1\u6216\u4EFB\u4F55\u5546\u4E1A\u53EF\u884C\u6027\u3002</li>
          </ul>
          <h3>\u4E09\u3001\u5BF9\u5E94\u7684\u672C\u5730\u7814\u7A76\u5165\u53E3</h3>
          <ul class="archive-links">
            <li><code>docs/PROJECT_CONTEXT.md</code> \u2014 \u9879\u76EE\u80CC\u666F\u3001\u4E09\u573A\u666F\u3001\u6A21\u578B\u8FB9\u754C</li>
            <li><code>docs/2026-10-18_debris_explosion_model.md</code> \u2014 100 \u7247\u788E\u7247\u4E0E\u5355\u8239\u6E05\u7406\u521D\u7B5B\u6A21\u578B</li>
            <li><code>docs/2026-10-16_space_m300_product_roadmap.md</code> \u2014 \u4EA7\u54C1\u8DEF\u7EBF\u4E0E\u516C\u53F8\u751F\u5B58\u6761\u4EF6</li>
            <li><code>docs/2026-10-17_low_cost_servicer.md</code> \u2014 \u4F4E\u6210\u672C\u670D\u52A1\u8239\u4E0E\u4EFB\u52A1\u91CF</li>
            <li><code>docs/fiction/\u79D1\u5E7B\u5C0F\u8BF4\u6280\u672F\u80CC\u666F.md</code> \u2014 \u673A\u5668\u4EBA\u3001\u8865\u7ED9\u7AD9\u4E0E\u6838\u7535\u62D6\u8239\u7684\u4E16\u754C\u8BBE\u5B9A</li>
            <li><code>studies/debris_explosion_20261018/</code> \u2014 \u788E\u7247\u521D\u7B5B\u8BA1\u7B97\u5305\u4E0E\u56FE\u8868</li>
            <li><code>simulation_v3/</code> \u2014 \u6C34\u8865\u7ED9\u7AD9\u4E0E\u5730\u6708/\u706B\u661F\u4EFB\u52A1\u4EFF\u771F\uFF08\u672C\u5730\uFF09</li>
          </ul>
          <h3>\u56DB\u3001\u64CD\u4F5C\u4E0E\u73A9\u6CD5\u63D0\u793A</h3>
          <ul>
            <li>\u5148\u6309 TAB \u9501\u5B9A\u6700\u8FD1\u7684\u788E\u7247\uFF0C\u518D\u5728\u63A5\u8FD1\u8FC7\u7A0B\u4E2D\u6309 F \u5339\u914D\u76EE\u6807\u901F\u5EA6\u3002\u76F8\u5BF9\u901F\u5EA6\u4F4E\u4E8E\u5305\u7EBF\u65F6\u6309\u4F4F R\uFF1B\u4E5F\u53EF\u4EE5\u6309 G \u8BA9\u81EA\u52A8\u89C4\u5212\u5B8C\u6210\u63A5\u8FD1\u3001\u5BF9\u51C6\u4E0E\u6355\u83B7\u3002</li>
            <li>\u8D27\u8231\u6EE1\u4E86\u6216\u4EA4\u4ED8\u76EE\u6807\u5B8C\u6210\u540E\u56DE\u8865\u7ED9\u7AD9\uFF1B\u8FDB\u5165\u5BF9\u63A5\u8D70\u5ECA\u4F1A\u7531\u7AD9\u7AEF\u7275\u5F15\u3002</li>
            <li>\u4E3B\u53D1\u52A8\u673A\uFF08SHIFT\uFF09\u63A8\u529B\u5927\u4F46 \u0394v \u6D88\u8017\u4E5F\u5927\uFF1B\u7535\u91CF\u4F4E\u65F6\u63A8\u529B\u4E0E\u81EA\u52A8\u5339\u914D\u4F1A\u53D7\u9650\u3002</li>
            <li>\u6BCF\u573A\u6F14\u793A\u7ED3\u675F\u540E\u53EF\u4EE5\u7528\u56DE\u6B3E\u5347\u7EA7\u673A\u68B0\u81C2\u3001\u8D27\u8231\u3001\u63A8\u8FDB\u5242\u4E0E\u81EA\u4E3B\u5339\u914D\u7CFB\u7EDF\u3002</li>
            <li><b>6DOF\uFF1A</b>\u65B9\u5411\u952E\u63A7\u5236\u4FEF\u4EF0/\u504F\u822A\uFF0CQ/E \u6EDA\u8F6C\uFF0CWASD/SPACE/C \u6CBF\u8239\u4F53\u4E09\u8F74\u5E73\u79FB\uFF1BV \u5207\u6362\u8FFD\u5C3E\u4E0E\u81EA\u7531\u89C2\u5BDF\u76F8\u673A\u3002</li>
            <li><b>\u81EA\u52A8\u89C4\u5212\uFF1A</b>TAB \u9009\u62E9\u76EE\u6807\u540E\u6309 G\u3002\u7CFB\u7EDF\u4F1A\u6309\u5F53\u524D \u0394v \u4E0E\u7535\u91CF\u89C4\u5212\u901F\u5EA6\u5339\u914D\u3001\u7AD9\u4F4D\u63A5\u8FD1\u3001\u59FF\u6001\u5BF9\u51C6\u4E0E\u673A\u68B0\u81C2\u6355\u83B7\uFF1B\u624B\u52A8\u8F93\u5165\u6216\u518D\u6B21\u6309 G \u53EF\u4E2D\u65AD\u3002</li>
          </ul>
        </div>
        <div class="screen-foot">
          <button class="btn btn-primary" data-action="close">\u5173\u95ED\u6863\u6848</button>
        </div>
      </div>
    `).querySelector('[data-action="close"]').addEventListener("click",t)}update(t){if(!t)return;let e=this.cache,n=t.mission;if(!n)return;this._text(e,"wave",n.waveIndex,()=>`\u6F14\u793A\u65E5 ${String(n.waveIndex).padStart(2,"0")} / ${String(n.waveTotal).padStart(2,"0")}`),this._text(e,"location",n.location,()=>n.location),this._text(e,"missionTitle",n.waveTitle,()=>n.waveTitle),this._text(e,"objective",n.objective,()=>n.objective),this._text(e,"progressText",`${n.delivered}|${n.required}`,()=>`${n.delivered} / ${n.required}`),this._width(e,"progress",n.required?n.delivered/n.required*100:0,this.el.progressFill);let i=n.satelliteRequired>0;e.hasSat!==i&&(e.hasSat=i,this.el.satRow.style.display=i?"":"none"),i&&this._text(e,"sat",`${n.satellitesDone}|${n.satelliteRequired}`,()=>`${n.satellitesDone} / ${n.satelliteRequired}`);let r=Math.max(0,Math.ceil(n.timeLeft));e.time!==r&&(e.time=r,this.el.timer.textContent=Ns(n.timeLeft),this.el.timer.classList.toggle("danger",n.timeLeft<60)),e.credits!==t.credits&&(e.credits=t.credits,this.el.credits.textContent=He(t.credits));let a=t.ship,o=a.dv/a.dvMax*100;this._width(e,"dv",o,this.el.dvFill,"wide"),this._text(e,"dvText",`${Math.ceil(a.dv)}|${a.dvMax}`,()=>`${Math.ceil(a.dv)} / ${a.dvMax}`);let l=a.battery/a.batteryMax*100;if(this._width(e,"battery",l,this.el.batteryFill),this._text(e,"batteryText",Math.round(l),()=>`${Math.round(l)}%`),this._width(e,"hull",a.hull,this.el.hullFill),this._text(e,"hullText",Math.round(a.hull),()=>`${Math.round(a.hull)}%`),this._text(e,"speedText",a.speed.toFixed(1),()=>`${a.speed.toFixed(1)} m/s`),t.attitude){let v=t.attitude,g=A=>`${A>=0?"+":""}${Math.round(A)}\xB0`,p=`P ${g(v.pitch)} \xB7 R ${g(v.roll)}`;e.attText!==p&&(e.attText=p,this.el.attitudeText.textContent=p);let x=`translateY(${(Math.max(-50,Math.min(50,v.pitch))*.26).toFixed(1)}px) rotate(${(-v.roll).toFixed(1)}deg)`;e.horizonTransform!==x&&(e.horizonTransform=x,this.el.ahLine.style.transform=x);let _=`${v.modeLabel||"CHASE"} \u76F8\u673A \xB7 V \u5207\u6362`;e.modeText!==_&&(e.modeText=_,this.el.modeChip.textContent=_)}let c=t.auto;if(c){this.el.autopilotPanel.classList.add("visible");let v=(g,p)=>{e["ap_"+g]!==p&&(e["ap_"+g]=p,g==="target"?this.el.apTarget.textContent=p:g==="phase"?this.el.apPhase.textContent=p:g==="progressText"?this.el.apProgressText.textContent=p:g==="bar"?this.el.apBarFill.style.width=p:g==="dv"?this.el.apDv.textContent=p:g==="used"?this.el.apUsed.textContent=p:g==="dist"?this.el.apDist.textContent=p:g==="rel"&&(this.el.apRel.textContent=p))};v("target",c.targetLabel),v("phase",c.phaseLabel),v("progressText",Math.round(c.progress*100)+"%"),v("bar",(c.progress*100).toFixed(1)+"%"),v("dv",String(c.dvEstimate)),v("used",c.dvUsed.toFixed(1)),v("dist",Id(c.distance)),v("rel",c.relSpeed.toFixed(2)),this._text(e,"autoHint","",()=>""),this.el.autoHint.classList.remove("visible")}else{this.el.autopilotPanel.classList.remove("visible");let v=t.autoHint||"";e.autoHint!==v&&(e.autoHint=v,this.el.autoHint.textContent=v,this.el.autoHint.classList.toggle("visible",!!v))}if(e.cargo!==`${a.cargoUsed}/${a.cargoMax}`){e.cargo=`${a.cargoUsed}/${a.cargoMax}`,this.el.cargoText.textContent=`${a.cargoUsed} / ${a.cargoMax}`;for(let v=0;v<this._cargoPipEls.length;v++){let g=this._cargoPipEls[v];g.style.display=v<a.cargoMax?"":"none",g.classList.toggle("on",v<a.cargoUsed),g.classList.toggle("full",v<a.cargoUsed&&a.cargoUsed>=a.cargoMax)}}if(this._drawRadar(t.radar,t.elapsed),t.station){let v=`\u8865\u7ED9\u7AD9 ${Math.round(t.station.distance)} m`;e.depot!==v&&(e.depot=v,this.el.radarDepotText.textContent=v);let g=t.station.canDock?"ready":t.station.inCorridor?"window":"far";e.depotState!==g&&(e.depotState=g,this.el.radarDepot.dataset.state=g)}this._updateTargetMarker(t.target),this._updateStationMarker(t.station),t.capture?(this.el.captureReadout.classList.add("active"),this.el.captureRing.style.setProperty("--p",t.capture.progress.toFixed(3)),this.el.captureLabel.textContent=t.capture.label||"\u6355\u83B7",this.el.captureReadout.dataset.tone=t.capture.tone||"cyan"):this.el.captureReadout.classList.remove("active");let u=t.prompt?t.prompt.text:"",h=t.prompt&&t.prompt.key||"";(e.prompt!==u||e.promptKey!==h)&&(e.prompt=u,e.promptKey=h,this.el.prompt.classList.toggle("visible",!!u),this.el.prompt.classList.toggle("has-key",!!h),this.el.promptKey.textContent=h,this.el.promptText.textContent=u,this.el.prompt.dataset.tone=t.prompt&&t.prompt.tone||"info");let d=(t.warnings||[]).join("|");e.warnKey!==d&&(e.warnKey=d,this.el.warnings.innerHTML=(t.warnings||[]).map(v=>`<div class="warning-chip">${v}</div>`).join(""));let f=Math.max(0,Math.min(1,t.damageFlash||0));e.flash!==f.toFixed(2)&&(e.flash=f.toFixed(2),this.el.damage.style.opacity=(f*.85).toFixed(2));let m=t.crosshair||"idle";e.crossState!==m&&(e.crossState=m,this.el.crosshair.dataset.state=m),this.el.radarRange.textContent=`R ${Math.round(t.radarRange||450)} m`}_text(t,e,n,i){if(t[e]===n)return;t[e]=n;let a={wave:this.el.wave,location:this.el.location,missionTitle:this.el.missionTitle,objective:this.el.objective,progressText:this.el.progressText,sat:this.el.satText,dvText:this.el.dvText,batteryText:this.el.batteryText,hullText:this.el.hullText,speedText:this.el.speedText}[e];a&&(a.textContent=i?i():String(n))}_width(t,e,n,i){let r=Math.max(0,Math.min(100,n)),a=Math.round(r*10)/10;t["w_"+e]!==a&&(t["w_"+e]=a,i.style.width=r.toFixed(1)+"%",i.classList.toggle("low",r<22))}_updateTargetMarker(t){let e=this.el.targetMarker;if(!t){e.classList.remove("visible"),this.el.edgeArrow.classList.remove("visible");return}let n=t.marker;if(!n||!n.onScreen){e.classList.remove("visible"),n&&n.offscreen?(this.el.edgeArrow.classList.add("visible"),this.el.edgeArrow.style.transform=`translate(-50%, -50%) translate(${n.x}px, ${n.y}px) rotate(${n.angle}deg)`):this.el.edgeArrow.classList.remove("visible");return}this.el.edgeArrow.classList.remove("visible"),e.classList.add("visible"),e.style.transform=`translate(-50%, -50%) translate(${n.x}px, ${n.y}px)`,e.dataset.state=t.state||"far",this._text(this._tmCache=this._tmCache||{},"name",t.label,()=>t.label);let i=`${Id(t.distance)} \xB7 ${r0(t.relSpeed)}`;this._text(this._tmCache,"data",i,()=>i),this._text(this._tmCache,"state",t.stateLabel,()=>t.stateLabel),this._tmCache.nameEl!==t.label&&(this._tmCache.nameEl=t.label,this.el.tmName.textContent=t.label),this._tmCache.dataEl!==i&&(this._tmCache.dataEl=i,this.el.tmData.textContent=i),this._tmCache.stateEl!==t.stateLabel&&(this._tmCache.stateEl=t.stateLabel,this.el.tmState.textContent=t.stateLabel)}_updateStationMarker(t){let e=this.el.stationMarker,n=t&&t.marker;if(!n||!n.onScreen){e.classList.remove("visible");return}e.classList.add("visible"),e.style.transform=`translate(-50%, -50%) translate(${n.x}px, ${n.y}px)`,e.dataset.state=t.canDock?"ready":t.inCorridor?"window":"far",this._smCache!==n.dataStr&&(this._smCache=n.dataStr,this.el.smData.textContent=n.dataStr,this.el.smState.textContent=t.canDock?"\u81EA\u52A8\u5BF9\u63A5\u5C31\u7EEA":t.inCorridor?"\u5DF2\u8FDB\u5165\u5BF9\u63A5\u8D70\u5ECA":"DEPOT-01")}_drawRadar(t,e){let n=this.radarCtx;if(!n)return;let i=this.radarSize,r=i/2,a=t.range||450;n.clearRect(0,0,i,i),n.save(),n.beginPath(),n.arc(r,r,r-3,0,Math.PI*2),n.clip();let o=n.createRadialGradient(r,r,4,r,r,r);o.addColorStop(0,"rgba(10, 34, 52, 0.82)"),o.addColorStop(1,"rgba(3, 10, 18, 0.92)"),n.fillStyle=o,n.fillRect(0,0,i,i),n.strokeStyle="rgba(108, 232, 255, 0.14)",n.lineWidth=1;for(let u=1;u<=3;u++)n.beginPath(),n.arc(r,r,(r-4)*(u/3),0,Math.PI*2),n.stroke();n.beginPath(),n.moveTo(r,4),n.lineTo(r,i-4),n.moveTo(4,r),n.lineTo(i-4,r),n.stroke();let l=(e||0)*.7,c=n.createLinearGradient(r,r,r+Math.cos(l)*r,r+Math.sin(l)*r);c.addColorStop(0,"rgba(108,232,255,0.34)"),c.addColorStop(1,"rgba(108,232,255,0)"),n.strokeStyle=c,n.lineWidth=2,n.beginPath(),n.moveTo(r,r),n.lineTo(r+Math.cos(l)*(r-5),r+Math.sin(l)*(r-5)),n.stroke();for(let u of t.objects){let h=r+u.x*(r-10),d=r-u.y*(r-10);if(u.kind==="station")n.fillStyle="rgba(99, 255, 176, 0.95)",n.fillRect(h-3,d-3,6,6),n.strokeStyle="rgba(99, 255, 176, 0.35)",n.strokeRect(h-6,d-6,12,12);else{let f=u.selected;n.fillStyle=f?"#ffb454":u.kind==="satellite"?"rgba(99,255,176,0.8)":"rgba(140,205,255,0.62)",n.beginPath(),n.arc(h,d,f?3.4:2.1,0,Math.PI*2),n.fill(),f&&(n.strokeStyle="rgba(255,180,84,0.8)",n.lineWidth=1.5,n.beginPath(),n.arc(h,d,7,0,Math.PI*2),n.stroke())}}n.fillStyle="#eaf8ff",n.beginPath(),n.moveTo(r,r-7),n.lineTo(r+4.5,r+5),n.lineTo(r,r+2.6),n.lineTo(r-4.5,r+5),n.closePath(),n.fill(),n.restore(),n.strokeStyle="rgba(108, 232, 255, 0.35)",n.lineWidth=1.5,n.beginPath(),n.arc(r,r,r-3,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(255, 180, 84, 0.55)",n.beginPath(),n.moveTo(r-10,5),n.lineTo(r+10,5),n.stroke()}toast(t,e="info",n=2600){let i=document.createElement("div");for(i.className=`toast toast-${e}`,i.textContent=t,this.el.toasts.appendChild(i);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove();let r=setTimeout(()=>{i.classList.add("out"),setTimeout(()=>i.remove(),350)},n);this.toastTimers.push(r)}waveIntro({kicker:t,title:e,sub:n}){let i=this.el.waveIntro;i.querySelector(".wi-kicker").textContent=t||"",i.querySelector(".wi-title").textContent=e||"",i.querySelector(".wi-sub").textContent=n||"",i.classList.remove("active"),i.offsetWidth,i.classList.add("active"),this.waveIntroTimer&&clearTimeout(this.waveIntroTimer),this.waveIntroTimer=setTimeout(()=>i.classList.remove("active"),3400)}};var Dc=null;function ni(){return Dc||(Dc={solar:a0(),solarStation:a0(862794,3913727),foil:Mb(),hull:Sb(),glow:bb(),beacon:Eb(),ring:Tb(),labelStation:Uc("M300 \xB7 \u8F68\u9053\u670D\u52A1\u4E2D\u5FC3","DEPOT-01  //  600 KM LEO",{width:1024,height:256,accent:"#6ce8ff"}),labelShip:Uc("M300-01","ORBITAL SERVICE",{width:512,height:200,accent:"#ffce7a",smallSize:34}),labelSat:Uc("CLIENT NODE","A-07  //  WAITING SERVICE",{width:512,height:200,accent:"#9aa6b8",smallSize:30}),warning:wb()},Dc)}function a0(s=662579,t=5227519){let{canvas:e,ctx:n}=wi(512,512);n.fillStyle="#06101c",n.fillRect(0,0,512,512);let i=60,r=92,a=5;for(let l=6;l<512;l+=r+a)for(let c=6;c<512;c+=i+a){let u=n.createLinearGradient(c,l,c+i,l+r),h=ei(c*131+l*17)();u.addColorStop(0,`rgba(${10+h*12}, ${34+h*26}, ${62+h*40}, 1)`),u.addColorStop(.55,`rgba(${8+h*8}, ${24+h*18}, ${48+h*24}, 1)`),u.addColorStop(1,"rgba(4, 16, 32, 1)"),n.fillStyle=u,n.fillRect(c,l,i,r),n.strokeStyle="rgba(120, 200, 255, 0.10)",n.lineWidth=1;for(let d=1;d<4;d++)n.beginPath(),n.moveTo(c+i/4*d,l+2),n.lineTo(c+i/4*d,l+r-2),n.stroke();n.strokeStyle="rgba(160, 220, 255, 0.16)",n.strokeRect(c+.5,l+.5,i-1,r-1)}n.fillStyle="rgba(210, 235, 255, 0.22)";for(let l=0;l<512;l+=130)n.fillRect(l,0,4,512);n.strokeStyle="rgba(200, 230, 255, 0.35)",n.lineWidth=5,n.strokeRect(2,2,508,508);let o=Ai(e,{anisotropy:8});return o.wrapS=_n,o.wrapT=_n,o}function Mb(){let{canvas:s,ctx:t}=wi(256,256),e=t.createLinearGradient(0,0,256,256);e.addColorStop(0,"#8a6320"),e.addColorStop(.35,"#d9a33c"),e.addColorStop(.6,"#9a6f24"),e.addColorStop(1,"#e0b75a"),t.fillStyle=e,t.fillRect(0,0,256,256);let n=ei(99);t.strokeStyle="rgba(255, 230, 160, 0.35)";for(let i=0;i<90;i++){t.beginPath();let r=n()*256,a=n()*256;t.moveTo(r,a),t.lineTo(r+(n()-.5)*70,a+(n()-.5)*70),t.stroke()}t.fillStyle="rgba(40, 26, 8, 0.18)";for(let i=0;i<120;i++)t.fillRect(n()*256,n()*256,2+n()*4,1+n()*2);return Ai(s)}function Sb(){let{canvas:s,ctx:t}=wi(512,512);t.fillStyle="#7d8798",t.fillRect(0,0,512,512);let e=ei(7);for(let n=0;n<512;n+=64)for(let i=0;i<512;i+=64){let r=110+Math.floor(e()*34);t.fillStyle=`rgb(${r}, ${r+6}, ${r+18})`,t.fillRect(i+1,n+1,62,62)}t.strokeStyle="rgba(30, 40, 55, 0.55)",t.lineWidth=2;for(let n=0;n<=512;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,512),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(512,n),t.stroke();t.fillStyle="rgba(20, 28, 40, 0.5)",t.fillRect(150,200,210,46),t.fillStyle="rgba(120, 220, 255, 0.8)",t.font="bold 28px Menlo, monospace",t.fillText("M300",170,233),t.strokeStyle="rgba(255, 180, 84, 0.5)",t.lineWidth=3,t.strokeRect(150,200,210,46);for(let n=0;n<40;n++)t.fillStyle=`rgba(20, 24, 30, ${.06+e()*.12})`,t.fillRect(e()*512,e()*512,4+e()*26,2+e()*6);return Ai(s,{repeat:[2,1]})}function bb(){let{canvas:s,ctx:t}=wi(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(210,240,255,0.75)"),e.addColorStop(.5,"rgba(110,190,255,0.18)"),e.addColorStop(1,"rgba(40,90,160,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ai(s,{srgb:!1})}function Eb(){let{canvas:s,ctx:t}=wi(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(150,230,255,0.85)"),e.addColorStop(1,"rgba(120,200,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ai(s,{srgb:!1})}function Tb(){let{canvas:s,ctx:t}=wi(256,256);return t.strokeStyle="rgba(255,255,255,1)",t.lineWidth=7,t.beginPath(),t.arc(128,128,106,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=16,t.beginPath(),t.arc(128,128,106,0,Math.PI*2),t.stroke(),Ai(s,{srgb:!1})}function wb(){let{canvas:s,ctx:t}=wi(256,128);t.fillStyle="#131a24",t.fillRect(0,0,256,128);for(let e=-128;e<256;e+=34)t.fillStyle="#e8b23c",t.beginPath(),t.moveTo(e,128),t.lineTo(e+34,128),t.lineTo(e+34+64,0),t.lineTo(e+64,0),t.closePath(),t.fill();return Ai(s)}function Uc(s,t,{width:e=512,height:n=200,accent:i="#6ce8ff",smallSize:r=30}={}){let{canvas:a,ctx:o}=wi(e,n);o.clearRect(0,0,e,n);let l=o.createLinearGradient(0,0,e,0);l.addColorStop(0,"rgba(6, 14, 24, 0.0)"),l.addColorStop(.12,"rgba(6, 14, 24, 0.82)"),l.addColorStop(.88,"rgba(6, 14, 24, 0.82)"),l.addColorStop(1,"rgba(6, 14, 24, 0.0)"),o.fillStyle=l,o.fillRect(0,0,e,n),o.strokeStyle=i,o.globalAlpha=.75,o.lineWidth=3,o.strokeRect(24,22,e-48,n-44),o.globalAlpha=1,o.lineWidth=6,o.beginPath(),o.moveTo(24,62),o.lineTo(24,22),o.lineTo(74,22),o.moveTo(e-24,n-62),o.lineTo(e-24,n-22),o.lineTo(e-74,n-22),o.stroke();let c=Math.floor(n*.29);return o.fillStyle="#e8f4ff",o.font=`bold ${c}px "PingFang SC", "Helvetica Neue", sans-serif`,o.textBaseline="middle",o.fillText(s,52,n*.42),o.fillStyle=i,o.font=`${r}px Menlo, "SF Mono", monospace`,o.fillText(t,54,n*.72),Ai(a)}function Ab(){let s=ni();return{hull:new $e({map:s.hull,color:14673650,metalness:.55,roughness:.48}),hullDark:new $e({color:jm.hullDark,metalness:.65,roughness:.5}),hullBright:new $e({color:13095908,metalness:.4,roughness:.55}),foil:new $e({map:s.foil,color:16767370,metalness:.85,roughness:.42}),solar:new $e({map:s.solar,color:12575999,metalness:.5,roughness:.45,emissive:662835,emissiveIntensity:.6}),solarStation:new $e({map:s.solarStation,color:13626111,metalness:.5,roughness:.45,emissive:662835,emissiveIntensity:.5}),metal:new $e({color:10135224,metalness:.9,roughness:.32}),darkMetal:new $e({color:3818324,metalness:.8,roughness:.45}),whiteComposite:new $e({color:13620960,metalness:.15,roughness:.72}),radiator:new $e({color:14542575,metalness:.2,roughness:.8}),emissiveCyan:new xe({color:7137535}),emissiveAmber:new xe({color:16757844}),emissiveGreen:new xe({color:6553520}),emissiveRed:new xe({color:16736109}),engineGlow:new xe({color:9428223,transparent:!0,opacity:.9,blending:Ae,depthWrite:!1,side:ze}),enginePlume:new xe({color:6932735,transparent:!0,opacity:0,blending:Ae,depthWrite:!1,side:ze}),enginePlumeInner:new xe({color:16770992,transparent:!0,opacity:0,blending:Ae,depthWrite:!1,side:ze}),ring:new $e({color:12109012,metalness:.85,roughness:.35})}}var Pd=null;function wr(){return Pd||(Pd=Ab()),Pd}function ka(s,t,e,n,i=.85){let r=ni(),a=new an(new Qe({map:r.glow,color:t,transparent:!0,opacity:i,blending:Ae,depthWrite:!1}));return a.scale.setScalar(e),a.position.copy(n),s.add(a),a}function o0(){let s=wr(),t=ni(),e=new ue;e.name="M300";let n={group:e},i=new it(new jt(2.5,2.1,4.4),s.hull);i.castShadow=!1,e.add(i);let r=new it(new ne(1.15,1.3,.9,10),s.hullDark);r.rotation.x=Math.PI/2,r.position.z=-2.6,e.add(r);let a=new it(new Xe(.55,12,10),s.foil);a.position.z=-3.05,e.add(a);for(let ct of[-1.5,.2,1.7]){let ht=new it(new Sn(1.36,.09,8,20),s.metal);ht.rotation.x=Math.PI/2,ht.position.z=ct,e.add(ht)}let o=new it(new jt(2.2,.12,1.7),s.foil);o.position.set(0,1.12,.5),e.add(o);let l=new it(new jt(.1,1.2,1.8),s.foil);l.position.set(-1.29,.2,.3),e.add(l);let c=new it(new Jn(1.7,.66),new xe({map:t.labelShip,transparent:!0,depthWrite:!1,side:ze}));c.rotation.x=-Math.PI/2,c.position.set(0,1.2,1.05),e.add(c);let u=[];for(let ct of[-1,1]){let ht=new ue;ht.position.set(ct*1.3,.2,.25);let V=new it(new ne(.07,.07,6.2,8),s.metal);V.rotation.z=Math.PI/2,V.position.x=ct*3.1,ht.add(V);for(let J=0;J<2;J++){let _t=new it(new jt(2.9,.055,1.8),s.solar);_t.position.set(ct*(2.1+J*3.1),0,0),ht.add(_t);let rt=new it(new jt(2.98,.07,1.9),s.hullDark);rt.position.copy(_t.position),rt.position.y-=.01,ht.add(rt),J===1&&(ht.rotation.x=ct*.04)}e.add(ht),u.push(ht),ht.rotation.z=-ct*.09}let h=new it(new ne(.52,.86,1.25,16,1,!0),s.darkMetal);h.rotation.x=Math.PI/2,h.position.z=2.75,e.add(h);let d=new it(new ne(.34,.34,.4,12),s.metal);d.rotation.x=Math.PI/2,d.position.z=2.35,e.add(d);let f=new it(new xr(.5,16),s.emissiveCyan);f.position.z=3.36,e.add(f);let m=ka(e,7853823,1.6,new w(0,0,3.45),.9),v=new it(new Si(.72,3.8,14,1,!0),s.enginePlume);v.rotation.x=-Math.PI/2,v.position.z=5.25,e.add(v);let g=new it(new Si(.34,3.2,10,1,!0),s.enginePlumeInner);g.rotation.x=-Math.PI/2,g.position.z=4.95,e.add(g);let p=[[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,.3],[0,1,-.3],[0,-1,.3],[0,-1,-.3],[1,0,0],[-1,0,0]],y=[],x=new Si(.085,.24,8);for(let ct of p){let ht=new w(...ct).normalize(),V=new w(ht.x*1.22,ht.y*.95+Math.sign(ht.y||1)*.15,ht.z*1.85),J=new it(x,s.darkMetal);J.position.copy(V),J.quaternion.setFromUnitVectors(new w(0,1,0),ht),e.add(J),y.push({pos:V.clone(),dir:ht})}let _=new ue;_.position.set(0,1.18,-1.35),e.add(_);let A=new it(new Xe(.3,12,10),s.metal);_.add(A);let T=new ne(.15,.17,1.45,10),C=new it(T,s.whiteComposite);C.rotation.x=Math.PI/2,C.position.z=-.72,_.add(C);let I=new ue;I.position.z=-1.45,_.add(I);let b=new it(new Xe(.24,12,10),s.metal);I.add(b);let S=new it(new ne(.11,.13,1.25,10),s.hullBright);S.rotation.x=Math.PI/2,S.position.z=-.62,I.add(S);let P=new ue;P.position.z=-1.25,I.add(P);let B=new it(new Xe(.19,10,8),s.darkMetal);P.add(B);let U=new it(new jt(.42,.18,.34),s.metal);U.position.z=-.25,P.add(U);let F=new it(new jt(.09,.12,.5),s.emissiveCyan);F.position.set(-.2,0,-.55),P.add(F);let G=new it(new jt(.09,.12,.5),s.emissiveCyan);G.position.set(.2,0,-.55),P.add(G);let H=new it(new ne(.06,.06,.5,8),s.metal);H.position.set(.8,1.3,1.5),e.add(H);let j=new it(new ne(.48,.08,.22,14,1,!0),s.hullBright);j.rotation.x=Math.PI/2,j.position.set(.8,1.55,1.6),e.add(j);let W=[],ot=[{pos:new w(-7,.35,.25),color:16730709,phase:0},{pos:new w(7,.35,.25),color:4587418,phase:.5},{pos:new w(0,1.65,-2.4),color:16777215,phase:.25},{pos:new w(0,-1.2,2.2),color:7137535,phase:.75}];for(let ct of ot){let ht=new it(new Xe(.08,8,6),new xe({color:ct.color}));ht.position.copy(ct.pos),e.add(ht);let V=ka(e,ct.color,.9,ct.pos,.8);W.push({bulb:ht,glow:V,phase:ct.phase})}let dt=[],et=new it(new jt(2,.16,3.2),s.hullDark);et.position.set(0,-1.16,.1),e.add(et);for(let ct=0;ct<8;ct++){let ht=new it(new jt(.44,.42,.66),s.foil);ht.position.set(ct<4?-.5:.5,-1,-1.15+ct%4*.78),ht.visible=!1,e.add(ht),dt.push(ht)}for(let ct of[-1,1]){let ht=new it(new jt(.035,.1,2.4),s.emissiveCyan);ht.position.set(ct*1.27,-.1,.1),e.add(ht)}return Object.assign(n,{bus:i,armRoot:_,armElbow:I,wrist:P,gripperL:F,gripperR:G,engineGlow:m,engineCore:f,plume:v,plumeInner:g,rcsNozzles:y,navLights:W,cargoSlots:dt,wings:u,armBaseWorld:new w,engineWorld:new w(0,0,3.3)}),n}function l0(){let s=wr(),t=ni(),e=new ue,n=new it(new ne(.5,.5,30,10),s.darkMetal);n.rotation.x=Math.PI/2,e.add(n);let i=new it(new ne(3.4,3.4,9,18),s.hull);i.rotation.x=Math.PI/2,e.add(i);let r=new it(new ne(2.2,3.4,1.6,18),s.hullDark);r.rotation.x=Math.PI/2,r.position.z=-5.2,e.add(r);let a=new ue,o=new it(new Sn(14,.65,10,56),s.metal);a.add(o);for(let x=0;x<6;x++){let _=x/6*Math.PI*2,A=new it(new ne(1.15,1.15,3.2,10),s.whiteComposite);A.position.set(Math.cos(_)*14,Math.sin(_)*14,0),A.rotation.z=_,a.add(A);let T=new it(new Sn(1.16,.07,6,14),s.hullDark);T.rotation.z=_,T.position.copy(A.position),a.add(T)}e.add(a);for(let x=0;x<4;x++){let _=x/4*Math.PI*2+Math.PI/4,A=new it(new ne(.16,.16,14,8),s.hullDark);A.position.set(Math.cos(_)*7.6,Math.sin(_)*7.6,0),A.rotation.z=_+Math.PI/2,e.add(A)}for(let x of[-1,1]){let _=new it(new ne(.12,.12,24,8),s.metal);_.rotation.z=Math.PI/2,_.position.set(x*15.5,2,6),e.add(_);for(let A=0;A<2;A++){let T=new it(new jt(10.5,.08,5.4),s.solarStation);T.position.set(x*(12+A*11),2,6),e.add(T)}}for(let x of[-1,1]){let _=new it(new jt(7.5,4.4,.1),s.radiator);_.position.set(x*6.5,-4.5,4),_.rotation.set(.1,x*.2,x*.12),e.add(_)}let l=new it(new ne(2.4,2.8,2.2,18),s.hullBright);l.rotation.x=Math.PI/2,l.position.z=-14.5,e.add(l);let c=new it(new Sn(2.45,.12,8,28),s.emissiveGreen);c.position.z=-15.65,e.add(c),ka(e,6553520,3.2,new w(0,0,-15.9),.55);let u=new Si(.5,1.4,8);for(let x=0;x<4;x++){let _=x/4*Math.PI*2+Math.PI/4,A=new it(u,s.emissiveGreen);A.position.set(Math.cos(_)*3.2,Math.sin(_)*3.2,-15.6),A.rotation.x=-Math.PI/2,A.rotation.z=_,e.add(A)}let h=new it(new Jn(20,5),new xe({map:t.labelStation,transparent:!0,depthWrite:!1,side:ze}));h.position.set(0,8.6,-8),h.rotation.y=Math.PI,e.add(h);let d=new ue;d.position.set(0,4.4,2);let f=new it(new ne(.16,.2,1.6,8),s.metal);f.position.y=.8,d.add(f);let m=new it(new ne(1.3,.2,.35,16,1,!0),s.hullBright);m.rotation.x=Math.PI/2-.5,m.position.y=1.9,d.add(m),e.add(d);let v=[],g=[{pos:new w(-14,0,0),color:16730709},{pos:new w(14,0,0),color:4587418},{pos:new w(0,8.8,-15),color:7137535},{pos:new w(5.5,3.4,-5),color:16757844}];for(let x of g){let _=new it(new Xe(.16,8,8),new xe({color:x.color}));_.position.copy(x.pos),e.add(_),v.push({bulb:_,glow:ka(e,x.color,1.6,x.pos,.7)})}let p=new it(new bs(.6,1.6,4,8),s.whiteComposite);p.rotation.z=Math.PI/2,p.position.set(-6,-3.2,-11),e.add(p);let y=new ee;return y.position.set(0,0,-16.2),e.add(y),{group:e,ring:a,radar:d,label:h,lights:v,dockPort:y,update(x,_){a.rotation.z+=x*.055,d.rotation.y=Math.sin(_*.25)*.7+_*.08;for(let A=0;A<v.length;A++){let T=v[A],C=.55+.45*Math.sin(_*(2+A*.7)+A);T.glow.material.opacity=.35+C*.4}}}}function c0(s=1){let t=wr(),e=ni(),n=new ue,i=ei(s),r=new it(new jt(2.2,1.8,2.9),t.hullBright);n.add(r);let a=new it(new jt(1.7,.08,2.2),t.foil);a.position.y=.95,n.add(a);let o=[];for(let f of[-1,1]){let m=new ue;m.position.set(f*1.1,.1,0);let v=new it(new ne(.06,.06,3.2,6),t.metal);v.rotation.z=Math.PI/2,v.position.x=f*1.6,m.add(v);let g=new it(new jt(3.6,.05,1.5),t.solar);g.position.x=f*3.5,g.rotation.x=.95,m.add(g),n.add(m),o.push(m)}let l=new it(new ne(.55,.1,.25,14,1,!0),t.hullBright);l.position.set(0,1.15,-.8),l.rotation.x=Math.PI/2,n.add(l);let c=new it(new Jn(3.2,1.25),new xe({map:e.labelSat,transparent:!0,depthWrite:!1,side:ze}));c.position.set(0,-1.25,-1.8),c.rotation.x=-.2,n.add(c);let u=new it(new Xe(.15,8,8),t.emissiveRed);u.position.set(0,1.4,.9),n.add(u);let h=ka(n,16736109,2.2,u.position,.85),d=new it(new Sn(.9,.05,6,20),t.emissiveAmber);return d.position.set(0,0,-1.5),n.add(d),{group:n,wings:o,beacon:u,beaconGlow:h,portRing:d,label:c,serviced:!1,markServiced(){this.serviced=!0,u.material=t.emissiveGreen,h.material.color.setHex(6553520),d.material=t.emissiveGreen,c.material.map=Uc("CLIENT NODE","A-07  //  SERVICE COMPLETE",{width:512,height:200,accent:"#63ffb0",smallSize:30}),c.material.needsUpdate=!0},update(f,m){let v=this.serviced?.75+.25*Math.sin(m*3):.35+.65*(Math.sin(m*5.2)>.1?1:.1);h.material.opacity=v,this.serviced&&o.forEach(g=>{g.rotation.x=un.damp(g.rotation.x,0,3,f)})}}}function h0(s,t,e){let n=wr(),i=ei(e),r=new ue,a=1.5,o=new ue;if(r.add(o),s==="panel"){let u=new it(new jt(1.9,.07,1.25),n.solar);o.add(u);let h=new it(new jt(2,.1,1.35),n.darkMetal);h.position.y=-.02,o.add(h);let d=new it(new jt(.7,.06,.55),n.solar);d.position.set(1.1,.12,.2),d.rotation.set(.3,.5,.2),o.add(d);let f=new it(new ne(.045,.045,1.4,6),n.metal);f.rotation.z=Math.PI/2,f.position.set(-1.2,-.05,-.1),o.add(f)}else if(s==="truss"){for(let u=0;u<3;u++){let h=new it(new ne(.055,.055,2.1,6),n.metal);h.rotation.set(i()*.8,i()*Math.PI,i()*.8),o.add(h)}for(let u=0;u<4;u++){let h=new it(new jt(.18,.18,.18),n.darkMetal);h.position.set((i()-.5)*1.7,(i()-.5)*1.7,(i()-.5)*1.7),o.add(h)}}else if(s==="tank"){let u=new it(new bs(.52,1,4,12),i()>.5?n.foil:n.hullBright);u.rotation.z=Math.PI/2+(i()-.5)*.5,o.add(u);let h=new it(new Sn(.53,.045,6,16),n.emissiveRed);h.rotation.y=Math.PI/2,h.position.x=.15,o.add(h);let d=new it(new ne(.035,.035,.8,6),n.metal);d.position.set(.55,.2,.1),d.rotation.z=.8,o.add(d)}else if(s==="dish"){let u=new it(new ne(.95,.14,.42,18,1,!0),n.hullBright);o.add(u);let h=new it(new Sn(.95,.035,6,22),n.metal);h.rotation.x=Math.PI/2,h.position.y=.21,o.add(h);let d=new it(new ne(.04,.04,1.1,6),n.metal);d.position.y=-.6,o.add(d)}else if(s==="bus"){let u=new it(new jt(1.5,1.1,1.3),n.hull);o.add(u);let h=new it(new jt(1.52,.42,1.32),n.foil);h.position.y=.18,o.add(h);let d=new it(new ne(.28,.28,.5,10),n.darkMetal);d.rotation.x=Math.PI/2,d.position.set(.4,.55,.8),o.add(d);let f=new it(new jt(.9,.06,.7),n.solar);f.position.set(-1.1,.2,.1),f.rotation.z=.5,o.add(f)}else if(s==="foil"){let u=new it(new Ts(.9,1),n.foil);u.scale.set(1.4,.55,1.1),o.add(u);let h=new it(new jt(.5,.3,.4),n.darkMetal);o.add(h)}else{let u=new it(new Sn(.85,.11,8,22,4.5),n.metal);u.rotation.set(i()*Math.PI,i()*Math.PI,0),o.add(u);let h=new it(new ne(.06,.06,1.6,6),n.darkMetal);h.rotation.set(i(),i(),i()),o.add(h)}for(let u=0;u<2;u++){let h=new it(new ws(.1+i()*.1),n.darkMetal);h.position.set((i()-.5)*1.6,(i()-.5)*1.6,(i()-.5)*1.6),o.add(h)}o.scale.setScalar(t/a),o.rotation.set(i()*Math.PI,i()*Math.PI,i()*Math.PI);let l=ni(),c=new an(new Qe({map:l.beacon,color:8373486,transparent:!0,opacity:.3,blending:Ae,depthWrite:!1}));return c.scale.setScalar(.45+t*.12),c.position.set(0,t*.55,0),r.add(c),r.userData.shape=s,r.userData.wrap=o,{group:r,wrap:o,radius:t*.85,beacon:c,size:t}}function u0(s,t){let e=ei(t),n=new ue,i=wr(),r=[new ws(1),new jt(1.6,.2,.9),new Ts(.7,0),new ne(.12,.12,1.8,6)];for(let a=0;a<s;a++){let o=r[Math.floor(e()*r.length)],l=new it(o,e()>.5?i.darkMetal:i.whiteComposite),c=e()*Math.PI*2,u=450+e()*900;l.position.set(Math.cos(c)*u,(e()-.5)*260,Math.sin(c)*u+40),l.rotation.set(e()*3,e()*3,e()*3),l.scale.setScalar(.6+e()*1.6),n.add(l)}return n}function d0(s){let t=ei(s),e=wr(),n=new ue,i=new it(new jt(2.4,1.6,3),e.hullDark);n.add(i);let r=new it(new jt(1.2,.6,1),e.foil);r.position.set(.6,.8,.4),n.add(r);let a=new it(new jt(2.6,.06,1.2),e.solar);a.position.set(-2.4,.2,0),a.rotation.z=.4,n.add(a);let o=new it(new ne(.06,.06,1.4,6),e.metal);return o.rotation.set(t()*2,t(),t()),n.add(o),n}var Ha=new w,Ld=new w,Dd=new w,Vn=new w,Nc=new w,f0=new ge,Fc=new ge,Oc=new De,Ud=new ee,p0=new Wt,Bc=new w,Nd=new w,m0=new w,Fd=new ge,kc=class{constructor({scene:t,particles:e,rings:n,onToast:i}){this.model=o0(),this.group=this.model.group,t.add(this.group),this.particles=e,this.rings=n,this.onToast=i||(()=>{}),this.position=this.group.position,this.velocity=new w,this.quaternion=this.group.quaternion,this.stats={armRange:Et.armRangeBase,captureSpeed:Et.captureSpeedBase,cargoMax:Et.cargoBase,deltaVMax:Et.deltaVMaxBase,matchEfficiency:Et.matchEfficiency,matchBattery:Et.batteryDrainMatch},this.deltaV=Et.deltaVMaxBase,this.battery=Et.batteryMax,this.hull=Et.hullMax,this.cargo=[],this.deltaVUsed=0,this.damageFlash=0,this.thrustRcs=0,this.thrustMain=0,this.armTarget=new w,this.armActive=!1,this.armReach=0,this.matchCooldown=0,this.lastHitAt=-99,this.elapsed=0,this.angularVelocity=new w,this.thrustAuto=0,this._idleArmQuat=new ge().setFromEuler(new De(.28,1.15,.15)),this._targetArmQuat=new ge}reset({position:t,deltaVMax:e,hull:n,keepDamage:i=!1}={}){t?this.position.copy(t):this.position.set(_e.spawn.x,_e.spawn.y,_e.spawn.z),this.velocity.set(0,0,0),this.quaternion.identity(),typeof e=="number"&&(this.stats.deltaVMax=e),this.deltaV=this.stats.deltaVMax,this.battery=Et.batteryMax,i||(this.hull=Et.hullMax),this.cargo=[],this.deltaVUsed=0,this.matchCooldown=0,this.damageFlash=0,this.angularVelocity.set(0,0,0),this.thrustAuto=0,this.updateCargoVisual()}applyStats(t){let e=this.stats.deltaVMax>0?this.deltaV/this.stats.deltaVMax:1;this.stats={...this.stats,...t},this.deltaV=this.stats.deltaVMax*Le(e,0,1)}get usedCargo(){return this.cargo.reduce((t,e)=>t+e.cargo,0)}get cargoFree(){return this.stats.cargoMax-this.usedCargo}get speed(){return this.velocity.length()}get positionVector(){return this.position}get forward(){return Ha.set(0,0,-1).applyQuaternion(this.quaternion)}getEnergyFactor(){return this.battery>12?1:.35}forwardVector(t=new w){return t.set(0,0,-1).applyQuaternion(this.quaternion)}rightVector(t=new w){return t.set(1,0,0).applyQuaternion(this.quaternion)}upVector(t=new w){return t.set(0,1,0).applyQuaternion(this.quaternion)}rotateLocal(t,e,n=0){!t&&!e&&!n||(Oc.set(t,e,n,"XYZ"),Fc.setFromEuler(Oc),this.quaternion.multiply(Fc).normalize())}steerToward(t,e,n=1.6){if(!t||t.lengthSq()<1e-8)return;let i=Vn.copy(t).normalize();Bc.set(0,1,0),Math.abs(i.dot(Bc))>.985&&Bc.set(0,0,1),Nd.crossVectors(i,Bc).normalize(),m0.crossVectors(Nd,i).normalize(),p0.makeBasis(Nd,m0,Nc.copy(i).negate()),Fd.setFromRotationMatrix(p0);let r=this.quaternion.angleTo(Fd);if(r<1e-4)return;let a=Math.min(1,n*e/r);this.quaternion.slerp(Fd,a)}applyAutoAccel(t,e){let n=t.length();if(n<1e-6||e<=0)return 0;let i=n*e,r=n;return i>this.deltaV&&(i=this.deltaV,r=e>0?i/e:0),i<=1e-5||r<=0?0:(Vn.copy(t).normalize(),this.velocity.addScaledVector(Vn,r*e),this.deltaV-=i,this.deltaVUsed+=i,this.battery=Math.max(0,this.battery-Et.batteryDrainRcs*e*1.15),this.thrustAuto=Math.max(this.thrustAuto,.85),Math.random()<.75&&this.emitRcsParticles(Vn,.85),i)}addCargo(t){this.cargo.push(t),this.updateCargoVisual()}takeCargo(){let t=this.cargo;return this.cargo=[],this.updateCargoVisual(),t}updateCargoVisual(){let t=this.model.cargoSlots,e=this.usedCargo;for(let n=0;n<t.length;n++)t[n].visible=n<e}drainBattery(t){this.battery=Math.max(0,this.battery-t)}damage(t){return t<=0?0:(this.hull=Math.max(0,this.hull-t),this.damageFlash=1,t)}matchVelocity(t){if(this.matchCooldown>0)return{ok:!1,reason:"cooldown"};if(this.battery<8)return{ok:!1,reason:"battery"};if(!t)return{ok:!1,reason:"no-target"};let e=Vn.copy(t).sub(this.velocity),n=e.length();if(n<.03)return{ok:!1,reason:"already"};let i=n*this.stats.matchEfficiency;if(i>this.deltaV)return{ok:!1,reason:"dv"};if(this.deltaV-=i,this.deltaVUsed+=i,this.battery=Math.max(0,this.battery-this.stats.matchBattery),this.velocity.copy(t),this.matchCooldown=Et.matchCooldown,this.particles){let r=e.normalize().multiplyScalar(-1);this.emitRcsParticles(r,1)}return{ok:!0,cost:i,dv:n}}emitRcsParticles(t,e=1){if(!this.particles)return;let n=Nc.copy(t).applyQuaternion(f0.copy(this.quaternion).invert()),i=null,r=1/0;for(let o of this.model.rcsNozzles){let l=o.dir.dot(n);l<r&&(r=l,i=o)}if(!i)return;let a=Vn.copy(i.pos).applyQuaternion(this.quaternion).add(this.position);this.particles.emit({origin:a,direction:i.dir.clone().applyQuaternion(this.quaternion),count:Math.max(1,Math.round(2*e)),spread:.35,speed:2.5+e*2.5,speedRand:.6,size:.28,sizeRand:.18,life:.28,lifeRand:.22,drag:3.4,color:[.55,.82,1],inheritVelocity:this.velocity,inheritFactor:.35})}emitMainParticles(t){if(!this.particles)return;let e=Vn.set(0,0,3.5).applyQuaternion(this.quaternion).add(this.position),n=Nc.set(0,0,1).applyQuaternion(this.quaternion);this.particles.emit({origin:e,direction:n,count:3+Math.round(t*4),spread:.22,speed:8+t*10,speedRand:1,size:.5+t*.35,sizeRand:.25,life:.32,lifeRand:.25,drag:2.2,color:[.5,.85,1],inheritVelocity:this.velocity,inheritFactor:.3})}aimArm(t){t?(this.armTarget.copy(t),this.armActive=!0):this.armActive=!1}update(t,e,n){this.elapsed=e,this.matchCooldown=Math.max(0,this.matchCooldown-t),this.thrustAuto=0;let i=Le(n.pitch||0,-1,1),r=Le(n.yaw||0,-1,1),a=Le(n.roll||0,-1,1),o=Vn.set(i*Et.attitudePitchRate,r*Et.attitudeYawRate,a*Et.attitudeRollRate),l=1-Math.exp(-Et.attitudeDamping*t);this.angularVelocity.lerp(o,l),this.angularVelocity.lengthSq()>1e-10&&(Oc.set(this.angularVelocity.x*t,this.angularVelocity.y*t,this.angularVelocity.z*t,"XYZ"),Fc.setFromEuler(Oc),this.quaternion.multiply(Fc).normalize()),Ha.set(0,0,-1).applyQuaternion(this.quaternion),Ld.set(1,0,0).applyQuaternion(this.quaternion),Dd.set(0,1,0).applyQuaternion(this.quaternion);let c=this.getEnergyFactor(),u=0,h=0,d=new w;if(n.forward&&d.add(Ha),n.back&&d.sub(Ha),n.right&&d.add(Ld),n.left&&d.sub(Ld),n.up&&d.add(Dd),n.down&&d.sub(Dd),d.lengthSq()>0){d.normalize();let m=Et.rcsAccel*c,v=this.deltaV,g=m*t;g>v&&(g=v,m=t>0?g/t:0),g>1e-4&&(this.velocity.addScaledVector(d,m*t),this.deltaV-=g,this.deltaVUsed+=g,this.battery=Math.max(0,this.battery-Et.batteryDrainRcs*t*c),u=1,Math.random()<.55&&this.emitRcsParticles(d,.7))}if(n.boost&&this.deltaV>.001&&this.battery>4){let m=Et.mainAccel*t;m>this.deltaV&&(m=this.deltaV);let v=t>0?m/t:0;v>0&&(this.velocity.addScaledVector(Ha,v*t),this.deltaV-=m,this.deltaVUsed+=m,this.battery=Math.max(0,this.battery-Et.batteryDrainMain*t),h=1,this.emitMainParticles(1))}if(n.brake&&this.velocity.lengthSq()>.0016&&this.deltaV>.001){Vn.copy(this.velocity).normalize().multiplyScalar(-1);let m=Et.brakeAccel*t;m>this.deltaV&&(m=this.deltaV);let v=t>0?m/t:0;this.velocity.addScaledVector(Vn,v*t),this.deltaV-=m,this.deltaVUsed+=m,this.battery=Math.max(0,this.battery-Et.batteryDrainRcs*t*.8),u=Math.max(u,.8),Math.random()<.4&&this.emitRcsParticles(Vn,.8)}this.velocity.length()>Et.maxSpeed&&this.velocity.setLength(Et.maxSpeed),this.position.addScaledVector(this.velocity,t),this.battery=Math.min(Et.batteryMax,this.battery+Et.batteryRegen*t),this.thrustRcs=Math.max(u,this.thrustAuto),this.thrustMain=h,this.model.plume.material.opacity=un.damp(this.model.plume.material.opacity,h*.75,8,t),this.model.plumeInner.material.opacity=un.damp(this.model.plumeInner.material.opacity,h*.9,8,t);let f=.65+h*.55+Math.sin(e*31)*.04;this.model.plume.scale.set(f,1,f),this.model.plumeInner.scale.set(f,1,f),this.model.engineGlow.material.opacity=.1+h*.62,this.model.engineGlow.scale.setScalar(.55+h*1.35+Math.sin(e*22)*.05);for(let m of this.model.navLights){let v=.3+.7*(.5+.5*Math.sin(e*3+m.phase*Math.PI*2));m.glow.material.opacity=.25+v*.6,m.bulb.visible=v>.25}this.armActive?(Ud.position.copy(this.model.armRoot.getWorldPosition(Nc)),Ud.lookAt(this.armTarget),this._targetArmQuat.copy(Ud.quaternion),this._targetArmQuat.premultiply(f0.copy(this.quaternion).invert()),this.model.armRoot.quaternion.slerp(this._targetArmQuat,1-Math.exp(-10*t)),this.model.armElbow.rotation.x=un.damp(this.model.armElbow.rotation.x,0,8,t),this.armReach=un.damp(this.armReach,1,6,t),this.model.gripperL.rotation.y=-.15,this.model.gripperR.rotation.y=.15):(this.model.armRoot.quaternion.slerp(this._idleArmQuat,1-Math.exp(-5*t)),this.model.armElbow.rotation.x=un.damp(this.model.armElbow.rotation.x,-.9,5,t),this.armReach=un.damp(this.armReach,0,5,t),this.model.gripperL.rotation.y=un.damp(this.model.gripperL.rotation.y,0,6,t),this.model.gripperR.rotation.y=un.damp(this.model.gripperR.rotation.y,0,6,t)),this.damageFlash=Math.max(0,this.damageFlash-t*2.5)}snapshot(){return{dv:this.deltaV,dvMax:this.stats.deltaVMax,deltaV:this.deltaV,deltaVMax:this.stats.deltaVMax,battery:this.battery,batteryMax:Et.batteryMax,hull:this.hull,hullMax:Et.hullMax,cargoUsed:this.usedCargo,cargoMax:this.stats.cargoMax,speed:this.speed,deltaVUsed:this.deltaVUsed,armRange:this.stats.armRange,captureSpeed:this.stats.captureSpeed}}};var Rb=new w,Hc=class{constructor({scene:t}){this.scene=t,this.root=new ue,t.add(this.root),this.objects=[],this.background=null,this.wrecks=[],this.nextId=1,this.delivered=[]}clear(){for(let t of this.objects)this.root.remove(t.group);this.objects=[],this.background&&(this.scene.remove(this.background),this.background=null);for(let t of this.wrecks)this.scene.remove(t);this.wrecks=[],this.delivered=[]}generate(t){this.clear();let e=ei(t.seed),n=new w(_e.spawn.x,_e.spawn.y,_e.spawn.z),i=new w(_e.position.x,_e.position.y,_e.position.z);this.background=u0(28,t.seed+7),this.scene.add(this.background);for(let u=0;u<3;u++){let h=d0(t.seed+100+u);h.position.set((e()>.5?1:-1)*(34+e()*26),30+(e()-.5)*18,396+e()*34),this.wrecks.push(h),this.scene.add(h)}let r=t.debrisCount,a=t.largeCount||0,o=t.required,l=[];for(let u=0;u<r;u++){let h=u<a?"large":e()<.58?"small":"medium";u>=a&&h==="large"&&(h="medium");let d=t0[h],f=Ln.range(e,d.radius[0],d.radius[1]),m=Ln.pick(e,e0),v=m.id,g=null;for(let T=0;T<30;T++){let C=Ln.range(e,95,500),I=e()*Math.PI*2,b=-Math.abs(Math.cos(I))*(.35+e()*.65)-(e()<.2?0:.35),S=Math.sin(I)*(.5+e()*.5),P=new w(S,(e()-.5)*.45,b).normalize();if(g=n.clone().addScaledVector(P,C),g.y=Le(g.y,-60,110),g.distanceTo(i)<95)continue;let B=!0;for(let U of l)if(U.distanceTo(g)<Cd.minSeparation+f){B=!1;break}if(g.distanceTo(n)<55&&(B=!1),B)break}l.push(g.clone());let p=h0(v,f,t.seed+u*131+(v.charCodeAt(0)||0));p.group.position.copy(g),this.root.add(p.group);let y=u<o,x=Ln.unit(e).multiplyScalar(Ln.range(e,.1,.95)*t.driftScale),_=Ln.unit(e).multiplyScalar(Ln.range(e,.05,.5)*(h==="large"?.5:1)),A=`${Ln.pick(e,s0)} \xB7 ${String(1e3+Math.floor(e()*8999))}`;this.objects.push({id:this.nextId++,kind:"debris",label:A,shapeName:m.label,sizeClass:h,classLabel:d.label,cargo:d.cargo,value:d.value,missionTarget:y,group:p.group,wrap:p.wrap,radius:p.radius,beacon:p.beacon,velocity:x,spin:_,captured:!1,delivered:!1,capturingT:0,lastHitAt:-10,phase:e()*Math.PI*2})}let c=t.satellites||0;for(let u=0;u<c;u++){let h=u===0?"\u5BA2\u6237\u8282\u70B9 A-07":`\u5BA2\u6237\u8282\u70B9 A-0${u+7}`,d=null;for(let m=0;m<30;m++){let v=n.clone().add(new w((e()-.5)*420,(e()-.5)*90,-150-e()*260));if(v.distanceTo(i)<120)continue;let g=!0;for(let p of this.objects)if(p.group.position.distanceTo(v)<22){g=!1;break}if(g){d=v;break}}d||(d=new w(120,40,-180));let f=c0(t.seed+u*31);f.group.position.copy(d),f.group.rotation.set(e()*3,e()*3,e()*3),this.root.add(f.group),this.objects.push({id:this.nextId++,kind:"satellite",label:h,shapeName:"\u5BA2\u6237\u8282\u70B9",sizeClass:"medium",classLabel:"\u5408\u4F5C\u76EE\u6807",cargo:0,value:fn.satelliteValue,missionTarget:u<(t.satelliteRequired||0),group:f.group,model:f,radius:4.2,beacon:f.beacon,velocity:Ln.unit(e).multiplyScalar(Ln.range(e,.05,.2)),spin:Ln.unit(e).multiplyScalar(.08),captured:!1,serviced:!1,lastHitAt:-10,phase:e()*Math.PI*2})}return this}update(t,e,n){for(let i of this.objects){if(i.captured){i.capturingT+=t;let r=Le(i.capturingT/.55,0,1);n&&(i.group.position.lerp(n.position,1-Math.exp(-9*t)),i.group.scale.setScalar(Math.max(.001,(1-r)*i.visualScale))),r>=1&&(i.group.visible=!1);continue}if(i.group.position.addScaledVector(i.velocity,t),i.group.rotateOnAxis(Rb.copy(i.spin).normalize(),i.spin.length()*t),i.kind==="satellite"&&i.model.update(t,e),i.beacon){let r=.35+.4*(.5+.5*Math.sin(e*2.2+i.phase));i.beacon.material.opacity=r}}}activeTargets(){return this.objects.filter(t=>t.kind==="debris"?!t.captured:!t.serviced)}nearestTarget(t,e=Cd.targetAutoRange,n=null){let i=null,r=1/0;for(let a of this.activeTargets()){if(n&&a===n)continue;let o=a.group.position.distanceTo(t);o<r&&o<=e&&(r=o,i=a)}return i?{obj:i,distance:r}:null}markCaptured(t){return t.captured||t.kind!=="debris"?!1:(t.captured=!0,t.capturingT=0,t.visualScale=1,t.group.scale.setScalar(1),t.beacon&&(t.beacon.visible=!1),!0)}markServiced(t){return t.serviced||t.kind!=="satellite"?!1:(t.serviced=!0,t.model.markServiced(),!0)}deliverCargo(){let t=[];for(let e of this.objects)e.kind==="debris"&&e.captured&&!e.delivered&&(e.delivered=!0,t.push(e),this.delivered.push(e));return t}get pendingCount(){return this.objects.filter(t=>t.kind==="debris"&&t.captured&&!t.delivered).length}get deliveredCount(){return this.delivered.length}get servicedCount(){return this.objects.filter(t=>t.kind==="satellite"&&t.serviced).length}findObject(t){return this.objects.find(e=>e.id===t)||null}};var g0=new w,zc=class{constructor({scene:t}){this.model=l0(),this.group=this.model.group,this.group.position.set(_e.position.x,_e.position.y,_e.position.z),t.add(this.group),this.port=this.model.dockPort,this.position=new w(_e.position.x,_e.position.y,_e.position.z),this.dockPulse=0}get portPosition(){return this.port.getWorldPosition(g0),g0}update(t,e){this.model.update(t,e),this.dockPulse=.5+.5*Math.sin(e*2.4);let n=this.model.group.children.find(i=>i.geometry&&i.geometry.type==="TorusGeometry");n&&n.material&&n.material.emissive&&(n.material.emissiveIntensity=1+this.dockPulse)}dockInfo(t){let e=this.portPosition,i=t.position.distanceTo(e),r=t.velocity.length(),a=_e.dockTractorRange||30,o=i<=a&&r<=2.6;return{distance:i,relSpeed:r,canDock:o,inCorridor:i<=60,near:i<=120}}};function v0(s,t=420){let e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),r=new Float32Array(t),a=new $t;a.setAttribute("position",new Xt(e,3)),a.setAttribute("aColor",new Xt(n,3)),a.setAttribute("aSize",new Xt(i,1)),a.setAttribute("aAlpha",new Xt(r,1)),a.setDrawRange(0,t);let o=new Re({uniforms:{uScale:{value:620}},vertexShader:`
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uScale;
      void main() {
        vColor = aColor;
        vAlpha = aAlpha;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale / max(-mv.z, 1.0);
        gl_PointSize = clamp(gl_PointSize, 0.0, 64.0);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float a = smoothstep(0.5, 0.06, d) * vAlpha;
        if (a <= 0.003) discard;
        gl_FragColor = vec4(vColor, a);
      }
    `,transparent:!0,depthWrite:!1,blending:Ae}),l=new Mi(a,o);l.frustumCulled=!1,l.renderOrder=5,s.add(l);let c=[];for(let m=0;m<t;m++)c.push({life:0,maxLife:1,size:.3,drag:1.6,pos:new w,vel:new w,r:1,g:1,b:1});let u=0,h=new w;function d(m){let{origin:v,direction:g=null,count:p=6,spread:y=1,speed:x=4,speedRand:_=.6,size:A=.35,sizeRand:T=.15,life:C=.5,lifeRand:I=.25,drag:b=2.2,color:S=[.7,.9,1],inheritVelocity:P=null,inheritFactor:B=.4}=m;for(let U=0;U<p;U++){let F=c[u];u=(u+1)%t,F.life=F.maxLife=C+Math.random()*I,F.size=A+Math.random()*T,F.drag=b,F.pos.copy(v),g?(h.copy(g).normalize(),h.x+=(Math.random()-.5)*y,h.y+=(Math.random()-.5)*y,h.z+=(Math.random()-.5)*y,h.normalize().multiplyScalar(x*(.6+Math.random()*_))):h.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(x*Math.random()),F.vel.copy(h),P&&F.vel.addScaledVector(P,B);let G=S;F.r=G[0]*(.75+Math.random()*.45),F.g=G[1]*(.75+Math.random()*.45),F.b=G[2]*(.75+Math.random()*.45)}}function f(m){let v=!1;for(let g=0;g<t;g++){let p=c[g],y=g*3;if(p.life<=0){r[g]=0,i[g]=0;continue}v=!0,p.life-=m;let x=Math.max(p.life/p.maxLife,0),_=Math.exp(-p.drag*m);p.vel.multiplyScalar(_),p.pos.addScaledVector(p.vel,m),e[y]=p.pos.x,e[y+1]=p.pos.y,e[y+2]=p.pos.z,n[y]=p.r,n[y+1]=p.g,n[y+2]=p.b,i[g]=p.size*(.35+x*.65),r[g]=x*x}v&&(a.attributes.position.needsUpdate=!0,a.attributes.aColor.needsUpdate=!0,a.attributes.aSize.needsUpdate=!0,a.attributes.aAlpha.needsUpdate=!0)}return{points:l,emit:d,update:f,setScale(m){o.uniforms.uScale.value=m},dispose(){s.remove(l),a.dispose(),o.dispose()}}}function x0(s,t=10){let e=ni().ring,n=[];for(let o=0;o<t;o++){let l=new Qe({map:e,color:9430271,transparent:!0,opacity:0,blending:Ae,depthWrite:!1}),c=new an(l);c.visible=!1,s.add(c),n.push({sprite:c,life:0,maxLife:1,start:1,end:6,color:new St})}let i=0;function r(o,{color:l=9430271,start:c=1,end:u=7,duration:h=.65}={}){let d=n[i];i=(i+1)%t,d.sprite.position.copy(o),d.sprite.visible=!0,d.sprite.scale.setScalar(c),d.color.setHex(l),d.sprite.material.color.copy(d.color),d.life=d.maxLife=h,d.start=c,d.end=u}function a(o){for(let l of n){if(l.life<=0){l.sprite.visible=!1;continue}l.life-=o;let c=1-Math.max(l.life/l.maxLife,0),u=1-Math.pow(1-c,3);l.sprite.scale.setScalar(l.start+(l.end-l.start)*u),l.sprite.material.opacity=(1-c)*.85,l.life<=0&&(l.sprite.visible=!1)}}return{spawn:r,update:a}}var Cb=new w,Ib=new w,_0=new w,Vc=new w,Gc=new w,Wc=class{constructor(t){this.game=t,this.active=!1,this.phase="idle",this.target=null,this.plan=null,this.elapsed=0,this.phaseElapsed=0,this.dvStart=0,this.startDistance=0,this.progress=0,this.wasActive=!1}reset(){this.active=!1,this.phase="idle",this.target=null,this.plan=null,this.elapsed=0,this.phaseElapsed=0,this.progress=0}isActive(){return this.active}isHolding(){return this.active&&this.phase==="capture"}standoffFor(t){let e=t.radius||1,n=this.game.ship.stats.armRange,i=Et.serviceRange,r=t.kind==="satellite"?i:n;return Math.max(e+2.2,Math.min(r*.72,e+5.2))}buildPlan(t,e){let n=this.standoffFor(t),i=Math.max(.5,e.dist-n),r=Et.rcsAccel*Fe.maxAccelFactor*.65,a=Math.max(1.5,Math.min(Fe.cruiseSpeed,Math.sqrt(r*i))),o=a/r,c=Math.max(0,i-a*a/r)/Math.max(a,.5),u=t.kind==="satellite"?Et.serviceHold:Et.captureHold,h=o*2+c+7+u,d=Math.ceil(e.relSpeed*1.05+2*a+7);return{standoff:n,travel:i,cruise:a,timeEstimate:h,dvEstimate:d,targetLabel:t.label,kind:t.kind}}start(t){let e=this.game,n=e.ship;if(e.phase!=="playing")return{ok:!1,reason:"\u5F53\u524D\u4E0D\u662F\u51FA\u8231\u4F5C\u4E1A\u72B6\u6001"};if(!t)return{ok:!1,reason:"\u6CA1\u6709\u9501\u5B9A\u76EE\u6807\uFF0C\u6309 TAB \u9009\u62E9"};if(t.kind==="satellite"?t.serviced:t.captured)return{ok:!1,reason:"\u76EE\u6807\u5DF2\u5B8C\u6210"};if(t.kind==="debris"&&n.cargoFree<t.cargo)return{ok:!1,reason:"\u8D27\u8231\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u5148\u8FD4\u6E2F\u5378\u8F7D"};let r=e.targetInfo(t);if(!r)return{ok:!1,reason:"\u76EE\u6807\u4FE1\u606F\u4E0D\u53EF\u7528"};if(n.battery<12)return{ok:!1,reason:"\u7535\u91CF\u4F4E\u4E8E 12%\uFF0C\u65E0\u6CD5\u542F\u52A8\u81EA\u52A8\u89C4\u5212"};if(n.deltaV<Fe.abortReserve+8)return{ok:!1,reason:"\u63A8\u8FDB\u5242\u4F4E\u4E8E\u5B89\u5168\u50A8\u5907\uFF0C\u65E0\u6CD5\u542F\u52A8\u81EA\u52A8\u89C4\u5212"};let a=this.buildPlan(t,r);return n.deltaV<a.dvEstimate+Fe.abortReserve?{ok:!1,reason:`\u0394v \u9884\u7B97\u4E0D\u8DB3\uFF1A\u9884\u8BA1\u9700\u8981 ${a.dvEstimate} m/s\uFF08\u5F53\u524D ${Math.floor(n.deltaV)} m/s\uFF09`}:(this.active=!0,this.wasActive=!0,this.phase="approach",this.phaseElapsed=0,this.elapsed=0,this.target=t,this.plan=a,this.dvStart=n.deltaVUsed,this.startDistance=r.dist,this.progress=0,e.target=t,e.capture=null,e.ship.aimArm(null),e.audio.play("ui"),e.hud.toast(`\u81EA\u52A8\u89C4\u5212\u542F\u52A8 \xB7 ${t.label} \xB7 \u9884\u8BA1 \u0394v ${a.dvEstimate} \xB7 \u7EA6 ${Math.round(a.timeEstimate)} s`,"info",4200),e.hud.toast("G \u53D6\u6D88\u81EA\u52A8\u89C4\u5212 \xB7 \u4EFB\u4F55\u624B\u52A8\u63A8\u529B\u8F93\u5165\u90FD\u4F1A\u63A5\u7BA1\u63A7\u5236","info",3600),{ok:!0,plan:a})}cancel(t){this.active&&(this.active=!1,this.phase="idle",this.target=null,this.plan=null,this.game.capture=null,this.game.ship.aimArm(null),t&&this.game.hud.toast(t,"danger",3e3),this.game.audio.play("warning"))}finish(){this.active=!1,this.phase="done",this.target=null,this.plan=null,this.progress=1,this.game.ship.aimArm(null),this.game.audio.play("success")}updateProgress(t,e){let n=Math.max(1,this.startDistance-e);if(this.phase==="approach"){let i=Le((this.startDistance-t)/n,0,1);this.progress=i*Fe.phaseWeights.approach}else if(this.phase==="align")this.progress=Fe.phaseWeights.approach+Fe.phaseWeights.align*Le(this.phaseElapsed/2.2,0,1);else if(this.phase==="capture"){let i=this.game.capture?Le(this.game.capture.progress,0,1):0;this.progress=Fe.phaseWeights.approach+Fe.phaseWeights.align+Fe.phaseWeights.capture*i}}stationKeep(t,e,n,i,r){let a=this.game.ship,o=_0.copy(e).addScaledVector(n,-i);Vc.copy(o).sub(a.position);let l=Vc.multiplyScalar(.8);l.length()>1.2&&l.setLength(1.2),Gc.copy(t.velocity).add(l);let c=Gc.sub(a.velocity).multiplyScalar(2.2),u=Et.rcsAccel*Fe.maxAccelFactor;c.length()>u&&c.setLength(u),a.applyAutoAccel(c,r)}update(t){if(!this.active)return;let e=this.game,n=e.ship,i=this.target;if(e.phase!=="playing"){this.cancel("\u4EFB\u52A1\u72B6\u6001\u53D8\u5316\uFF0C\u81EA\u52A8\u89C4\u5212\u5DF2\u53D6\u6D88");return}if(!i){this.cancel("\u76EE\u6807\u4E22\u5931\uFF0C\u81EA\u52A8\u89C4\u5212\u4E2D\u6B62");return}if(i.kind==="satellite"?i.serviced:i.captured){this.finish();return}e.target!==i&&(e.target=i);let a=e.targetInfo(i);if(!a){this.cancel("\u76EE\u6807\u4FE1\u606F\u4E0D\u53EF\u7528");return}if(this.elapsed+=t,this.phaseElapsed+=t,n.battery<6){this.cancel("\u7535\u91CF\u4E0D\u8DB3\uFF0C\u81EA\u52A8\u89C4\u5212\u4E2D\u6B62");return}if(this.phase!=="capture"&&n.deltaV<Fe.abortReserve){this.cancel("\u63A8\u8FDB\u5242\u63A5\u8FD1\u8FD4\u6E2F\u50A8\u5907\u7EBF\uFF0C\u81EA\u52A8\u89C4\u5212\u4E2D\u6B62");return}if(a.state==="cargo-full"){this.cancel("\u8D27\u8231\u5DF2\u6EE1\uFF0C\u81EA\u52A8\u89C4\u5212\u4E2D\u6B62");return}let o=i.group.position,l=Cb.copy(o).sub(n.position),c=l.length(),u=Ib.copy(l).normalize(),h=this.plan.standoff;if(this.phase==="approach"){let d=_0.copy(o).addScaledVector(u,-h),f=Vc.copy(d).sub(n.position),m=f.length(),v=f.multiplyScalar(Fe.servoGain),g=Math.min(Fe.cruiseSpeed,Math.sqrt(2*Et.rcsAccel*Math.max(m-.4,0))+.4);v.length()>g&&v.setLength(g),Gc.copy(i.velocity).add(v);let p=Gc.sub(n.velocity).multiplyScalar(Fe.accelGain),y=Et.rcsAccel*Fe.maxAccelFactor;p.length()>y&&p.setLength(y),n.applyAutoAccel(p,t),n.steerToward(u,t,1.5),c<=h+2.2&&a.relSpeed<.9&&(this.phase="align",this.phaseElapsed=0)}else if(this.phase==="align"){this.stationKeep(i,o,u,h,t),n.steerToward(u,t,2.4);let d=n.forwardVector(Vc).angleTo(u);a.inRange&&a.speedOK&&a.relSpeed<Fe.alignSpeed&&d<Fe.alignAngle?(this.phase="capture",this.phaseElapsed=0,e.audio.play("arm")):c>h+5.5&&(this.phase="approach",this.phaseElapsed=0)}else this.phase==="capture"&&(this.stationKeep(i,o,u,h,t),n.steerToward(u,t,2.6),(!a.inRange||!a.speedOK)&&(this.phase="align",this.phaseElapsed=0));this.updateProgress(c,h)}snapshot(){if(!this.active)return null;let t=this.target,e=this.game.ship,n=0,i=0;t&&(n=t.group.position.distanceTo(e.position),i=t.velocity.distanceTo(e.velocity));let r={approach:"\u63A5\u8FD1\u7AD9\u4F4D",align:"\u59FF\u6001\u5BF9\u51C6",capture:t&&t.kind==="satellite"?"\u673A\u68B0\u81C2\u68C0\u4FEE":"\u673A\u68B0\u81C2\u6355\u83B7",done:"\u5B8C\u6210"}[this.phase]||"\u89C4\u5212\u4E2D";return{active:!0,phase:this.phase,phaseLabel:r,targetLabel:t?t.label:"",progress:Le(this.progress,0,1),distance:n,relSpeed:i,dvEstimate:this.plan?this.plan.dvEstimate:0,dvUsed:Math.max(0,e.deltaVUsed-this.dvStart),timeEstimate:this.plan?this.plan.timeEstimate:0,elapsed:this.elapsed,phaseElapsed:this.phaseElapsed}}};var de=new w,Wi=new w,pn=new w,Pb=new w,Lb=new w(0,1,0),xE=new De,_E=new ge,qc=class{constructor({scene:t,camera:e,renderer:n,hud:i,audio:r}){this.scene=t,this.camera=e,this.renderer=n,this.hud=i,this.audio=r,this.width=window.innerWidth,this.height=window.innerHeight,this.particles=v0(t,480),this.rings=x0(t,12),this.fillA=new zn(11130623,1.5),this.fillA.position.set(-260,210,320),t.add(this.fillA),this.fillB=new zn(16765856,.55),this.fillB.position.set(320,-140,-260),t.add(this.fillB),this.fillC=new zn(9418464,.45),this.fillC.position.set(0,380,-120),t.add(this.fillC);let a=ni().ring;this.targetReticle=new an(new Qe({map:a,color:7137535,transparent:!0,opacity:.75,blending:Ae,depthWrite:!1})),this.targetReticle.visible=!1,t.add(this.targetReticle),this.field=new Hc({scene:t}),this.station=new zc({scene:t}),this.ship=new kc({scene:t,particles:this.particles,rings:this.rings,onToast:(o,l)=>this.hud.toast(o,l)}),this.phase="boot",this.elapsed=0,this.cameraMode=Et.cameraModeDefault||"chase",this.autopilot=new Wc(this),this.waveIndex=0,this.wave=ti[0],this.timeLimit=this.wave.timeLimit,this.timeLeft=this.timeLimit,this.waveClock=0,this.money=0,this.levels={},this.runStats={delivered:0,satellites:0,creditsEarned:0},this.waveCash={debris:0,service:0},this.waveResults=[],this.waveStartMoney=0,this.runStatsBackup=null,this.target=null,this.capture=null,this.docking=null,this.shake=0,this.damageFlash=0,this.strandedTimer=0,this.autoSelectTimer=0,this.cameraYaw=0,this.cameraPitch=.52,this.cameraDist=Et.cameraDist,this.cameraDistTarget=Et.cameraDist,this.titleOrbit=0,this.tutorial={aim:!1,match:!1,capture:!1},this.warned60=!1,this.warned30=!1,this.waveResults=[],this.screenBeforeArchive=null,this.pendingWave=0,this._bindHudCallbacks()}async init(){this.field.generate(ti[0]),this.ship.reset({position:this._spawnPos(),deltaVMax:Et.deltaVMaxBase}),this.updateCamera(.016,!0),this.showTitleScreen(),this.hud.setHudVisible(!1)}_spawnPos(){return new w(_e.spawn.x,_e.spawn.y,_e.spawn.z)}_bindHudCallbacks(){}showTitleScreen(){this.autopilot&&this.autopilot.isActive()&&this.autopilot.reset(),this.phase="title",this.hud.hideScreens(),this.hud.setHudVisible(!1),this.hud.showTitle({onStart:()=>{this.audio.init(),this.audio.play("ui"),this.enterBriefing(0)},onBrief:()=>{this.audio.init(),this.audio.play("ui"),this.enterBriefing(0)},onArchive:()=>{this.audio.init(),this.audio.play("ui"),this.openArchive()},onMute:()=>this.toggleMute()})}enterBriefing(t){this.phase="briefing";let e=ti[t];this.hud.setHudVisible(!1),this.hud.showBriefing(e,{onBegin:()=>{this.audio.play("ui"),this.startRun(t)},onBack:()=>{this.audio.play("ui"),this.showTitleScreen()}})}startRun(t=0){this.money=fn.startMoney,this.levels={},this.runStats={delivered:0,satellites:0,creditsEarned:0},this.waveResults=[],this.ship.applyStats(Pc(this.levels)),this.startWave(t,{first:!0})}startWave(t,{first:e=!1}={}){let n=ti[t];this.waveIndex=t,this.wave=n,this.waveStartMoney=this.money,this.runStatsBackup={...this.runStats},this.waveCash={debris:0,service:0},this.timeLimit=n.timeLimit,this.timeLeft=n.timeLimit,this.waveClock=0,this.target=null,this.capture=null,this.docking=null,this.strandedTimer=0,this.warned60=!1,this.warned30=!1,this.shake=0,this.tutorial={aim:!1,match:!1,capture:!1},this.damageFlash=0,this._lowBatteryWarned=!1;let i=Pc(this.levels);this.ship.applyStats(i),this.ship.reset({position:this._spawnPos(),deltaVMax:i.deltaVMax,keepDamage:!e}),this.field.generate(n),this.cameraYaw=0,this.cameraPitch=.28,this.cameraDist=Et.cameraDist,this.cameraDistTarget=Et.cameraDist,this.cameraMode=Et.cameraModeDefault||"chase",this.autopilot&&this.autopilot.reset(),this.phase="playing",this.hud.hideScreens(),this.hud.setHudVisible(!0),this.hud.waveIntro({kicker:`DEMO DAY ${String(n.id).padStart(2,"0")} \xB7 ${n.location}`,title:n.subtitle,sub:`\u76EE\u6807\uFF1A${n.objective}`}),this.audio.play("ui"),this.selectNearestTarget(!0),n.id>1&&this.hud.toast(n.id===2?"\u5BA2\u6237\u8282\u70B9\u5DF2\u5931\u8054 \xB7 \u8FD1\u8DDD\u4FDD\u6301\u540E\u6309\u4F4F R \u68C0\u4FEE":"\u5927\u578B\u788E\u7247\u9700\u8981\u66F4\u4F4E\u76F8\u5BF9\u901F\u5EA6 \xB7 \u5360\u7528 2 \u683C\u8D27\u8231","info",4200)}retryWave(){this.money=this.waveStartMoney,this.runStatsBackup&&(this.runStats={...this.runStatsBackup}),this.ship.hull=Et.hullMax,this.audio.play("ui"),this.hud.hideScreens(),this.startWave(this.waveIndex),this.hud.toast("\u6F14\u793A\u91CD\u7F6E \xB7 \u8239\u4F53\u5DF2\u4E34\u65F6\u4FEE\u590D","info")}showPauseScreen(){this.phase!=="playing"&&this.phase!=="docking"||(this.phaseBeforePause=this.phase,this.phase="paused",this.audio.play("ui"),this.hud.setHudVisible(!0),this.hud.showPause({onResume:()=>this.resume(),onRetry:()=>{this.hud.hideScreens(),this.retryWave()},onTitle:()=>{this.hud.hideScreens(),this.showTitleScreen()},onArchive:()=>this.openArchive(),onMute:()=>this.toggleMute()}))}resume(){this.phase=this.phaseBeforePause||"playing",this.hud.hideScreens(),this.hud.setHudVisible(!0),this.audio.play("ui")}toggleMute(){this.audio.init();let t=this.audio.toggleMute();this.hud.setMuted(t)}openArchive(){let t=this.phase;this.phase="archive",this.audio.play("select"),this._archiveReturn=()=>{t==="title"?this.showTitleScreen():t==="paused"?(this.phase="paused",this.hud.showPause({onResume:()=>this.resume(),onRetry:()=>{this.hud.hideScreens(),this.retryWave()},onTitle:()=>{this.hud.hideScreens(),this.showTitleScreen()},onArchive:()=>this.openArchive(),onMute:()=>this.toggleMute()})):t==="shop"||t==="briefing"||t==="result"?(this.phase=t,t==="shop"?this.showShopScreen():t==="result"?this.showResultScreen():this.enterBriefing(0)):t==="fail"?this.showFailScreen():this.showTitleScreen()};let e=()=>{this.audio.play("ui"),this._archiveReturn&&this._archiveReturn()};this.hud.showArchive({onClose:e})}beginDock(){if(this.phase!=="playing")return;this.autopilot&&this.autopilot.isActive()&&this.autopilot.cancel("\u5BF9\u63A5\u7A0B\u5E8F\u63A5\u7BA1\uFF0C\u81EA\u52A8\u89C4\u5212\u5DF2\u53D6\u6D88"),this.phase="docking",this.capture=null,this.ship.aimArm(null);let e=this.station.portPosition.clone().add(new w(0,0,-10)),n=new ge().setFromEuler(new De(0,Math.PI,0));this.docking={t:0,fromPos:this.ship.position.clone(),fromQuat:this.ship.quaternion.clone(),toPos:e,toQuat:n},this.ship.velocity.set(0,0,0),this.audio.play("arm")}updateDocking(t){let e=this.docking;if(!e)return;e.t+=t/1.7;let n=Le(e.t,0,1),i=n*n*(3-2*n);this.ship.position.lerpVectors(e.fromPos,e.toPos,i),this.ship.quaternion.slerpQuaternions(e.fromQuat,e.toQuat,i),n>=1&&(this.docking=null,this.onDocked())}onDocked(){this.phase="docked",this.audio.play("dock");let t=this.field.deliverCargo(),e=t.reduce((i,r)=>i+r.value,0);this.money+=e,this.waveCash.debris+=e,this.runStats.creditsEarned+=e,this.runStats.delivered+=t.length,this.ship.takeCargo(),this.ship.deltaV=this.ship.stats.deltaVMax,this.ship.battery=Et.batteryMax,this.strandedTimer=0,t.length&&this.audio.play("coin");let n=this.isObjectiveMet();this.hud.setHudVisible(!1),this.hud.showDock({waveName:`${this.wave.name} \xB7 ${this.wave.subtitle}`,items:t.map(i=>({label:i.label,value:i.value,sizeClass:i.sizeClass})),cash:e,dvMax:Math.round(this.ship.stats.deltaVMax),objectiveMet:n,progress:{delivered:this.field.deliveredCount,required:this.wave.required,satellitesDone:this.field.servicedCount,satelliteRequired:this.wave.satelliteRequired}},{onContinue:()=>{this.audio.play("ui"),n?this.waveCleared():this.undock()}})}undock(){this.phase="playing";let t=this.station.portPosition;this.ship.position.copy(t).add(new w(0,0,-34)),this.ship.velocity.set(0,0,0),this.ship.quaternion.identity(),this.ship.deltaV=this.ship.stats.deltaVMax,this.ship.battery=Et.batteryMax,this.cameraYaw=0,this.cameraPitch=.28,this.cameraMode=Et.cameraModeDefault||"chase",this.autopilot&&this.autopilot.reset(),this.hud.hideScreens(),this.hud.setHudVisible(!0),this.audio.play("undock"),this.hud.toast("\u5DF2\u79BB\u6E2F \xB7 \u7EE7\u7EED\u4F5C\u4E1A","info"),this.selectNearestTarget(!0)}isObjectiveMet(){return this.field.deliveredCount>=this.wave.required&&this.field.servicedCount>=this.wave.satelliteRequired}waveCleared(){this.autopilot&&this.autopilot.isActive()&&this.autopilot.reset();let t=fn.waveBonus[this.waveIndex]||0,e=fn.investor[this.waveIndex]||0;this.money+=t+e,this.runStats.creditsEarned+=t+e,this.waveResults.push({label:`${this.wave.name} \xB7 ${this.wave.subtitle}`,text:`\u4EA4\u4ED8 ${this.field.deliveredCount}/${this.wave.required} \xB7 \u8282\u70B9 ${this.field.servicedCount}/${this.wave.satelliteRequired}`}),this.audio.play("success"),this.waveIndex>=ti.length-1?this.showResultScreen():(this.phase="shop",this.hud.setHudVisible(!1),this.showShopScreen())}showShopScreen(){let t=this.getShopData();this.phase="shop",this.hud.setHudVisible(!1),this.hud.showShop(t,{onBuy:e=>this.buyUpgrade(e),onRepair:()=>this.repairHull(),onContinue:()=>{this.audio.play("ui"),this.startWave(this.waveIndex+1)}})}getShopData(){let t=Ba.map(i=>{let r=this.levels[i.id]||0,a=i.tiers[r],o=r>=i.tiers.length;return{id:i.id,name:i.name,short:i.short,icon:i.icon,desc:i.desc,level:r,maxLevel:i.tiers.length,cost:a?a.cost:0,canAfford:a?this.money>=a.cost:!1,maxed:o,effectText:a?a.text:i.tiers[i.tiers.length-1].text}}),e=ti[this.waveIndex+1],n=this.waveIndex>=ti.length-1;return{waveName:this.wave.name,waveTitle:`${this.wave.name} \xB7 ${this.wave.subtitle}`,story:this.wave.story,isFinal:n,nextWaveName:e?e.name:"",credits:this.money,ledger:[{label:"\u788E\u7247\u56DE\u6B3E",value:`+ \xA5 ${He(this.waveCash.debris)} \u4E07`},{label:"\u8282\u70B9\u670D\u52A1\u56DE\u6B3E",value:`+ \xA5 ${He(this.waveCash.service)} \u4E07`},{label:"\u4EFB\u52A1\u5C3E\u6B3E",value:`+ \xA5 ${He(fn.waveBonus[this.waveIndex])} \u4E07`},{label:"\u6295\u8D44\u4EBA\u8FC7\u6865",value:`+ \xA5 ${He(fn.investor[this.waveIndex])} \u4E07`},{label:"\u53EF\u7528\u8D44\u91D1",value:`\xA5 ${He(this.money)} \u4E07`,kind:"total"}],upgrades:t,repair:this.ship.hull<Et.hullMax?{cost:fn.repairCost,amount:fn.repairAmount,canAfford:this.money>=fn.repairCost,hull:Math.round(this.ship.hull)}:null}}buyUpgrade(t){let e=Ba.find(r=>r.id===t);if(!e)return;let n=this.levels[t]||0;if(n>=e.tiers.length)return;let i=e.tiers[n];this.money<i.cost||(this.money-=i.cost,this.levels[t]=n+1,this.ship.applyStats(Pc(this.levels)),this.audio.play("repair"),this.hud.toast(`${e.name} \u5347\u7EA7\u5B8C\u6210 \xB7 Lv.${n+1}`,"success"),this.showShopScreen())}repairHull(){this.ship.hull>=Et.hullMax||this.money<fn.repairCost||(this.money-=fn.repairCost,this.ship.hull=Math.min(Et.hullMax,this.ship.hull+fn.repairAmount),this.audio.play("repair"),this.hud.toast(`\u8239\u4F53\u7EF4\u4FEE\u5B8C\u6210 \xB7 ${Math.round(this.ship.hull)}%`,"success"),this.showShopScreen())}showResultScreen(){this.phase="result",this.hud.setHudVisible(!1);let t=ti.reduce((i,r)=>i+r.required,0),e=n0({credits:this.money,hull:this.ship.hull,timeLeft:this.timeLeft,totalDelivered:this.runStats.delivered,required:t}),n=i0[e];this.hud.showResult({grade:e,title:n.title,text:n.text,stats:[{label:"\u7D2F\u8BA1\u6536\u5165",value:`\xA5 ${He(this.money)} \u4E07`},{label:"\u4EA4\u4ED8\u788E\u7247",value:`${this.runStats.delivered} \u5757`},{label:"\u8282\u70B9\u670D\u52A1",value:`${this.runStats.satellites} \u6B21`},{label:"\u8239\u4F53\u72B6\u6001",value:`${Math.round(this.ship.hull)}%`},{label:"\u6700\u7EC8\u7A97\u53E3\u5269\u4F59",value:Ns(this.timeLeft)}],timeline:this.waveResults},{onRestart:()=>{this.audio.play("ui"),this.startRun(0)},onTitle:()=>{this.audio.play("ui"),this.showTitleScreen()},onArchive:()=>this.openArchive()})}fail(t,e){this.phase==="fail"||this.phase==="result"||(this.autopilot&&this.autopilot.isActive()&&this.autopilot.reset(),this.phase="fail",this.audio.play("fail"),this.hud.setHudVisible(!1),this.hud.showFail({reason:t,hint:e,stats:[{label:"\u672C\u65E5\u4EA4\u4ED8",value:`${this.field.deliveredCount} / ${this.wave.required}`},{label:"\u7D2F\u8BA1\u6536\u5165",value:`\xA5 ${He(this.money)} \u4E07`},{label:"\u8239\u4F53\u72B6\u6001",value:`${Math.round(this.ship.hull)}%`},{label:"\u7A97\u53E3\u5269\u4F59",value:Ns(this.timeLeft)}]},{onRetry:()=>{this.audio.play("ui"),this.hud.hideScreens(),this.retryWave()},onTitle:()=>{this.audio.play("ui"),this.showTitleScreen()}}))}showFailScreen(){this.phase="fail",this.hud.showFail({reason:"\u6F14\u793A\u4E2D\u65AD",hint:"\u56DE\u987E\u4E00\u4E0B\u8D44\u6E90\u4E0E\u63A5\u8FD1\u7B56\u7565\uFF0C\u7136\u540E\u91CD\u8BD5\u672C\u65E5\u6F14\u793A\u3002",stats:[{label:"\u672C\u65E5\u4EA4\u4ED8",value:`${this.field.deliveredCount} / ${this.wave.required}`},{label:"\u7D2F\u8BA1\u6536\u5165",value:`\xA5 ${He(this.money)} \u4E07`}]},{onRetry:()=>{this.hud.hideScreens(),this.retryWave()},onTitle:()=>this.showTitleScreen()})}selectNearestTarget(t=!1){if(!t&&this.target&&(this.target.kind==="satellite"?!this.target.serviced:!this.target.captured))return;let e=this.field.nearestTarget(this.ship.position,620,this.target);this.target=e?e.obj:null,this.target&&this.audio.play("select")}cycleTarget(){this.autopilot.isActive()&&this.autopilot.cancel("\u76EE\u6807\u5DF2\u5207\u6362\uFF0C\u81EA\u52A8\u89C4\u5212\u53D6\u6D88");let t=this.field.activeTargets().map(n=>({o:n,d:n.group.position.distanceTo(this.ship.position)})).sort((n,i)=>n.d-i.d);if(!t.length){this.target=null;return}let e=t.findIndex(n=>n.o===this.target);e=(e+1)%t.length,this.target=t[e].o,this.audio.play("select"),this.hud.toast(this.target.label,"info",1400)}targetInfo(t){if(!t)return null;let e=t.group.position.distanceTo(this.ship.position),n=de.copy(t.velocity).sub(this.ship.velocity).length(),i=t.kind==="satellite",r=i?Et.serviceRange:this.ship.stats.armRange,a=i?Et.serviceSpeed:this.ship.stats.captureSpeed*(t.sizeClass==="large"?Et.largeSpeedFactor:1),o=r+t.radius*.55,l=e<=o,c=n<=a,u=i?!0:this.ship.cargoFree>=t.cargo,h=this.ship.battery>5,d="far";return l?c?u?h?d="ready":d="low-battery":d="cargo-full":d="too-fast":e<120&&(d="window"),{dist:e,relSpeed:n,range:r,speedLimit:a,inRange:l,speedOK:c,cargoOK:u,batteryOK:h,state:d,isSat:i,reachRange:o}}update(t,e){this.elapsed=e,this.damageFlash=Math.max(0,this.damageFlash-t*2.2);let n=this.phase;n==="title"||n==="briefing"?(this.field.update(t,e,this.ship),this.station.update(t,e),this.updateCamera(t),this.audio.setThrust(0,0)):n==="playing"||n==="docking"?this.updatePlaying(t,e):n==="paused"?(this.station.update(t,e),this.audio.setThrust(0,0)):(this.field.update(t,e,this.ship),this.station.update(t,e),this.ship.aimArm(null),this.updateCamera(t),this.audio.setThrust(0,0)),this.phase!=="playing"&&(this.targetReticle.visible=!1),this.particles.update(t),this.rings.update(t),this.audio.update(t),(this.phase==="playing"||this.phase==="docking"||this.phase==="paused")&&this.hud.update(this.getSnapshot())}updatePlaying(t,e){let n=this.input||{},i=this.phase==="playing";if(this.updateCamera(t),i){if(this.waveClock+=t,this.timeLeft-=t,this.timeLeft<=60&&!this.warned60&&(this.warned60=!0,this.audio.play("warning"),this.hud.toast("\u8F68\u9053\u7A97\u53E3\u5269\u4F59 60 \u79D2","danger",3600)),this.timeLeft<=30&&!this.warned30&&(this.warned30=!0,this.audio.play("alarm")),this.timeLeft<=0){this.timeLeft=0,this.field.update(t,e,this.ship),this.station.update(t,e),this.fail("\u8F68\u9053\u7A97\u53E3\u5DF2\u7ECF\u5173\u95ED\u3002","\u4E0B\u4E00\u6B21\u7A97\u53E3\u8981\u7B49 90 \u5206\u949F\u3002\u89C4\u5212\u597D\u6BCF\u6B21\u51FA\u8231\u7684\u5F80\u8FD4\u9884\u7B97\uFF0C\u7136\u540E\u91CD\u8BD5\u672C\u65E5\u6F14\u793A\u3002");return}let r=u=>n.isDown?n.isDown(u):!1,a={forward:r("KeyW"),back:r("KeyS"),left:r("KeyA"),right:r("KeyD"),up:r("Space"),down:r("KeyC")||r("ControlLeft"),boost:r("ShiftLeft")||r("ShiftRight"),brake:r("KeyX"),capture:r("KeyR"),pitch:(r("ArrowUp")?1:0)-(r("ArrowDown")?1:0),yaw:(r("ArrowLeft")?1:0)-(r("ArrowRight")?1:0),roll:(r("KeyQ")?1:0)-(r("KeyE")?1:0)},o=a.forward||a.back||a.left||a.right||a.up||a.down||a.boost||a.brake||a.pitch||a.yaw||a.roll||a.capture;this.autopilot.isActive()&&o&&this.autopilot.cancel("\u624B\u52A8\u8F93\u5165\u63A5\u7BA1\uFF0C\u81EA\u52A8\u89C4\u5212\u5DF2\u53D6\u6D88"),this.target&&((this.target.kind==="satellite"?!this.target.serviced:!this.target.captured)||(this.target=null)),this.autoSelectTimer+=t,!this.target&&this.autoSelectTimer>.6&&(this.autoSelectTimer=0,this.selectNearestTarget(!0)),this.ship.update(t,e,a),this.autopilot.isActive()&&this.autopilot.update(t),this.audio.setThrust(this.ship.thrustRcs,this.ship.thrustMain),this.updateTargetReticle();let l=this.autopilot.isHolding();this.updateCapture(t,l?{...a,capture:!0}:a),this.checkCollisions(t),this.checkDock(),this.updateWarnings(t),this.updateTutorial(),this.updateCamera(t),this.field.update(t,e,this.ship),this.station.update(t,e);let c=this.station.dockInfo(this.ship);if(this.ship.deltaV<1&&c.distance>120){if(this.strandedTimer+=t,this.strandedTimer>14){this.fail("\u63A8\u8FDB\u5242\u8017\u5C3D\uFF0C\u6551\u63F4\u62D6\u8239\u6B63\u5728\u63A5\u8FD1\u3002","\u8FD4\u6E2F\u9700\u8981\u9884\u7559\u63A8\u8FDB\u5242\u3002\u53EF\u4EE5\u7528 F \u66F4\u7701\u5730\u5339\u914D\u901F\u5EA6\uFF0C\u6216\u8005\u51CF\u5C11\u65E0\u5FC5\u8981\u7684\u5236\u52A8\u3002");return}}else this.strandedTimer=0;if(this.ship.position.length()>1200){this.fail("\u4F60\u5DF2\u79BB\u5F00\u6F14\u793A\u4F5C\u4E1A\u533A\u3002","\u4F5C\u4E1A\u533A\u8FB9\u754C\u7EA6 1.2 km\u3002\u6CE8\u610F\u8FD4\u6E2F\u65B9\u5411\u3002");return}if(this.ship.hull<=0){this.fail("\u8239\u4F53\u5931\u538B\uFF0C\u4EFB\u52A1\u4E2D\u6B62\u3002","\u9AD8\u901F\u63A5\u8FD1\u788E\u7247\u4F1A\u635F\u574F\u8239\u4F53\u3002\u5148\u7528 F \u5339\u914D\u901F\u5EA6\uFF0C\u518D\u9760\u8FD1\u76EE\u6807\u3002");return}}else this.phase==="docking"&&(this.updateDocking(t),this.station.update(t,e),this.field.update(t,e,this.ship),this.updateCamera(t));this.shake=Math.max(0,this.shake-t*2.2)}updateTargetReticle(){let t=this.target,e=this.targetReticle;if(!t){e.visible=!1;return}let n=this.targetInfo(t);if(n&&n.dist<24){e.visible=!1;return}e.visible=!0,e.position.copy(t.group.position);let i=(t.radius||1)*1.75+1.3,r=1+Math.sin(this.elapsed*4)*.075;e.scale.setScalar(i*r);let a=n?n.state==="ready"?6553520:n.state==="too-fast"?16736109:n.state==="window"?16757844:7137535:7137535;e.material.color.setHex(a),e.material.opacity=.5+.22*(.5+.5*Math.sin(this.elapsed*3.2))}updateCapture(t,e){let n=this.ship,i=e.capture,r=this.target,a=!1,o=null;if(r&&i&&(o=this.targetInfo(r),a=o&&o.inRange&&o.speedOK&&o.cargoOK&&o.batteryOK),!a&&this.capture){this.capture.progress=Math.max(0,this.capture.progress-t*2.2),this.capture.progress<=0&&(this.capture=null),n.aimArm(r&&this.capture?r.group.position:null);return}if(a){(!this.capture||this.capture.obj!==r)&&(this.capture={obj:r,progress:0},this.audio.play("arm")),n.aimArm(r.group.position);let l=r.kind==="satellite",c=l?Et.serviceHold:Et.captureHold*(r.sizeClass==="large"?1+Et.largeHoldBonus:1),u=l?Et.batteryDrainService:Et.batteryDrainArm;this.capture.progress+=t/c,n.drainBattery(u*t*.6),this.capture.progress>=1&&this.completeCapture(r,l)}else n.aimArm(null)}completeCapture(t,e){let n=this.ship,i=this.capture;if(this.capture=null,n.aimArm(null),e){if(!this.field.markServiced(t))return;this.money+=t.value,this.waveCash.service+=t.value,this.runStats.creditsEarned+=t.value,this.runStats.satellites+=1,this.audio.play("success"),this.rings.spawn(t.group.position,{color:6553520,start:2,end:16,duration:.85}),this.particles.emit({origin:t.group.position,direction:null,count:26,spread:1,speed:5,size:.35,life:.9,drag:2,color:[.4,1,.7]}),this.hud.toast(`\u8282\u70B9\u670D\u52A1\u5B8C\u6210 \xB7 +\xA5${He(t.value)} \u4E07`,"success",3200),this.hud.toast("\u5BA2\u6237\u8282\u70B9\u5DF2\u6062\u590D\u6B63\u5E38\u72B6\u6001","info",3e3),this.shake=.2,this.target=null;return}if(n.cargoFree<t.cargo){this.hud.toast("\u8D27\u8231\u5DF2\u6EE1 \xB7 \u8FD4\u6E2F\u5378\u8F7D\u540E\u518D\u6765","danger");return}this.field.markCaptured(t)&&(n.addCargo({label:t.label,value:t.value,sizeClass:t.sizeClass,cargo:t.cargo}),n.velocity.lerp(t.velocity,.22),this.audio.play("capture"),this.rings.spawn(t.group.position,{color:7137535,start:1.5,end:11,duration:.7}),this.particles.emit({origin:t.group.position,direction:null,count:18,spread:1,speed:4,size:.3,life:.7,drag:2.4,color:[.5,.85,1]}),this.hud.toast(`\u6355\u83B7\u6210\u529F\uFF1A${t.classLabel} \xB7 \u8FD4\u6E2F\u540E +\xA5${He(t.value)} \u4E07`,"success",3400),this.shake=.28,this.tutorial.capture=!0,this.target=null)}checkCollisions(t){let e=this.ship;for(let n of this.field.objects){if(n.captured||n.kind==="satellite"&&n.serviced)continue;let i=n.group.position.distanceTo(e.position),r=n.radius+2.8;if(i>=r)continue;let a=n.velocity.distanceTo(e.velocity);if(de.copy(e.position).sub(n.group.position),de.lengthSq()<1e-6&&de.set(0,1,0),de.normalize(),e.position.addScaledVector(de,r-i+.15),this.elapsed-n.lastHitAt>1.5&&a>1.4){n.lastHitAt=this.elapsed;let l=Le(4+(a-1.4)*9,4,34);e.damage(l),this.damageFlash=1,this.shake=.7,e.velocity.addScaledVector(de,1.2+a*.6),n.velocity.addScaledVector(de,-.3),this.audio.play("alarm"),this.rings.spawn(e.position,{color:16736109,start:2,end:13,duration:.55}),this.hud.toast(`\u78B0\u649E\uFF1A${n.label} \xB7 \u8239\u4F53 \u2212${l.toFixed(0)}%`,"danger",3e3)}else a>.35&&(e.velocity.addScaledVector(de,.35),this.audio.play("warning"))}}checkDock(){this.station.dockInfo(this.ship).canDock&&this.beginDock()}updateWarnings(){this.ship.battery<15&&!this._lowBatteryWarned&&(this._lowBatteryWarned=!0,this.hud.toast("\u7535\u91CF\u4F4E \xB7 \u4E3B\u53D1\u4E0E\u81EA\u52A8\u5339\u914D\u53D7\u9650","danger",3200),this.audio.play("warning")),this.ship.battery>30&&(this._lowBatteryWarned=!1)}updateTutorial(){if(this.waveIndex===0){if(!this.tutorial.aim&&this.waveClock>1.2&&(this.tutorial.aim=!0,this.hud.toast("TAB \u5207\u6362\u76EE\u6807 \xB7 \u5148\u9501\u5B9A\u6700\u8FD1\u7684\u788E\u7247","info",3600)),!this.tutorial.match&&this.target){let t=this.targetInfo(this.target);t&&t.dist<170&&(this.tutorial.match=!0,this.hud.toast("\u6309 F \u81EA\u52A8\u5339\u914D\u76EE\u6807\u901F\u5EA6\uFF08\u6D88\u8017 \u0394v\uFF09","info",3800))}!this.tutorial.auto&&this.waveClock>9&&(this.tutorial.auto=!0,this.hud.toast("\u6309 G \u81EA\u52A8\u89C4\u5212\u6293\u53D6\uFF1A\u81EA\u52A8\u63A5\u8FD1\u3001\u5BF9\u51C6\u5E76\u5B8C\u6210\u6355\u83B7","info",4200)),this.tutorial.capture&&!this.tutorial.captureToast&&(this.tutorial.captureToast=!0,this.hud.toast("\u8FD4\u6E2F\u540E\u4EA4\u4ED8\u7ED3\u7B97\u3002\u6CE8\u610F\u7559\u8DB3\u8FD4\u6E2F\u63A8\u8FDB\u5242\u3002","info",4200))}}rotateCamera(t,e){if(this.cameraMode==="chase"&&this.phase==="playing"){this.autopilot.isActive()&&this.autopilot.cancel("\u624B\u52A8\u8F93\u5165\u63A5\u7BA1\uFF0C\u81EA\u52A8\u89C4\u5212\u5DF2\u53D6\u6D88");let n=Et.mouseAttitudeSensitivity;this.ship.rotateLocal(-e*n,-t*n,0);return}this.cameraYaw-=t*.0042,this.cameraPitch=Le(this.cameraPitch+e*.0036,Et.cameraPitchMin,Et.cameraPitchMax)}zoomCamera(t){this.cameraDistTarget=Le(this.cameraDistTarget+t*.02,Et.cameraMinDist,Et.cameraMaxDist)}toggleCameraMode(){if(this.cameraMode=this.cameraMode==="chase"?"orbit":"chase",this.cameraMode==="orbit"){let t=this.ship.forwardVector();this.cameraYaw=Math.atan2(-t.x,-t.z),this.cameraPitch=.26}this.audio.play("select"),this.hud.toast(this.cameraMode==="chase"?"\u76F8\u673A\uFF1A\u8FFD\u5C3E\u89C6\u89D2\uFF08\u9F20\u6807\u63A7\u5236\u59FF\u6001\uFF09":"\u76F8\u673A\uFF1A\u81EA\u7531\u89C2\u5BDF\uFF08\u9F20\u6807\u73AF\u7ED5\uFF0C\u65B9\u5411\u952E\u4ECD\u63A7\u5236\u59FF\u6001\uFF09","info",2200)}updateCamera(t,e=!1){let n=this.ship;if(this.phase==="title"||this.phase==="briefing"){this.camera.up.set(0,1,0);let o=this.elapsed,l=148+Math.sin(o*.05)*14;de.set(Math.cos(o*.045)*l,50+Math.sin(o*.11)*10,Math.sin(o*.045)*l+40),this.camera.position.lerp(de,e?1:1-Math.exp(-2.2*t)),Wi.set(0,-70,30),this.camera.lookAt(Wi),this.camera.updateMatrixWorld();return}if(this.phase==="docked"||this.phase==="docking"){this.camera.up.set(0,1,0);let o=this.station.portPosition,l=this.elapsed;de.set(o.x+16+Math.sin(l*.25)*3,o.y+8,o.z-24+Math.cos(l*.2)*2),this.camera.position.lerp(de,e?1:1-Math.exp(-2.5*t)),this.camera.lookAt(o.x,o.y+1,o.z-6),this.camera.updateMatrixWorld();return}if(this.phase==="paused")return;this.cameraDist=un.damp(this.cameraDist,this.cameraDistTarget,Et.zoomSmooth,t);let i=this.shake*.6*(Math.random()-.5);if(this.cameraMode==="chase"){let o=n.quaternion,l=Pb.set(0,0,1).applyQuaternion(o),c=Wi.set(0,1,0).applyQuaternion(o);pn.copy(n.position).addScaledVector(l,this.cameraDist).addScaledVector(c,this.cameraDist*Et.cameraChaseHeight),pn.x+=i,pn.y+=i*.6,this.camera.up.copy(c);let u=e?1:1-Math.exp(-10*t);this.camera.position.lerp(pn,u),de.copy(n.position).addScaledVector(c,1.6).addScaledVector(l,-Et.cameraChaseLookAhead),this.camera.lookAt(de),this.camera.updateMatrixWorld();return}this.camera.up.set(0,1,0);let r=Math.cos(this.cameraPitch);de.set(n.position.x+Math.sin(this.cameraYaw)*this.cameraDist*r+i,n.position.y+Math.sin(this.cameraPitch)*this.cameraDist+i*.6,n.position.z+Math.cos(this.cameraYaw)*this.cameraDist*r);let a=e?1:1-Math.exp(-Et.cameraSmooth*t);this.camera.position.lerp(de,a),Wi.set(n.position.x-Math.sin(this.cameraYaw)*12,n.position.y+2.8,n.position.z-Math.cos(this.cameraYaw)*12),this.camera.lookAt(Wi),this.camera.updateMatrixWorld()}onKeyDown(t,e){if(t==="KeyM"){this.toggleMute();return}if(t==="Escape"||t==="KeyP"){this.phase==="playing"||this.phase==="docking"?this.showPauseScreen():this.phase==="paused"&&this.resume();return}if(this.phase==="title"){t==="Enter"&&(this.audio.init(),this.audio.play("ui"),this.enterBriefing(0));return}if(this.phase==="briefing"){t==="Enter"&&(this.audio.play("ui"),this.startRun(0));return}if(this.phase==="shop"){t==="Enter"&&(this.audio.play("ui"),this.startWave(this.waveIndex+1));return}if(this.phase==="result"){t==="Enter"&&(this.audio.play("ui"),this.showTitleScreen());return}this.phase==="playing"&&(t==="Tab"?(e&&e.preventDefault&&e.preventDefault(),this.cycleTarget()):t==="KeyF"?this.matchTargetVelocity():t==="KeyG"?this.toggleAutoCapture():t==="KeyV"&&this.toggleCameraMode())}matchTargetVelocity(){if(!this.target){this.hud.toast("\u6CA1\u6709\u9501\u5B9A\u76EE\u6807 \xB7 \u6309 TAB \u9009\u62E9","info");return}let t=this.ship.matchVelocity(this.target.velocity);if(t.ok){this.audio.play("arm");let e=this.targetInfo(this.target);this.hud.toast(`\u81EA\u52A8\u5339\u914D\u5B8C\u6210 \xB7 \u76F8\u5BF9\u901F\u5EA6 ${e?e.relSpeed.toFixed(2):"0.00"} m/s \xB7 \u0394v \u2212${t.cost.toFixed(1)}`,"info",2600)}else{let e={cooldown:"\u5339\u914D\u7CFB\u7EDF\u51B7\u5374\u4E2D",battery:"\u7535\u91CF\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u81EA\u52A8\u5339\u914D","no-target":"\u6CA1\u6709\u53EF\u5339\u914D\u7684\u76EE\u6807",already:"\u5DF2\u7ECF\u4E0E\u76EE\u6807\u901F\u5EA6\u4E00\u81F4",dv:"\u63A8\u8FDB\u5242\u4E0D\u8DB3\u4EE5\u5B8C\u6210\u5339\u914D"};this.hud.toast(e[t.reason]||"\u81EA\u52A8\u5339\u914D\u5931\u8D25","danger")}}toggleAutoCapture(){if(this.autopilot.isActive()){this.autopilot.cancel("\u81EA\u52A8\u89C4\u5212\u5DF2\u53D6\u6D88");return}if(this.phase!=="playing")return;if(this.target||this.selectNearestTarget(!0),!this.target){this.hud.toast("\u6CA1\u6709\u9501\u5B9A\u76EE\u6807 \xB7 \u6309 TAB \u9009\u62E9","info");return}let t=this.autopilot.start(this.target);t.ok||(this.audio.play("warning"),this.hud.toast(t.reason,"danger",3400))}setInput(t){this.input=t}resize(t,e){this.width=t,this.height=e}getSnapshot(){let t=this.wave,e=this.ship,n=this.target,i=n?this.targetInfo(n):null,r=this.station.dockInfo(e),a=this._attitudeSnapshot(),o=this.autopilot.snapshot(),l="";this.phase==="playing"&&(l=this.autopilot.isActive()?"G \u53D6\u6D88\u81EA\u52A8\u89C4\u5212 \xB7 \u624B\u52A8\u8F93\u5165\u63A5\u7BA1":n?"G \u81EA\u52A8\u89C4\u5212\u6293\u53D6 \xB7 \u81EA\u52A8\u63A5\u8FD1 / \u5BF9\u51C6 / \u6355\u83B7":"TAB \u9009\u62E9\u76EE\u6807\u540E\u53EF G \u81EA\u52A8\u89C4\u5212\u6293\u53D6");let c=null;if(n&&i){let g=this._project(n.group.position),p={far:"\u8FDC\u8DDD",window:"\u63A5\u8FD1\u7A97\u53E3","too-fast":"\u76F8\u5BF9\u901F\u5EA6\u8FC7\u9AD8","cargo-full":"\u8D27\u8231\u5DF2\u6EE1","low-battery":"\u7535\u91CF\u4E0D\u8DB3",ready:n.kind==="satellite"?"\u53EF\u670D\u52A1":"\u53EF\u6355\u83B7"}[i.state]||"";c={label:n.label,kindLabel:n.kind==="satellite"?"\u5BA2\u6237\u8282\u70B9":i.isSat?"":n.shapeName||"\u788E\u7247",distance:i.dist,relSpeed:i.relSpeed,state:i.state,stateLabel:p,marker:{x:g.x,y:g.y,onScreen:g.onScreen,offscreen:g.offscreen,angle:g.angle}}}let u=this._project(this.station.portPosition);u.dataStr=`${Math.round(r.distance)} m \xB7 ${r.relSpeed.toFixed(2)} m/s`;let h=this._radarSnapshot(),d={text:"",tone:"info",key:""},f="idle";n&&i?i.state==="ready"?(d={key:"R",text:i.isSat?"\u6309\u4F4F R \xB7 \u6267\u884C\u8282\u70B9\u68C0\u4FEE":"\u6309\u4F4F R \xB7 \u673A\u68B0\u81C2\u6355\u83B7",tone:"green"},f="ready"):i.state==="too-fast"?(d={key:"F",text:"\u76F8\u5BF9\u901F\u5EA6\u8FC7\u9AD8 \xB7 \u6309 F \u5339\u914D\u76EE\u6807\u901F\u5EA6",tone:"danger"},f="danger"):i.state==="cargo-full"?(d={text:"\u8D27\u8231\u5DF2\u6EE1 \xB7 \u8FD4\u56DE\u8865\u7ED9\u7AD9\u5378\u8F7D",tone:"amber"},f="danger"):i.state==="low-battery"?(d={text:"\u7535\u91CF\u4E0D\u8DB3 \xB7 \u7B49\u5F85\u592A\u9633\u7FFC\u56DE\u5145",tone:"amber"},f="danger"):(d={text:`\u63A5\u8FD1\u76EE\u6807 \xB7 \u76F8\u5BF9\u901F\u5EA6 ${i.relSpeed.toFixed(2)} m/s`,tone:"info"},f="window"):r.inCorridor?(d={text:"\u5DF2\u8FDB\u5165\u5BF9\u63A5\u8D70\u5ECA \xB7 \u7AD9\u7AEF\u7275\u5F15",tone:"green"},f="ready"):e.cargoFree===0?d={text:"\u8D27\u8231\u5DF2\u6EE1 \xB7 \u8FD4\u56DE M300 \u8865\u7ED9\u7AD9",tone:"amber"}:d={text:"TAB \u9009\u62E9\u76EE\u6807 \xB7 F \u5339\u914D\u901F\u5EA6 \xB7 \u8FD4\u6E2F\u4EA4\u4ED8",tone:"info"};let m=[];return this.timeLeft<120&&m.push(`\u8F68\u9053\u7A97\u53E3 ${Ns(this.timeLeft)}`),e.battery<18&&m.push("\u7535\u91CF\u4F4E"),e.deltaV<14&&m.push("\u63A8\u8FDB\u5242\u4E0D\u8DB3"),e.hull<35&&m.push("\u8239\u4F53\u635F\u4F24"),e.cargoFree===0&&m.push("\u8D27\u8231\u5DF2\u6EE1"),r.inCorridor&&!r.canDock&&r.relSpeed>2.6&&m.push("\u5BF9\u63A5\u901F\u5EA6\u8FC7\u9AD8"),{phase:this.phase,elapsed:this.elapsed,mission:{waveIndex:t.id,waveTotal:ti.length,waveTitle:t.subtitle,location:t.location,objective:t.objective,required:t.required,delivered:this.field.deliveredCount,satelliteRequired:t.satelliteRequired,satellitesDone:this.field.servicedCount,timeLeft:this.timeLeft,timeLimit:this.timeLimit},ship:e.snapshot(),attitude:a,cameraMode:this.cameraMode,auto:o,autoHint:l,credits:this.money,target:c,station:{distance:r.distance,relSpeed:r.relSpeed,canDock:r.canDock,inCorridor:r.inCorridor,marker:{x:u.x,y:u.y,onScreen:u.onScreen,offscreen:u.offscreen,angle:u.angle,dataStr:u.dataStr}},prompt:d,capture:this.capture?{progress:Le(this.capture.progress,0,1),label:this.capture.obj.kind==="satellite"?"\u8282\u70B9\u68C0\u4FEE":"\u6355\u83B7\u4E2D",tone:this.capture.obj.kind==="satellite"?"green":"cyan"}:null,radar:h,radarRange:520,warnings:m,damageFlash:Math.max(e.damageFlash,this.damageFlash*.7),crosshair:f}}_attitudeSnapshot(){let t=this.ship.forwardVector(de),e=this.ship.upVector(Wi),n=this.ship.rightVector(pn),i=Math.asin(Le(t.y,-1,1))*180/Math.PI,r=(Math.atan2(t.x,-t.z)*180/Math.PI+360)%360,a=Math.atan2(n.y,e.y)*180/Math.PI;return{pitch:i,heading:r,roll:a,mode:this.cameraMode,modeLabel:this.cameraMode==="chase"?"CHASE":"ORBIT"}}_project(t){let e=this.width,n=this.height;de.copy(t).project(this.camera);let i=this.camera.getWorldDirection(Wi),r=pn.copy(t).sub(this.camera.position).dot(i)<0;if(!r&&de.z<1&&Math.abs(de.x)<=1&&Math.abs(de.y)<=1)return{x:(de.x*.5+.5)*e,y:(-de.y*.5+.5)*n,onScreen:!0,offscreen:!1,angle:0};let o=r?-de.x:de.x,l=r?-de.y:de.y;(!Number.isFinite(o)||!Number.isFinite(l)||Math.abs(o)<1e-4&&Math.abs(l)<1e-4)&&(o=0,l=-1);let c=Math.max(Math.abs(o),Math.abs(l));return o/=c,l/=c,{x:e/2+o*(e/2-74),y:n/2-l*(n/2-74),onScreen:!1,offscreen:!0,angle:Math.atan2(o,l)*180/Math.PI}}_radarSnapshot(){let e=this.ship.forwardVector(de);e.y=0,e.lengthSq()<1e-5&&e.set(0,0,-1),e.normalize();let n=Wi.crossVectors(e,Lb).normalize().clone(),i=this.ship.position,r=[];for(let o of this.field.objects){if(o.captured)continue;pn.copy(o.group.position).sub(i);let l=pn.length();if(l>520||l<.01)continue;let c=pn.dot(n)/520,u=pn.dot(e)/520,h=Math.hypot(c,u);r.push({x:h>1?c/h:c,y:h>1?u/h:u,kind:o.kind,selected:o===this.target})}pn.copy(this.station.position).sub(i);let a=pn.length();if(a>.01){let o=a<=520?.0019230769230769232:1/a,l=pn.dot(n)*o,c=pn.dot(e)*o,u=Math.hypot(l,c);u>1&&(l/=u,c/=u),r.push({x:l,y:c,kind:"station",edge:a>520})}return{range:520,objects:r}}};var za=document.getElementById("loading-status"),y0=document.getElementById("loading");function Xc(s){za&&(za.textContent=s)}function $c(){return new Promise(s=>requestAnimationFrame(()=>setTimeout(s,16)))}function Od(s){console.error("[M300] boot failed:",s),za&&(za.textContent="\u542F\u52A8\u5931\u8D25\uFF1A"+(s&&s.message?s.message:String(s)),za.style.color="#ff6f7d"),y0&&y0.classList.add("error")}async function Db(){let s=document.getElementById("scene-canvas");if(!s)throw new Error("\u627E\u4E0D\u5230 scene-canvas");let t=new pa({canvas:s,antialias:!0,powerPreference:"high-performance",alpha:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=Ie,t.toneMapping=vc,t.toneMappingExposure=1.08,t.setClearColor(198156,1);let e=new pr,n=new Ee(55,window.innerWidth/window.innerHeight,.5,42e3);n.position.set(0,42,165),Xc("\u6B63\u5728\u70D8\u7119\u7A0B\u5E8F\u5316\u5730\u7403\u7EB9\u7406\u2026"),await $c();let i;try{i=$m({scene:e,renderer:t})}catch(x){throw Od(x),x}Xc("\u6B63\u5728\u88C5\u914D M300 \u670D\u52A1\u8239\u2026"),await $c();let r=new Lc({root:document.getElementById("hud-root"),screensRoot:document.getElementById("screens-root")}),a=Ym();Xc("\u6B63\u5728\u751F\u6210\u788E\u7247\u573A\u4E0E\u8F68\u9053\u7AD9\u2026"),await $c();let o=new qc({scene:e,camera:n,renderer:t,hud:r,audio:a,world:i});o.resize(window.innerWidth,window.innerHeight),await o.init(),await $c();let l={keys:new Set,isDown(x){return this.keys.has(x)}},c=!1;function u(){if(!c){c=!0;try{a.init(),a.startAmbient()}catch(x){console.warn("[M300] audio init failed:",x)}}}window.addEventListener("keydown",x=>{["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(x.code)&&x.preventDefault(),l.keys.add(x.code),u(),x.repeat||o.onKeyDown(x.code,x)}),window.addEventListener("keyup",x=>{l.keys.delete(x.code)}),window.addEventListener("blur",()=>l.keys.clear());let h=!1,d=0,f=0;s.addEventListener("pointerdown",x=>{x.button===0&&(h=!0,d=x.clientX,f=x.clientY,s.setPointerCapture(x.pointerId),u())}),s.addEventListener("pointermove",x=>{if(!h)return;let _=x.clientX-d,A=x.clientY-f;d=x.clientX,f=x.clientY,o.rotateCamera(_,A)});let m=x=>{h=!1;try{s.releasePointerCapture(x.pointerId)}catch{}};s.addEventListener("pointerup",m),s.addEventListener("pointercancel",m),s.addEventListener("wheel",x=>{x.preventDefault(),o.zoomCamera(x.deltaY)},{passive:!1}),s.addEventListener("contextmenu",x=>x.preventDefault()),window.addEventListener("pointerdown",u,{once:!1});function v(){let x=window.innerWidth,_=window.innerHeight;n.aspect=x/_,n.updateProjectionMatrix(),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setSize(x,_),o.resize(x,_)}window.addEventListener("resize",v);let g=new Mr,p=0;o.setInput(l),t.setAnimationLoop(()=>{let x=Math.min(g.getDelta(),.05);p+=x;try{o.update(x,p),i.update(x,p,n,o.ship.position),t.render(e,n)}catch(_){console.error("[M300] frame error:",_),t.setAnimationLoop(null),Od(_)}}),r.hideLoading(),Xc("\u5C31\u7EEA");let y={game:o,world:i,THREE:In,state(){return o.getSnapshot()},phase(){return o.phase},teleport(x,_,A){o.ship.position.set(x,_,A),o.ship.velocity.set(0,0,0)},setDV(x){o.ship.deltaV=x},setHull(x){o.ship.hull=x},setMoney(x){o.money=x},setTime(x){o.timeLeft=x},selectNearest(){return o.selectNearestTarget(!0),o.target?o.target.label:null},gotoTarget(x=8){o.target||o.selectNearestTarget(!0);let _=o.target;if(!_)return!1;let A=_.group.position;return o.ship.position.set(A.x,A.y+.5,A.z+_.radius+x),o.ship.velocity.copy(_.velocity),!0},captureNow(){o.target||o.selectNearestTarget(!0);let x=o.target;return x?(o.ship.position.copy(x.group.position).add(new w(0,0,x.radius+5)),o.ship.velocity.copy(x.velocity),o.completeCapture(x,x.kind==="satellite"),!0):!1},dockNow(){o.phase="playing";let x=o.station.portPosition;return o.ship.position.copy(x).add(new w(0,0,-18)),o.ship.velocity.set(0,0,0),o.beginDock(),!0},finishDock(){return o.phase==="docking"&&o.updateDocking(10),o.phase},forceWaveClear(){let x=Math.max(0,o.wave.required-o.field.deliveredCount);for(let A=0;A<x;A++)o.field.delivered.push({label:"\u6D4B\u8BD5\u4EA4\u4ED8",value:0}),o.runStats.delivered+=1;let _=o.field.objects.filter(A=>A.kind==="satellite"&&!A.serviced);for(let A=0;A<Math.min(o.wave.satelliteRequired,_.length);A++)o.field.markServiced(_[A]),o.runStats.satellites+=1;return o.money+=10,o.waveCleared(),o.phase},completeWaveAndContinue(){return y.forceWaveClear(),o.phase==="shop"&&o.startWave(o.waveIndex+1),o.phase}};window.M300=y,console.info("%c M300 \xB7 ORBITAL SWEEPER %c \u672C\u5730\u8857\u673A\u6F14\u793A\u5DF2\u542F\u52A8 ","background:#0b2233;color:#6ce8ff;font-weight:bold","background:#132a3d;color:#ffb454"),console.info("\u8C03\u8BD5\u63A5\u53E3\uFF1Awindow.M300\uFF08gotoTarget / captureNow / dockNow / forceWaveClear / teleport\u2026\uFF09")}Db().catch(s=>{Od(s)});})();
