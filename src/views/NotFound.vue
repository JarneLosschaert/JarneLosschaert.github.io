<template>
    <div id="not-found-page">
        <section id="not-found">
            <img src="../assets/images/zombie.png" alt="zombie" v-motion-pop :duration="10000">
            <div>
                <h1><span>Oops!</span> Page not Found.</h1>
                <p>Run away while you still can!!!</p>
                <button>
                    <p>Back to home</p>
                    <SvgIcon name="home" />
                </button>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/shared/Footer.vue';
import SvgIcon from '../components/shared/SvgIcon.vue';

export default {
    components: {
        SvgIcon,
        Footer
    }
};
</script>

<style scoped>
#not-found-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
}

#not-found {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
}

#not-found div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
}

h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

div>p {
    font-size: 1.5rem;
}

img {
    height: 65vh;
}

@media (max-width: 1050px) {
    img {
        height: 50vh;
    }

    h1 {
        font-size: 2rem;
    }

    div>p {
        font-size: 1.25rem;
    }
}

@media (max-width: 650px) {
    img {
        height: 35vh;
    }

    h1 {
        font-size: 1.75rem;
    }

    div>p {
        font-size: 1rem;
    }
}

@media (max-width: 500px) {
    #not-found {
        flex-direction: column;
    }

    img {
        height: 40vh;
    }
}

</style>