<template>
    <section class="intro">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8 offset-md-2">
                    <h2>{{ introTitle }}</h2>
                    {{ introText }}
                </div>
            </div>
            
        </div>
    </section>
</template>

<style scoped>
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .intro {
        padding: 80px 0;
    }
</style>

<script>
export default {
    data() {
        return { 
            introTitle: 'Hallo met Frank',
            introText: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
            headerImage: 'https://source.unsplash.com/800x600/?snow',
            headerImageAlt: 'Alt tekst',
        };
    },
    
    
};
</script>