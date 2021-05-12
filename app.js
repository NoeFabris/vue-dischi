new Vue({
    el: '#root',
    data: {
        albumsUnfiltered: [],
    },
    methods: {

    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((resp) => {
            this.albumsUnfiltered = resp.data.response;
        })
    }
})