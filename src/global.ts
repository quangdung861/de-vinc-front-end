const R = {
    loading:() => {
        const loadingDiv = document.createElement("div");
        loadingDiv.innerText = "Loading....";
        document.getElementsByTagName("body")[0].appendChild(loadingDiv);
    }
}

window.R = R; 
