<template>
  <div id="app">
    <img alt="3G logo" src="./assets/logo.png">
    <!-- <PersonalInfo/> -->
    <Information/>
  </div>
</template>

<script>
  import axios from "axios"
  import PersonalInfo from './components/PersonalInfo'
  import Information from './components/Information'
  export default {
    name: 'App',
    components: {
      PersonalInfo,
      Information
    }
  }
</script>


<style>
 
   /* base */
   * {
      margin: 0;
      padding: 0;
      /*标准盒子 */
      box-sizing: border-box;
  }
  body {
    background-color: #3e3d3d;
  }
   img {
    position: absolute;
    left: 180px;
    top: 10px;
  }
  .box {
      width: 400px;
      height: 500px;
      position: relative;
      left: 650px;
      top: 180px;
      padding: 15px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),0 10px 10px rgba(0, 0, 0, 0.22);
      text-align: center;
  }
  input{
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
  button {
      padding: 0.4rem 1rem;
      background: #417dff;
      color: white;
      border: 1px solid #fff;
      outline: none;
      /* 鼠标放上变小手 */
      cursor: pointer;
      width: 50px;
      border-radius: 10px;
      transition: all 30ms ease-in;
      margin: 20px 0;
      font-size: 14px;
      padding: 8px 0;
  }
  /* 被选中时候缩小 */
  button:active{
      transform: scale(0.95,0.95);
  }
  a {
      display: block;
      font-size: 12px;
      cursor: pointer;
      color: rgb(0, 195, 255);
      margin-bottom: 8px;
  }
  a:hover {
      text-decoration: underline;
  }
</style>
