const subEnv = {
    "perfserf:matty_lover:tools": { env: "pendo-perfserf", key: "84a39aad-d998-4f14-4da8-78238afe6b2d" },
    "dev:ob_mattlove": { env: "pendo-dev", key: "61cf1d45-c5e0-4b72-7812-5ed735e14cf7" },
    "dap:ChrisTest": { env: "pendo-dap", key: "5f68b25c-3494-40bd-4d40-7b862882d1fc" }
}["perfserf:matty_lover:tools"];

(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.'+subEnv.env+'.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
        pendo.initialize({}); // anonymous visitors
})(subEnv.key);
