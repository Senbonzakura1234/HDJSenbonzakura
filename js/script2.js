document.addEventListener(`DOMContentLoaded`, function() {
    document.querySelector(`.input`).innerHTML =
        `<form action="" name="input-content">
<!--            Firstname: <input type="text" name="firstname">-->
<!--            Lastname: <input type="text" name="lastname">-->
            <input class="btn btn-success" value="Submit" type="submit" name="submit">
        </form>`;
    // document.querySelector(`.output`).innerHTML = `<span class="output-content"></span>`;
    function loadListSong(){
        let f = document.querySelector(`.demo`);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let responseDataJson = JSON.parse(xhttp.responseText);
                f.innerHTML = null;
                for(let i = 0; i < responseDataJson.length; i++){
                    const {SongId, Author, Link, Name, Singer,
                        Thumbnail, Description, CreatedTimeMls} = responseDataJson[i];
                    f.innerHTML = `${f.innerHTML}

                    <div class="media my-2 col-6">
                        <img src="${Thumbnail}" width="100" height="100"
                            alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1">${Name}</h5>
                            <p class="my-0">Author: ${Author} Singer: ${Singer}</p>
                            <p class="my-0">Description: ${Description}</p>
                            <p class="my-0">Link: 
                                <a href="${Link}">Download</a>
                            </p>
                        </div>
                    </div>`;
                }
            }
        };
        xhttp.open("GET", "https://localhost:44355/api/songs", true);
        xhttp.send();
    }
    loadListSong();
    document.querySelector(` [name='input-content']`).addEventListener(`submit`, function(e) {
        e.preventDefault();

        // let a = document.querySelector(`.input [name='firstname']`),
        //     b = document.querySelector(`.input [name='lastname']`),
        //     c = a.value, d = b.value;
        // document.querySelector(`.output .output-content`).innerHTML = `${c} ${d}`;
        // a.value = '';
        // b.value = '';
        loadListSong();

    });
});

