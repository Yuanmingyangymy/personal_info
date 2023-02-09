<template>
  <div class="box">
        <form action="#" id="login" enctype="application/x-www-form-urlencoded">
            <h2>报名</h2>
            <input type="text" placeholder="姓名" id="username">
            <input type="text" placeholder="电话号码" id="tel">
            <input type="text" placeholder="QQ号" id="qq">
            <button>OK</button>
            <a id="a2">If you don't already have an account, click here to register</a>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'PersonalInfo'
    }
</script>