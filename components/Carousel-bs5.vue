<template>
    <section class="carousel-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                v-bind:aria-label="item.title"
                                v-for="(item, index) in items" :key="index" :class="{ 'active': index === 0 }"
                                v-bind:aria-current="index === 0"
                                v-bind:data-bs-slide-to="index"
                            ></button>
                        </div>

                        <div class="carousel-inner">
                            <div class="carousel-item" v-for="(item, index) in items" :key="index" :class="{ 'active': index === 0 }">
                                <img v-bind:src="item.image" class="d-block w-100" v-bind:alt="item.imageAlt" width="1920" height="500" />
                            </div>
                        </div>

                        <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>

                        <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { 
                    title: 'Slide 1',
                    image: 'https://vue-nuxt.preview.themindoffice.nl/files/Screenshot-2022-01-06-at-09_25_57.webp',
                    imageAlt: 'Hallo?'
                },
                { 
                    title: 'Slide 2',
                    image: 'https://vue-nuxt.preview.themindoffice.nl/files/Screenshot-2022-01-06-at-09_25_57.webp',
                    imageAlt: 'Hey there!?'
                },
                { 
                    title: 'Slide 3',
                    image: 'https://vue-nuxt.preview.themindoffice.nl/files/Screenshot-2022-01-06-at-09_25_57.webp',
                    imageAlt: 'Gimme sun?'
                },
            ]
        }
    }
}
</script>