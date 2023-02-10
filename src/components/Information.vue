<template>
  <div>
  <div class="info">
    <h1 class="title">个人信息</h1>
    <div class="common">姓名：<span class="name">张三</span></div>
    <div class="common">QQ：<span class="qq">1111111111</span></div>
    <div class="common">手机号：<span class="tel">11111111111</span></div>
    <div class="common">选择方向：<span class="direction">web</span></div>
    <div class="apply">已报名</div>
  </div>
  <a class="state">查看面试状态--></a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info{
  width: 500px;
    background-color: #ffffff;
    height: 348px;
    margin-left: 609px;
    margin-top: 180px;
    box-shadow: 5px 2px 14px 10px #e6e6e6;
}
.common{
  font-size: 22px;
  color: #56484a;
  padding: 19px;
}
.title{
  color: #56484a;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #c8c0c0;
}

.apply{
  color: aquamarine;
    margin-left: 414px;
    margin-top: -23px;
    font-weight: bolder;
    font-size: 22px;
}
.state{
  text-decoration: none;
    font-weight: bolder;
    font-size: x-large;
    position: absolute;
    right: 86px;
    top: 553px;
}
</style>