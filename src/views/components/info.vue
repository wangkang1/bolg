<template>
    <div class="info">
        <img src="../../images/bg.png" alt="" style="width:100% ">
        <div class="portrait clearfix">
            <img src="../../images/heard.png" alt="">
            <div class="portrait-info">
                <div class="portrait-info-cont">
                    <h2>博客人</h2>
                    <router-link to="./personal">返回到个人信息页</router-link>
                </div>
                <div class="portrait-info-cont">
                    <h3>性别:</h3>
                    <input type="radio" id="one" value="男" v-model="info.sex">
                    <label for="one">男</label>
                    <input type="radio" id="two" value="女" v-model="info.sex">
                    <label for="two">女</label>
                   &nbsp;&nbsp;&nbsp; <span> {{ info.sex }}</span>
                </div>
                <div class="portrait-info-cont">
                    <h3>昵称:</h3>
                    <input type="text" v-model="info.nickname" :maxlength="6">
                </div>
                <div class="portrait-info-cont">
                    <h3>邮箱:</h3>
                    <input type="text" v-model="info.mail" :maxlength="20">
                </div>
                <div class="portrait-info-cont">
                    <h3>居住地:</h3>
                    <input type="text" v-model="info.address" :maxlength="10">
                </div>
                <div class="portrait-info-cont">
                    <h3>所在行业:</h3>
                    <input type="text" v-model="info.job" :maxlength="10">
                </div>
                <div class="portrait-info-cont">
                    <h3>一句话介绍：</h3>
                    <input type="text" v-model="info.brief" :maxlength="20">
                </div>
            </div>
            <div class="submit-info">
                <button type="submit" @click="save()"> 提交修改信息</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info: {
                sex: "",
                nickname: "栗栗栗栗",
                mail: '9040@qq.com',
                address: "中国",
                job: "前端",
                brief: '前端路漫漫',
            },
        }
    },
    methods: {
        save() {
            alert("修改信息成功");
            this.$store.dispatch('update_info', this.info);
        }

    }
}
</script>
<style scoped lang="less">
.clearfix:after {
    display: block;
    height: 0;
    clear: both;
    content: ""
}

.portrait {
    width: 1000px;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #dededf;
    box-sizing: border-box;
    padding: 20px;

    img {
        background: #262626;
        border-radius: 5px;
        float: left;
    }
    .portrait-info {
        margin-left: 20px;
        float: left;
        width: 800px;
    }
    .portrait-info-cont {
        padding: 30px 0;
        border-bottom: 1px solid #ebeef5;
        a {
            float: right;
            font-size: 16px;
        }
        h3 {
            display: inline-block;
            width: 160px;
        }
        input {
            border: none;
            outline: none;
        }
    }
    .submit-info {
        text-align: center;
        button {
            background: #0099FF;
            border: none;
            padding: 5px;
            color: #fff;
            position: relative;
            top: 10px;
            cursor: pointer;
        }
    }
}
</style>
