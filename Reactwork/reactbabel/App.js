const parent=document.getElementById('parent');
// console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',textAlign:'center'}},"ABES Engineering College");
const li1=React.createElement('li',{},"java");
const li2=React.createElement('li',{},"Python");
const li3=React.createElement('li',{},"React");
const ul=React.createElement('ul',{style:{backgroundColor:'cyan'}},li1,li2,li3);

const pic=React.createElement('img',{src:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg', style:{height:'200px', width:'200px', borderRadius:'50%'}});
const myname=React.createElement('h1',{},"Vansh Tomar");
const header=React.createElement('div',{style:{display:'flex',gap:'200px'}},pic,myname);
const wrapper=React.createElement("div",{},h2,header,ul);

//jsx
const h21=<h2>Hi, I m using JSX</h2>;
const li11=<li>React</li>
const li12=<li>Java Programming</li>
const ul1=<ul>{li11}{li12}</ul>;
const wrapper1=(
    <>
    {h21},
    {ul1}
    </>
)
root.render(wrapper1);