const blog = [
    {
        img: "https://media.istockphoto.com/id/1373129580/photo/pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=7DCGZ75h50HIDl3u6wbkyBOM9nLEgdO33ii-X71pGMM=",
        title: "Riyadh",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique magnam inventore aliquam minus quaerat? Nostrum, blanditiis dignissimos esse eveniet cumque praesentium provident vero possimus et beatae ad, aspernatur voluptate"
    },
    {
        img: "https://media.istockphoto.com/id/1373129580/photo/pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=7DCGZ75h50HIDl3u6wbkyBOM9nLEgdO33ii-X71pGMM=",
        title: "Riyadh",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique magnam inventore aliquam minus quaerat? Nostrum, blanditiis dignissimos esse eveniet cumque praesentium provident vero possimus et beatae ad, aspernatur voluptate"
    },
    {
        img: "https://media.istockphoto.com/id/1373129580/photo/pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=7DCGZ75h50HIDl3u6wbkyBOM9nLEgdO33ii-X71pGMM=",
        title: "Riyadh",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique magnam inventore aliquam minus quaerat? Nostrum, blanditiis dignissimos esse eveniet cumque praesentium provident vero possimus et beatae ad, aspernatur voluptate"
    }
];
let container = document.getElementsByClassName("main");
let blogsContainer = document.getElementsByClassName("blog-container");
function blogApp() {
    blogsContainer = blog.map((item)=>`<img src=${item.img}/>
    <h2>${item.title}</h2>
    <p>${item.p}</p>
    `);
}

//# sourceMappingURL=index.c4775257.js.map
