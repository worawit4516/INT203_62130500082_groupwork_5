app.component('photo-view', {
    props: {
        box_image: Boolean,
        currentpicture: String
    },
    template:
    /*html*/
        `<div class="flex-row flex" id="image-box" v-if="box_image">
        <div class="ml-96">
            <img :src="currentpicture.src" id="imgshowForzoom">
        </div>
        </div>
        <button> <span @click="closeZoom" class="material-icons ml-20 bg-white close-icon" v-if="box_image">
            close
        </span></button>`,
    methods: {
        closeZoom() {
            this.$emit('close-Zoom')
        },

    }
})