<style scoped lang="less">
.bg {
    width: 100%;
    height: 300px;
    background: url(../images/bg.png) no-repeat;
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

.main {
    width: 1000px;
    margin: 0 auto;
    .subnav {
        float: left;
        margin-top: 20px;
        .subnav-column,
        .subnav-label {
            background: #fff;
            border-radius: 5px;
            margin-bottom: 15px;
            border: 1px solid #dededf;
            width: 250px;
        }
        ul {
            line-height: 26px;
            border-radius: 0 0 4px 4px;
        }
        h5 {
            padding: 10px 20px 5px;
            border-bottom: 1px solid #eee;
            background: #59bfff;
        }
        li {
            list-style: none;
            border-bottom: 1px dashed #eee;
            margin-left: 15px;
            height: 30px;
            line-height: 30px;
        }
        router-link {
            color: #2c3e50;
        }
    }
    .main-content {
        margin-left: 20px;
        margin-top: 20px;
        float: left;
        .main-content-title {
            background: #fff;
            border-radius: 5px;
            margin-bottom: 15px;
            border: 1px solid #dededf;
            width: 720px;
            height: 50px;
        }
        .main-content-title img {
            float: left;
            width: 30px;
            height: 30px;
            position: relative;
            top: 10px;
            left: 20px;
        }
        h2 {
            line-height: 50px;
            padding-left: 65px;
        }
    }
}

.main-content-blog {
    margin-top: 20px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid #dededf;
    width: 720px;
    height: 160px;

    h3 {
        background: #59bfff;
        color: #0066FF;
        height: 30px;
        line-height: 30px;
        text-indent: 10px;
    }
    h3:hover {
        text-indent: 20px;
    }
    p {
        height: 80px;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 20px;
        line-height: 20px;
    }

    li {
        float: left;
        padding-left: 20px;
    }
    span {
        padding-left: 5px;
    }
}

.add-data {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: fixed;
    background: rgb(89, 191, 255);
    right: 5%;
    top: 400px;
    p {
        padding-left: 28px;
        font-size: 32px;
        cursor: pointer;
        color: #ffffff;
        padding-top: 10px;
    }
    span {
        position: relative;
        top: -16px;
        color: #ffffff;
        left: 18px;
    }
}
</style>
<template>
    <div id="app">
        <div class="bg">
            <div class="portrait">
                <img src="../images/heard.png" alt="">
                <p>55555</p>
            </div>
        </div>
        <!-- 主体 -->
        <div class="main">
            <div class="subnav">
                <div class="subnav-column">
                    <h5>栏目</h5>
                    <li v-for="item in list">
                        <router-link to="/1">{{item.name}}</router-link>
                    </li>

                </div>
                <div class="subnav-label">
                    <h5>标签</h5>
                    <li v-for="item in label">
                        <router-link to="/1">{{item.name}}</router-link>
                    </li>

                </div>
            </div>
            <div class="main-content">
                <div class="main-content-title">
                    <img src="../images/logo.png" alt="">
                    <h2>日记</h2>
                </div>

               
                    <div class="main-content-blog">
                        <div v-model="content">
                            <h3>{{bolg.Title}}</h3>
                            <router-link to="/resources">
                                <p>{{bolg.Content}}</p>
                            </router-link>
                        </div>
                        <div class="main-content-tit">
                            <ul>
                                <li>
                                    <img src="../images/data.png" alt="">
                                    <span> {{bolg.ctime | data }}</span>
                                </li>
                                <li>
                                    <img src="../images/witer.png" alt="">
                                    <router-link to="/personal">作者</router-link>
                                </li>
                                <li>
                                    <img src="../images/read.png" alt="">
                                    <router-link to="/resources">阅读</router-link>
                                </li>
                                <li>
                                    <img src="../images/zan.png" alt="">
                                    <a href="JavaScript:void(0)">
                                        <span @click.once="math += 1"> 赞</span>
                                        <strong>{{math}}</strong>
                                    </a>
                                </li>
                                <li>
                                    <img src="../images/talk.png" alt="">
                                    <router-link to="/resources">评论</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="main-content-blog">
                        <div v-model="content">
                            <h3>{{bolg.Title}}</h3>
                            <router-link to="/resources">
                                <p>{{bolg.Content}}</p>
                            </router-link>
                        </div>
                        <div class="main-content-tit">
                            <ul>
                                <li>
                                    <img src="../images/data.png" alt="">
                                    <span> {{bolg.ctime | data }}</span>
                                </li>
                                <li>
                                    <img src="../images/witer.png" alt="">
                                    <router-link to="/personal">作者</router-link>
                                </li>
                                <li>
                                    <img src="../images/read.png" alt="">
                                    <router-link to="/resources">阅读</router-link>
                                </li>
                                <li>
                                    <img src="../images/zan.png" alt="">
                                    <a href="JavaScript:void(0)">
                                        <span @click.once="math += 1"> 赞</span>
                                        <strong>{{math}}</strong>
                                    </a>
                                </li>
                                <li>
                                    <img src="../images/talk.png" alt="">
                                    <router-link to="/resources">评论</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                
            </div>
        </div>

        <!-- 新增日记 -->
        <div class="add-data">
            <router-link to="/md">
                <p>+</p>
            </router-link>
            <span>新增日记</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bolg: 
                {
                    Title: 'ppppp',
                    Content: '11级联样式表（Cascading Style Sheet）简称“CSS”，通常又称为“风格样式表（Style Sheet）”，它是用来进行网页风格设计的。比如，如果想让链接字未点击时是蓝色的，当鼠标移上去后字变成红色的且有下划线，这就是一种风格。通过设立样式表，可以统一地控制HTML中各标志的显示属性。级联样式表可以使人更能有效地控制网页外观。使用级联样式表，可以扩充精确指定网页元素位置，外观以及创建特殊效果的能力',
                    ctime: new Date(),
                    id:0
                },
               
            math: 0,
            list: [
                { name: '栏目一' },
                { name: '栏目二' },
                { name: '栏目三' },
                { name: '栏目四' },
            ],
            label: [
                { name: '标签一' },
                { name: '标签二' },
                { name: '标签三' },
                { name: '标签四' },
            ]
        }
    },
    computed: {
        content: function() {
            this.$store.dispatch('update_bolg', this.bolg);
        }
    },
    filters: {
        data: function(input) {
            var d = new Date(input);
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
            return year + '-' + month + '-' + day
        }
    },



    // methods: {
    //     testGet() {
    //         this.$$api_value_get({}, (resp) => {
    //             console.log(resp)
    //         })
    //     },
    //     testPost() {
    //         this.$$api_value_update({ id: 4 }, (resp) => {
    //             console.log(resp)
    //         })
    //     },
    //     testPut() {
    //         this.$$http('get', 'http://192.168.0.120:8345/api/user/2', {}, (resp) => {
    //             console.log(resp)
    //         }, {
    //                 param: { id: 2 }
    //             });
    //         this.$$http('get', 'http://192.168.0.120:8345/api/user/2', {}, (resp) => {
    //             console.log(resp)
    //         }, {
    //                 param: { id: 2 }
    //             });
    //     },
    //     testDelete() {

    //     }
    // }
}
</script>