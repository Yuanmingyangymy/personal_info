<template>
  <div class="box">
        <form action="#" id="login" :model="form" enctype="application/x-www-form-urlencoded">
            <h2>报名</h2>
            <input type="text" placeholder="姓名" id="username" v-model.trim="form.name">
            <input type="text" placeholder="电话号码" id="tel" v-model.trim="form.tel">
            <input type="text" placeholder="QQ号" id="qq" v-model.trim="form.qq">
            <input type="text" placeholder="所在的专业班级：（例如：软工XXXX）" id="class" v-model.trim="form.class">
            <!-- <input type="text" placeholder="选择方向：IOS/Web/Android/Serve/暂时不定" id="direction" v-model.trim="form.dir"> -->
            <select name="art-cate" v-model="form.dir">
                <option disabled selected style="display: block;">请选择您的方向</option>
                <option v-for="(item,index) in form.arr " 
                        :key="index" 
                        :value="item.name">{{item.name}}</option>
            </select>
            <button @click="register">OK</button>
        </form>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'Register',
        data() {
            return {
                form: {
                name: '',
                tel: '',
                qq: '',
                class: '',
                arr: [{name:"IOS"},{name:"Web"},{name:"Android"},{name:"Serve"},{name:"暂时不定"}],
                dir: '请选择您的方向',
                },
                isnull: false
            }
        },
        methods: {
            register() {
                if(this.form.name == '') {
                this.$message.error('姓名不能为空')
                } else if(this.form.tel == '') {
                this.$message.error('电话号码不能为空')
                } else if(this.form.qq == '') {
                this.$message.error('qq号不能为空')
                } else if(this.form.dir == '请选择您的方向') {
                this.$message.error('请选择一个方向')
                } else {
                axios.post('http://127.0.0.1/register', this.form)
                .then(res => {
                    // 此处逻辑：注册成功跳转至登录页面
                    if(res.data.status == 200) {
                    this.$alert('跳转至登录页面', '报名成功', {
                        confirmButtonText: '确定',
                        callback: action => {
                        this.$router.push('/login')
                        }
                    })
                    }else if(res.data.status == 202) {
                    this.$alert('电话号码已存在', '报名失败', {
                        confirmButtonText: '确定',
                        callback: action => {
                        this.form.name = '',
                        this.form.tel = '',
                        this.form.qq = ''
                        }
                    })
                    }else {
                    console.log(res.message);
                    }
                }).catch(err => {
                    console.log('操作失败' + err);
                })
                }
            }
        },
    }
</script>

<style>
    select {
        width: 100%;
        height: 48px;
        text-indent: 12px;
        border: 1px solid #ccc;
        /* 把input上左右边框取消 */
        border-left: none;
        border-right: none;
        border-top: none;
        /* 点击input边框消失 */
        outline: none;
        margin: 12px 0;
        font-size: 16px;
    }
</style>