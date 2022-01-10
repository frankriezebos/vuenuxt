<template>
    <header class="hero">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6">
                </div>

                <div class="col-12 col-md-6 header-image-wrap">
                    <img v-for="test in testing" v-bind:src="test.image" :key="test.id" v-bind:alt="headerImageAlt" class="header-image" />
                </div>
            </div>
        </div>

        <div class="container">
            <div class="header-content">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h1>{{ headerTitle }}</h1>
                        <p>{{ headerText }}</p>

                       

                        <ul>
                            <li v-for="test in testing" :key="test.id">
                                {{ test.name }}
                            </li>
                        </ul>

                        <!-- <pre>
                        {{ testing }}
                        </pre> -->

                        
                    </div>
                </div>
            </div>
        </div>

        
    </header>

    
</template>

<style scoped>
    .hero {
        overflow: hidden;
    }
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .header-image-wrap,
    .header-image {
        height: 500px;
    }
    .header-content {
        transform: translateY(-50%);
        margin-top: calc(-500px / 2);
    }
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return { 
            headerTitle: 'Vue & Nuxt & Iris is cool',
            headerText: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            headerImage: 'https://source.unsplash.com/800x600/?snow',
            headerImageAlt: 'Alt tekst',
            testing: null,
            test: null
        };
    },
    mounted() {
        axios
        .post('https://vue-nuxt.preview.themindoffice.nl/data', {
            limit: 5
        })
        .then(response => (
            this.testing = response.data),
        )
        .then(function (response) {
            console.table(response.data)
        })
    }
};



// axios.get('https://vue-nuxt.preview.themindoffice.nl/')
//   .then(function (response) {
//     console.log(response.data);
//     this.teamMember = (response.data[0].name);
//     // console.log(response.status);
//     // console.log(response.statusText);
//     // console.log(response.headers);
//     // console.log(response.config);
// });
</script>