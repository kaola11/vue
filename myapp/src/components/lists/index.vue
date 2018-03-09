<template>
  <div class="container">
    <div class="lists">
    	<ul class="listHeader">
    		<li class="weight">人气</li>
    		<li>折扣</li>
    		<li>价格</li>
    		<li>筛选</li>
    	</ul>
    	<ul class="listContent">
    		<router-link v-for="(item,index) in listList" :to="{name:'listslist', params:{classID:item.productId}}" :key="index" tag="li">
    			<img :src="item.imageUrl" alt="" />
    			<p>当季新品</p>
    			<p>{{item.brandName}}</p>
    			<p>{{item.productName}}</p>
    			<p>￥{{item.price}} <span>￥{{item.marketPrice}}</span><time>{{item.discount}}折</time></p>
    			<button @click="cart(item)">加入购物车</button>
    		</router-link>
    	</ul>
    	
    	
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>