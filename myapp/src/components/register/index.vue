<template>
  <div class="container">
    <div class="registerBtn">
	  	<div class="title">
	  		<h2>注册</h2>
	  		<p>注册即送1000元新人红包</p>
	  	</div>
	    <mt-field  placeholder="手机号" type="tel" v-model="phone" :state = "phoneState"></mt-field>
	    <mt-field  placeholder="密码" type="password" v-model="password" :state = "passwordState"></mt-field>
	    <mt-field placeholder="验证码"  v-model="captcha">
	      <mt-button type="default"  :disabled = "codeState" @click="sendCode()">{{msg}}</mt-button>
	</mt-field>
	<mt-button class="registerBtn" :type="registerState" @click="register()" size="large">注册</mt-button>
	  </div>
  </div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>