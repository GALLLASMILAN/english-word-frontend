<template>
    <div>
        <Menu />
        <AlertList />
        <div class="container mt-5">
            <nuxt :foobar="123" />
        </div>
    </div>
</template>

<script>
import Menu from '../components/common/menu';
import AlertList from '../components/common/alertList';
export default {
    components: {Menu, AlertList},
}
</script>


<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

@media screen {
    body:before {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 1002003004005;
        padding: 0.25rem 0.5rem;
        font-weight: bold;
        font-size: 12px;
        line-height: 1;
        font-family: monospace;
        text-transform: uppercase;
        color: #fff;
        background: rgba(255, 0, 255, 0.8);
        content: "xs 0";
    }
}

@media screen and (min-width: 576px) {
    body:before {
        content: "sm 576px";
    }
}

@media screen and (min-width: 768px) {
    body:before {
        content: "md 768px";
    }
}

@media screen and (min-width: 992px) {
    body:before {
        content: "lg 992px";
    }
}

@media screen and (min-width: 1200px) {
    body:before {
        content: "xl 1200px";
    }
}
</style>
