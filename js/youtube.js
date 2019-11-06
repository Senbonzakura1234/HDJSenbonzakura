document.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector(`[name='input-content'] [name='keyword']`);
    let form = document.querySelector(` [name='input-content']`);
    let submit = document.querySelector(` [name='submit']`);
    input.value = 'FGO OST';
    function getUrl(keyword_search) {
        return `https://content.googleapis.com/youtube/v3/search?q=${keyword_search}&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc`;
    }
    function getData(url) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                // Typical action to be performed when the document is ready:
                let data = JSON.parse(xhttp.responseText);
                renderData(data);
            }
        };
        xhttp.open(`GET`, url, true);
        xhttp.send();
    }
    function renderData(data){
        let items = data.items;
        let ContentRender = document.querySelector(`.content`);
        ContentRender.innerHTML = null;
        for(let i = 0; i < items.length; i++){
            let {snippet, id} = items[i], {thumbnails} = snippet, {videoId} = id, {default: default1} = thumbnails,
            name =  snippet.title.length > 90? snippet.title.substr(0, 90) + "..." : snippet.title;
            ContentRender.innerHTML = `${ContentRender.innerHTML}
                <div class="my-2 col-4">
                    <button class="media btn btn-dark p-3 w-100"  data-toggle="modal" data-target="#exampleModal" 
                        data-whatever="${videoId}">
                        <img class="d-inline-block" src="${default1.url}" width="100" height="100"
                            alt="Generic placeholder image" style="border-radius: 5px">
                        <div class="media-body text-left ml-3 d-inline-block" style="width: 100% !important;">
                            <h6 class="mt-0 mb-1">${name} </h6>
                        </div>
                    </button>
                </div>`;
        }
    }
    form.addEventListener(`submit`, function(e) {
        e.preventDefault();
        console.log(this.value);
        getData(getUrl(input.value));
    });
    let currentDataModal = null;
    $('#exampleModal').on(`show.bs.modal`, function (event) {
        let button = $(event.relatedTarget);
        let recipient = button.data(`whatever`);
        let modal = $(this);
        let url = 'https://www.youtube.com/embed/' + recipient;
        let iframe = document.querySelector(`.embed-responsive .iframe`);
        if(currentDataModal !== recipient){
            currentDataModal = recipient;
            iframe.src = url;
        }else{

        }
    });
    submit.click();
});


