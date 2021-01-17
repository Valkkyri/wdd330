let menu = document.querySelector("ol");
let links = [
    {
        label: "Week 01",
        url: "week-01/index.html"
    },
    {
        label: "Week 02",
        url: "week-02/index.html"
    }
];
// console.log(links);

for (let i = 0; i < links.length; i++)  {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.setAttribute("href", links[i].url);
    link.innerHTML = links[i].label;
    li.appendChild(link);
    document.querySelector("ol").appendChild(li);
}