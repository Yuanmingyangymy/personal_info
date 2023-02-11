<template>
  <div>
  <div class="info">
    <h1 class="title">个人信息</h1>
    <div class="common">姓名：<span class="name">张三</span></div>
    <div class="common">QQ：<span class="qq">1111111111</span></div>
    <div class="common">手机号：<span class="tel">11111111111</span></div>
    <div class="common">选择方向：<span class="direction">web</span></div>
    <div class="apply">
      <img class="succeed" src="../assets/成功.png" alt="报名成功">
      已报名
    </div>
  </div>
  <!-- <div><img class="arrows" src="../assets/箭头.gif"></div> -->
  <a class="state">
    <img class="arrows" src="../assets/箭头.png" alt="查看面试状态">
    面试状态</a>
  </div>
</template>

<script>

export default {
  name: 'Information'
}
</script>

<style scoped>
.info{
  width: 500px;
    background-color: #3e3d3d;
    height: 348px;
    margin-left: 609px;
    margin-top: 180px;
    /* box-shadow: 5px 2px 14px 10px #e6e6e6; */
    border-radius: 20px;
    border:8px solid #3e3d3d;
    box-shadow: -5px -5px 15px rgba(255,255, 255, 0.1),
    5px 5px 15px rgba(0,0,0,0.35),
    inset -5px -5px 15px rgba(255,255, 255, 0.1),
    inset 5px 5px 15px rgba(0,0,0,0.35);
}
.common{
  font-size: 22px;
  color: #c6a8ad;
  padding: 19px;
      text-align: center;
    text-shadow: 2px 1px 4px rgb(3 4 4);
}
.title{
  color: #9ea4c2;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #c8c0c0;
    text-shadow: 7px 0 5px #485966, 0 0 10px #413250, 0 0 15px #070806, 0 0 20px #929090;
}
.apply{
  color: #00958b;
    margin-left: 414px;
    margin-top: -28px;
    font-weight: bolder;
    font-size: 22px;
    text-shadow: 0 0 5px #181818, 0 0 5px #e0f2f1, 0 0 15px #070806, 0 0 20px #929292;
}
.state{
  text-decoration: none;
  text-shadow: 7px 0 5px #485966, 0 0 10px #413250, 0 0 15px #070806, 0 0 20px #929090;
    font-weight: bolder;
    font-size: x-large;
    position: absolute;
    right: 86px;
    top: 544px;
    color:rgb(139 138 179);
    animation: jumpBoxHandler 1.8s infinite;/* 1.8s 事件完成时间周期 infinite无限循环 */
}
.arrows{
  margin-left: -356px;
    width: 200px;
    height: 200px;
    margin-top: -96px;
}
.succeed{
  margin-left: 819px;
    margin-top: 480px;
    width: 30px;
    height: 30px;
}
.jumpBox img{
  animation: jumpBoxHandler 1.8s infinite;/* 1.8s 事件完成时间周期 infinite无限循环 */
}

@keyframes jumpBoxHandler { /* css事件 */
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, 30px); /* 可配置跳动方向 */
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>