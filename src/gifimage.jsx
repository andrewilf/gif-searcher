import { useState, useEffect } from 'react'


export default function GifImage(props) {
    const [movieData, setMovieData] = useState("")

    useEffect(() => {
        console.log("use effect started", props.randomFlag)
        const makeApiCall = async () => {
            let url = ''
            if (!props.randomFlag) {
                url = "https://api.giphy.com/v1/gifs/search?api_key=SpO5j8t9PSukU4OzP8GMD2oZUoWpxoV7&limit=1&q=" + props.name
                console.log("searched specific")
            }
            else {
                url = "https://api.giphy.com/v1/gifs/random?api_key=SpO5j8t9PSukU4OzP8GMD2oZUoWpxoV7&limit=1&tag=" + props.name
            }
            let urlName = ''
            urlName = 'https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif'
            setMovieData(urlName);
            await fetch(url)
                .then((res) => res.json())
                .then((gifEntry) => {

                    console.log(gifEntry.data)
                    if (!props.randomFlag) {
                        urlName = "https://media1.giphy.com/media/" + gifEntry.data[0].id + "/giphy.gif"
                    }
                    else {
                        urlName = "https://media1.giphy.com/media/" + gifEntry.data.id + "/giphy.gif"
                    }
                    setMovieData(urlName);
                    props.setCurrentUrl(urlName)
                    console.log("movieData", urlName);
                });
        };
        console.log(props.name)
        let tempName = props.name.toString()
        if (tempName.search("https://media1.giphy.com/media/") !== -1) {
            setMovieData(props.name)
        }
        else {
            makeApiCall()
        }

    }, [props.randomFlag, props.name])

    return (
        <>
            <img src={movieData} alt="gifimage" />
        </>
    )
}