<template>
    <div class="main-content-blog" >
        <div v-model="content">
        <h3>{{bolg.Title}}</h3>
        <router-link to="/resources"  >
            <p>{{bolg.Content}}</p>
        </router-link>
        </div>
        <div class="main-content-tit" >
            <ul>
                <li>
                    <img src="../../images/data.png" alt="">
                    <span> {{bolg.ctime | data }}</span>
                </li>
                <li>
                    <img src="../../images/witer.png" alt="">
                    <router-link to="/personal">作者</router-link>
                </li>
                <li>
                    <img src="../../images/read.png" alt="">
                    <router-link to="/resources">阅读</router-link>
                </li>
                <li>
                    <img src="../../images/zan.png" alt="">
                    <a href="JavaScript:void(0)">
                        <span @click.once="math += 1"> 赞</span>
                        <strong>{{math}}</strong>
                    </a>
                </li>
                <li>
                    <img src="../../images/talk.png" alt="">
                    <router-link to="/resources">评论</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bolg: {
                Title: 'jscript',
                ctime: new Date(),
                Content: '级联样式表（Cascading Style Sheet）简称“CSS”，通常又称为“风格样式表（Style Sheet）”，它是用来进行网页风格设计的。比如，如果想让链接字未点击时是蓝色的，当鼠标移上去后字变成红色的且有下划线，这就是一种风格。通过设立样式表，可以统一地控制HTML中各标志的显示属性。级联样式表可以使人更能有效地控制网页外观。使用级联样式表，可以扩充精确指定网页元素位置，外观以及创建特殊效果的能力.，当鼠标移上去后字变成红色的且有下划线，这就是一种风格。通过设立样式表，可以统一地控制HTML中各标志的显示属性。级联样式表可以使人更能有效地控制网页外观。',
            },
            math: 0,
             
           
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
   computed : {
        content: function () {
            this.$store.dispatch('update_bolg', this.bolg);
        }
    },

}
</script>
<style  lang="less">
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
</style>
