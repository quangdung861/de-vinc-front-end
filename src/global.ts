
declare global {
    interface $$ {
      loading: (value: boolean) => void;
    }
  }

declare global {
    interface Window {
        $$: typeof $$
    }
}

declare global {
  interface String {
      logString(...replacements: string[]) : string;
  }
}

const $$ = {
    loading: (value: boolean) => {
        if (value) {
            const overlayDiv = document.createElement("div");
            overlayDiv.id = "overlayDiv"; 
            overlayDiv.style.position = "fixed";
            overlayDiv.style.top = "0";
            overlayDiv.style.left = "0";
            overlayDiv.style.width = "100%";
            overlayDiv.style.height = "100%";
            // overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            overlayDiv.style.zIndex = "999";
            overlayDiv.style.pointerEvents = "auto";

            const loadingDiv = document.createElement("div");
            loadingDiv.id = "loadingDiv"; 
            loadingDiv.style.position = "fixed";
            loadingDiv.style.top = "50%";
            loadingDiv.style.left = "50%";
            loadingDiv.style.transform = "translate(-50%, -50%)";
            loadingDiv.style.padding = "20px";
            loadingDiv.style.color = "#fff";
            loadingDiv.style.zIndex = "1000";
            loadingDiv.style.pointerEvents = "none";

            const spinnerIcon = document.createElement("i");
            spinnerIcon.className = "fas fa-spinner fa-spin spinner"; 
            loadingDiv.appendChild(spinnerIcon);

            document.body.appendChild(overlayDiv);
            document.body.appendChild(loadingDiv);
        } else {
            const overlayDiv = document.getElementById("overlayDiv");
            const loadingDiv = document.getElementById("loadingDiv");
            if (overlayDiv) {
                document.body.removeChild(overlayDiv);
            }
            if (loadingDiv) {
                document.body.removeChild(loadingDiv);
            }
        }
    }
}

window.$$ = $$;
export {}; 
