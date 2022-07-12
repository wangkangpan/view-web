<template>
    <div class = "loader">
            <el-form class = "loader-form" size="default">
                <el-form-item>
                    <el-input v-model = "userName"  maxlength="10" rows = "4"
                    type = "text" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model = "password" maxlength="10" rows = "4"
                        type = "password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col>
                            <el-button :round = "true">登录</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col>
                            <el-button :round = "true">注册</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-link type="warning">忘记密码,去重置</el-link>
            </el-form>

    </div>
</template>

<script>
    import { ref } from 'vue'

    export default {
        name : 'Loader',
        props: {
            size: String
        },
        setup(size) {
            const userName = ref('')
            const password = ref('')
            return {
                account : userName,
                password : password,
                size: size
            }
        },
    }
</script>
<!-- scoped样式私有化-->
<style scoped>
    .loader{
        width: 300px;
        height: 400px;
        background-color: #ffffff;
    }
    /*样式覆盖*/
    /*> =>s 选择父元素的所有子元素*/
    .el-col > .el-button{
        width: 100%
    }
</style>