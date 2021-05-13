new Vue({
    el: '#root',
    data: {
        albums: [],
        albumsFiltered: [],
        selectedGenre: '',
        genresFiltered: [],

    },
    computed: {

    },
    methods: {
        
        genresList() {
            this.albums.forEach(album => {
    
                if (!this.genresFiltered.includes(album.genre)){
                    this.genresFiltered.push(album.genre)
                }
            });    
        },
        
        genresSelect: function () {
            // if (this.selectedGenre === 'all') {
            //   this.albums = this.albums

            // } else {

            //     this.genresFiltered.forEach(genre => {
            //         if (this.selectedGenre == genre) {
                        
            //         }
            //     });

            // }
            if (this.selectedGenre === 'all') {
                this.albumsFiltered = this.albums
                return
            } else {
                const albumsFiltered = this.albums.filter((album) => {
                    return album.genre === this.selectedGenre
                })
                this.albumsFiltered = albumsFiltered
            }

        }
    },
    mounted() {
        
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((resp) => {
                this.albums = resp.data.response;
                this.albumsFiltered.push(...this.albums)
                this.genresList()

                // this.genresFiltered = this.genresUnfiltered
                // this.genresFiltered.filter((genre, index) => this.genresFiltered.indexOf(genre) !== index)
            })
        
    }
})