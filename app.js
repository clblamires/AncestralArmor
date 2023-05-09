

let character_name = document.getElementById("character_name");
character_name.addEventListener("change", () =>{
    localStorage.setItem("character_name", character_name.value);
});

let current_points = 0;
let max_points = 0;
let points = document.getElementById("points");
// let points_remaining = document.getElementById("points_remaining");
points.addEventListener("change", ()=>{
    localStorage.setItem("points", points.value);
    document.getElementById("max").innerHTML = points.value || 0;
    max_points = Number(document.getElementById("max").innerHTML);
});


function renderItems(){
    // get the item list, clear it to make sure nothing else is there.
    let itemList = document.getElementById("list");
    itemList.innerHTML = "";

    // add items to the list
    items.forEach( (item, index) => {

        // create the list item and the checkbox for each
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.checked;
        let div = document.createElement("div");
        div.setAttribute("data-tier", item.tier );
        let label = document.createElement("label");
        // label.className = "checkbox";
        let span_name = document.createElement("span");
        let tier = item.tier;
        tier = "fa-" + tier;
        let tierIcon = document.createElement("i");
        tierIcon.classList.add("fa-solid", tier, "tier_number");

        span_name.textContent = item.name;
        span_name.className = "bold-text";
        let span_cost = document.createElement("span");
        span_cost.textContent = "Cost: " + item.cost;
        span_cost.className = "right_float";
        let p = document.createElement("p");
        p.classList.add("description");
        p.classList.add("hidden");
        p.textContent = item.description;
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-circle-arrow-down", "right_float", "red");
        let br = document.createElement("br");
        let using_br = false;

        if( item.limited ){
            using_br = true;
            let limited = document.createElement("span");
            limited.textContent = "Limited";
            limited.className = "italic";
            p.appendChild(br);
            p.appendChild(limited);
        }
        if( item.prerequisite ){
            let text = item.prerequisite;
            if( using_br ){
                text = ", " + item.prerequisite + " only";
            }
            let prereq = document.createElement("span");
            prereq.className = "italic";
            prereq.textContent = text;
            if( !using_br ){
                p.appendChild(br);
            }
            p.appendChild(prereq);
        }

        // add event listeners to each checkbox
        checkbox.addEventListener("click", () => {
            item.checked = checkbox.checked;
            saveItems();

            if( item.checked ){
                current_points += item.cost;
            } else {
                current_points -= item.cost;
            }
            document.getElementById("remaining").innerHTML = current_points;
        }); // end of event listeners

        // tapping on details
        icon.addEventListener("click", (  ) => {
            icon.nextElementSibling.nextElementSibling.classList.toggle("hidden")
            icon.classList.toggle("fa-circle-arrow-down");
            icon.classList.toggle("fa-circle-arrow-up");
        });

        // add everything together
        label.appendChild(checkbox);
        // label.appendChild(tierIcon);
        label.appendChild(span_name);
        div.appendChild(label);
        div.appendChild(icon);
        div.appendChild(span_cost);
        div.appendChild(p);
        li.appendChild(div);
        // li.appendChild(checkbox);
        itemList.appendChild(li);

    });// end adding items to the list
    let ul = document.querySelectorAll('#list li');
    ul.forEach( li => {
        if( li.firstChild.getAttribute('data-tier') != 1 ){
            li.classList.add("hidden");
        } else {
            li.classList.remove("hidden");
        }
    });

}


document.getElementById("tier1").addEventListener("click", () => {
    let ul = document.querySelectorAll('#list li');
    ul.forEach( li => {
        if( li.firstChild.getAttribute('data-tier') != 1 ){
            li.classList.add("hidden");
        } else {
            li.classList.remove("hidden");
        }
    });
});
document.getElementById("tier2").addEventListener("click", () => {
    let ul = document.querySelectorAll('#list li');
    ul.forEach( li => {
        if( li.firstChild.getAttribute('data-tier') != 2 ){
            li.classList.add("hidden");
        } else {
            li.classList.remove("hidden");
        }
    });
});
document.getElementById("tier3").addEventListener("click", () => {
    let ul = document.querySelectorAll('#list li');
    ul.forEach( li => {
        if( li.firstChild.getAttribute('data-tier') != 3 ){
            li.classList.add("hidden");
        } else {
            li.classList.remove("hidden");
        }
    });
});
document.getElementById("tier4").addEventListener("click", () => {
    let ul = document.querySelectorAll('#list li');
    ul.forEach( li => {
        if( li.firstChild.getAttribute('data-tier') != 4 ){
            li.classList.add("hidden");
        } else {
            li.classList.remove("hidden");
        }
    });
});

function loadItems(){
    let savedItems = localStorage.getItem("items");
    if( savedItems ){
        items = JSON.parse(savedItems); // overwrite the built-in

        let sumOfPoints = 0;
        items.forEach( (item, index) => {
            if( item.checked ){
                sumOfPoints+= Number(item.cost);
            }
        });
        current_points = sumOfPoints;
        console.log(current_points);
        document.getElementById("remaining").innerHTML = current_points;
        
    }
    renderItems();

    

    let savedName = localStorage.getItem("character_name");
    if( savedName ){
        character_name.value = savedName;
    }


    let savedPoints = localStorage.getItem("points");
    if( savedPoints ){
        points.value = savedPoints;
        document.getElementById("max").innerHTML = savedPoints;
        max_points = Number(savedPoints);
    } else {
        document.getElementById("max").innerHTML = 0;
    }
}

function saveItems(){
    localStorage.setItem("items", JSON.stringify(items));
}

// run program!
loadItems();

document.getElementById("reset").addEventListener("click", () => {
    if( confirm("Are you sure?")){
        localStorage.clear();
        window.scrollTo(0,0);
        location.reload();
    }
})