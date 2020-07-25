<template>
    <div>
        <b-row>
            <b-col 
                cols="12"
                md="6"
            >
                <b-img 
                    :src="serie['backdrop_path']"
                    class="img"
                />    
            </b-col>
            <b-col
                cols="12"
                md="6"
            >
                {{ serie['overview'] }}

                <br/><br/>

                <strong>
                    Qtd de Temporadas:
                </strong>
                {{ serie['number_of_seasons'] }}

                <br/>

                <strong>
                    Qtd de Episódios:
                </strong>
                {{ serie['number_of_episodes'] }}

                <br/>

                <strong>
                    Gênero:
                </strong>
                {{ genres }}

                <br/>

                <strong>
                    Populariedade:
                </strong> 
                {{ serie['popularity'] }}

                <br/>
                
                <strong>
                    Qtd de Votos:
                </strong>
                {{ serie['vote_count'] }}

                <br/>
                
                <strong>
                    Nota:
                </strong> 
                {{ serie['vote_average'] }}

                <br/>

                <strong>
                    Produtoras:
                </strong>
                {{ this.companies }}

                <br/>

                <b-link
                    :href="serie['homepage']"
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
            serie: {},
            genres: '',
            companies: ''
        }
    },
    methods: {
        organizeGenres() {
            this.serie['genres'].forEach(element => {
                this.genres += element['name'] + ', '
            })
            this.genres = this.genres.slice(0, this.genres.length - 2)
        },
        organizeCompanies() {
            this.serie['production_companies'].forEach(element => {
                this.companies += `${element['name']} (${element['origin_country']}), `
            })
            this.companies = this.companies.slice(0, this.companies.length - 2)
        },
        organizeAttributes() {
            this.organizeGenres()
            this.organizeCompanies()
        },
        getSerie() {
            this.getSerieById(this.index).then(data => {
                this.serie = data
                this.organizeAttributes()
            },
            error => {
                alert('fail')
            })
        },
        ...mapActions('series', [ 'getSerieById' ])
    },
    created() {
        this.getSerie()
    }
}
</script>
<style scoped>
.img {
    width: 100%;
}
</style>