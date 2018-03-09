<template>
  <div class="container">
  	<!--<scroll class="recommend-content" ref="scroll" :data="goodsList">
  		<div>-->
  	<ul class="content-h">
  		<router-link v-for="(item , index) in headList" tag="li" to="/list" :key="index">{{item.name}}</router-link>
  	</ul>
   <mt-swipe :auto="3000"> 
	  <mt-swipe-item v-for="(item,index) in list" v-if="index<4" :key="item.index"><img :src="item.shareImage"/></mt-swipe-item>
	</mt-swipe>
	<div class="coupon">
		<router-link v-for="(item,index) in couponList" :key="index" to="/lists"><img :src="item.data[0].imageUrl"/></router-link>	
	</div>
	<div class="newgoods">
			<h2>今日上新</h2>
			<router-link v-for="(item,index) in goodsList" :key="item.categoryId" to="/lists">
				<img :src="item.imageUrl"/>
				<div class="text">
					<p>{{item.englishName}}</p>
					<p>{{item.chineseName}}</p>
					<p>{{item.discountText}}</p>
				</div>
			</router-link>
			<h2>热卖品牌</h2>
			<router-link v-for="(item,index) in hotList" :key="item.categoryId" to="/lists">
				<img :src="item.imageUrl"/>
				<div class="text">
					<p>{{item.englishName}}</p>
					<p>{{item.chineseName}}</p>
					<p>{{item.discountText}}</p>
				</div>
			</router-link>
	</div>
	<!--</div>
</scroll>-->
  </div>
</template>
<script src="./script.js" language="javascript"></script>
<style lang="scss" src="./style.scss"></style>