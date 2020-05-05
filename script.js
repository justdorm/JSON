let data = [
    {
        "title" : "Life Drawing",
        "picture_url" : "https://justindormitzer.com/content/images/2020/01/Drawing-1-small-edit-2.jpg",
        "medium" : "Charcoal",
    },
    {
        "title" : "Desert Waterfall",
        "picture_url" : "https://justindormitzer.com/content/images/2020/01/desert-waterfall-edit.jpg",
        "medium" : "Photo Manipulation",
    },
    {
        "title" : "Anne of the Thousand Days",
        "picture_url" : "https://justindormitzer.com/content/images/2020/01/Annev3.jpg",
        "medium" : "3d Render and Photo Manipulation",
    },
    {
        "title" : "Life Drawing Sketch",
        "picture_url" : "https://justindormitzer.com/content/images/2020/01/life-drawing-2-small-edit-1.jpg",
        "medium" : "Charcoal",
    }
]

function createPortfolioItem (portfolioItem) {
    //Takes a json item
    //Creates Div
    //Creates img source
    //Puts image in Div
    //Takes Title, Creates h1 Element
    //Put title in Div
    //Takes medium, Creates h2 Element
    //Put medium in Div
    //Put Div in Grid
    let portfolioItemContainer = document.createElement("div");
    let image = document.createElement("img");
    image.src = portfolioItem["picture_url"];
    portfolioItemContainer.appendChild(image);
    let title = document.createElement("h1");
    title.innerHTML = portfolioItem["title"];
    portfolioItemContainer.appendChild(title);
    let medium = document.createElement("p");
    medium.innerHTML = portfolioItem["medium"];
    portfolioItemContainer.appendChild(medium);

    let Grid = document.getElementById("Grid");
    Grid.appendChild(portfolioItemContainer);

    
}

for (var i = 0; i < data.length; i++){
    createPortfolioItem(data[i])
}
