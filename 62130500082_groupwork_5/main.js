const app = Vue.createApp({
    data() {
        return {
            show: { icon: true, searchbar: false },
            inputTitle: '',
            Box_image: false,
            currentpicture: '',
            pictures: [{
                    id: 1,
                    src: "./image/1.jpg",
                    text: "Death Standing",
                    like: false,
                    zoom: false
                },
                {
                    id: 2,
                    src: "./image/2.jpg",
                    text: "Blair Witch",
                    like: false,
                    zoom: false
                },
                {
                    id: 3,
                    src: "./image/3.jpg",
                    text: "Cyberpunk",
                    like: false,
                    zoom: false
                }
            ]
        }
    },

    methods: {
        toggle() {
            this.show.icon = !this.show.icon
            this.show.searchbar = !this.show.searchbar
            this.inputTitle = ''

        },
        zoom(id) {
            this.currentpicture = this.pictures.filter(p => p.id == id)[0]
            this.Box_image = true
        },
        closeZoom() {
            this.Box_image = false
        },
        toggleDone(index) {
            this.pictures[index].like = !this.pictures[index].like
        },

        setinput(input) {
            this.inputTitle = input;
        },
    },
    computed: {
        countLikes() {
            return this.pictures.filter(t => t.like).length
        },
        countpicture() {
            return this.pictures.length
        },

        searchPhoto() {
            return this.pictures.filter(searching => {
                return searching.text.toLowerCase().includes(this.inputTitle.toLowerCase())
            })

        },
        searchZoom() {
            return this.pictures.filter(t => t.zoom)
        }
    }
})