<template>
    <section class="pricing-tables">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4" v-for="(test, index) in testing" :key="index">
                    <div class="card">
                        <img v-bind:src="test.image" v-bind:alt="test.name" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ test.name }}</h5>
                            <p class="card-text">{{ test.designation }}</p>
                        </div>

                        <!-- <ul class="list-group list-group-flush" v-for="(feature, index) in item.features" :key="index">
                            <li class="list-group-item">{{ feature.title }}</li>
                        </ul> -->

                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            testing: null,
            items: [
                { 
                    title: 'Dimar is cool',
                    description: 'Lorem ipsum dolor amet',
                    image: 'https://source.unsplash.com/800x600/?coding',
                    imageAlt: 'Alt tekst',
                    features: [
                        { 
                            title: 'Feature 1'
                        },
                        { 
                            title: 'Feature 2'
                        },
                        { 
                            title: 'Feature 3'
                        },
                    ],
                },
                { 
                    title: 'Martijn is cool',
                    description: 'Lorem ipsum dolor amet',
                    image: 'https://source.unsplash.com/800x600/?coding',
                    imageAlt: 'Alt tekst',
                    
                }
            ]
        }
    },
    mounted() {
        axios
        .post('https://vue-nuxt.preview.themindoffice.nl/home', {
            limit: 5
        })
        .then(response => (
            this.testing = response.data),
        )
    }
}
</script>

<style scoped>
    .row {
        justify-content: center;
    }
</style>