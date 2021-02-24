app.component('photo-search', {
    props: {
        show: {
            type: Array,
            require: true
        },
        // input_title: String

    },

    data() {
        return {
            input_title: ''
        }
    },
    template:
    /*html*/
        `
        <button>
        <span @click="toggle" class="material-icons ml-20" v-if="show.icon">
            search
        </span>
    </button>
    <div v-if="show.searchbar" class="absolute">
        <input @keyup ="inputdata" v-model="input_title" class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm" type="text" placeholder="Please enter text for searching photos" >
        <button class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500" v-on:click="toggle">Cancel</button>

    </div>`,
    methods: {
        toggle() {
            this.$emit('toggle-search')
            this.input_title = ''
        },

        inputdata() {
            let input = this.input_title
            this.$emit('input-data', input)

        }

    }
})