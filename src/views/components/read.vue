<template>
    <div>
        <div class="resources clearfix ">
            <div class="perdonal-head">
                <h2>作者</h2>
                <img src="../../images/heard.png" alt="">
                <br>
                <a href="JavaScript:void(0)">
                    <strong>{{ counter }}</strong>
                    <span @click.once="counter += 1">收藏</span>
                </a>
                <a href="JavaScript:void(0)">
                    <strong>{{math}}</strong>
                    <span @click.once="math += 1">&nbsp; 赞</span>
                </a>
            </div>

            <div class="content">
                <div class="data">
                    <div class="data-title">
                        <img src="../../images/title.png" alt="">
                        <p>{{ctime | data }}</p>
                    </div>

                </div>
                <div class="diary">
                    <h2>博客人的日记</h2>
                    <p  v-html="counts"></p>
                    <div class="label">
                        <ul>
                            <li>
                                <img src="../../images/witer.png" alt="">
                                <span>vue学习</span>
                            </li>
                            <li>
                                <img src="../../images/read.png" alt="">
                                <span>81</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="talk">
                    <h2>留言板</h2>
                    <div class="talk-content">
                        <p>留言信息</p>
                        <div class="talk-content-body">
                            <ul>
                                <li v-for="msg in msgs">{{ msg.title }}</li>
                            </ul>
                            <button @click="removemsgs" v-show="msgs.length > 0">清空留言</button>
                        </div>
                    </div>
                    <div class="talk-info">
                        <textarea @keyup.enter="addmsg" placeholder="请留言" cols="30" rows="3" v-model="newmsg"></textarea>
                        <p>
                            <button @click="addmsg">发布</button>
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import marked from 'marked';
var STORAGE_KEY = 'bolg'
var msgStorage = {
    fetch: function () {
        var msgs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        msgs.forEach(function (msg, index) {
            msg.id = index
        })
        msgStorage.uid = msgs.length
        return msgs
    },
    save: function (msgs) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs))
    }
}
export default {
    name: 'resources',

    data() {
        return {
            ctime: new Date(),
            counter: 0,
            math: 0,
            msgs: msgStorage.fetch(),
            newmsg: ''
        }

    },

    filters: {
        data: function (input) {
            var d = new Date(input);
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
            return year + '-' + month + '-' + day

        }
    },

    computed: {
        counts() {
             return  marked(this.$store.getters.getMd, { sanitize: true })
        }
    },
    methods: {
        addmsg: function () {
            var value = this.newmsg && this.newmsg.trim()
            if (!value) {
                return
            }
            this.msgs.push({
                id: msgStorage.uid++,
                title: value
            })
            this.newmsg = ''
        },

        removemsgs: function () {
            if(!confirm('是否要删除数据?')){
				return;
			}
            msgStorage.uid = 0;
            return this.msgs = [];
        }, 
    }
}
</script>
<style scoped lang="less">
.clearfix:after {
    clear: both;
    content: "";
    overflow: hidden;
    display: block;
}

.resources {
    width: 1000px;
    margin: 20px auto 0;
    .perdonal-head {
        width: 250px;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 15px;
        border: 1px solid #dededf;
        float: left;
        box-sizing: border-box;
        margin-right: 20px;

        h2 {
            border-bottom: 1px solid #dededf;
            padding: 10px;
        }
        img {
            display: block;
            margin: 10px 60px;
        }
        strong {
            display: block;
            margin-left: 10px;
            font-size: 16px;
        }
        a {
            margin-left: 60px;
            line-height: 30px;
            display: inline-block;
        }
    }
    .content {
        float: left;
        width: 730px;
        box-sizing: border-box;
        .data {
            background: #fff;
            border-radius: 5px;
            margin-bottom: 15px;
            border: 1px solid #dededf;
            height: 45px;
            .data-title {
                padding: 0 0 0 20px;
                width: 300px;
                display: inline-block;
                p {
                    display: inline-block;
                    line-height: 45px;
                    font-size: 26px;
                }
            }
        }
        .diary {
            background: #fff;
            border-radius: 5px 5px 0 0;
            h2 {
                background: #edf8fe;
                color: #59bfff;
                height: 40px;
                text-indent: 30px;
                line-height: 40px;
            }
            p {
                padding: 10px 20px;
                font-size: 16px;
                 word-break:break-all
            }
            .label {
                padding-left: 10px;
                border-top: 1px solid #eeeeee;
                margin-bottom: 20px;
                height: 35px;

                li {
                    float: left;
                    width: 120px;
                    padding-top: 5px;
                    img {
                        vertical-align: middle;
                        padding-right: 4px;
                    }
                    span {
                        font-size: 16px;
                        vertical-align: middle
                    }
                }
            }
        }
        .talk {
            background: #fff;
            border-radius: 5px;
            margin-bottom: 15px;
            border: 1px solid #dededf;
            h2 {
                height: 35px;
                border-bottom: 1px solid #eeeeee;
                line-height: 35px;
                text-indent: 20px;
                font-weight: normal;
            }
            .talk-content {
                background: #fff;
                border-radius: 5px;
                border: 1px solid #dededf;
                width: 688px;
                margin: 15px auto 0;
                p {
                    text-indent: 20px;
                    border-bottom: 1px solid #dededf;
                    background: #edf8fe;
                    color: #0066FF;
                    height: 30px;
                    line-height: 30px;
                }
                .talk-content-body {
                    padding: 20px;
                    li {
                        padding: 10px 15px;
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius: 3px;
                         word-break:break-all;
                    }
                    button {
                        position: relative;
                        text-align: center;
                        top: 10px;
                        background: red;
                        width: 646px;
                        font-size: 14px;
                        font-weight: 400;
                        vertical-align: middle;
                        cursor: pointer;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        background: #d9534f;
                        color: #fff;
                    }
                }
            }
            .talk-info {
                padding: 20px;
                textarea {
                    width: 100%;
                    padding: 6px 12px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 6px 12px;
                    display: block
                }
                P {
                    text-align: right;
                    button {
                        display: inline-block;
                        padding: 6px 12px;
                        margin-top: 10px;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 1.42857143;
                        text-align: center;
                        cursor: pointer;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        color: #fff;
                        background-color: #59bfff;
                        border-color: #46b8da;
                    }
                    button:hover {
                        background: #50ace5;
                    }
                }
            }
        }
    }
}
</style>