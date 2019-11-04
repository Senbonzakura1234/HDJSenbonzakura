document.addEventListener(`DOMContentLoaded`, function() {
    document.querySelector(`.input`).innerHTML =
        `<form action="" name="input-content">
            Firstname: <input type="text" name="firstname">
            Lastname: <input type="text" name="lastname">
            <input type="submit" name="submit">
        </form>`;
    document.querySelector(`.output`).innerHTML = `<span class="output-content"></span>`;
    document.querySelector(` [name='input-content']`).addEventListener(`submit`, function(e) {
        e.preventDefault();

        let a = document.querySelector(`.input [name='firstname']`),
            b = document.querySelector(`.input [name='lastname']`),
            c = a.value, d = b.value, f = document.querySelector(`.demo`);

        document.querySelector(`.output .output-content`).innerHTML = `${c} ${d}`;

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let responseDataJson = JSON.parse(xhttp.responseText);
                for(let i = 0; i < responseDataJson.length; i++){
                    const {SongId, Author, Link, Name, Singer,
                        Thumbnail, Description, CreatedTimeMls} = responseDataJson[i];
                    f.innerHTML = `${f.innerHTML}
                    <li>
                        <ul>
                            <li>SongId: ${SongId}</li>
                            <li>Name: ${Name}</li>
                            <li>Author: ${Author}</li>
                            <li>Singer: ${Singer}</li>
                            <li>Description: ${Description}</li>
                            <li>Link: ${Link}</li>
                            <li>Thumbnail: ${Thumbnail}</li>
                        </ul>
                    </li>`;
                }
            }
        };
        xhttp.open("GET", "https://localhost:44355/api/songs", true);
        xhttp.send();



        a.value = '';
        b.value = '';
    });
});

