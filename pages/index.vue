<template>
    <div>
        <Hero />
        <Intro />
        <Cards />
        <Carousel />
    </div>
</template>

<script>
export default {
    name: "IndexPage",
    head: {
        title: "Home",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "my website description",
            },
        ],
    },
};
</script>
