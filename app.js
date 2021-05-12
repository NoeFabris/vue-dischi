new Vue({
    el: '#root',
    data: {
        albums: [],
        selectedGenre: '',
        genresFiltered: [],

    },
    computed: {

    },
    methods: {
        
        genresSelect: function () {
            if (this.selectedGenre === 'all') {
              this.albums = this.albums

            } else {

                this.genresFiltered.forEach(genre => {
                    if (this.selectedGenre == genre) {
                        
                    }
                });

            }
        }
    },
    mounted() {
        
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((resp) => {
                this.albums = resp.data.response;
                
                this.albums.forEach(album => {

                    if (!this.genresFiltered.includes(album.genre)){
                        this.genresFiltered.push(album.genre)
                    }
                });
                
                // this.genresFiltered = this.genresUnfiltered
                // this.genresFiltered.filter((genre, index) => this.genresFiltered.indexOf(genre) !== index)
            })
        
    }
})