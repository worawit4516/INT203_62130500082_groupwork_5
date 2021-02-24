app.component('photo-item', {
    props: {

        searchphoto: {
            type: Array,
            require: false
        }
    },
    template:
    /*html*/
        `
    <div class="flex-row flex pb-32 ">

            <ul v-for="(picture,index) in searchphoto" v-if='searchphoto.length !== 0'>

            <li class="">
                <div class="imgshow p-2 bg-black ml-12 cursor-pointer ">
                    <button @click="zoom(picture.id)"> <img  v-bind:src="picture.src"></button>
                </div>

                <div class="ml-40 text-white mt-14 cursor-pointer ">
                    <p class="inline text-3xl font-mono hover:text-red-600 "  v-on:click="toggleDone(index)">{{picture.text}}</p>
                    <i class="material-icons pl-5" v-show="picture.like" style="color: red;" >favorite</i>
                </div>
            </li>
        </ul>
            <ul v-else>
                <li class="text-xl text-6xl text-white pb-16 pt-4 font-medium pl-96 ml-28 ">Not have any Photo</li>
            </ul>
        </div>
    `,

    methods: {
        toggleDone(index) {
            this.$emit('toggle-done', index)
        },

        zoom(index) {
            this.$emit('zoom', index)
        }

    }
})