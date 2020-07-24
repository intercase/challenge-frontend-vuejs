<template>
	<b-tabs content-class="mt-3">
		<b-tab title="Movies" active>
			<movies-list />
		</b-tab>
		<b-tab title="Series">
			<series-list />
		</b-tab>
	</b-tabs>
</template>

<script>
import MoviesList from '@/components/MoviesList.vue'
import SeriesList from '@/components/SeriesList.vue'

export default {
	name: 'Home',
	components: {
		MoviesList,
		SeriesList
	}
}
</script>
