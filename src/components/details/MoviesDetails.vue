<template>
    <div>
        <b-row>
            <b-col 
                cols="12"
                md="6"
            >
                <b-img 
                    :src="movie['backdrop_path']"
                    class="img"
                />    
            </b-col>
            <b-col
                cols="12"
                md="6"
            >
                {{ movie['overview'] }}

                <br/><br/>

                <strong>
                    País:
                </strong>
                {{ countries }}

                <br/>

                <strong>
                    Gênero:
                </strong>
                {{ genres }}

                <br/>

                <strong>
                    Populariedade:
                </strong> 
                {{ movie['popularity'] }}

                <br/>
                
                <strong>
                    Qtd de Votos:
                </strong>
                {{ movie['vote_count'] }}

                <br/>
                
                <strong>
                    Nota:
                </strong> 
                {{ movie['vote_average'] }}

                <br/>

                <strong>
                    Produtoras:
                </strong>
                {{ this.companies }}

                <br/>

                <b-link
                    :href="movie['homepage']"
                    target="blank"
                    class="card-link"
                >
                    Site
                </b-link>

            </b-col>
        </b-row>        
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['index'],
    data() {
        return {
            movie: {},
            genres: '',
            countries: '',
            companies: ''
        }
    },
    methods: {
        organizeGenres() {
            this.movie['genres'].forEach(element => {
                this.genres += element['name'] + ', '
            })
            this.genres = this.genres.slice(0, this.genres.length - 2)
        },
        organizeCountries() {
            this.movie['production_countries'].forEach(element => {
                this.countries += element['name'] + ', '
            })
            this.countries = this.countries.slice(0, this.countries.length - 2)
        },
        organizeCompanies() {
            this.movie['production_companies'].forEach(element => {
                this.companies += `${element['name']} (${element['origin_country']}), `
            })
            this.companies = this.companies.slice(0, this.companies.length - 2)
        },
        organizeAttributes() {
            this.organizeGenres()
            this.organizeCountries()
            this.organizeCompanies()
        },
        getMovie() {
            this.getMovieById(this.index).then(data => {
                this.movie = data
                this.organizeAttributes()
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
<style scoped>
.img {
    width: 100%;
}
</style>