var gdjs;(function(o){o.PixiFiltersTools.registerFilterCreator("Bevel",{makePIXIFilter:function(l,e){return new PIXI.filters.BevelFilter},updatePreRender:function(l,e){},updateDoubleParameter:function(l,e,t){const i=l;e==="rotation"?i.rotation=t:e==="thickness"?i.thickness=t:e==="distance"?i.distance=t:e==="lightAlpha"?i.lightAlpha=t:e==="shadowAlpha"&&(i.shadowAlpha=t)},updateStringParameter:function(l,e,t){const i=l;e==="lightColor"&&(i.lightColor=o.PixiFiltersTools.rgbOrHexToHexNumber(t)),e==="shadowColor"&&(i.shadowColor=o.PixiFiltersTools.rgbOrHexToHexNumber(t))},updateBooleanParameter:function(l,e,t){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=bevel-pixi-filter.js.map