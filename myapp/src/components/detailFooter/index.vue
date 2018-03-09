<template>
  <footer>
    <ul class="detailfooter">
    	<li>
    		
    		<a href="#/cart">
    			<i class="iconfont icon-gouwudaiweikong"></i>
    			<i>购物袋</i>
    		</a>
    	</li>
    	<li @click="cart(listList)">
    		<a href="javaScript:;">
    			<i>加入购物车</i>
    		</a>
    	</li>
    	<li>
    		<a href="">
    			<i>立即购买</i>
    		</a>
    	</li>
    	<!--<router-link v-for="(item,index) in list" :to="item.path" :key="index" tag="li">
    		<i class="iconfont" :class="item.icon"></i>
    		<i>{{item.name}}</i>
    		</router-link>-->
    </ul>
  </footer>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>