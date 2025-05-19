let head = `
    <div class="container">
                <div class="title-main text-center text-white">
                    <h1 id="title" class="fw-bold"></h1>
                    <p>
                        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                        consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione
                        sint. Sit quaerat ipsum dolorem.
                    </p>
                </div>
    </div>

    <div class="breadcumb">
        <div class="container d-flex align-items-center">
            <ul class="d-flex align-items-center gap-4 text-white fw-bolder fs-5 m-0 px-2 ">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <p id="name-page"></p>
                </li>
            </ul>
        </div>
    </div>
`;

document.getElementById("head").innerHTML = head;


function writeNamePage(name){
    document.getElementById("name-page").innerHTML = name;
    document.getElementById("title").innerHTML = name;
}
