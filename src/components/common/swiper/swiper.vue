<template>
    <div class="content">
        <ul class="clearFix pic">
            <li class="pic" v-for="(item,index) in imgList" :key="index">
                <img class="pic" :src="item.url" alt="图片加载失败"/>
            </li>
        </ul>
        <!--小圆点-->
        <div id="cir">
            <ul class="clearFix">
                <li v-for="(item,index) in imgList" :key="index"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        props: {
            imgList: {
                type: Array,
                default() {
                    return [{url: '/api/defaultUpload/upload/wx/20210122/5e5c2adc4ae5.jpg'}, {url: '/api/defaultUpload/upload/wx/20210126/eb7eef364f83.png'}];
                }
            }
        }
    };
</script>

<style scoped>
    .content {
        position: relative;
        overflow: hidden;
        height: 200px;
    }

    .content > ul {

    }

    .content > ul > li {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        /* 使用 transform:translaX(300%) 暂时将 li 移动到屏幕外面去*/
        -webkit-transform: translateX(300%);
        transform: translateX(300%);
    }

    /*小圆点*/
    #cir {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
    }

    #cir > ul > li {
        float: left;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin-left: 6px;
        border: 1px solid black;
    }

    #cir > ul .active {
        background-color: palevioletred;
    }

    #cir > ul > li:first-child {
        margin-left: 0;
    }

    /**固定CSS*/
    .pic {
        width: 100%;
        height: 100%;
        border: none;
    }

    .clearFix:after {
        content: "";
        clear: both;
        height: 0;
        display: block;
        visibility: hidden;
    }
</style>