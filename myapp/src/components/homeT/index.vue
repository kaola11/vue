<template>
  <div class="container">
  	<div class="con_header">
  		
	  	<h2>搜索发现</h2>
	  	<router-link to="/home">返回首页</router-link>
	  	<ul>
	  		<li v-for="(item,index) in list" :key="index">
	  			<router-link to="" >{{item.findKeyWord}}</router-link>
	  		</li>
	  	</ul>
	  </div>
  	</div>
</template>
<script src="./script.js" language="javascript"></script>
<style lang="scss" src="./style.scss" scoped></style>