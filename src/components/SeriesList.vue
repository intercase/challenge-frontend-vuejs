<template>
    <div>
        <b-row>
            <b-col 
                v-for="(serie, index) in series" 
                :key="serie['id']" 
                cols="12" 
                md="6" 
                lg="4" 
                xl="3"
            >
                <b-card 
                    class="card-item"
                >
                    <b-row>
                        <b-col
                            cols="12"
                        >
                            <h3>
                                {{ serie.title }}
                            </h3>
                        </b-col>
                        <b-col 
                            cols="6"
                        >
                            <b-img 
                                :src="serie['poster_path']"
                            />
                        </b-col>
                        <b-col 
                            cols="6"
                        >
                            <p>
                                <strong>
                                    ID:
                                </strong> 
                                {{ serie['id'] }}
                                
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
                            </p>
                        </b-col>
                    </b-row>
                </b-card>
                <b-button-group 
                    class="btn-details"
                >
                    <b-button 
                        @click="openOverview(index)"
                    >
                        Resumo
                    </b-button>
                    <b-button 
                        @click="openDetails(serie)"
                        variant="primary"
                    >
                        Detalhes
                    </b-button>
                </b-button-group>
                <b-card 
                    class="overview" 
                    v-if="showOverview(index)"
                >
                    {{ serie['overview'] }}
                    <br/>
                    <b-link
                        href="#"
                        class="card-link"
                        @click="indexOverview = -1"
                    >
                        Fechar
                    </b-link>
                </b-card>
            </b-col>
        </b-row>
        <b-row 
            class="pagination"
        >
            <b-col 
                cols="12"
            >
                <b-button-group>
                    <b-button 
                        v-if="page > 1" 
                        @click="changePage(page - 1)"
                    > 
                        &lt; Página Anterior ({{ page - 1 }}) 
                    </b-button>
                    <b-button 
                        variant="primary" 
                        @click="changePage(page + 1)"
                    > 
                        Próxima Página ({{ page + 1 }}) > 
                    </b-button>
                </b-button-group>
            </b-col>
        </b-row>
        <Details
            id="detailsModal"
            ref="detailsModal"
            :dataIn="detailsModal"
            :type="'serie'"
        />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Details from '@/components/Details.vue'
export default {
    components: {
        Details
    },
    data() {
        return {
            page: 1,
            series: [],
            indexOverview: -1,
            detailsModalOpen: false,
            detailsModal: -1
        }
    },
    methods: {
        changePage(page) {
            this.page = page
            this.getSeries()
        },
        openOverview(index) {
            this.indexOverview = index
        },
        openDetails(index) {
            this.detailsModal = index
            this.detailsModalOpen = true
            this.$refs.detailsModal.show()
        },
        showOverview(index) {
            if(this.indexOverview == index) {
                return true
            }
            return false
        },
        getSeries() {
            this.getSeriesByPage(this.page).then(data => {
                this.series = data
            },
            error => {
                alert('fail')
            })
        },
        ...mapActions('series', [ 'getSeriesByPage' ])        
    },
    computed: {        
    },
    created() {
        this.getSeries()
    }
}
</script>
<style scoped>
.btn-details {
    position: absolute;
    bottom: 20px;
    right: 25px;
}

.overview {
    position: absolute;
    width: 90%;
    bottom: 15px;
    left: 5%;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    border: 1px silver solid;
    z-index: 1;
}

.card-item {
    min-height: 350px;
    margin-bottom: 10px;
}

.pagination {
    text-align: center;
    margin-top: 50px;
}
</style>