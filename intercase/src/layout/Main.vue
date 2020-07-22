<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" @click="$router.push('/')">
        <img
          src="https://s3.amazonaws.com/img-intercase/wp-content/uploads/2018/10/24205748/logoWebsite1.png"
          width="250"
          height="90"
          class="d-inline-block align-top"
          alt
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mt-4" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              @click="$router.push('/movies')"
              :class="$route.name.includes('movies') ? 'active' : ''"
            >Movies</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="$router.push('/series')"
              :class="$route.name.includes('series') ? 'active' : ''"
            >Series</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
.navbar {
  width: 100%;
  position: fixed;
  z-index: 1;
  cursor: pointer;
  .active,
  :hover {
    color: #ff6d40 !important;
  }
}

@media all and (max-width: 768px) {
  .navbar-brand {
    width: 80%;
  }
}
</style>