const items = [
    "suraj",
    "vikas",
    "rajesh",
    "sultan",
    "suraj pal singh",
    "mukesh",
    "raj"
]
const trie = new makeNode('');
items.forEach(element => {
    add(element, 0, trie);
});

var tb = document.getElementById('search');
var searched = document.getElementById('searched');
function handler(e) {
    const p = search(e.target.value, 0, trie);
    let list = ``;
    p.forEach(element => {
         list +=`<li onclick="selected(this)"><b>${e.target.value}</b>${element.substring(e.target.value.length)}</li>`;
    });
    searched.innerHTML = list;
}
function selected(r) {
    tb.value = r.innerHTML.replace(/<b>|<\/b>/gi, '');
}

tb.addEventListener('keyup', handler);