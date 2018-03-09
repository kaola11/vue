<template>
  <div class="container">
  	<div class="user_main">		
	  	<div class="title">
	  		<h2>登录</h2>
	  		<p>注册即送1000元新人红包</p>
	  	</div>
	  	<div class="messiage">
	  	 <mt-field  placeholder="手机号" type="tel" v-model="phone" :state = "phoneState"></mt-field>
	    <mt-field  placeholder="密码" type="password" v-model="password" :state = "passwordState"></mt-field>
	<mt-button class="registerBtn" :type="registerState" @click="register()" size="large">登录</mt-button>
			<a href="#/register">立即注册</a>
	  	</div>
	    
	    <ul class="sharList" >
	    	<router-link v-for="(item,index) in sharList" to="" :key="index" tag="li">
	    		<i class="iconfont" :class="item.icon"></i>
	    	</router-link>
	    </ul>
  	</div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>