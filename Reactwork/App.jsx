const parent = document.getElementById("parent")
// console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {style:{
    backgroundColor:"red",
    color:"white"
}}, "Welcome to React Lecture");

const li1 = React.createElement("li",{},"Java Programming");
const li2 = React.createElement("li",{},"Python Programming");
const li3 = React.createElement("li",{},"C++ Programming");
const ul = React.createElement("ul", {style:{
    backgroundColor:"grey",
    color:"black"


}}, li1,li2,li3);

const pi = React.createElement("img",{src:"https://imgs.search.brave.com/tu80peDDYz46QJ-k5hQt-xJBiKLPdXDaWtkdTw-6rH8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/YXVkaW8tY3JlYXRp/b24vdmlzdWFscy1z/b25ncy53ZWJw", style:{
    width:200,
    height:200,
    borderRadius:"50%"

}} )

const name = React.createElement("h4",{},"Dheeraj")
const wrap = React.createElement("div",{style:{
    display:"flex",
    flexDirection:"row",
    gap:25,
    fontSize:50
}},pi,name);
const header = React.createElement("div",{},pi,name)
const wrapper = React.createElement("div",{},h2,wrap, ul)
//JSX
const h21=<h2>hello, I am dheeraj</h2>;
const lil1 =<li>React</li>
const lil2 =<li>python</li>
const ul
root.render(wrapper);