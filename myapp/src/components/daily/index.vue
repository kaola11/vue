<template>
  <div class="container">
  	<div class="daily_content">
  		
	  		<router-link v-for="item in hotList" :key="item.categoryId" to="" >
	  			<img :src="item.imageUrl"/>
	  			<p>{{item.chineseName}}</p>
	  		</router-link>
  		
  	</div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>