<template>
    <el-container>
        <el-main>
                <div style="padding-top: 120px;">
                    <el-row type="flex" justify="space-around" align="middle" :gutter="20">
                        <el-col :span="6">
                            <el-image :src = "getImageUrl('city')" style = "transform: translateX(-100px)"></el-image>
                            <el-image :src = "getImageUrl('classroom')" style = "transform: translateX(100px)"></el-image>
                        </el-col>
                        <el-col :span="8" :offset="0">
                            <loader></loader>
                        </el-col>
                    </el-row>

                </div>
        </el-main>
        <el-footer>
            <div style="text-align: center;padding-top: 5%;">
                <el-row :gutter="20">
                    <el-col :span="8" :offset="8">
                        <i>@QQ:1456225949@qq.com</i>
                    </el-col>
                </el-row>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
    import Loader from '@/components/page/load/Loader.vue';
    import { ref } from 'vue';
    export default {
        name: "index",
        components: { Loader },
        setup() {
            const width = ref("500px")
            const height = ref("450px")
            const getImageUrl = (name) => {
                return new URL(`/src/assets/${name}.png`, import.meta.url).href
            }
            return {
                width,
                height,
                getImageUrl
            }
        }

    }
</script>

<style scoped>
i{
    opacity: 0.5;
    font-size: 12px
}
</style>