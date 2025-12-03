body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    overflow-x: hidden;
    background: #fff0f5;
}

.carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    width: 100vw;
    height: 100vh;
}

.slide {
    scroll-snap-align: start;
    flex: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
}

.slide img {
    max-width: 90%;
    max-height: 50%;
    border-radius: 15px;
    margin-bottom: 20px;
}

.slide h2 {
    margin: 10px 0;
    color: #ff69b4;
}

.slide p {
    font-size: 1.1rem;
    color: #333;
}

audio {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 90%;
}

