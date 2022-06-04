<template>
    <div>
        666
        <form>
            <el-input id = "account" placeholder="请输入账号"></el-input>
            <el-input id = "password" placeholder="请输入密码"></el-input>
        </form>
    </div>
</template>

<script>
    import { ElInput } from 'element-plus'

    export default {
        name : 'Loader',
        components: {
            ElInput
        }
    }

</script>
<!-- scoped样式私有化-->
<style scoped>

</style>