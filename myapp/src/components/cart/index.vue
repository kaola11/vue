<template>
  <div class="container">
    <!--<div class="car_header" >
    	<div class="iconfont icon-gouwuche1"></div>
    	<div>购物袋是空的哦~~</div>
    	<a href="#/login">立即登录</a>
    </div>-->
     <table class="table">
        <thead>
            <tr>
                <th>产品编号</th>
                <th>产品名字</th>
                <th>产品图片</th>
                <th>产品单价</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item , index) in message">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td class="img"><img :src="item.img"/></td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="dele(message)">移除</button>
                </td>
            </tr>
            <tr>
                <td>总购买价            
                </td>
                
                <td>总购买数量
                </td>
                <td>

                </td>
                <td colspan="2">
                    <button type="button" class="btn btn-danger" @click="empty(message)">清空购物车</button>
                </td>
            </tr>
        </tbody>
    </table>

    <p v-if="message.length===0">您的购物车为空</p>
    
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>