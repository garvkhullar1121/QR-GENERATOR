let btns = document.querySelectorAll(".btn");
        let h1 = document.querySelector("h1");
        let div2 = document.querySelector(".button-div");
        let h2 = document.querySelector("#second-phase");
        let p = document.querySelector("#input");

        for (let btn of btns) {
            btn.addEventListener("click", () => {
                h1.innerText = "";
                div2.remove();
                h2.innerText = "Wait a second...";
                entries();
            });
        }

        function entries() {
            setTimeout(() => {
                h2.innerText = "";
                p.innerText = "ENTER URL OR ANY TEXT HERE: ";
                let value = document.querySelector(".entry");
                
                
                let inp = document.createElement("input");
                value.appendChild(inp);

                let submit = document.createElement("button");
                value.appendChild(submit);
                submit.innerText = "Create now!";
                submit.classList.add("submit");

                let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

                submit.addEventListener("click", () => {
                    let oldImg = document.querySelector(".qr-code");
                    if (oldImg) {
                        oldImg.remove();
                    }

                    let img = document.createElement("img");
                    img.classList.add("qr-code");
                    img.style.display = "block"; // Ensures it appears on the next line
                    value.appendChild(img);

                    let data = inp.value;
                    img.src = url + encodeURIComponent(data);
                });
            }, 1500);
        }