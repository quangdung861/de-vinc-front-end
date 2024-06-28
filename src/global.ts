enum ToastType {
    Danger = "danger",
    Success = "success",
    Warning = "warning"
}

declare global {
    interface $$ {
        loading: (value: boolean) => void;
        toast: (message: string, type: ToastType) => void;
    }
}

declare global {
    interface Window {
        $$: typeof $$
    }
}

declare global {
    interface String {
        logString(...replacements: string[]): string;
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
    },
    toast: (message: string, type: ToastType) => {
        let backgroundColor;
        let icon;

        switch (type) {
            case ToastType.Danger:
                backgroundColor = "#EE4747"
                icon = "fa-solid fa-circle-info";
                break;
            case ToastType.Success:
                backgroundColor = "#0DB473"
                icon = "fa-regular fa-circle-check";
                break;
            case ToastType.Warning:
                backgroundColor = "#e49c06"
                icon = "fa-solid fa-triangle-exclamation";
                break;
            default:
                backgroundColor = "#EE4747"
                icon = "fa-solid fa-circle-info";
                break;
        }

        const toastDiv = document.createElement("div");
        toastDiv.id = "toastDiv";
        toastDiv.style.backgroundColor = backgroundColor;
        toastDiv.innerHTML = message;

        const prefixIcon = document.createElement("i");
        prefixIcon.className = icon;
        prefixIcon.style.fontSize = "16px";
        toastDiv.prepend(prefixIcon);

        document.body.appendChild(toastDiv);

        setTimeout(() => {
            document.body.removeChild(toastDiv);
        }, 4000);
    }
}

window.$$ = $$;
export { }; 
