<template>
    <div>
        <div class="title">{{title}}</div>
        <div class="content">
            <div class="data content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        components: {}
    };
</script>

<style scoped>
    .content {
        padding: 5px;
    }

    .data {
        background-color: #fff;
        border-radius: 5px;
    }

    .title {
        padding-left: 5px;
        padding-top: 5px;
    }
</style>