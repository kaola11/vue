<template>
  <div class="container">
    <div class="detailCon">
    	<div class="detailImg"><img :src="lists.imageUrl"/></div>
    	<p>{{lists.productName}}</p>
    	<p>￥{{lists.marketPrice}}</p>
    	<p>￥{{lists.price}} <span>{{lists.discount}}折</span></p>
    	<p>品牌直接发货预计2018年02月01日发货</p>
    	<p>尺码：L</p>
    ss
    </div>
  </div>
  
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>