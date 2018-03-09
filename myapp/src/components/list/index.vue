<template>
  <div class="container">
  	<div class="cont_list">
  	<ul class="content-h">
  		<router-link v-for="item in headList" tag="li" :key="item.categoryId" to="">{{item.name}}</router-link>
  	</ul>
   <mt-swipe :auto="3000">
	  <mt-swipe-item v-for="item in listBanner" :key="item.id"><img :src="item.imgUrl"/></mt-swipe-item>
	</mt-swipe>
	<ul class="samll_list">
		<router-link v-for="item in smallList"  :key="item.siloId" tag="li" to=""><img :src="item.categoryImgStr"/></router-link>
		</mt-swipe>
	</ul>
	<div class="coupon_img">
		<img src="https://cdn14.mei.com/category/20180119/82a004d6d0aeb5608de8f80eb82fcbc0d72eb86efc6c943a.jpg" alt="" />
		<img src="https://cdn12.mei.com/category/20180119/82a004d6d0aeb56049a300158aa7baa2071407a2f321be85.jpg"/>
	</div>
	<h3>今日精选</h3>
	<div class="new_box">
		<ul class="new_list">
			<router-link v-for="(item,index) in newList" :key="index" to="/lists" tag="li">
				<img :src="item.img"/>
				<p>{{item.name}}</p>
				<p>{{item.price}} <span>{{item.passPrice}}</span></p>
			</router-link>
		</ul>
	</div>
	<div class="imgList">
		<ul class="one">
			<router-link v-for="item in imgList" :key="item.imgId" to="/lists" tag="li">
				<img :src="item.img"/>
			</router-link>
		</ul>
		<ul class="two">
			<router-link v-for="item in brandList" :key="item.id" to="/lists" tag="li">
				<img :src="item.brandLogoUrl"/>
			</router-link>
			<li>
				<p>MORE</p>
				<p>查看更多</p>
			</li>
		</ul>
	</div>
	<ul class="eventList">
		<router-link v-for="item in eventList" :key="item.eventId" to="/lists" tag="li">
				<img :src="item.imageUrl"/>
				<div>
					<p>{{item.englishName}}</p>
					<p>{{item.chineseName}}</p>
					<p>{{item.discountText}}</p>
				</div>
			</router-link>
	</ul>
	
	
	
	
	
	</div>

  </div>
</template>
<script src="./script.js" language="javascript"></script>
<style lang="scss" src="./style.scss"></style>