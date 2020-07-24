<template>
    <b-modal 
        id="detailsModal"
        ref="detailsModal"
        size="xl"
        :title="dataIn['title']"
    >
        <movies-details :index="dataIn['id']" v-if="typeMovies"/>
        <series-details v-if="typeSeries"/>
    </b-modal>
</template>
<script>
import MoviesDetails from '@/components/details/MoviesDetails.vue'
import SeriesDetails from '@/components/details/SeriesDetails.vue'

export default {
    props: ['dataIn', 'type'],
    components: {
        MoviesDetails,
        SeriesDetails
    },
    data() {
        return {
            typeMovies: false,
            typeSeries: false
        }
    },
    methods: {
        show() {
            this.$refs.detailsModal.show()
            this.typeMovies = this.type == 'movie'
            this.typeSeries = this.type == 'tv'
        }
	}
}
</script>