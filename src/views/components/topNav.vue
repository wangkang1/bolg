<template>
    <div class="topnav">
        <div class="heard-content">
            <img src="../../images/logo.png" alt="">
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/resources">资源</router-link>
                </li>
                <li>
                    <router-link to="/md">代码片段</router-link>
                </li>
                <li>
                    <router-link to="/personal">个人中心</router-link>
                </li>
                <li>
                    <router-link to="/account/login">登录</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'topnav',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="less">
.topnav {
    height: 60px;
    border-top: 1px solid #59bfff;
    background: hsla(0, 0%, 100%, .9);
    box-shadow: 0 0 10px #ccc;
}

.heard-content {
    width: 1000px;
    margin: 0 auto;
}

.heard-content ul {
    float: right;
}

.heard-content ul li {
    float: left;
    line-height: 60px;
    width: 60px;
    text-align: center;
}

.heard-content ul li:hover {
    background: #59bfff;
}
</style>

