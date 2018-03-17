import "../assets/styles/footer.styl"

export default {
    data() {
        return {
            author: "Jokcy"
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Written by Jokcy {this.author}</span>
            </div>
        )
    }
}