

    // API KEY for youtube: AIzaSyD1GKvoxTW_nOT4AsggKAJy_dp2BkU8Y0o
    // GET https://youtube.googleapis.com/youtube/v3/search?maxResults=50&q=football&key=[YOUR_API_KEY] HTTP/1.1


    var search_result_div = document.querySelector("#search_result");


    const showTrending = async () => {
        try {
            let res = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=20&key=AIzaSyD1GKvoxTW_nOT4AsggKAJy_dp2BkU8Y0o");

            let data = await res.json();

            let videos = data.items;

            console.log(data)

            appendVideosTrend(videos);

        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    showTrending();

// I have to make this function because for trendind api data of video id is comming, diffent than searchVideos 
    const appendVideosTrend = (data) => {

        data.forEach(({ snippet: { title }, id, snippet: { thumbnails: { medium: { url } } } }) => {

            let div = document.createElement('div');

            let Title = document.createElement('h3');
            Title.innerText = title;


            let videoLink = `https://www.youtube.com/embed/${id}`;


            let thumbnail = document.createElement('img');
            thumbnail.src = url;
            thumbnail.style.width = "100%"
            // thumbnail.onclick=`playVideo(${iframe})`;
            thumbnail.addEventListener("click", () => {
                playVideo(videoLink);
            });

            div.append(thumbnail, Title);
            search_result_div.append(div);
        });
    }


    const searchVideos = async () => {

        try {

            let input = document.querySelector("#search").value;

            let res = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyD1GKvoxTW_nOT4AsggKAJy_dp2BkU8Y0o&maxResults=50`
            );

            let data = await res.json();

            let videos = data.items;

            console.log(data)

            appendVideos(videos)
            // return videos;

        } catch (err) {
            console.error();
        }
    }

    // /* this is to append videos of search api data.
    const appendVideos = (data) => {

        search_result_div.innerHTML=null;

        data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {

            let div = document.createElement('div');

            let Title = document.createElement('h3');
            Title.innerText = title;


            let videoLink = `https://www.youtube.com/embed/${videoId}`;


            let thumbnail = document.createElement('img');
            thumbnail.src = url;
            thumbnail.style.width = "100%"
            // thumbnail.onclick=`playVideo(${iframe})`;
            thumbnail.addEventListener("click", () => {
                playVideo(videoLink);
            });

            div.append(thumbnail, Title);
            search_result_div.append(div);
        });
    }

    const playVideo = (link) => {
        // event.preventDefault();
        // console.log("you clicked")

        // getscript("videoPlayer.html", function () {
        //     appendToPlayer();
        // });


        console.log(link);
        // appendToPlayer(iframe);
        localStorage.setItem("localVideo", JSON.stringify(link));
        window.location.href = "videoPlayer.html"

    }