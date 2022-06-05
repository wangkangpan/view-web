<template>
    <div class = "loader">
            <el-form class = "loader-form" :size="size">
                <el-space wrap>
                    <el-form-item>
                            <el-input id = "account" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item>
                            <el-input id = "password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                            <el-button>登录</el-button>
                    </el-form-item>
                    <el-form-item>
                            <el-button>注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-link type="warning">忘记密码,去重置</el-link>
                    </el-form-item>
                </el-space>
            </el-form>
    </div>
</template>

<script>
    import { ref } from 'vue'
    const size = ref('default')

    export default {
        name : 'Loader',
        size
    }
</script>
<!-- scoped样式私有化-->
<style scoped>
    .loader{
        /*width: 400px;*/
        /*height: 400px;*/
        background-color: #ffffff;
    }
    .loader-form{
        color: #42b983;
    }
</style>