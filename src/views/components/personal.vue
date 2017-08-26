<template>
    <div class="personal">
        <div class="bg">
            <div class="portrait">
                <img src="../../images/heard.png" alt="">
                <p></p>
            </div>
    
        </div>
        <div class="perdonal-content clearfix">
            <div class="personal-nav">
                <div class="perdonal-head">
                    <h2>{{personal.author}}</h2>
                    <img src="../../images/heard.png" alt="">
                    <br>
                    <router-link to="/">日记</router-link>
                    <router-link to="/md">新增日记</router-link>
                </div>
                <div class="perdonal-info">
                    <h2>个人信息</h2>
                    <p>昵称: {{count.nickname}}</p>
                    <p>性别：{{count.sex}}</p>
                    <p>邮箱：{{count.mail}}</p>
                    <router-link to="/info">查看更多</router-link>
                </div>
            </div>
            <bolg></bolg>
            <bolg></bolg>
            <bolg></bolg>
        </div>
    </div>
</template>
<script>
import bolg from './bolg'
export default {
    components: {
        bolg
    },
    data() {
        return {
            personal: {
                author: '博客人',
                Content: '级联样式表（Cascading Style Sheet）简称“CSS”，通常又称为“风格样式表（Style Sheet）”，它是用来进行网页风格设计的。比如，如果想让链接字未点击时是蓝色的，当鼠标移上去后字变成红色的且有下划线，这就是一种风格。通过设立样式表，可以统一地控制HTML中各标志的显示属性。级联样式表可以使人更能有效地控制网页外观。使用级联样式表，可以扩充精确指定网页元素位置，外观以及创建特殊效果的能力',
            },   
        }
    },
    methods: {


    },
    computed: {
        count() {
            return  this.$store.getters.getInfo;
        }
    },
}
</script>
<style scoped lang="less">
.clearfix:after {
    clear: both;
    display: block;
    content: "";
    overflow: hidden;
}

.bg {
    width: 100%;
    height: 300px;
    background: url(../../images/bg.png) no-repeat;
    position: relative;
    margin-bottom: 20px;
    .portrait {
        position: absolute;
        left: 50%;
        top: 100px;
        p {
            font-size: 24px;
            color: #fff;
            text-indent: 24px;
            line-height: 40px
        }
    }
}

.perdonal-content {
    width: 1000px;
    margin: 0 auto;
    .personal-nav {
        float: left;
        margin-right: 10px;
        .perdonal-head {
            width: 250px;
            background: #fff;
            border-radius: 5px;
            margin-bottom: 15px;
            border: 1px solid #dededf;

            h2 {
                border-bottom: 1px solid #dededf;
                padding: 10px;
            }
            img {
                display: block;
                margin: 10px 60px;
            }
            a {
                margin-left: 60px;
                line-height: 30px;
            }
        }
        .perdonal-info {
            width: 250px;
            background: #fff;
            border-radius: 5px;
            margin-bottom: 15px;
            border: 1px solid #dededf;
            h2 {
                border-bottom: 1px solid #dededf;
                padding: 10px;
            }
            p {
                line-height: 40px;
                padding-left: 20px;
                border-bottom: 1px #dededf dashed;
            }
            a {
                text-align: center;
                display: block;
                height: 30px;
                line-height: 30px;
            }
        }
    }
    .main-content-blog {
        float: left;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 15px;
        border: 1px solid #dededf;
        width: 720px;
    }
}
</style>
