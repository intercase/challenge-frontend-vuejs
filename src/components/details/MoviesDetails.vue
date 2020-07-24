<template>
    <div>
        {{movie}}
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['index'],
    data() {
        return {
            movie: {}
        }
    },
    methods: {
        getMovie() {
            this.getMovieById(this.index).then(data => {
                this.movie = data
            },
            error => {
                alert('fail')
            })
        },
        ...mapActions('movies', [ 'getMovieById' ])
    },
    created() {
        this.getMovie()
    }
}
</script>