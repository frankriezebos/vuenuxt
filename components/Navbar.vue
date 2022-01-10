<template>
    <div class="navbar" key="navbar">
        <div class="container">
            <div class="row w-100 align-items-center">
                <div class="col-9 col-md-5">
                    <NuxtLogo />
                </div>

                <div class="col-7 d-none d-md-flex justify-content-md-end">
                    <ul class="nav align-items-center">
                        <NuxtLink class="nav-link" to="/">Home page</NuxtLink>
                        <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                        
                    </ul>
                </div>

                <div class="col-3 d-flex d-md-none justify-content-end">
                    <button class="nav-link" v-b-toggle.sidebar-1>
                      <font-awesome-icon :icon="['fas', 'fa-bars']" class="hamburger-icon" />
                    </button>
                  </div>
            </div>
        </div>
    </div>
</template>

<style>
.navbar {
  background: rgb(31, 168, 134);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.nav-link {
  color: white;
  transition: all 200ms;
}
.nav-link:hover {
  color: #3ddc82;
}
</style>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          link: "/about",
          text: "Learn Vue",
          target: "_blank",
        },
        {
          link: "components.html",
          text: "Componenten",
        },
        {
          link: "https://nuxtjs.org/",
          text: "Learn Nuxt",
          target: "_blank",
        },
      ],
    };
  },
};
</script>