class VideoCard {
    render(data) {
        return (
            `
            <div class="video_card">
            <video src="${data.url}" controls></video>
            <h4>${data.tittle}</h4>
            </div>
            `

        )
    }
}
export default new VideoCard()