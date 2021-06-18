<template>
    <div class="tabbar" v-show="showTabbar">
        <div class="itemwrap" @click="clickP(item)" v-for="(item,index) in tabList" :key="index"
             :class="{active:isActive(item)}">
            <!--二级菜单-->
            <div v-show="item.showSub" class="second">
                <div v-for="(subitem,ind) in item.subitem" :key="ind"
                     @click.stop="clickS(subitem.path)">{{subitem.name}}
                </div>
            </div>
            <!--一级菜单-->
            <div class="first">
                <div v-show="!isActive(item)" class="tabbar-img">
                    <img :src="item.icon"/>
                </div>
                <div v-show="isActive(item)" class="tabbar-img">
                    <img :src="item.activeIcon"/>
                </div>
                <span>{{item.name}}</span>
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
            tabList: {
                type: Array,
                default() {
                    return []
                }
            },
            showTabList: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        created() {
            this.$bus.$on('hideSubitem', this.hideSubitem)
        },
        computed: {
            showTabbar() {
                for (let path of this.showTabList) {
                    if (path === this.$route.path) {
                        return true
                    }
                }
                return false
            }
        },
        methods: {
            clickP(item) {//点击一级菜单
                this.hideSubitem();
                if (item.subitem) {//有二级菜单时走这里
                    item.showSub = true
                } else {
                    if (item.path !== this.$route.path) {
                        this.$router.push(item.path)
                    }
                }
            },
            clickS(path) {//点击二级菜单
                this.hideSubitem();
                if (path !== this.$route.path) {
                    this.$router.push(path)
                }
            },
            hideSubitem() {//隐藏二级菜单
                this.tabList.forEach(item => {
                    item.showSub = false
                })
            },
            isActive(item) {
                if (item.path) {
                    return item.path === this.$route.path
                } else {
                    for (let sub of item.subitem) {
                        if (sub.path === this.$route.path) {
                            return true
                        }
                    }
                    return false
                }
            },
        }
    };
</script>

<style scoped>
    .tabbar {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background: #ffffff;
        bottom: 0px;
        left: 0px;
        box-shadow: 0 -.2px 5px rgba(0, 0, 0, .2);
    }

    .itemwrap {
        flex: 1;
        text-align: center;
        color: #666666;
        height: 60px;
        font-size: 14px;
        position: relative;
    }

    .first {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        left: 50%;
        width: 100%;
    }

    .first > span {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
    }

    .second {
        position: absolute;
        background-color: #fff;
        margin-left: 5%;
        color: black;
        width: 90%;
        bottom: 60px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        border-left: 1px solid rgba(0, 0, 0, .2);
        border-top: 1px solid rgba(0, 0, 0, .2);
        border-right: 1px solid rgba(0, 0, 0, .2);
    }

    .second > div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .active {
        color: #0086E1;
    }

    .tabbar-img {
        width: 30px;
        height: 30px;
        margin: 0 auto;
    }

    .tabbar-img img {
        width: 100%;
        height: 100%;
        vertical-align: top;
    }
</style>