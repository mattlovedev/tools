const subEnv = {
    "perfserf:matty_lover:tools": { env: "pendo-perfserf", key: "84a39aad-d998-4f14-4da8-78238afe6b2d" },
    //"dev:ob_mattlove": { env: "pendo-dev", key: "61cf1d45-c5e0-4b72-7812-5ed735e14cf7" },
}[
    "perfserf:matty_lover:tools"
    //"dev:cname_test"
];

const vis = {
/*
    visitor: {
        id: "prodVis002"
    },
    account: {
        id: "prodAcc001"
    }
*/
};

(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.'+subEnv.env+'.pendo-dev.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
        pendo.initialize(vis); // anonymous visitors
})(subEnv.key);


/*(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://content.pendo.upmetrics.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
        pendo.initialize({
            visitor: {
                id: "staging-243",
                emailAddress: "jourdan+pendotesting@upmetrics.com"
            },
            account: {
                id: "179",
                name: "Pendo Test Org"
            }
        })
})('1ff26957-16fb-4e4d-4f60-944b45654886');*/